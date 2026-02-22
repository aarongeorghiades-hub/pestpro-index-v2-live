'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { CheckCircle, Search, Loader2 } from 'lucide-react';
import { createClient } from '@/utils/supabase';

const reasonOptions = [
  'The checker flagged my band as potentially too high',
  'I\'ve compared with similar properties nearby',
  'I was advised by someone else',
  'I just want to check',
];

function GetHelpForm() {
  const searchParams = useSearchParams();

  // Pre-populate from URL params
  const paramPostcode = searchParams.get('postcode') || '';
  const paramBand = searchParams.get('band') || '';
  const paramAnomaly = searchParams.get('anomaly') === 'true';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');

  // Address fields
  const [postcode, setPostcode] = useState(paramPostcode);
  const [postcodeValid, setPostcodeValid] = useState<boolean | null>(null);
  const [postcodeError, setPostcodeError] = useState('');
  const [postcodeLoading, setPostcodeLoading] = useState(false);
  const [numberStreet, setNumberStreet] = useState('');
  const [town, setTown] = useState('');
  const [county, setCounty] = useState('');
  const [addressLookedUp, setAddressLookedUp] = useState(false);

  // Form submission
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Auto-lookup if postcode came from URL param
  useEffect(() => {
    if (paramPostcode && paramPostcode.trim().length >= 5) {
      lookupPostcode(paramPostcode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function lookupPostcode(postcodeOverride?: string) {
    const trimmed = (postcodeOverride || postcode).trim();
    if (trimmed.length < 5) {
      setPostcodeError('Please enter a valid UK postcode');
      setPostcodeValid(false);
      return;
    }

    setPostcodeLoading(true);
    setPostcodeError('');
    setPostcodeValid(null);

    try {
      const res = await fetch(
        `https://api.postcodes.io/postcodes/${encodeURIComponent(trimmed)}`
      );

      if (!res.ok) {
        setPostcodeValid(false);
        setPostcodeError('Invalid postcode — please check and try again');
        setTown('');
        setCounty('');
        setAddressLookedUp(false);
        return;
      }

      const data = await res.json();
      if (data.status === 200 && data.result) {
        setPostcodeValid(true);
        setTown(data.result.admin_district || '');
        setCounty(data.result.admin_county || '');
        setAddressLookedUp(true);
        setPostcodeError('');
      } else {
        setPostcodeValid(false);
        setPostcodeError('Invalid postcode — please check and try again');
        setTown('');
        setCounty('');
        setAddressLookedUp(false);
      }
    } catch {
      setPostcodeValid(false);
      setPostcodeError('Could not verify postcode. Please try again.');
      setAddressLookedUp(false);
    } finally {
      setPostcodeLoading(false);
    }
  }

  function buildPropertyAddress(): string {
    const parts = [numberStreet, town, county, postcode.trim()].filter(Boolean);
    return parts.join(', ');
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError('');

    if (!postcodeValid || !addressLookedUp) {
      setSubmitError('Please look up and verify your postcode first.');
      return;
    }

    setSubmitting(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.from('leads').insert({
        name,
        email,
        phone,
        property_address: buildPropertyAddress(),
        postcode: postcode.trim(),
        reason,
        description,
        checked_band: paramBand || null,
        anomaly_flagged: paramAnomaly,
      });

      if (error) {
        setSubmitError('Something went wrong. Please try again or contact us directly.');
        console.error('Supabase insert error:', error);
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl border-2 border-green-200 p-12 shadow-md">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-4">Request Received</h2>
            <p className="text-lg text-gray-700 mb-8">
              Thank you, {name}! We&apos;ll be in touch shortly to help with your council tax band query.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border-2 border-blue-200 p-8 shadow-md space-y-6">

          {/* Context banner if coming from checker */}
          {paramBand && (
            <div className={`rounded-lg p-4 text-sm font-semibold ${paramAnomaly ? 'bg-amber-50 border border-amber-300 text-amber-800' : 'bg-blue-50 border border-blue-200 text-blue-800'}`}>
              {paramAnomaly
                ? `Our checker flagged your property (${paramPostcode}) in Band ${paramBand} as potentially too high.`
                : `You checked your property (${paramPostcode}) — current band: ${paramBand}.`}
            </div>
          )}

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-gray-900"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-gray-900"
              placeholder="you@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-gray-900"
              placeholder="07xxx xxxxxx"
            />
          </div>

          {/* ADDRESS SECTION */}
          <fieldset className="space-y-4">
            <legend className="text-sm font-bold text-gray-900 mb-2">
              Property Address <span className="text-red-500">*</span>
            </legend>

            {/* Postcode + Find Address */}
            <div>
              <label htmlFor="postcode" className="block text-sm font-semibold text-gray-700 mb-1">
                Postcode
              </label>
              <div className="flex gap-3">
                <input
                  id="postcode"
                  type="text"
                  required
                  value={postcode}
                  onChange={(e) => {
                    setPostcode(e.target.value.toUpperCase());
                    if (postcodeValid !== null) {
                      setPostcodeValid(null);
                      setPostcodeError('');
                      setAddressLookedUp(false);
                      setTown('');
                      setCounty('');
                    }
                  }}
                  onBlur={() => {
                    if (postcode.trim().length >= 5 && !postcodeValid) {
                      lookupPostcode();
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      lookupPostcode();
                    }
                  }}
                  className={`flex-1 px-4 py-3 border-2 rounded-lg focus:outline-none text-gray-900 ${
                    postcodeValid === true
                      ? 'border-green-500 focus:border-green-600'
                      : postcodeValid === false
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-gray-300 focus:border-blue-600'
                  }`}
                  placeholder="e.g. SW1A 1AA"
                />
                <button
                  type="button"
                  onClick={() => lookupPostcode()}
                  disabled={postcodeLoading}
                  className="px-5 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2 whitespace-nowrap"
                >
                  {postcodeLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Search className="w-5 h-5" />
                  )}
                  Find Address
                </button>
              </div>

              {/* Postcode validation feedback */}
              {postcodeValid === true && (
                <div className="flex items-center gap-2 mt-2 text-green-600 text-sm font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  Valid postcode
                </div>
              )}
              {postcodeError && (
                <p className="mt-2 text-red-600 text-sm font-semibold">
                  {postcodeError}
                </p>
              )}
            </div>

            {/* Address fields — shown after valid postcode */}
            {addressLookedUp && (
              <>
                <div>
                  <label htmlFor="numberStreet" className="block text-sm font-semibold text-gray-700 mb-1">
                    House/flat number and street
                  </label>
                  <input
                    id="numberStreet"
                    type="text"
                    required
                    value={numberStreet}
                    onChange={(e) => setNumberStreet(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-gray-900"
                    placeholder="e.g. 10 Downing Street"
                  />
                </div>

                <div>
                  <label htmlFor="town" className="block text-sm font-semibold text-gray-700 mb-1">
                    Town / City
                  </label>
                  <input
                    id="town"
                    type="text"
                    required
                    value={town}
                    onChange={(e) => setTown(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-gray-900 bg-gray-50"
                    placeholder="Town or city"
                  />
                </div>

                {county && (
                  <div>
                    <label htmlFor="county" className="block text-sm font-semibold text-gray-700 mb-1">
                      County
                    </label>
                    <input
                      id="county"
                      type="text"
                      value={county}
                      onChange={(e) => setCounty(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-gray-900 bg-gray-50"
                      placeholder="County"
                    />
                  </div>
                )}
              </>
            )}
          </fieldset>

          {/* Reason dropdown */}
          <div>
            <label htmlFor="reason" className="block text-sm font-bold text-gray-900 mb-2">
              Why do you think your band may be wrong? <span className="text-red-500">*</span>
            </label>
            <select
              id="reason"
              required
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-gray-900 bg-white"
            >
              <option value="">Select a reason</option>
              {reasonOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-bold text-gray-900 mb-2">
              Additional Details
            </label>
            <textarea
              id="description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-gray-900 resize-vertical"
              placeholder="Any extra information that might help (optional)"
            />
          </div>

          {/* Submit error */}
          {submitError && (
            <p className="text-red-600 text-sm font-semibold">{submitError}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full px-6 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Request'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default function GetHelpPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#050812] via-[#1e3a8a] to-[#050812] py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg" style={{ textShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
            Get Help
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-semibold drop-shadow" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
            Think your council tax band might be wrong? Tell us about your property and we&apos;ll help you check.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <Suspense fallback={
        <section className="py-20 bg-gradient-to-br from-white to-blue-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto" />
          </div>
        </section>
      }>
        <GetHelpForm />
      </Suspense>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Find Providers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/residential" className="hover:text-white transition">Residential Pest Control</Link></li>
                <li><Link href="/commercial" className="hover:text-white transition">Commercial Pest Control</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/products" className="hover:text-white transition">Home Products</Link></li>
                <li><Link href="/commercial-products" className="hover:text-white transition">Commercial Products</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Professionals</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/professionals" className="hover:text-white transition">For Pest Professionals</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">About</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/resources" className="hover:text-white transition">Resources</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 PestPro Index. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
