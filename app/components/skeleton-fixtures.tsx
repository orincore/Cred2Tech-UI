import type { ReactNode } from 'react';

function SectionShell({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  );
}

function BankLogoRow() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="h-14 rounded-2xl border border-[#dbe6f3] bg-white/80"
        />
      ))}
    </div>
  );
}

function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="rounded-[28px] border border-[#dbe6f3] bg-white p-6 shadow-[0_18px_50px_rgba(0,63,125,0.08)]"
        >
          <div className="h-12 w-12 rounded-2xl bg-[#eef4fb]" />
          <div className="mt-6 h-4 w-28 rounded-full bg-[#eef4fb]" />
          <div className="mt-4 space-y-3">
            <div className="h-3 w-full rounded-full bg-[#f4f7fb]" />
            <div className="h-3 w-[88%] rounded-full bg-[#f4f7fb]" />
            <div className="h-3 w-[74%] rounded-full bg-[#f4f7fb]" />
          </div>
        </div>
      ))}
    </div>
  );
}

function MarketingHero({
  eyebrow,
}: {
  eyebrow: string;
}) {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#0a1628 0%,#0d2d6b 35%,#1565d8 70%,#0a1628 100%)' }}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-[-8%] top-[-4%] h-72 w-72 rounded-full bg-[#0d3a8e] blur-3xl" />
        <div className="absolute right-[4%] top-[22%] h-56 w-56 rounded-full bg-[#1dff9b] blur-3xl" />
        <div className="absolute left-[44%] top-[34%] h-40 w-40 rounded-full bg-[#00aaff] blur-3xl" />
      </div>

      <SectionShell className="relative z-10 grid min-h-screen grid-cols-1 items-center gap-8 pt-28 pb-16 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-2xl">
          <div className="h-8 w-48 rounded-full bg-white/12" />
          <div className="mt-6 h-5 w-40 rounded-full bg-[#1dff9b]/30" aria-label={eyebrow} />
          <div className="mt-6 space-y-4">
            <div className="h-10 w-full max-w-[36rem] rounded-full bg-white/12" />
            <div className="h-10 w-[88%] max-w-[30rem] rounded-full bg-white/12" />
            <div className="h-10 w-[76%] max-w-[24rem] rounded-full bg-white/12" />
          </div>
          <div className="mt-8 space-y-3">
            <div className="h-4 w-full max-w-[34rem] rounded-full bg-white/10" />
            <div className="h-4 w-[92%] max-w-[30rem] rounded-full bg-white/10" />
            <div className="h-4 w-[64%] max-w-[18rem] rounded-full bg-white/10" />
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <div className="h-12 w-56 rounded-full bg-[#1dff9b]/55" />
            <div className="h-12 w-56 rounded-full bg-white/15" />
          </div>
          <div className="mt-6 h-3 w-56 rounded-full bg-white/10" />
        </div>

        <div className="mx-auto w-full max-w-[380px] rounded-[28px] border border-white/10 bg-white/8 p-4 shadow-[0_32px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="h-3 w-28 rounded-full bg-white/14" />
            <div className="h-3 w-16 rounded-full bg-white/10" />
          </div>
          <div className="space-y-4 py-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-[#1dff9b]/20" />
              <div className="flex-1 space-y-2">
                <div className="h-3 w-[72%] rounded-full bg-white/12" />
                <div className="h-3 w-[44%] rounded-full bg-white/10" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-16 rounded-2xl bg-white/8" />
              <div className="h-16 rounded-2xl bg-white/8" />
            </div>
            <div className="space-y-2">
              <div className="h-3 w-24 rounded-full bg-white/10" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="h-6 w-16 rounded-full bg-white/8" />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex items-center justify-between rounded-2xl bg-white/8 px-3 py-3">
                  <div className="space-y-2">
                    <div className="h-3 w-24 rounded-full bg-white/12" />
                    <div className="h-3 w-16 rounded-full bg-white/10" />
                  </div>
                  <div className="h-5 w-16 rounded-full bg-white/10" />
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 pt-4">
            <div className="h-3 w-40 rounded-full bg-[#1dff9b]/30" />
          </div>
        </div>
      </SectionShell>
    </section>
  );
}

export function HomePageFixture() {
  return (
    <div className="bg-[#fcf9f8] text-[#1b1c1c] overflow-x-clip">
      <MarketingHero eyebrow="India's MSME Credit Platform" />
      <section className="border-b border-[#e8e4e1] bg-white py-10 sm:py-14">
        <SectionShell>
          <div className="mb-8 h-4 w-44 rounded-full bg-[#e8eef6]" />
          <BankLogoRow />
        </SectionShell>
      </section>
      <section className="py-16 sm:py-24">
        <SectionShell>
          <div className="mb-4 h-4 w-48 rounded-full bg-[#e8eef6]" />
          <div className="mb-12 space-y-4">
            <div className="h-8 w-full max-w-[28rem] rounded-full bg-[#e8eef6]" />
            <div className="h-4 w-full max-w-[38rem] rounded-full bg-[#f1f5fa]" />
          </div>
          <FeatureCards />
        </SectionShell>
      </section>
    </div>
  );
}

