import type { Metadata } from 'next';
import { TravelingBorderButton } from '../components/TravelingBorderButton';

export const metadata: Metadata = {
  title: 'Govt Scheme Discovery - Coming Soon',
  description: 'Govt Scheme Discovery is launching soon on Cred2Tech. Check back shortly to find government schemes you qualify for.',
};

export default function ComingSoonPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-24 bg-[var(--bg)] text-[var(--on-surface)] font-(family-name:--font-inter)">
      <div className="max-w-xl w-full text-center">
        <span
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
          style={{ background: '#149a581a', color: '#149a58' }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18" />
            <path d="M4 21V9.5L12 4l8 5.5V21" />
            <path d="M8 21v-7M12 21v-7M16 21v-7" />
          </svg>
        </span>

        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border border-[var(--outline)] text-[var(--on-muted)] mb-5">
          Govt Scheme Discovery
        </span>

        <h1 className="text-[clamp(28px,5vw,42px)] font-bold leading-tight mb-4">
          Coming Soon
        </h1>

        <p className="text-[15px] sm:text-[16px] text-[var(--on-muted)] leading-relaxed mb-8">
          We&apos;re building a way for MSMEs to discover government schemes they qualify for. This feature isn&apos;t live yet &mdash; check back soon.
        </p>

        <div className="flex items-center justify-center">
          <TravelingBorderButton href="/" size="normal" showIcon={false} solid>
            Back to Home
          </TravelingBorderButton>
        </div>
      </div>
    </div>
  );
}
