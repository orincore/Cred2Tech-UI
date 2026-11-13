import React from 'react';
import { LegalHero, LegalLayout, LegalFooterCta, TocItem } from '../components/legal/LegalLayout';
import { LegalSection, LegalSub, P, UL, LI, OL, OLI, Callout, InfoTable, StatCard, StatGrid } from '../components/legal/LegalContent';

export { metadata } from './metadata';

const TOC: TocItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'sourcing-partner-pricing', label: '1. Sourcing Partner Pricing' },
  { id: 'per-pull-charges', label: '1.1 Per-Pull Report Charges', sub: true },
  { id: 'bulk-discount', label: '1.2 Bulk Wallet Recharge Discount', sub: true },
  { id: 'workspace', label: '1.3 Sourcing Partner Workspace', sub: true },
  { id: 'refund-policy', label: '1.4 Refund Policy', sub: true },
  { id: 'discount-adjustment', label: '1.5 Discount Adjustment on Refund', sub: true },
  { id: 'msme-pricing', label: '2. MSME Pricing' },
  { id: 'storage', label: '3. Platform Storage Plans' },
  { id: 'free-storage', label: '3.1 Free Storage', sub: true },
  { id: 'paid-storage', label: '3.2 Paid Storage Plans', sub: true },
  { id: 'storage-terms', label: '3.3 Pricing and Subscription Terms', sub: true },
  { id: 'storage-downgrade', label: '3.4 Plan Downgrade', sub: true },
  { id: 'storage-failed-payments', label: '3.5 Failed Payments and Grace Period', sub: true },
  { id: 'storage-cancellation', label: '3.6 Cancellation of Storage Subscription', sub: true },
];

