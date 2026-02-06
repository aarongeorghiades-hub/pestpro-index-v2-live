import { useState, useCallback } from 'react';
import { Search, X } from 'lucide-react';

interface Provider {
  canonical_id: number;
  name: string;
  london_borough?: string;
  [key: string]: any;
}

interface SearchBarProps {
  onSearch: (results: Provider[], searchType: 'postcode' | 'borough' | 'provider' | 'all') => void;
  allProviders: Provider[];
  onClear: () => void;
}

// London borough adjacency map
const BOROUGH_ADJACENCY: { [key: string]: string[] } = {
  "Barking and Dagenham": ["Havering", "Redbridge", "Newham", "Greenwich"],
  "Barnet": ["Enfield", "Haringey", "Camden", "Brent", "Harrow"],
  "Bexley": ["Greenwich", "Bromley", "Havering"],
  "Brent": ["Harrow", "Barnet", "Camden", "Westminster", "Kensington and Chelsea", "Hammersmith and Fulham", "Ealing"],
  "Bromley": ["Lewisham", "Greenwich", "Bexley", "Southwark", "Lambeth", "Croydon"],
  "Camden": ["Islington", "Haringey", "Barnet", "Brent", "Westminster", "City of London"],
  "City of London": ["Camden", "Islington", "Hackney", "Tower Hamlets", "Southwark", "Westminster"],
  "Croydon": ["Bromley", "Lambeth", "Merton", "Sutton"],
  "Ealing": ["Brent", "Hammersmith and Fulham", "Hounslow", "Hillingdon"],
  "Enfield": ["Barnet", "Haringey", "Waltham Forest"],
  "Greenwich": ["Bexley", "Bromley", "Lewisham", "Southwark", "Tower Hamlets", "Newham", "Barking and Dagenham"],
  "Hackney": ["Islington", "Haringey", "Waltham Forest", "Newham", "Tower Hamlets", "City of London"],
  "Hammersmith and Fulham": ["Brent", "Kensington and Chelsea", "Westminster", "Wandsworth", "Hounslow", "Ealing"],
  "Haringey": ["Enfield", "Waltham Forest", "Hackney", "Islington", "Camden", "Barnet"],
  "Harrow": ["Barnet", "Brent", "Ealing", "Hillingdon"],
  "Havering": ["Barking and Dagenham", "Redbridge", "Bexley"],
  "Hillingdon": ["Harrow", "Ealing", "Hounslow"],
  "Hounslow": ["Hillingdon", "Ealing", "Hammersmith and Fulham", "Richmond upon Thames"],
  "Islington": ["Camden", "Haringey", "Hackney", "City of London"],
  "Kensington and Chelsea": ["Brent", "Westminster", "Hammersmith and Fulham", "Wandsworth"],
  "Kingston upon Thames": ["Richmond upon Thames", "Merton", "Sutton"],
  "Lambeth": ["Southwark", "Wandsworth", "Merton", "Croydon", "Bromley"],
  "Lewisham": ["Southwark", "Greenwich", "Bromley"],
  "Merton": ["Wandsworth", "Lambeth", "Croydon", "Sutton", "Kingston upon Thames"],
  "Newham": ["Barking and Dagenham", "Redbridge", "Waltham Forest", "Hackney", "Tower Hamlets", "Greenwich"],
  "Redbridge": ["Havering", "Barking and Dagenham", "Newham", "Waltham Forest"],
  "Richmond upon Thames": ["Hounslow", "Kingston upon Thames", "Wandsworth"],
  "Southwark": ["City of London", "Tower Hamlets", "Greenwich", "Lewisham", "Bromley", "Lambeth", "Wandsworth", "Westminster"],
  "Sutton": ["Croydon", "Merton", "Kingston upon Thames"],
  "Tower Hamlets": ["City of London", "Hackney", "Newham", "Greenwich", "Southwark"],
  "Waltham Forest": ["Enfield", "Haringey", "Hackney", "Newham", "Redbridge"],
  "Wandsworth": ["Hammersmith and Fulham", "Kensington and Chelsea", "Westminster", "Lambeth", "Merton", "Richmond upon Thames", "Southwark"],
  "Westminster": ["Camden", "City of London", "Southwark", "Lambeth", "Wandsworth", "Kensington and Chelsea", "Brent", "Hammersmith and Fulham"]
};

