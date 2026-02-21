'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';

interface Resource {
  name: string;
  description: string;
  url: string;
}

interface Section {
  heading: string;
  description: string;
  resources: Resource[];
}

export default function ResourcesPage() {
  const sections: Section[] = [
    {
      heading: 'UK Pest Control Publications',
      description: 'Stay up to date with the leading trade magazines covering UK pest control news, regulations, and professional development.',
      resources: [
        {
          name: 'Professional Pest Controller (PPC)',
          description: 'Official BPCA quarterly magazine — free for members, covers legislation, CPD, and industry news.',
          url: 'https://bpca.org.uk/ppc-magazine'
        },
        {
          name: 'Pest Magazine',
          description: 'Independent bi-monthly trade publication supporting CPD. Available in print and digital.',
          url: 'https://pestmagazine.co.uk/'
        },
        {
          name: 'Pest Control News (PCN)',
          description: 'Free trade magazine with focus on regulatory updates, product reviews, and sector news.',
          url: 'https://www.pestcontrolnews.com/'
        },
        {
          name: 'International Pest Control (IPC)',
          description: 'Bi-monthly journal covering global pest management science and regulation since 1959.',
          url: 'https://www.international-pest-control.com/'
        },
        {
          name: 'Pest Control Technology (PCT)',
          description: 'US-based monthly magazine covering pest management technology, business, and innovation.',
          url: 'https://www.pctonline.com/'
        },
        {
          name: 'Pest Management Professional (PMP)',
          description: 'US industry publication featuring business strategies and technical articles.',
          url: 'https://www.mypmp.net/'
        }
      ]
    },
    {
      heading: 'Regulatory & Compliance',
      description: 'Essential resources for meeting UK pest control regulations, health and safety requirements, and industry standards.',
      resources: [
        {
          name: 'BPCA Codes of Best Practice',
          description: 'Official best practice guidelines from the British Pest Control Association.',
          url: 'https://bpca.org.uk/pest-advice'
        },
        {
          name: 'HSE Pest Control Guidance',
          description: 'Health and Safety Executive guidance on safe use of pesticides and rodenticides.',
          url: 'https://www.hse.gov.uk/pesticides/'
        },
        {
          name: 'CRRU UK (Campaign for Responsible Rodenticide Use)',
          description: 'Stewardship regime and guidance for responsible rodenticide use in the UK.',
          url: 'https://www.thinkwildlife.org/'
        },
        {
          name: 'BASIS PROMPT Register',
          description: 'Professional register for pest management — CPD tracking and certification.',
          url: 'https://www.basis-reg.co.uk/prompt'
        },
        {
          name: 'CIEH Pest Control Resources',
          description: 'Chartered Institute of Environmental Health — pest control standards and qualifications.',
          url: 'https://www.cieh.org/'
        }
      ]
    },
    {
      heading: 'Commercial Compliance & Food Safety',
      description: 'Resources for businesses managing pest control compliance, HACCP requirements, and food safety audits.',
      resources: [
        {
          name: 'HACCP International Pest Control Standard',
          description: 'Global food safety certification guidance for pest management services.',
          url: 'https://www.haccp-international.com/'
        },
        {
          name: 'FoodDocs HACCP Software',
          description: 'Digital HACCP compliance platform — automates monitoring and documentation.',
          url: 'https://fooddocs.com/'
        },
        {
          name: 'Rentokil HACCP Guides',
          description: 'Comprehensive food safety compliance guidance from Rentokil.',
          url: 'https://www.rentokil.com/food-safety/'
        },
        {
          name: 'Octopus HACCP Pest Control Plan',
          description: 'Free downloadable pest control plan template for food businesses.',
          url: 'https://octopushaccp.com/pest-control-plan/'
        },
        {
          name: 'Pestech SQF Audit Guide',
          description: 'Guide to preparing for food safety audits involving pest control.',
          url: 'https://www.pestech.com/sqf-audit-pest-control/'
        }
      ]
    },
    {
      heading: 'Books & Reference',
      description: 'In-depth reference material for pest control professionals and researchers.',
      resources: [
        {
          name: 'The Bed Bug Handbook',
          description: 'The complete reference book on bed bug biology, detection, and treatment. Available on Amazon.',
          url: 'https://www.amazon.co.uk/dp/B09TZK7FYS?tag=pestproindex-21'
        },
        {
          name: 'Urban Pest Management in Australia (CSIRO)',
          description: 'Comprehensive academic text on urban pest biology and management practices.',
          url: 'https://www.publish.csiro.au/'
        },
        {
          name: 'PCT Field Guide for the Management of Structure-Infesting Ants',
          description: 'Specialist identification and management reference from PCT.',
          url: 'https://www.pctonline.com/products/'
        },
        {
          name: 'Mallis Handbook of Pest Control',
          description: 'The definitive 2,400-page reference used by pest professionals worldwide since 1945.',
          url: 'https://www.mallishandbook.com/'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#2563eb]">
      {/* Matching homepage gradient layers */}
      <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 800px 600px at center 20%, rgba(59, 130, 246, 0.4) 0%, transparent 60%)'}}></div>
      <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at center, transparent 20%, rgba(15, 23, 42, 0.7) 100%)'}}></div>
      {/* NAVIGATION */}
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#2563eb] text-white py-32">
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 800px 600px at center 20%, rgba(59, 130, 246, 0.5) 0%, transparent 60%)'}}></div>
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at center, transparent 20%, rgba(15, 23, 42, 0.85) 100%)'}}></div>
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, transparent 0%, rgba(15, 23, 42, 0.3) 100%)'}}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-black tracking-tighter mb-4" style={{fontWeight: 900, letterSpacing: '-0.05em'}}>Pest Control Resource Library</h1>
          <p className="text-2xl font-light mb-8 tracking-widest max-w-3xl mx-auto">Curated guides, publications, and compliance resources for pest control professionals and commercial businesses across the UK.</p>
        </div>
      </section>

      {/* RESOURCES SECTIONS */}
      <div className="relative z-10">
      {sections.map((section, sectionIdx) => (
        <section key={sectionIdx} className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <div className="relative inline-block">
                <h2 className="text-4xl font-black text-white mb-2">{section.heading}</h2>
                <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full w-24 mt-3"></div>
              </div>
              <p className="text-lg text-white/80 max-w-3xl mt-6">{section.description}</p>
            </div>

            {/* Resource Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.resources.map((resource, resourceIdx) => (
                <div 
                  key={resourceIdx} 
                  className="group relative bg-white/5 backdrop-blur-sm border-[3px] border-white/40 rounded-xl p-6 hover:border-white/70 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/15 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{resource.name}</h3>
                    <p className="text-white/70 text-sm mb-4 leading-relaxed">{resource.description}</p>
                    <a 
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-all duration-200 hover:gap-3"
                    >
                      Visit Resource
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      </div>

      {/* AFFILIATE DISCLOSURE & CTA */}
      <section className="relative z-10 bg-white/5 backdrop-blur-sm py-12 border-t border-white/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs text-white/60 mb-4 uppercase tracking-widest font-semibold">Disclosure</p>
            <p className="text-sm text-white/70 mb-6">
              Some links on this page are affiliate links. PestPro Index may earn a small commission at no extra cost to you. This does not influence which resources we recommend.
            </p>
            <p className="text-sm text-white/70">
              Know a great pest control resource we've missed? <a href="mailto:pestproindex@zohomail.eu?subject=Resource%20Suggestion" className="text-blue-300 hover:text-blue-200 font-semibold transition-colors">Let us know — suggest a resource</a>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-gray-300 py-16 border-t-2 border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">PestPro Index</h4>
              <p className="text-sm">The UK's neutral pest control directory</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/resources" className="hover:text-white transition">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">For Professionals</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/professionals" className="hover:text-white transition">Grow Your Business</Link></li>
                <li><Link href="/commercial" className="hover:text-white transition">Commercial Directory</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 PestPro Index. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
