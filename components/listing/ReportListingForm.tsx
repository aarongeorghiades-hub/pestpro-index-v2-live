'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { HONEYPOT_FIELD } from '@/lib/providerSubmissions';
import { REPORT_REASONS } from '@/lib/listingReports';

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

export default function ReportListingForm({
  slug,
  providerName,
}: {
  slug: string;
  providerName: string;
}) {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit() {
    setSubmitError('');
    const errors: Record<string, string> = {};
    const trimmedEmail = email.trim();
    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      errors.email = 'That does not look like a valid email address.';
    }
    if (!reason) errors.reason = 'Please choose a reason.';
    if (!message.trim()) errors.message = 'Please tell us what to look at.';
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setSubmitting(true);
    try {
      const response = await fetch('/api/listing-reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug,
          email: trimmedEmail,
          reason,
          message: message.trim(),
          page_path: `/provider/${slug}`,
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

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl border-2 border-green-200 p-10 shadow-lg text-center">
          <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-black text-gray-900 mb-3">Report received</h1>
          <p className="text-gray-700 mb-6">
            Thanks. We will review this by hand. If you left an email address, we may use it to reply.
          </p>
          <Link href={`/provider/${slug}`} className="text-blue-600 font-semibold hover:underline">
            Back to the listing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg">
        <h1 className="text-3xl font-black text-gray-900 mb-3">Report or remove this listing</h1>
        <p className="text-gray-700 mb-6">
          This is about <strong>{providerName}</strong>. Tell us what is wrong, or ask us to take the
          listing down. We review these by hand.
        </p>

        <fieldset className="mb-6">
          <legend className={labelClass}>Reason</legend>
          <div className="space-y-2">
            {REPORT_REASONS.map((option) => (
              <label key={option.value} className="flex items-start gap-3 text-gray-800">
                <input
                  type="radio"
                  name="reason"
                  value={option.value}
                  checked={reason === option.value}
                  onChange={() => setReason(option.value)}
                  className="mt-1"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
          <FieldError message={fieldErrors.reason} />
        </fieldset>

        <label htmlFor="report-message" className={labelClass}>
          What should we look at?
        </label>
        <textarea
          id="report-message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          maxLength={2000}
          rows={5}
          className={inputClass}
        />
        <FieldError message={fieldErrors.message} />

        <label htmlFor="report-email" className={`${labelClass} mt-6`}>
          Email (optional, if you want a reply)
        </label>
        <input
          id="report-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={inputClass}
        />
        <FieldError message={fieldErrors.email} />

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
            'Send report'
          )}
        </button>
      </div>
    </div>
  );
}
