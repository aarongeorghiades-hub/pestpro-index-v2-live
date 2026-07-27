'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import {
  REGIONS,
  PEST_GROUPS,
  TIERS,
  TIER_VALUES,
  HONEYPOT_FIELD,
  PROFILE_TEXT_MAX,
} from '@/lib/providerSubmissions';

const inputClass =
  'w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-gray-900';
const labelClass = 'block text-sm font-bold text-gray-900 mb-2';
const sectionClass = 'bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 md:p-10';
const sectionHeading = 'text-2xl font-bold text-gray-900 mb-6';

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-2 text-sm font-semibold text-red-600 flex items-center gap-1.5">
      <AlertCircle className="w-4 h-4 flex-shrink-0" />
      {message}
    </p>
  );
}

function SubmitForm() {
  const searchParams = useSearchParams();
  const paramTier = (searchParams.get('tier') || '').toLowerCase();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [address, setAddress] = useState('');
  const [postcode, setPostcode] = useState('');
  const [regions, setRegions] = useState<string[]>([]);
  const [pests, setPests] = useState<string[]>([]);
  const [businessResidential, setBusinessResidential] = useState(false);
  const [commercial, setCommercial] = useState(false);
  const [profileText, setProfileText] = useState('');
  const [tierInterest, setTierInterest] = useState(
    TIER_VALUES.includes(paramTier) ? paramTier : ''
  );
  const [honeypot, setHoneypot] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function toggle(list: string[], value: string, setter: (next: string[]) => void) {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  }

  function validateClientSide(): Record<string, string> {
    const errors: Record<string, string> = {};
    const trimmedName = name.trim();

    if (!trimmedName) {
      errors.name = 'Please enter your business name.';
    } else if (trimmedName.length < 2 || trimmedName.length > 120) {
      errors.name = 'Business name must be between 2 and 120 characters.';
    }

    if (!email.trim() && !phone.trim()) {
      errors.email = 'Please give us either an email address or a phone number.';
    } else if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = 'That does not look like a valid email address.';
    }

    if (profileText.length > PROFILE_TEXT_MAX) {
      errors.profile_text = `Please keep your description to ${PROFILE_TEXT_MAX} characters or fewer.`;
    }

    return errors;
  }

  async function handleSubmit() {
    setSubmitError('');

    const errors = validateClientSide();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setSubmitting(true);

    try {
      const response = await fetch('/api/provider-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          website: website.trim(),
          address: address.trim(),
          postcode: postcode.trim(),
          regions,
          pests,
          business_residential: businessResidential,
          commercial,
          profile_text: profileText.trim(),
          tier_interest: tierInterest,
          [HONEYPOT_FIELD]: honeypot,
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.ok) {
        setSubmitted(true);
        return;
      }

      if (result?.fieldErrors) {
        setFieldErrors(result.fieldErrors);
        setSubmitError('Please check the highlighted fields and try again.');
        return;
      }

      setSubmitError(result?.error || 'Something went wrong. Please try again.');
    } catch {
      setSubmitError(
        'We could not reach the server. Please check your connection and try again.'
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-2xl border-2 border-green-200 p-12 shadow-lg text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-black text-gray-900 mb-4">Submission Received</h2>
          <p className="text-lg text-gray-700 mb-8">
            Thanks, {name.trim()}. We&apos;ve got your details and will review your listing
            shortly. If we need anything else, we&apos;ll be in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/professionals"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
            >
              Back to Professionals
            </Link>
            <Link
              href="/"
              className="inline-block px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      {/* 1. Your business */}
      <section className={sectionClass}>
        <h2 className={sectionHeading}>Your business</h2>
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className={labelClass}>
              Business name <span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
              placeholder="e.g. Speck Pest Control"
            />
            <FieldError message={fieldErrors.name} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                placeholder="you@yourbusiness.co.uk"
              />
              <FieldError message={fieldErrors.email} />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClass}
                placeholder="01234 567890"
              />
              <FieldError message={fieldErrors.phone} />
            </div>
          </div>
          <p className="text-sm text-gray-600 -mt-2">
            Give us at least one of email or phone so we can reach you.
          </p>

          <div>
            <label htmlFor="website" className={labelClass}>
              Website
            </label>
            <input
              id="website"
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className={inputClass}
              placeholder="yourbusiness.co.uk"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="address" className={labelClass}>
                Address
              </label>
              <input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={inputClass}
                placeholder="Street and town"
              />
            </div>

            <div>
              <label htmlFor="postcode" className={labelClass}>
                Postcode
              </label>
              <input
                id="postcode"
                type="text"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                className={inputClass}
                placeholder="BD1 1AA"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Areas covered */}
      <section className={sectionClass}>
        <h2 className={sectionHeading}>Areas covered</h2>
        <p className="text-gray-600 mb-6">Tick every area you actively work in.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {REGIONS.map((region) => (
            <label
              key={region.slug}
              className="flex items-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all"
            >
              <input
                type="checkbox"
                checked={regions.includes(region.slug)}
                onChange={() => toggle(regions, region.slug, setRegions)}
                className="w-4 h-4 accent-blue-600 flex-shrink-0"
              />
              <span className="text-gray-700 font-semibold text-sm">{region.label}</span>
            </label>
          ))}
        </div>
        <FieldError message={fieldErrors.regions} />
      </section>

      {/* 3. Pests you treat */}
      <section className={sectionClass}>
        <h2 className={sectionHeading}>Pests you treat</h2>
        <div className="space-y-8">
          {PEST_GROUPS.map((group) => (
            <div key={group.group}>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{group.group}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {group.pests.map((pest) => (
                  <label
                    key={pest.key}
                    className="flex items-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={pests.includes(pest.key)}
                      onChange={() => toggle(pests, pest.key, setPests)}
                      className="w-4 h-4 accent-blue-600 flex-shrink-0"
                    />
                    <span className="text-gray-700 font-semibold text-sm">{pest.label}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <FieldError message={fieldErrors.pests} />
      </section>

      {/* 4. Who you serve */}
      <section className={sectionClass}>
        <h2 className={sectionHeading}>Who you serve</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <label className="flex items-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all">
            <input
              type="checkbox"
              checked={businessResidential}
              onChange={(e) => setBusinessResidential(e.target.checked)}
              className="w-4 h-4 accent-blue-600 flex-shrink-0"
            />
            <span className="text-gray-700 font-semibold">Residential customers</span>
          </label>
          <label className="flex items-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all">
            <input
              type="checkbox"
              checked={commercial}
              onChange={(e) => setCommercial(e.target.checked)}
              className="w-4 h-4 accent-blue-600 flex-shrink-0"
            />
            <span className="text-gray-700 font-semibold">Commercial customers</span>
          </label>
        </div>
      </section>

      {/* 5. About your business */}
      <section className={sectionClass}>
        <h2 className={sectionHeading}>About your business</h2>
        <label htmlFor="profile_text" className={labelClass}>
          Tell customers what you do
        </label>
        <textarea
          id="profile_text"
          value={profileText}
          onChange={(e) => setProfileText(e.target.value.slice(0, PROFILE_TEXT_MAX))}
          rows={6}
          maxLength={PROFILE_TEXT_MAX}
          className={inputClass}
          placeholder="Years of experience, qualifications, what makes your service different..."
        />
        <div className="mt-2 flex justify-between items-center">
          <FieldError message={fieldErrors.profile_text} />
          <span
            className={`text-sm font-semibold ml-auto ${
              profileText.length >= PROFILE_TEXT_MAX ? 'text-amber-600' : 'text-gray-500'
            }`}
          >
            {profileText.length} / {PROFILE_TEXT_MAX}
          </span>
        </div>
      </section>

      {/* 6. Listing interest — hidden while only one tier is on offer. There is
          nothing to choose between, so asking would be a pointless step; the
          server records the default tier. Add a tier to TIERS and this section
          reappears on its own. */}
      {TIERS.length > 1 && (
      <section className={sectionClass}>
        <h2 className={sectionHeading}>Listing interest</h2>
        <div className="space-y-3">
          {TIERS.map((tier) => (
            <label
              key={tier.value}
              className={`flex items-start gap-3 px-4 py-4 border-2 rounded-lg cursor-pointer transition-all ${
                tierInterest === tier.value
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50/50'
              }`}
            >
              <input
                type="radio"
                name="tier_interest"
                value={tier.value}
                checked={tierInterest === tier.value}
                onChange={() => setTierInterest(tier.value)}
                className="w-4 h-4 accent-blue-600 flex-shrink-0 mt-1"
              />
              <span>
                <span className="block text-gray-900 font-bold">{tier.label}</span>
                <span className="block text-sm text-gray-600">{tier.hint}</span>
              </span>
            </label>
          ))}
        </div>
        <FieldError message={fieldErrors.tier_interest} />
      </section>
      )}

      {/* Honeypot — visually hidden but not display:none, so bots still fill it.
          aria-hidden + tabIndex keep it away from screen readers and keyboards. */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          clip: 'rect(0 0 0 0)',
          clipPath: 'inset(50%)',
          whiteSpace: 'nowrap',
        }}
      >
        <label htmlFor={HONEYPOT_FIELD}>Do not fill this in</label>
        <input
          id={HONEYPOT_FIELD}
          name={HONEYPOT_FIELD}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* Submit */}
      <div className={sectionClass}>
        {submitError && (
          <div className="mb-6 rounded-lg border-2 border-red-200 bg-red-50 p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-red-800">{submitError}</p>
              <p className="text-sm text-red-700 mt-1">
                Your answers are still here — you can submit again.
              </p>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className="block w-full text-center px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-lg"
        >
          {submitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </span>
          ) : (
            'Submit Your Listing'
          )}
        </button>

        <p className="text-sm text-gray-600 text-center mt-4">
          We&apos;ll review your details before your listing goes live.
        </p>
      </div>
    </div>
  );
}

export default function SubmitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navigation />

      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Create Your Listing
          </h1>
          <p className="text-xl text-blue-100">
            Tell us about your business and we&apos;ll get you listed. No lead fees, no
            commissions.
          </p>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="max-w-4xl mx-auto px-4 py-20 text-center">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto" />
          </div>
        }
      >
        <SubmitForm />
      </Suspense>
    </div>
  );
}
