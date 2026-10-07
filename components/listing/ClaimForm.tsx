'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { HONEYPOT_FIELD } from '@/lib/providerSubmissions';

const inputClass =
  'w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-gray-900';
const labelClass = 'block text-sm font-bold text-gray-900 mb-2';

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-2 text-sm font-semibold text-red-600 flex items-center gap-1.5">
      <AlertCircle className="w-4 h-4 flex-shrink-0" />
      {message}
    </p>
  );
}

export default function ClaimForm({
  slug,
  providerName,
  notFound,
}: {
  slug: string;
  providerName: string | null;
  notFound?: boolean;
}) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit() {
    setSubmitError('');
    const errors: Record<string, string> = {};
    const trimmed = email.trim();
    if (!slug) errors.slug = 'Open the claim link from the listing you want to claim.';
    if (!trimmed) errors.email = 'Please enter an email address so we can reply.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      errors.email = 'That does not look like a valid email address.';
    }
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setSubmitting(true);
    try {
      const response = await fetch('/api/claims', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug,
          email: trimmed,
          method: 'manual',
          message: message.trim(),
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
      setSubmitError('We could not reach the server. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (!slug) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg">
          <h1 className="text-3xl font-black text-gray-900 mb-4">Claim a listing</h1>
          <p className="text-gray-700 mb-6">
            {notFound
              ? 'We could not find an active listing for that link. Open the claim link from the provider page.'
              : 'Open this page from the listing itself. Every provider page has a link that says “Is this your business? Claim this listing”.'}
          </p>
          <Link href="/professionals" className="text-blue-600 font-semibold hover:underline">
            Back to For Professionals
          </Link>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl border-2 border-green-200 p-10 shadow-lg text-center">
          <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-black text-gray-900 mb-3">Claim received</h1>
          <p className="text-gray-700">
            Thanks. We will email {email.trim()} if we need anything else. Claiming is free. It only
            confirms that you run this business. It does not check qualifications, and it does not
            buy a Featured slot. Nothing on the listing changes until we have looked at it.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg">
        <h1 className="text-3xl font-black text-gray-900 mb-3">Claim this listing</h1>
        <p className="text-gray-700 mb-2">
          {providerName ? (
            <>
              You are claiming <strong>{providerName}</strong>.
            </>
          ) : (
            'Tell us this listing is yours.'
          )}
        </p>
        <p className="text-gray-600 text-sm mb-8">
          Claiming is free. It only confirms that you run this business. We do not check
          qualifications, and it does not buy a Featured slot. Nothing on the listing changes until
          we have looked at it. No lead fees, ever.
        </p>

        <label htmlFor="claim-email" className={labelClass}>
          Email
        </label>
        <input
          id="claim-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={inputClass}
        />
        <FieldError message={fieldErrors.email || fieldErrors.slug} />

        <label htmlFor="claim-message" className={`${labelClass} mt-6`}>
          Anything we should know (optional)
        </label>
        <textarea
          id="claim-message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          maxLength={1000}
          rows={4}
          className={inputClass}
          placeholder="For example, the best email or phone number to reach you on."
        />
        <FieldError message={fieldErrors.message} />

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
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </div>

        {submitError && <p className="mt-6 text-sm font-semibold text-red-600">{submitError}</p>}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className="mt-8 block w-full text-center px-6 py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 disabled:opacity-60"
        >
          {submitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </span>
          ) : (
            'Send claim'
          )}
        </button>
      </div>
    </div>
  );
}
