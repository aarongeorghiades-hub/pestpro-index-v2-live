import { useState, useCallback, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface Provider {
  canonical_id: number;
  name: string;  slug: string;
  // Postcode is the only location field on "Providers" that a postcode search
  // can honestly filter against. There is no borough column and one must not
  // be derived from the address - a derived borough is invented data.
  postcode?: string | null;
  [key: string]: any;
}

interface SearchBarProps {
  onSearch: (results: Provider[], searchType: 'postcode' | 'provider' | 'all') => void;
  allProviders: Provider[];
  onClear: () => void;
}

// Postcode helpers. A UK postcode's inward code is always the final three
// characters, so everything before it is the outward code (BD1, SW1A, M4).
// Matching on the outward code is what makes "BD1" find BD1 and BD18 without
// pretending to know anything the data does not contain.
const normalisePostcode = (v: string) => v.toUpperCase().replace(/\s+/g, '');

const outwardCode = (v: string) => {
  const n = normalisePostcode(v);
  return n.length > 3 ? n.slice(0, n.length - 3) : n;
};

// A full postcode carries an inward code (digit + two letters at the end).
// When the visitor types one we match the outward code exactly, because BD2
// and BD22 are different places. A partial entry matches by prefix instead,
// which is what makes "BD2" usefully broad while "BD2 4RW" stays precise.
const hasInwardCode = (v: string) => /\d[A-Z]{2}$/.test(normalisePostcode(v));


function detectSearchType(input: string): 'postcode' | 'provider_name' {
  const trimmed = input.trim();

  // UK postcode pattern (full or partial - contains numbers)
  const postcodePattern = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d?[A-Z]{0,2}$/i;
  if (postcodePattern.test(trimmed)) {
    return 'postcode';
  }

  // Anything else is a provider name. There is deliberately no borough branch:
  // "Providers" has no borough column, so a borough search could only ever
  // return nothing, and a control that can only fail is worse than no control.
  return 'provider_name';
}

export default function SearchBar({ onSearch, allProviders, onClear }: SearchBarProps) {
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const performSearch = useCallback(async (input: string) => {
    if (!input.trim()) {
      setSearchInput('');
      onClear();
      return;
    }

    setIsLoading(true);
    const searchType = detectSearchType(input);

    try {
      if (searchType === 'postcode') {
        // Filter on the provider's own postcode. No external geocoding call and
        // no borough lookup: both were only ever feeding a column that does not
        // exist. A provider with no postcode on record cannot match a postcode
        // search, so it is excluded rather than quietly included.
        const wanted = outwardCode(input);
        const exact = hasInwardCode(input);
        const results = allProviders.filter((p) => {
          const pc = p.postcode ? normalisePostcode(String(p.postcode)) : '';
          if (pc === '') return false;
          const out = outwardCode(pc);
          return exact ? out === wanted : out.startsWith(wanted);
        });
        // No match returns an empty result set so the caller can render its
        // empty state. Returning the full list here is what made the old
        // behaviour a false claim: it showed every provider as though each one
        // matched the postcode the visitor typed.
        onSearch(results, 'postcode');
      } else {
        // Provider name search. Same rule: no match means no results, never the
        // unfiltered list.
        const results = allProviders.filter((p) =>
          p.name.toLowerCase().includes(input.toLowerCase())
        );
        onSearch(results, 'provider');
      }
    } finally {
      setIsLoading(false);
    }
  }, [allProviders, onSearch, onClear]);

  const handleSearch = useCallback((input: string) => {
    setSearchInput(input);
    
    // Clear existing debounce timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Set new debounce timer (300ms)
    debounceTimerRef.current = setTimeout(() => {
      performSearch(input);
    }, 300);
  }, [performSearch]);

  // Cleanup debounce timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

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
          placeholder="Search by postcode or provider name..."
          className="w-full pl-10 pr-10 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
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
