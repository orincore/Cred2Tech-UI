"use client";

import React, { useState } from 'react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5001/api';

const PRODUCTS = [
  { value: 'loan-eligibility', label: 'Instant Loan Eligibility Check' },
  { value: 'virtual-workspace', label: 'Virtual Workspace (Sourcing Partner Platform)' },
  { value: 'scheme-discovery', label: 'Government Scheme Discovery' },
  { value: 'full-platform', label: 'Full Platform Overview' },
  { value: 'other', label: 'Other' },
];

// Underline-only, sharp-cornered field style shared by every single-line
// input/select — no box, just a baseline that lights up on focus, matching
// the site's flat/sharp theme instead of the boxed-rounded style used
// elsewhere (e.g. /contact).
const fieldClass = 'w-full bg-transparent border-0 border-b border-[var(--outline)] text-[var(--on-surface)] placeholder:text-[var(--on-muted)] focus:border-[var(--on-surface)] focus:outline-none transition-colors px-0 py-2 text-[15px]';
const labelClass = 'block text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--on-muted)] mb-1.5';

export default function RequestDemoPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    mobileNumber: '',
    email: '',
    product: '',
    message: '',
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/demo-requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || 'Something went wrong. Please try again.');
      }
      setShowPopup(true);
      setFormData({
        fullName: '',
        businessName: '',
        mobileNumber: '',
        email: '',
        product: '',
        message: '',
      });
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[var(--bg)] text-[var(--on-surface)] font-(family-name:--font-inter) overflow-x-clip transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative flex items-center overflow-hidden bg-[var(--surface)] border-b border-[var(--outline)] transition-colors duration-500">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-[104px] pb-9 lg:pt-[112px] lg:pb-11 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block font-(family-name:--font-jb-mono) text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--on-muted)] mb-3 px-3 py-1 border border-[var(--outline)] bg-[var(--surface-low)]">
              Request Demo
            </span>
            <h1 className="font-(family-name:--font-outfit) font-extrabold text-[1.7rem] sm:text-[2.1rem] lg:text-[2.5rem] leading-[1.12] tracking-tight text-[var(--on-surface)] mb-3">
              See Cred2Tech in action
            </h1>
            <p className="text-sm lg:text-base text-[var(--on-muted)] max-w-xl mx-auto leading-relaxed">
              Tell us which product you&apos;d like walked through and our team will set up a live, no-obligation demo tailored to your business.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Request Form Section */}
      <section className="py-8 sm:py-10 bg-[var(--bg)] relative overflow-hidden transition-colors duration-500">
        <div className="w-full max-w-[640px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <form onSubmit={handleSubmit} className="bg-[var(--surface)] border border-[var(--outline)] p-5 sm:p-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
              {/* Full Name */}
              <div className="sm:col-span-2">
                <label className={labelClass}>Full Name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={fieldClass}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Business Name */}
              <div className="sm:col-span-2">
                <label className={labelClass}>Business Name</label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className={fieldClass}
                  placeholder="Enter your business name"
                  required
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className={labelClass}>Mobile Number</label>
                <input
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  className={fieldClass}
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label className={labelClass}>Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={fieldClass}
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Which product? */}
              <div className="sm:col-span-2">
                <label className={labelClass}>Which product would you like a demo of?</label>
                <div className="relative">
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className={`${fieldClass} appearance-none cursor-pointer pr-7`}
                    required
                  >
                    <option value="">Select a product</option>
                    {PRODUCTS.map((p) => (
                      <option key={p.value} value={p.value}>{p.label}</option>
                    ))}
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-[var(--on-muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className={labelClass}>Anything specific you&apos;d like covered? (optional)</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  maxLength={500}
                  className="w-full px-3 py-2.5 bg-[var(--bg)] border border-[var(--outline)] text-[var(--on-surface)] placeholder:text-[var(--on-muted)] focus:border-[var(--on-surface)] focus:outline-none transition-colors resize-none text-[15px]"
                  placeholder="Tell us more about what you'd like to see..."
                />
                <p className="text-xs text-[var(--on-muted)] mt-1 text-right">{formData.message.length}/500</p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              {submitError && (
                <p className="mb-3 text-sm font-medium text-red-600" role="alert">{submitError}</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--on-surface)] text-[var(--bg)] px-6 py-3 font-bold text-sm hover:opacity-90 transition-all group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting…' : 'Request Demo'}
                {!isSubmitting && (
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Success Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-[var(--surface)] border border-[var(--outline)] p-7 max-w-sm w-full mx-4 shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
            <div className="text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-green-600 text-2xl">check_circle</span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--on-surface)] mb-2">Request received!</h3>
              <p className="text-sm text-[var(--on-muted)] mb-5">
                Our team will reach out to schedule your demo within 24 hours.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-[var(--on-surface)] text-[var(--bg)] px-6 py-2.5 font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
.material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;}
      `}</style>
    </div>
  );
}