export default function RateCardPage() {
  return (
    <div className="bg-[var(--bg)] text-[var(--on-surface)] font-(family-name:--font-inter) overflow-x-clip transition-colors duration-500">
      <LegalHero
        badge="Sunby Credtech Platform · Rate Card"
        title="Transparent pricing for every pull, every partner."
        lastUpdated="13/11/2026"
        intro='This Rate Card sets out the fees and charges applicable to Sourcing Partners for the use of the Cred2Tech Platform, and constitutes the "Platform Rate Card" referred to in the Sourcing Partner Agreement and the Terms of Use.'
      />

      <LegalLayout toc={TOC}>
        {/* OVERVIEW */}
        <LegalSection id="overview" level="main" title="Overview">
          <Callout tone="strong">
            All amounts stated below are in Indian Rupees (₹) and are <strong className="text-[var(--on-surface)]">exclusive of GST and other applicable taxes</strong>, which shall be charged additionally as per Applicable Law.
          </Callout>
          <P>
            Cred2Tech reserves the right to revise this Rate Card from time to time, in accordance with the notice requirements set out in the Sourcing Partner Agreement and the Terms of Use.
          </P>
        </LegalSection>

        {/* 1. SOURCING PARTNER PRICING */}
        <LegalSection id="sourcing-partner-pricing" level="main" index="1." title="Sourcing Partner Pricing">
          <P>For Sourcing Partners, for their rate cards.</P>
        </LegalSection>

        {/* 1.1 PER-PULL CHARGES */}
        <LegalSection id="per-pull-charges" level="sub" index="1.1" title="Per-Pull Report Charges">
          <P>The following charges apply on a per-pull basis, debited from the Sourcing Partner&apos;s Platform Wallet:</P>
          <StatGrid>
            <StatCard label="GST Analysis" value="₹199.00" sub="per pull, excl. GST" />
            <StatCard label="ITR Analysis" value="₹99.00" sub="per pull, excl. GST" />
            <StatCard label="Bank Statement Analysis" value="₹99.00" sub="per pull, excl. GST" />
            <StatCard label="Bureau Report" value="₹99.00" sub="per pull, excl. GST" />
          </StatGrid>
        </LegalSection>

        {/* 1.2 BULK WALLET RECHARGE DISCOUNT */}
        <LegalSection id="bulk-discount" level="sub" index="1.2" title="Bulk Wallet Recharge Discount">
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
        <LegalSection id="workspace" level="sub" index="1.3" title="Sourcing Partner Workspace">
          <P>
            Access to the Sourcing Partner Workspace is provided <strong className="text-[var(--on-surface)]">free of charge until 30 September 2027</strong>. With effect from 1 October 2027, continued access shall be charged <strong className="text-[var(--on-surface)]">starting from ₹200 per month per Sourcing Partner</strong>.
          </P>
        </LegalSection>

        {/* 1.4 REFUND POLICY */}
        <LegalSection id="refund-policy" level="sub" index="1.4" title="Refund Policy">
          <P>
            Unused or unconsumed Platform Wallet credits may, at Cred2Tech&apos;s discretion, be refunded to the Sourcing Partner&apos;s original account of payment, subject to the following conditions:
          </P>
          <UL>
            <LI><strong className="text-[var(--on-surface)]">Refund Eligibility:</strong> Only amounts credited to the Platform Wallet through recharge transactions made during the three (3) months immediately preceding the date of the refund request shall be eligible for a refund.</LI>
            <LI><strong className="text-[var(--on-surface)]">Adjustment for Consumption:</strong> The refund amount shall be calculated after adjusting for the value of Platform Wallet credits already consumed against the eligible recharge amounts, along with any applicable discount adjustments under Clause 1.5.</LI>
            <LI><strong className="text-[var(--on-surface)]">Older Wallet Credits:</strong> Any unused or unconsumed wallet credits arising from recharge transactions made more than three (3) months before the refund request shall not be eligible for a refund. Such credits shall, however, remain available in the Platform Wallet for future use.</LI>
            <LI><strong className="text-[var(--on-surface)]">No Expiry:</strong> Platform Wallet credits shall not have an expiry date and shall remain valid until utilised, irrespective of the date on which they were credited to the wallet.</LI>
          </UL>
          <P>
            Any refund request must be raised from the Sourcing Partner&apos;s registered email address to{' '}
            <a href="mailto:contact@cred2tech.com" className="text-[var(--on-surface)] font-semibold hover:underline">contact@cred2tech.com</a>.
          </P>
          <P>Approved refunds will be processed to the original account of payment within seven (7) business days of approval.</P>
        </LegalSection>

        {/* 1.5 DISCOUNT ADJUSTMENT ON REFUND */}
        <LegalSection id="discount-adjustment" level="sub" index="1.5" title="Discount Adjustment on Refund">
          <P>
            For the purpose of calculating refunds under Clause 1.4, the discount applied at the time of the original recharge shall be recalculated by reference to the Bulk Wallet Recharge Discount slab (Clause 1.2), corresponding to the amount of Platform Wallet credit actually consumed.
          </P>
          <P>Only eligible recharge transactions, as defined under Clause 1.4, shall be considered for calculating the refundable amount.</P>
          <P>
            The refund payable shall be calculated after adjusting the amount consumed and the applicable discount, against the amount paid for the eligible recharge transactions.
          </P>
          <Callout tone="strong">
            <span className="font-(family-name:--font-jb-mono) text-sm sm:text-base font-semibold text-[var(--on-surface)]">
              Refund Amount = Amount Paid for the Recharge − [Amount Consumed × (1 − Discount Rate corresponding to the Amount Consumed)]
            </span>
          </Callout>
          <P>
            Where the amount so calculated is negative, the refund payable shall be deemed to be nil, and no additional amount shall become payable by the Sourcing Partner to Cred2Tech on that account.
          </P>
        </LegalSection>

        {/* 2. MSME PRICING */}
        <LegalSection id="msme-pricing" level="main" index="2." title="MSME Pricing (Direct Customer Segment)">
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
              ['Bank Statement Analysis', '1'],
              ['GST Analysis', '1'],
              ['ITR Analysis', '1'],
            ]}
          />
        </LegalSection>
        {/* 3. PLATFORM STORAGE PLANS */}
        <LegalSection id="storage" level="main" index="3." title="Platform Storage Plans">
          <P>
            Cred2Tech provides cloud storage for documents and records uploaded or maintained on the Platform, subject to the following plans:
          </P>
        </LegalSection>

        {/* 3.1 FREE STORAGE */}
        <LegalSection id="free-storage" level="sub" index="3.1" title="Free Storage">
          <P>
            Every registered account is entitled to 2 GB of storage at no additional cost.
          </P>
        </LegalSection>

        {/* 3.2 PAID STORAGE PLANS */}
        <LegalSection id="paid-storage" level="sub" index="3.2" title="Paid Storage Plans">
          <P>Sourcing Partners may upgrade their storage capacity by subscribing to any of the following plans:</P>
          <InfoTable
            head={['Total Storage', 'Monthly Fee (Excl. GST)', 'GST (18%)', 'Total Monthly Fee']}
            rows={[
              ['2 GB', 'Free', 'Nil', '₹0'],
              ['10 GB', '₹50', '₹9', '₹59'],
              ['20 GB', '₹100', '₹18', '₹118'],
              ['30 GB', '₹150', '₹27', '₹177'],
              ['40 GB', '₹200', '₹36', '₹236'],
              ['50 GB', '₹250', '₹45', '₹295'],
            ]}
          />
        </LegalSection>

        {/* 3.3 PRICING AND SUBSCRIPTION TERMS */}
        <LegalSection id="storage-terms" level="sub" index="3.3" title="Pricing and Subscription Terms">
          <OL>
            <OLI>Paid storage is charged at the rate of ₹5 per GB per month, exclusive of applicable GST, currently 18%.</OLI>
            <OLI>The storage capacity specified under each paid plan represents the total storage entitlement of the account and is inclusive of the initial free 2 GB. Paid storage is not additional to the free storage entitlement.</OLI>
            <OLI>The selected paid storage plan shall be billed on a monthly subscription basis.</OLI>
            <OLI>Subscription charges, including applicable GST, shall be automatically collected through Razorpay using the payment method authorised by the Sourcing Partner.</OLI>
            <OLI>Any change, upgrade or downgrade of the storage plan shall be subject to the applicable subscription management and billing process made available on the Platform.</OLI>
          </OL>
        </LegalSection>

        {/* 3.4 PLAN DOWNGRADE */}
        <LegalSection id="storage-downgrade" level="sub" index="3.4" title="Plan Downgrade">
          <P>
            A Sourcing Partner may downgrade their existing storage subscription to a lower plan only after reducing their existing storage usage to within the storage capacity of the intended lower plan.
          </P>
          <P>A downgrade request shall not be processed if the existing storage usage exceeds the capacity of the intended lower plan.</P>
        </LegalSection>

        {/* 3.5 FAILED PAYMENTS AND GRACE PERIOD */}
        <LegalSection id="storage-failed-payments" level="sub" index="3.5" title="Failed Payments and Grace Period">
          <OL>
            <OLI>In the event of a failure to collect the applicable monthly subscription fee through Razorpay, the Sourcing Partner shall be provided a grace period of one (1) month to complete the pending payment.</OLI>
            <OLI>If the payment remains unsuccessful or outstanding beyond the grace period, the account&apos;s storage entitlement shall revert to the basic free storage limit of 2 GB.</OLI>
            <OLI>Where the account&apos;s existing storage usage exceeds the basic free storage limit of 2 GB, Cred2Tech reserves the right to remove or purge stored data as necessary to bring the account&apos;s storage usage within the permitted 2 GB limit.</OLI>
            <OLI>Cred2Tech shall determine the data to be removed or purged at its discretion. No specific order, priority or selection criteria for such data removal shall be guaranteed.</OLI>
          </OL>
        </LegalSection>

        {/* 3.6 CANCELLATION OF STORAGE SUBSCRIPTION */}
        <LegalSection id="storage-cancellation" level="sub" index="3.6" title="Cancellation of Storage Subscription">
          <OL>
            <OLI>A Sourcing Partner may cancel their paid storage subscription at any time.</OLI>
            <OLI>Cancellation shall take effect at the end of the then-current billing month. The paid storage entitlement shall remain available until the end of the applicable billing period.</OLI>
            <OLI>Upon the effective date of cancellation, the account shall revert to the basic free storage entitlement of 2 GB.</OLI>
            <OLI>If the existing storage usage exceeds the basic free storage limit of 2 GB, Cred2Tech reserves the right to remove or purge stored data as necessary to bring the account&apos;s storage usage within the permitted limit.</OLI>
            <OLI>No refund shall be payable for the unused portion of the current billing period following cancellation.</OLI>
          </OL>
        </LegalSection>
      </LegalLayout>

      <LegalFooterCta otherLabel="Read our Terms of Use" otherHref="/terms-of-use" />

      <style>{`
.material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;}
      `}</style>
    </div>
  );
}
