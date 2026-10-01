import React from 'react';
import { LegalHero, LegalLayout, LegalFooterCta, TocItem } from '../components/legal/LegalLayout';
import { LegalSection, LegalSub, P, UL, LI, Callout, InfoTable, ContactCard, StatCard, StatGrid } from '../components/legal/LegalContent';

export { metadata } from './metadata';

const TOC: TocItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'sourcing-partner-pricing', label: '1. Sourcing Partner Pricing' },
  { id: 'per-pull-charges', label: '1.1 Per-Pull Report Charges' },
  { id: 'bulk-discount', label: '1.2 Bulk Wallet Recharge Discount' },
  { id: 'workspace', label: '1.3 Sourcing Partner Workspace' },
  { id: 'refund-policy', label: '1.4 Refund Policy' },
  { id: 'discount-adjustment', label: '1.5 Discount Adjustment on Refund' },
  { id: 'msme-pricing', label: '2. MSME Pricing' },
];

export default function RateCardPage() {
  return (
    <div className="bg-[var(--bg)] text-[var(--on-surface)] font-(family-name:--font-inter) overflow-x-clip transition-colors duration-500">
      <LegalHero
        badge="Sunby Credtech Platform · Rate Card"
        title="Transparent pricing for every pull, every partner."
        lastUpdated="16/09/2026"
        intro='This Rate Card sets out the fees and charges applicable to Sourcing Partners for the use of the Cred2Tech Platform, and constitutes the "Platform Rate Card" referred to in the Sourcing Partner Agreement and the Terms of Use.'
      />

      <LegalLayout toc={TOC}>
        {/* OVERVIEW */}
        <LegalSection id="overview" title="Overview">
          <Callout tone="strong">
            All amounts stated below are in Indian Rupees (₹) and are <strong className="text-[var(--on-surface)]">exclusive of GST and other applicable taxes</strong>, which shall be charged additionally as per Applicable Law.
          </Callout>
          <P>
            Cred2Tech reserves the right to revise this Rate Card from time to time, in accordance with the notice requirements set out in the Sourcing Partner Agreement and the Terms of Use.
          </P>
        </LegalSection>

        {/* 1. SOURCING PARTNER PRICING */}
        <LegalSection id="sourcing-partner-pricing" index="1." title="Sourcing Partner Pricing">
          <P>The following pricing applies to Sourcing Partners for the use of the Cred2Tech Platform:</P>
        </LegalSection>

        {/* 1.1 PER-PULL CHARGES */}
        <LegalSection id="per-pull-charges" index="1.1" title="Per-Pull Report Charges">
          <P>The following charges apply on a per-pull basis, debited from the Sourcing Partner&apos;s Platform Wallet:</P>
          <StatGrid>
            <StatCard label="GST Analysis" value="₹199.00" sub="per pull, excl. GST" />
            <StatCard label="ITR Analysis" value="₹99.00" sub="per pull, excl. GST" />
            <StatCard label="Bank Statement Analysis" value="₹99.00" sub="per pull, excl. GST" />
            <StatCard label="Bureau Report" value="₹99.00" sub="per pull, excl. GST" />
          </StatGrid>
        </LegalSection>

        {/* 1.2 BULK WALLET RECHARGE DISCOUNT */}
        <LegalSection id="bulk-discount" index="1.2" title="Bulk Wallet Recharge Discount">
          <P>
            Sourcing Partners recharging their Platform Wallet in a single transaction are eligible for the following discount, applied to the full recharge amount on meeting the corresponding threshold:
          </P>
          <InfoTable
            head={['Wallet Recharge Amount', 'Discount']}
            rows={[
              ['₹5,000', '5%'],
              ['₹10,000', '10%'],
              ['₹20,000', '15%'],
              ['₹50,000', '20%'],
            ]}
          />
        </LegalSection>

        {/* 1.3 WORKSPACE */}
        <LegalSection id="workspace" index="1.3" title="Sourcing Partner Workspace">
          <P>
            Access to the Sourcing Partner Workspace is provided <strong className="text-[var(--on-surface)]">free of charge until 30 September 2027</strong>. With effect from 1 October 2027, continued access shall be charged at <strong className="text-[var(--on-surface)]">₹200 per month per Sourcing Partner</strong>.
          </P>
        </LegalSection>

        {/* 1.4 REFUND POLICY */}
        <LegalSection id="refund-policy" index="1.4" title="Refund Policy">
          <P>
            Unused or unconsumed Platform Wallet credits may, at Cred2Tech&apos;s discretion, be refunded to the Sourcing Partner&apos;s original account of payment.
          </P>
          <P>
            Any refund request must be raised from the Sourcing Partner&apos;s registered email address to{' '}
            <a href="mailto:contact@cred2tech.com" className="text-[var(--on-surface)] font-semibold hover:underline">contact@cred2tech.com</a>.
          </P>
          <P>Approved refunds will be processed to the original account of payment within seven (7) business days of the request.</P>
        </LegalSection>

        {/* 1.5 DISCOUNT ADJUSTMENT ON REFUND */}
        <LegalSection id="discount-adjustment" index="1.5" title="Discount Adjustment on Refund">
          <P>
            Where a Sourcing Partner seeks a refund of the entire unused or unconsumed balance of Platform Wallet credit under Clause 1.4, the discount applied at the time of the original recharge shall be recalculated by reference to the Bulk Wallet Recharge Discount slab (Clause 1.2) corresponding to the amount of Platform Wallet credit actually consumed by the Sourcing Partner as on the date of the refund request (and not the original recharge amount), and the refund payable shall be calculated as follows:
          </P>
          <Callout tone="strong">
            <span className="font-(family-name:--font-jb-mono) text-sm sm:text-base font-semibold text-[var(--on-surface)]">
              Refund Amount = Amount Paid for the Recharge − [Amount Consumed × (1 − Discount Rate corresponding to the Amount Consumed)]
            </span>
          </Callout>
          <P>Provided that:</P>
          <UL>
            <LI>(a) if the amount so calculated is a negative number, the refund payable shall be deemed to be nil, and no additional amount shall become payable by the Sourcing Partner to Cred2Tech on that account; and</LI>
            <LI>(b) only the entire unused/unconsumed balance of Platform Wallet credit may be refunded under Clause 1.4; Cred2Tech shall not process a refund of part of the unused balance.</LI>
          </UL>
          <Callout>
            <em>
              Illustration: A Sourcing Partner recharges ₹10,000 and pays ₹9,000 after the 10% discount. If ₹2,000 is consumed before the balance is refunded, the consumed amount does not meet any discount slab (0% applicable), and the refund is ₹9,000 − (₹2,000 × 100%) = ₹7,000. If ₹5,000 is consumed, the 5% slab applies, and the refund is ₹9,000 − (₹5,000 × 95%) = ₹4,250. Separately, a Sourcing Partner who recharges ₹50,000 (20% discount, pays ₹40,000) and consumes ₹49,000 — still below the ₹50,000 slab, so only 15% applies — would compute to a refund of −₹1,650; per proviso (a), the refund payable is nil.
            </em>
          </Callout>
        </LegalSection>

        {/* 2. MSME PRICING */}
        <LegalSection id="msme-pricing" index="2." title="MSME Pricing (Direct Customer Segment)">
          <P>The following pricing applies to MSME customers served directly by Cred2Tech:</P>

          <StatGrid>
            <StatCard label="Per Case" value="₹799" sub="Plus applicable GST · applicant + 1 co-applicant" />
            <StatCard label="Additional Co-Applicant" value="₹400" sub="Plus applicable GST · per extra co-applicant" />
          </StatGrid>

          <LegalSub>Included Pulls Per Case</LegalSub>
          <P>The per-case charge above is inclusive of the following maximum pulls, covering the applicant and one co-applicant:</P>
          <InfoTable
            head={['Pull Type', 'Maximum Included per Case']}
            rows={[
              ['Bureau Report', '2'],
              ['Bank Statement Analysis', '1'],
              ['GST Analysis', '1'],
              ['ITR Analysis', '2'],
            ]}
          />

          <LegalSub>Additional Co-Applicant Pull Allowance</LegalSub>
          <P>
            The Additional Co-Applicant Charge applies for each additional co-applicant added to a case, beyond the applicant and the one co-applicant already covered by the per-case charge above. Each additional co-applicant carries the following incremental pull allowance:
          </P>
          <InfoTable
            head={['Pull Type', 'Additional Pulls per Extra Co-Applicant']}
            rows={[
              ['Bureau Report', '1'],
              ['Bank Statement Analysis', '2'],
              ['GST Analysis', '1'],
              ['ITR Analysis', '1'],
            ]}
          />
        </LegalSection>
      </LegalLayout>

      <LegalFooterCta otherLabel="Read our Terms of Use" otherHref="/terms-of-use" />

      <style>{`
.material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;}
      `}</style>
    </div>
  );
}