export function DsaPageFixture() {
  return (
    <div className="bg-[#fcf9f8] text-[#1b1c1c] overflow-x-clip">
      <MarketingHero eyebrow="For DSA Agents & Partners" />
      <section className="border-b border-[#e8e4e1] bg-white py-10 sm:py-14">
        <SectionShell>
          <div className="mb-8 h-4 w-40 rounded-full bg-[#e8eef6]" />
          <BankLogoRow />
        </SectionShell>
      </section>
      <section className="py-16 sm:py-24">
        <SectionShell>
          <div className="mb-4 h-4 w-52 rounded-full bg-[#e8eef6]" />
          <div className="mb-12 space-y-4">
            <div className="h-8 w-full max-w-[32rem] rounded-full bg-[#e8eef6]" />
            <div className="h-4 w-full max-w-[40rem] rounded-full bg-[#f1f5fa]" />
          </div>
          <FeatureCards />
        </SectionShell>
      </section>
    </div>
  );
}

function AuthCardShell({
  sidePanel,
  children,
}: {
  sidePanel?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center relative overflow-hidden px-4"
      style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 25%, #2563eb 50%, #1d4ed8 75%, #1e40af 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-50" />
      <div className="relative z-10 w-full max-w-[440px] overflow-hidden rounded-[20px] border border-[#e5e7eb] bg-white shadow-[0_24px_80px_rgba(0,10,25,0.12)] lg:flex lg:max-w-[900px]">
        <div className="w-full lg:w-[440px] shrink-0 p-6 sm:p-8 lg:px-[2.8rem] lg:pt-[2.6rem] lg:pb-[2.2rem]">
          {children}
        </div>
        {sidePanel ? (
          <div className="hidden lg:flex flex-1 items-center justify-center bg-[#f6f3f2] relative overflow-hidden">
            {sidePanel}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function LoginPageFixture() {
  return (
    <AuthCardShell
      sidePanel={
        <div className="relative z-10 flex h-[440px] w-[440px] items-center justify-center">
          <div className="h-72 w-72 rounded-full bg-gradient-to-tr from-[#3b82f6]/20 to-[#003f7d]/10 blur-3xl" />
          <div className="absolute h-52 w-52 rounded-[32px] bg-white/70 shadow-[0_18px_60px_rgba(0,63,125,0.10)]" />
        </div>
      }
    >
      <div className="h-8 w-36 rounded-full bg-[#e8eef6]" />
      <div className="mt-8 space-y-3">
        <div className="h-8 w-52 rounded-full bg-[#eef4fb]" />
        <div className="h-4 w-72 rounded-full bg-[#f2f6fb]" />
      </div>

      <div className="mt-8 flex rounded-[10px] border border-[#c2c6d3] bg-[#f6f3f2] p-[3px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="h-10 flex-1 rounded-[8px] bg-white/70" />
        ))}
      </div>

      <div className="mt-6 space-y-4">
        <div className="h-12 rounded-[10px] bg-[#f6f3f2]" />
        <div className="h-12 rounded-[10px] bg-[#f6f3f2]" />
        <div className="ml-auto h-3 w-28 rounded-full bg-[#eef4fb]" />
        <div className="h-12 rounded-[10px] bg-[#003f7d]" />
      </div>
    </AuthCardShell>
  );
}

export function ForgotPasswordPageFixture() {
  return (
    <AuthCardShell
      sidePanel={
        <div className="relative z-10 flex h-[440px] w-[440px] items-center justify-center">
          <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-[#d6e3ff]/70 to-transparent blur-3xl" />
          <div className="absolute h-56 w-56 rounded-full bg-white/70 shadow-[0_18px_60px_rgba(0,63,125,0.10)]" />
        </div>
      }
    >
      <div className="h-8 w-36 rounded-full bg-[#e8eef6]" />
      <div className="mt-8 space-y-3">
        <div className="h-8 w-48 rounded-full bg-[#eef4fb]" />
        <div className="h-4 w-full max-w-[18rem] rounded-full bg-[#f2f6fb]" />
        <div className="h-4 w-[78%] rounded-full bg-[#f2f6fb]" />
      </div>

      <div className="mt-8 space-y-4">
        <div className="h-4 w-16 rounded-full bg-[#eef4fb]" />
        <div className="h-12 rounded-[10px] bg-[#f6f3f2]" />
        <div className="h-[54px] rounded-[10px] bg-[#003f7d]" />
      </div>

      <div className="mt-24 h-4 w-36 rounded-full bg-[#eef4fb]" />
    </AuthCardShell>
  );
}