function detectSearchType(input: string): 'postcode' | 'borough' | 'provider_name' {
  const trimmed = input.trim();
  
  // UK postcode pattern (full or partial - contains numbers)
  const postcodePattern = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d?[A-Z]{0,2}$/i;
  if (postcodePattern.test(trimmed)) {
    return 'postcode';
  }
  
  // Check if it matches a borough name (partial match)
  const boroughs = Object.keys(BOROUGH_ADJACENCY);
  const boroughMatch = boroughs.find(b => 
    b.toLowerCase().startsWith(trimmed.toLowerCase()) ||
    b.toLowerCase().includes(trimmed.toLowerCase())
  );
  if (boroughMatch && trimmed.length >= 3) {
    return 'borough';
  }
  
  // Default: treat as provider name search
  return 'provider_name';
}

async function resolvePostcodeToBorough(postcode: string): Promise<string | null> {
  try {
    const response = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(postcode)}`);
    if (response.ok) {
      const data = await response.json();
      return data.result?.admin_district || null;
    }
    
    // Try autocomplete for partial postcode
    const autocompleteResponse = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(postcode)}/autocomplete`);
    if (autocompleteResponse.ok) {
      const data = await autocompleteResponse.json();
      if (data.result && data.result.length > 0) {
        const firstResult = data.result[0];
        const fullResponse = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(firstResult)}`);
        if (fullResponse.ok) {
          const fullData = await fullResponse.json();
          return fullData.result?.admin_district || null;
        }
      }
    }
    return null;
  } catch (error) {
    console.error('Postcode API error:', error);
    return null;
  }
}

function getAdjacentBoroughs(borough: string): string[] {
  return BOROUGH_ADJACENCY[borough] || [];
}

export default function SearchBar({ onSearch, allProviders, onClear }: SearchBarProps) {
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = useCallback(async (input: string) => {
    setSearchInput(input);
    
    if (!input.trim()) {
      onClear();
      return;
    }

    setIsLoading(true);
    const searchType = detectSearchType(input);

    try {
      if (searchType === 'postcode') {
        const borough = await resolvePostcodeToBorough(input);
        if (borough) {
          const adjacentBoroughs = getAdjacentBoroughs(borough);
          const primaryResults = allProviders.filter(p => p.london_borough === borough);
          const secondaryResults = allProviders.filter(p => adjacentBoroughs.includes(p.london_borough || ''));
          
          if (primaryResults.length > 0 || secondaryResults.length > 0) {
            onSearch([...primaryResults, ...secondaryResults], 'postcode');
          } else {
            onSearch(allProviders, 'postcode');
          }
        } else {
          onSearch(allProviders, 'postcode');
        }
      } else if (searchType === 'borough') {
        const trimmed = input.trim();
        const boroughs = Object.keys(BOROUGH_ADJACENCY);
        const matchedBorough = boroughs.find(b => 
          b.toLowerCase().startsWith(trimmed.toLowerCase()) ||
          b.toLowerCase().includes(trimmed.toLowerCase())
        );
        
        if (matchedBorough) {
          const adjacentBoroughs = getAdjacentBoroughs(matchedBorough);
          const primaryResults = allProviders.filter(p => p.london_borough === matchedBorough);
          const secondaryResults = allProviders.filter(p => adjacentBoroughs.includes(p.london_borough || ''));
          onSearch([...primaryResults, ...secondaryResults], 'borough');
        } else {
          onSearch(allProviders, 'borough');
        }
      } else {
        // Provider name search
        const results = allProviders.filter(p =>
          p.name.toLowerCase().includes(input.toLowerCase())
        );
        onSearch(results.length > 0 ? results : allProviders, 'provider');
      }
    } finally {
      setIsLoading(false);
    }
  }, [allProviders, onSearch, onClear]);

  const handleClear = () => {
    setSearchInput('');
    onClear();
  };

  return (
    <div className="mb-6">
      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          value={searchInput}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search by postcode, area, or provider name..."
          className="w-full pl-10 pr-10 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
        />
        {searchInput && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        )}
        {isLoading && (
          <div className="absolute right-3 top-3">
            <div className="animate-spin h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full"></div>
          </div>
        )}
      </div>
    </div>
  );
}
