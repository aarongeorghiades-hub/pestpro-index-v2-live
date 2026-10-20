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
  DEFAULT_TIER,
  HONEYPOT_FIELD,
  PROFILE_TEXT_MAX,
} from '@/lib/providerSubmissions';

const inputClass =
  'w-full h-12 px-4 border border-[var(--color-rule-strong)] rounded-[4px] bg-white focus:outline-none focus:border-[var(--color-ink)] text-[var(--color-ink)]';
const labelClass = 'block text-sm font-bold text-[var(--color-ink)] mb-2';
const sectionClass = 'border-t border-[var(--color-ink)] pt-6 pb-4';
const sectionHeading = 'text-2xl md:text-3xl font-bold tracking-[-0.01em] text-[var(--color-ink)] mb-6';

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-2 text-sm font-semibold text-[var(--color-warn)] flex items-center gap-1.5">
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
    TIER_VALUES.includes(paramTier) ? paramTier : DEFAULT_TIER
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
      <div className="dir-wrap max-w-3xl py-16 md:py-20">
        <div className="border-t border-[var(--color-ink)] pt-8">
          <CheckCircle className="w-10 h-10 text-[var(--color-ok)] mb-4" />
          <h2 className="dir-display text-5xl text-[var(--color-ink)] mb-5">Submission received</h2>
          <p className="text-lg text-[var(--color-ink-soft)] leading-relaxed mb-8">
            Thanks, {name.trim()}. We&apos;ve got your details and will review your listing
            shortly. If we need anything else, we&apos;ll be in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/professionals"
              className="dir-btn dir-btn-ink"
            >
              Back to Professionals
            </Link>
            <Link
              href="/"
              className="dir-btn dir-btn-line"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dir-wrap max-w-4xl py-12 md:py-16 space-y-10">
      {/* 1. Your business */}
      <section className={sectionClass}>
        <h2 className={sectionHeading}>Your business</h2>
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className={labelClass}>
              Business name <span className="text-[var(--color-warn)]">*</span>
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
          <p className="text-sm text-[var(--color-ink-mute)] -mt-2">
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
        <p className="text-[var(--color-ink-soft)] mb-6">Tick every area you actively work in.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {REGIONS.map((region) => (
            <label
              key={region.slug}
              className="flex items-center gap-3 px-4 py-3 border border-[var(--color-rule-strong)] rounded-[4px] bg-white cursor-pointer hover:border-[var(--color-ink)] transition-colors"
            >
              <input
                type="checkbox"
                checked={regions.includes(region.slug)}
                onChange={() => toggle(regions, region.slug, setRegions)}
                className="w-4 h-4 accent-[var(--color-ink)] flex-shrink-0"
              />
              <span className="text-[var(--color-ink)] font-semibold text-sm">{region.label}</span>
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
              <h3 className="text-lg font-bold text-[var(--color-ink)] mb-4">{group.group}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {group.pests.map((pest) => (
                  <label
                    key={pest.key}
                    className="flex items-center gap-3 px-4 py-3 border border-[var(--color-rule-strong)] rounded-[4px] bg-white cursor-pointer hover:border-[var(--color-ink)] transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={pests.includes(pest.key)}
                      onChange={() => toggle(pests, pest.key, setPests)}
                      className="w-4 h-4 accent-[var(--color-ink)] flex-shrink-0"
                    />
                    <span className="text-[var(--color-ink)] font-semibold text-sm">{pest.label}</span>
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
          <label className="flex items-center gap-3 px-4 py-3 border border-[var(--color-rule-strong)] rounded-[4px] bg-white cursor-pointer hover:border-[var(--color-ink)] transition-colors">
            <input
              type="checkbox"
              checked={businessResidential}
              onChange={(e) => setBusinessResidential(e.target.checked)}
              className="w-4 h-4 accent-[var(--color-ink)] flex-shrink-0"
            />
            <span className="text-[var(--color-ink)] font-semibold">Residential customers</span>
          </label>
          <label className="flex items-center gap-3 px-4 py-3 border border-[var(--color-rule-strong)] rounded-[4px] bg-white cursor-pointer hover:border-[var(--color-ink)] transition-colors">
            <input
              type="checkbox"
              checked={commercial}
              onChange={(e) => setCommercial(e.target.checked)}
              className="w-4 h-4 accent-[var(--color-ink)] flex-shrink-0"
            />
            <span className="text-[var(--color-ink)] font-semibold">Commercial customers</span>
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
          className={`${inputClass} h-auto py-3`}
          placeholder="Years of experience, qualifications, what makes your service different..."
        />
        <div className="mt-2 flex justify-between items-center">
          <FieldError message={fieldErrors.profile_text} />
          <span
            className={`text-sm font-semibold ml-auto ${
              profileText.length >= PROFILE_TEXT_MAX ? 'text-[var(--color-warn)]' : 'text-[var(--color-ink-mute)]'
            }`}
          >
            {profileText.length} / {PROFILE_TEXT_MAX}
          </span>
        </div>
      </section>

      {/* Listing interest. standard stays free. featured records interest
          only — this form does not take payment. */}
      {TIERS.length > 1 && (
      <section className={sectionClass}>
        <h2 className={sectionHeading}>Listing interest</h2>
        <div className="space-y-3">
          {TIERS.map((tier) => (
            <label
              key={tier.value}
              className={`flex items-start gap-3 px-4 py-4 border rounded-[4px] cursor-pointer transition-colors ${
                tierInterest === tier.value
                  ? 'border-[var(--color-ink)] bg-[var(--color-paper)]'
                  : 'border-[var(--color-rule-strong)] bg-white hover:border-[var(--color-ink)]'
              }`}
            >
              <input
                type="radio"
                name="tier_interest"
                value={tier.value}
                checked={tierInterest === tier.value}
                onChange={() => setTierInterest(tier.value)}
                className="w-4 h-4 accent-[var(--color-ink)] flex-shrink-0 mt-1"
              />
              <span>
                <span className="block text-[var(--color-ink)] font-bold">{tier.label}</span>
                <span className="block text-sm text-[var(--color-ink-soft)]">{tier.hint}</span>
              </span>
            </label>
          ))}
        </div>
        <FieldError message={fieldErrors.tier_interest} />
        <p className="mt-4 text-sm text-[var(--color-ink-soft)]">
          Choosing Featured records your interest. Nothing is charged from this form.
          Rankings can&apos;t be bought. No lead fees, ever.
        </p>
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
          <div className="mb-6 rounded-[4px] border border-[var(--color-warn-edge)] bg-[var(--color-warn-wash)] p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[var(--color-warn)] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[var(--color-warn)]">{submitError}</p>
              <p className="text-sm text-[var(--color-ink-soft)] mt-1">
                Your answers are still here. You can submit again.
              </p>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className="dir-btn dir-btn-ink w-full h-12 text-base disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </span>
          ) : (
            'Submit your listing'
          )}
        </button>

        <p className="text-sm text-[var(--color-ink-mute)] mt-4">
          We&apos;ll review your details before your listing goes live.
        </p>
      </div>
    </div>
  );
}

export default function SubmitPage() {
  return (
    <div className="min-h-screen bg-[var(--color-stock)] text-[var(--color-ink)]">
      <Navigation />

      <header className="border-b border-[var(--color-ink)] bg-[var(--color-stock)]">
        <div className="dir-wrap max-w-4xl pb-10 pt-12 md:pb-14 md:pt-16">
          <h1 className="dir-display text-[clamp(2.75rem,8vw,5rem)] text-[var(--color-ink)]">
            Create your listing
          </h1>
          <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-[var(--color-ink-soft)] md:text-xl">
            Tell us about your business and we&apos;ll get you listed. No lead fees, no
            commissions.
          </p>
        </div>
      </header>

      <Suspense
        fallback={
          <div className="max-w-4xl mx-auto px-4 py-20 text-center">
            <Loader2 className="w-8 h-8 animate-spin text-[var(--color-ink-mute)] mx-auto" />
          </div>
        }
      >
        <SubmitForm />
      </Suspense>
    </div>
  );
}
