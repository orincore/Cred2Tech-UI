import React from 'react';
import Link from 'next/link';
import { LegalHero, LegalLayout, LegalFooterCta, TocItem } from '../components/legal/LegalLayout';
import { LegalSection, LegalSub, P, UL, LI, OL, OLI, Callout, DefinitionList, InfoTable, ContactCard } from '../components/legal/LegalContent';

export { metadata } from './metadata';

const TOC: TocItem[] = [
  { id: 'preamble', label: 'Preamble' },
  { id: 'workflow', label: 'Platform Workflow & Data Touchpoints' },
  { id: 'definitions', label: 'I. Definitions' },
  { id: 'notice', label: 'II. Notice Under Section 5' },
  { id: 'information-we-collect', label: 'III. Information We Collect' },
  { id: 'grounds-for-processing', label: 'IV. Grounds & Purposes of Use' },
  { id: 'consent', label: 'V. Consent' },
  { id: 'sharing-disclosure', label: 'VI. Sharing & Disclosure' },
  { id: 'your-rights', label: 'VII. Your Rights as Data Principal' },
  { id: 'data-retention', label: 'VIII. Data Retention & Erasure' },
  { id: 'cookies', label: 'IX. Cookies & Tracking' },
  { id: 'data-security', label: 'X. Data Security & Breach Notification' },
  { id: 'childrens-privacy', label: "XI. Children's Privacy" },
  { id: 'cross-border-transfer', label: 'XII. Cross-Border Transfer' },
  { id: 'grievance-redressal', label: 'XIII. Grievance Redressal' },
  { id: 'governing-law', label: 'XIV. Governing Law & Jurisdiction' },
  { id: 'changes-to-policy', label: 'XV. Changes to This Policy' },
  { id: 'consent-declaration', label: 'XVI. Consent Declaration' },
  { id: 'other-sectoral-laws', label: 'XVII. Other Sectoral Laws' },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[var(--bg)] text-[var(--on-surface)] font-(family-name:--font-inter) overflow-x-clip transition-colors duration-500">
      <LegalHero
        badge="Cred2Tech Platform · Privacy Policy"
        title="Your data, handled with the rigour the law demands."
        lastUpdated="14/09/2026"
        intro="This Privacy Policy explains how Sunby Credtech Private Limited collects, uses, stores, shares, and protects your Personal Data when you access the Cred2Tech Platform, in compliance with the Digital Personal Data Protection Act, 2023."
      />

      <LegalLayout toc={TOC}>
        {/* PREAMBLE */}
        <LegalSection id="preamble" title="Preamble">
          <P>
            This Privacy Policy (&quot;Policy&quot;) is issued by Sunby Credtech Private Limited (&quot;Cred2Tech&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a company incorporated under the laws of India, and governs the collection, use, storage, sharing, and protection of your Personal Data when you access or use our website at{' '}
            <a href="https://www.cred2tech.com" className="text-[var(--on-surface)] font-semibold hover:underline">www.cred2tech.com</a>{' '}
            (&quot;Website&quot;) and the services offered through our platform (&quot;Platform&quot; or &quot;Services&quot;).
          </P>
          <P>
            This Policy is issued in compliance with the <strong className="text-[var(--on-surface)]">Digital Personal Data Protection Act, 2023</strong> (&quot;DPDP Act&quot; or &quot;Act&quot;), which received the assent of the President of India on 11 August 2023. The core operative provisions of the Act, including Chapters II and III governing Data Fiduciary obligations and Data Principal rights respectively, came into force eighteen months from 13 November 2025.
          </P>
          <P>
            Cred2Tech operates as a <strong className="text-[var(--on-surface)]">Data Fiduciary</strong> within the meaning of Section 2(i) of the DPDP Act, determining the purpose and means of processing of Personal Data of its users (&quot;Data Principals&quot;). By accessing or using the Platform, you acknowledge and accept the practices described in this Policy.
          </P>
        </LegalSection>

        {/* WORKFLOW */}
        <LegalSection id="workflow" title="Platform Workflow and Personal Data Touchpoints">
          <P>
            The following describes the data collection journey as it occurs within the Cred2Tech Platform, based on the Platform&apos;s user interface and workflow. Personal Data is collected at each of the following touchpoints in four different scenarios as described below:
          </P>

          <LegalSub>A) Scenario 1 — Scheme Eligibility Engine</LegalSub>
          <OL>
            <OLI><strong className="text-[var(--on-surface)]">Step 1 — Sign-In / Registration (Mobile Number Entry):</strong> You are required to enter your mobile number. An OTP is sent to verify your mobile number. The data collected at this stage is: mobile number, OTP verification data, and device/session information. This data is used for authentication and identity verification.</OLI>
            <OLI><strong className="text-[var(--on-surface)]">Step 2 — PAN-Based Business Detail Verification:</strong> You are prompted to enter your Permanent Account Number (PAN), which is used to auto-fill your business details including Legal Name, Constitution type (e.g., Proprietorship), State, and GSTIN. You are also requested to confirm your email address at this stage.</OLI>
            <OLI><strong className="text-[var(--on-surface)]">Step 3 — Business Profile Completion:</strong> You are asked to provide additional eligibility-related business details, including Annual Turnover Range, Total Employees, Business Stage, Udyam (MSME) registration status, Primary Benefit Focus, Proprietor/Director Gender, Social Category (e.g., SC/OBC/General), Age of Proprietor/Director, disability status, BPL card status, and minority community status. These details are used exclusively for AI-powered scheme eligibility matching.</OLI>
            <OLI><strong className="text-[var(--on-surface)]">Step 4 — AI-Powered Scheme Eligibility Analysis:</strong> The Platform&apos;s AI engine scans a comprehensive and continuously updated database of government schemes and matches them against your business profile to determine which schemes you are eligible for. The eligibility matching logic uses attributes such as social category, enterprise size, state, turnover, and startup/Udyam status.</OLI>
            <OLI><strong className="text-[var(--on-surface)]">Step 5 — Payment for Unlocking Full Eligibility Report:</strong> Upon completion of the eligibility analysis, you are presented with the number of schemes you qualify for. Full details — including match reasons, required documents, and application guidance — are accessible upon a one-time secure payment processed via our payment gateway partner(s) (currently, Razorpay), etc. Payment data is processed by the payment gateway partner and not retained by Cred2Tech.</OLI>
            <OLI><strong className="text-[var(--on-surface)]">Step 6 — Scheme Details, Saved Schemes, and Track Applications:</strong> Post-payment, you can browse scheme details, save schemes, track applications, and manage your profile including personal and business information. Your profile stores Personal Information (name, mobile, email, PAN), Business Information (GSTIN, constitution, trade name, industry, address), and Eligibility &amp; Additional Details (enterprise category, annual turnover, income, caste/social category, gender, disability status, BPL status, Udyam registration, minority status, ex-serviceman status).</OLI>
          </OL>

          <LegalSub>B) Scenario 2 — Loan/Credit Application Processing through Sourcing Partners</LegalSub>
          <OL>
            <OLI>Potential borrower/customer approaches a Sourcing Partner for availing a loan and the Sourcing Partner registers a customer through entering his PAN Number, mobile number and email ID in the Cred2Tech application.</OLI>
            <OLI>An OTP is initiated to the customer&apos;s number and the customer is asked to click on a link to approve collection and storing of his or his firm&apos;s/company&apos;s data. On clicking the link the customer is shown explicitly which approvals are being taken. Based on this, approval is documented to proceed with a credit or loan application, and additional financial documents including Bureau data, Loan Information Summary reports, and property documents are collected for sharing with lending partners.</OLI>
            <OLI>Additionally the customer is advised to authenticate the collection of GST and ITR data on the Cred2Tech app or by way of authenticating the same through a specific link shared with them.</OLI>
            <OLI>Bank statement data is collected by uploading the statements shared by the customer with the Sourcing Partner.</OLI>
            <OLI>Additional details as required by lenders — such as address for residence, property and office, references, etc. — are collected as per requirement.</OLI>
          </OL>

          <LegalSub>C) Scenario 3 — Loan/Credit Application Processing by Direct Customers</LegalSub>
          <OL>
            <OLI>Customer registers on the portal by entering their mobile number, PAN Number, and email ID.</OLI>
            <OLI>On registration the customer is prompted to make a one-time secure payment processed via our payment gateway partner(s) (currently, Razorpay), etc. Payment data is processed by the payment gateway partner and not retained by Cred2Tech.</OLI>
            <OLI>An OTP is initiated to the customer&apos;s number and the customer is asked to click on a link to approve collection and storing of his or his firm&apos;s/company&apos;s data. On clicking the link the customer is shown explicitly which approvals are being taken. Based on this, approval is documented to proceed with a credit or loan application, and additional financial documents including Bureau data, Loan Information Summary reports, and property documents are collected for sharing with lending partners or potential Sourcing Partners.</OLI>
            <OLI>Additionally the customer is advised to authenticate the collection of GST and ITR data on the Cred2Tech app or by way of authenticating the same through a specific link shared with them.</OLI>
            <OLI>Bank statement data is collected by uploading the statements on the portal by the customers.</OLI>
            <OLI>Additional details as required by lenders — such as address for residence, property and office, references, etc.</OLI>
          </OL>

          <LegalSub>D) Sourcing Partner Registration and Use of Work Space</LegalSub>
          <OL>
            <OLI>The Sourcing Partner registers on the portal by entering the email ID and mobile number.</OLI>
            <OLI>The same is authenticated by an OTP received on the mobile number and email ID.</OLI>
            <OLI>In the course of business, they will be updating the application with contact details of the lender they are working with, their payout structure with the lender, fee/commission they earn with each lender, etc.</OLI>
            <OLI>The Sourcing Partner uses the platform for onboarding customers, checking their eligibility against various loan products from multiple lenders through consuming multiple APIs, and they will be charged on the basis of consumption from a pre-paid wallet. The pre-paid wallet is paid through a secure payment processed via our payment gateway partner(s) (currently, Razorpay), etc. Payment data is processed by the payment gateway partner and not retained by Cred2Tech.</OLI>
          </OL>
        </LegalSection>

        {/* I. DEFINITIONS */}
        <LegalSection id="definitions" index="I." title="Definitions">
          <P>For the purposes of this Policy, the following terms shall have the meanings assigned to them below, consistent with the definitions under the DPDP Act:</P>
          <DefinitionList
            items={[
              { term: '"DPDP Act"', def: 'means the Digital Personal Data Protection Act, 2023 (Act No. 22 of 2023).' },
              { term: '"Personal Data"', def: 'means any data about an individual who is identifiable by or in relation to such data, as defined under Section 2(t) of the DPDP Act.' },
              { term: '"Data Fiduciary"', def: 'means any person who alone or in conjunction with other persons determines the purpose and means of processing of personal data — i.e., Sunby Credtech Private Limited.' },
              { term: '"Data Principal"', def: 'means the individual to whom the Personal Data relates — i.e., you, the user.' },
              { term: '"Data Processor"', def: 'means any person who processes Personal Data on behalf of Cred2Tech.' },
              { term: '"Processing"', def: 'means any wholly or partly automated operation performed on digital Personal Data, including collection, recording, storage, use, sharing, disclosure, or erasure.' },
              { term: '"Personal Data Breach"', def: 'means any unauthorised processing of Personal Data or accidental disclosure, acquisition, sharing, use, alteration, destruction or loss of access to Personal Data, that compromises its confidentiality, integrity or availability.' },
              { term: '"Consent Manager"', def: 'means a person registered with the Data Protection Board of India, who acts as a single point of contact to enable a Data Principal to give, manage, review, and withdraw consent.' },
              { term: '"Specified Purpose"', def: 'means the purpose mentioned in the notice given by Cred2Tech to you, as the Data Principal, in accordance with the DPDP Act.' },
            ]}
          />
        </LegalSection>

        {/* II. NOTICE */}
        <LegalSection id="notice" index="II." title="Notice Under Section 5 of the DPDP Act">
          <P>In compliance with Section 5 of the DPDP Act, this Policy, and any consent request made to you on the Platform, constitutes the statutory notice informing you of:</P>
          <UL>
            <LI>(a) The Personal Data being collected and the specific, lawful purposes for which it will be processed;</LI>
            <LI>(b) The manner in which you may exercise your rights under Section 6(4) and Section 13 of the DPDP Act (detailed in Clause VII below); and</LI>
            <LI>(c) The manner in which you may make a complaint to the Data Protection Board of India.</LI>
          </UL>
          <P>This notice is made available in English. This Policy and all notices under the DPDP Act are provided in English only.</P>
        </LegalSection>

        {/* III. INFORMATION WE COLLECT */}
        <LegalSection id="information-we-collect" index="III." title="Information We Collect">
          <P>
            We collect Personal Data only to the extent necessary for the Specified Purpose, in accordance with the principle of data minimisation under the DPDP Act. The categories of Personal Data collected are set out below, organised by the point at which they are collected in the Platform workflow:
          </P>

          <LegalSub>A. Identity and Contact Data</LegalSub>
          <UL>
            <LI>Name (auto-filled via PAN)</LI>
            <LI>Mobile number (collected at Step 1; used for OTP authentication)</LI>
            <LI>Email address</LI>
            <LI>Permanent Account Number (PAN)</LI>
          </UL>

          <LegalSub>B. Business and Tax Identity Data</LegalSub>
          <UL>
            <LI>Legal name of the enterprise (auto-filled via PAN lookup)</LI>
            <LI>Business constitution (e.g., Proprietorship, LLP, Private Limited)</LI>
            <LI>GSTIN and GST registration certificate</LI>
            <LI>State of registration</LI>
            <LI>Udyam (MSME) Registration Certificate (where applicable)</LI>
            <LI>Trade Name, Industry type, and business address</LI>
          </UL>

          <LegalSub>C. Eligibility and Socio-Economic Profile Data</LegalSub>
          <Callout>
            The following categories of data — social category (caste), disability status, gender, BPL status, minority community status — may constitute <strong className="text-[var(--on-surface)]">sensitive personal data</strong> within the context of scheme eligibility matching. They are collected solely for the purpose of AI-powered matching of eligible government schemes and are processed with your explicit, informed, and specific consent.
          </Callout>
          <UL>
            <LI>Annual Turnover Range and Income</LI>
            <LI>Total Employees and Enterprise Category (Micro/Small/Medium)</LI>
            <LI>Business Stage and Primary Benefit Focus</LI>
            <LI>Social Category (e.g., SC, ST, OBC, General)</LI>
            <LI>Gender of Proprietor/Director</LI>
            <LI>Age of Proprietor/Director</LI>
            <LI>Disability status (differently-abled)</LI>
            <LI>BPL (Below Poverty Line) card status</LI>
            <LI>Minority community status</LI>
            <LI>Udyam registration status, Startup status, Ex-serviceman status</LI>
            <LI>Residence type (Urban/Rural)</LI>
          </UL>

          <LegalSub>D. Financial and Credit Data</LegalSub>
          <UL>
            <LI>Financial statements and Income Tax Returns (ITR)</LI>
            <LI>GST Returns (e.g., GSTR-3B) and bank statements</LI>
            <LI>Credit and financial information including existing loans, EMIs, and repayment obligations</LI>
            <LI>Business incorporation and ownership documents (partnership deed, MOA, or equivalent)</LI>
            <LI>Property-related documents (sale/title deeds, encumbrance certificates, approved building plans), where applicable</LI>
            <LI>Vendor invoices, payout details, and other transaction-related records</LI>
            <LI>Photographs of individuals, business premises, or property for verification or assessment purposes</LI>
          </UL>

          <LegalSub>E. Automatically Collected Technical and Usage Data</LegalSub>
          <UL>
            <LI>IP address and device identifiers</LI>
            <LI>Device and browser information (type, operating system, configuration)</LI>
            <LI>Date and time of access</LI>
            <LI>Usage data such as pages viewed, features used, clickstream data, and time spent on the Platform</LI>
            <LI>Cookies and similar tracking technologies (see Clause IX — Cookies Policy)</LI>
          </UL>

          <LegalSub>F. Data from Third-Party Sources</LegalSub>
          <P>We may collect information from third-party service providers, financial institutions, credit bureaus, KYC verification agencies, and publicly available sources (e.g., GST portal, MCA portal) to support verification, analysis, and eligibility assessment.</P>

          <LegalSub>G. Clarification on Storage of Application Data</LegalSub>
          <P>
            By accepting the Terms of Use and this Policy at the time of registration or login, you provide your consent for Cred2Tech to persistently store the data you enter into application forms, draft loan applications, or scheme-related application fields, for the Specified Purposes disclosed in this Policy. A separate, stage-wise on-screen consent is not required for each instance of such storage (such as saving your profile, saving a scheme, or submitting an application); this Clause V constitutes the operative consent for such storage.
          </P>

          <LegalSub>H. Mobile Device Data</LegalSub>
          <P>No mobile device resources such as contacts, call logs, media, or local files are accessed or stored by Cred2Tech.</P>

          <LegalSub>I. Sourcing Partner Data</LegalSub>
          <UL>
            <LI>PAN number, mobile number, business email IDs, GST number</LI>
            <LI>Mobile number and email ID of the employees of the Sourcing Partner and their designations</LI>
            <LI>Employee incentive details</LI>
            <LI>Details of the lenders they are associated with — such as name of the contact person, their email ID and phone number, payout structure, etc.</LI>
            <LI>Details of the payout earned</LI>
            <LI>Name, mobile and email IDs of sub-Sourcing Partners and their payout structure</LI>
          </UL>
        </LegalSection>

        {/* IV. GROUNDS FOR PROCESSING */}
        <LegalSection id="grounds-for-processing" index="IV." title="Grounds for Processing and Purposes of Use">
          <P>
            Cred2Tech processes your Personal Data only on the lawful grounds specified under Section 4 of the DPDP Act — i.e., (a) based on your consent, or (b) for certain legitimate uses under Section 7 of the DPDP Act.
          </P>
          <InfoTable
            head={['Purpose of Processing', 'Legal Ground Under DPDP Act', 'Data Categories Used']}
            rows={[
              ['Mobile number OTP verification and user authentication', 'Consent (Section 6)', 'Mobile number, OTP data, device information'],
              ['PAN-based identity and business detail verification', 'Consent (Section 6)', 'PAN, auto-filled legal name, GSTIN, state, constitution'],
              ['AI-powered government scheme eligibility matching', 'Consent (Section 6); Certain Legitimate Uses — Section 7(b) (State subsidy/benefit facilitation)', 'All eligibility and socio-economic profile data (Category C above)'],
              ['Payment processing for unlocking scheme eligibility reports', 'Consent (Section 6); Performance of contract', 'Payment data'],
              ['KYC completion and onboarding for credit/loan applications (where you choose to apply)', 'Consent (Section 6); Legal obligation (Section 7(d))', 'PAN, KYC documents, application data expressly submitted by you'],
              ['Credit appraisal, Bureau Soft pull, Loan Information Summary report generation, loan eligibility assessment', 'Consent (Section 6)', 'Financial statements, ITR, GSTR-3B, bank statements'],
              ['Sharing with lending partners (Banks, NBFCs) for loan processing', 'Explicit Consent (Section 6); Section 7(f) (default-related processing, where applicable)', 'Financial and credit data, KYC documents, CAM reports, application data specifically consented to be shared'],
              ['Fraud prevention and platform security', 'Legitimate use (Section 7(i)); Consent', 'Device data, usage data, identity data'],
              ['Legal and regulatory compliance (KYC/AML obligations)', 'Legal obligation (Section 7(d))', 'Identity, KYC, and financial data'],
              ['Service communications, alerts, and account notifications', 'Consent (Section 6)', 'Mobile number, email address'],
              ['Analytics and product improvement', 'Consent (Section 6)', 'Usage data, technical data, anonymised data'],
            ]}
          />
          <P>We do not use your Personal Data for any purpose incompatible with the Specified Purpose notified to you at the time of collection, without obtaining fresh, specific consent.</P>
        </LegalSection>

        {/* V. CONSENT */}
        <LegalSection id="consent" index="V." title="Consent">
          <P>In accordance with Section 6 of the DPDP Act, consent obtained by Cred2Tech from you is:</P>
          <UL>
            <LI><strong className="text-[var(--on-surface)]">Free</strong> — not conditioned on acceptance beyond what is necessary for the service;</LI>
            <LI><strong className="text-[var(--on-surface)]">Specific</strong> — limited to the Specified Purpose disclosed in this Policy and at the point of collection;</LI>
            <LI><strong className="text-[var(--on-surface)]">Informed</strong> — accompanied by a clear notice under Section 5 of the DPDP Act;</LI>
            <LI><strong className="text-[var(--on-surface)]">Unconditional and Unambiguous</strong> — given through a clear affirmative action by you; and</LI>
            <LI><strong className="text-[var(--on-surface)]">Limited to Necessary Data</strong> — consent is sought only for data that is necessary for the specified purpose.</LI>
          </UL>
          <P>
            In particular, by accepting the Terms of Use and this Policy at the time of registration or login, you provide your consent to the persistent storage of data that you enter in application forms, draft applications, or scheme-related workflows, for the purposes disclosed in this Policy; a separate, stage-wise on-screen consent is not required for each such instance of storage.
          </P>
          <P>Consent requests are presented to you in clear and plain language, in English only.</P>

          <LegalSub>Withdrawal of Consent</LegalSub>
          <P>You have the right to withdraw your consent at any time, with the same ease as it was given, in accordance with Section 6(4) of the DPDP Act. Upon withdrawal:</P>
          <UL>
            <LI>(a) Cred2Tech shall, within a reasonable time, cease and cause its Data Processors to cease processing your Personal Data, unless such processing is required or authorised under applicable law.</LI>
            <LI>(b) Withdrawal of consent does not affect the legality of processing that occurred prior to the withdrawal.</LI>
            <LI>(c) Withdrawal may affect your ability to use certain Services where data processing is necessary for service delivery or legal compliance.</LI>
          </UL>
          <P>To withdraw consent, contact our Grievance Officer at the details set out in Clause XIII.</P>
        </LegalSection>

        {/* VI. SHARING AND DISCLOSURE */}
        <LegalSection id="sharing-disclosure" index="VI." title="Sharing and Disclosure of Personal Data">
          <P>
            We share your Personal Data only on a need-to-know basis, strictly for the Specified Purposes, and subject to your consent or as permitted under applicable law. The categories of recipients with whom Personal Data may be shared are as follows:
          </P>
          <UL>
            <LI><strong className="text-[var(--on-surface)]">(a) Lending Partners (Banks, NBFCs, Financial Institutions)</strong> — For evaluating, processing, and deciding upon your credit or loan application, subject to your explicit consent provided. Documents shared may include KYC documents, financial statements, and Eligibility Summary Report (ESR) reports generated by the Platform. This sharing is governed by the applicable regulatory framework including RBI guidelines on KYC and credit information.</LI>
            <LI><strong className="text-[var(--on-surface)]">(b) Sourcing Partners</strong> — Registered Sourcing Partners who access the MSME Lending workflow on your behalf through the Agent Portal may handle your Personal Data as part of their authorised role in facilitating your loan application. Sourcing Partners are contractually bound by Cred2Tech&apos;s Sourcing Partner Agreement, which includes obligations of data confidentiality, consent compliance, and restricted use of your Personal Data exclusively for the purpose of processing your credit application through the Cred2Tech Platform. Sourcing Partners do not have independent authority to use, store, or share your Personal Data beyond the scope of the Services.</LI>
          </UL>
          <Callout tone="strong">
            In relation to Personal Data collected by a Sourcing Partner through the Agent Portal, Cred2Tech acts solely as a software/technology service provider, providing the technology platform used by the Sourcing Partner to collect, process, and transmit such Personal Data. The Sourcing Partner shall be solely responsible for its collection, storage, and processing of such Personal Data, and shall remain solely liable for compliance with applicable law, including the DPDP Act, in respect of such processing. The Sourcing Partner&apos;s processing of your Personal Data shall at all times be subject to audit and inspection by Cred2Tech in accordance with the Sourcing Partner Agreement. Sourcing Partners are strictly prohibited from using, reusing, or disclosing your Personal Data for any third-party marketing or solicitation purposes unconnected with the processing of your credit application.
          </Callout>
          <UL>
            <LI><strong className="text-[var(--on-surface)]">(c) Payment Processors</strong> — Our payment gateway partner(s) (currently, Razorpay) process one-time payments made on the Platform. Payment data is processed directly by the payment gateway under their own privacy policy and is not retained by Cred2Tech beyond transaction confirmation.</LI>
            <LI><strong className="text-[var(--on-surface)]">(d) Service Providers and Data Processors</strong> — KYC vendors, identity verification agencies, GST/PAN lookup service providers, cloud infrastructure providers, and analytics providers who process data on our behalf under valid contracts, as required under Section 8(2) of the DPDP Act.</LI>
            <LI><strong className="text-[var(--on-surface)]">(e) Regulatory, Legal, and Government Authorities</strong> — Where disclosure is required under applicable law, lawful government order, or for compliance with any legal obligation under Section 7(d) of the DPDP Act.</LI>
            <LI><strong className="text-[var(--on-surface)]">(f) Group Companies and Affiliates</strong> — For operational, compliance, or service delivery purposes, on a need-to-know basis.</LI>
            <LI><strong className="text-[var(--on-surface)]">(g) Business Transfer Parties</strong> — In the event of a merger, acquisition, restructuring, or sale of assets, Personal Data may be shared subject to confidentiality obligations and in compliance with applicable law, including Section 17(1)(e) of the DPDP Act.</LI>
          </UL>
          <P>Where Personal Data is shared with a Data Processor, Cred2Tech shall ensure that the Data Processor processes such data only under a valid contract, and only for purposes authorised by Cred2Tech.</P>
          <P>Where Personal Data may be used to make a decision that affects you, or may be disclosed to another Data Fiduciary, we shall ensure its completeness, accuracy, and consistency, in accordance with Section 8(3) of the DPDP Act.</P>
        </LegalSection>

        {/* VII. YOUR RIGHTS */}
        <LegalSection id="your-rights" index="VII." title="Your Rights as a Data Principal">
          <P>As a Data Principal under Chapter III of the DPDP Act, you have the following rights in respect of your Personal Data processed by Cred2Tech:</P>
          <UL>
            <LI><strong className="text-[var(--on-surface)]">(a) Right to Access Information (Section 11):</strong> You may request a summary of Personal Data being processed by Cred2Tech, the processing activities undertaken, and the identities of all other Data Fiduciaries and Data Processors with whom your Personal Data has been shared. Such information is provided only pursuant to a written request submitted to our Grievance Officer in accordance with Clause XIII; self-service access to, or download of, your Personal Data is not available on the Platform.</LI>
            <LI><strong className="text-[var(--on-surface)]">(b) Right to Correction, Completion, and Updating (Section 12):</strong> You may request correction of inaccurate or misleading Personal Data, completion of incomplete data, and updating of Personal Data. To exercise this right, including in respect of any change to your Personal Data (such as your mobile number, email address, or business details), you must submit a written request to our designated privacy email address <a href="mailto:contact@cred2tech.com" className="text-[var(--on-surface)] font-semibold hover:underline">contact@cred2tech.com</a>; self-service editing of your Personal Data through the Profile section of the Platform is not available for this purpose.</LI>
            <LI><strong className="text-[var(--on-surface)]">(c) Right to Erasure (Section 12(3)):</strong> You may request erasure of your Personal Data. Upon receipt of such a request, Cred2Tech shall erase your Personal Data unless its retention is necessary for the Specified Purpose or for compliance with applicable law (e.g., KYC/AML retention obligations). To exercise this right, you must submit a written request to purge/erase your Personal Data to our designated privacy email address <a href="mailto:contact@cred2tech.com" className="text-[var(--on-surface)] font-semibold hover:underline">contact@cred2tech.com</a> (&quot;Erasure Request Email&quot;). Self-service deletion of your account or Personal Data through the Profile section, or elsewhere on the Platform, is not available.</LI>
            <LI><strong className="text-[var(--on-surface)]">(d) Right to Withdraw Consent (Section 6(4)):</strong> You may withdraw consent previously given for processing of your Personal Data at any time. Refer to Clause V above.</LI>
            <LI><strong className="text-[var(--on-surface)]">(e) Right to Grievance Redressal (Section 13):</strong> You have the right to readily available means of grievance redressal in respect of any act or omission of Cred2Tech regarding the processing of your Personal Data. You must first exhaust the grievance mechanism before approaching the Data Protection Board of India.</LI>
            <LI><strong className="text-[var(--on-surface)]">(f) Right to Nominate (Section 14):</strong> You have the right to nominate another individual to exercise your rights as a Data Principal in the event of your death or incapacity.</LI>
          </UL>
          <P>
            To exercise any of the above rights, please contact our Grievance Officer as detailed in Clause XIII. Requests will be processed within the timeline mandated by the DPDP Rules, 2025 (maximum 90 days). Identity verification may be required before processing such requests.
          </P>

          <LegalSub>Duties of Data Principal (Section 15)</LegalSub>
          <P>
            As a Data Principal, you are also obligated under Section 15 of the DPDP Act to: not impersonate another person when providing Personal Data; not suppress material information while providing data for identification purposes; not register false or frivolous grievances; and furnish only verifiably authentic information when exercising the right to correction or erasure.
          </P>
        </LegalSection>

        {/* VIII. DATA RETENTION */}
        <LegalSection id="data-retention" index="VIII." title="Data Retention and Erasure">
          <P>In accordance with Section 8(7) of the DPDP Act, Cred2Tech shall erase your Personal Data:</P>
          <UL>
            <LI>(a) upon withdrawal of your consent; or</LI>
            <LI>(b) as soon as it is reasonable to assume that the Specified Purpose is no longer being served — whichever is earlier — unless retention is necessary for compliance with applicable law.</LI>
          </UL>
          <P>
            The Specified Purpose shall be deemed to no longer be served if you have not approached Cred2Tech for performance of the Specified Purpose and have not exercised any rights in relation to such processing, for such time period as may be prescribed under the rules made under the DPDP Act.
          </P>
          <P>
            In the context of application data, this means that where you have not specifically consented to ongoing storage of application-related information (for example, by saving your application or agreeing to have it shared with a lending partner), such information will not be retained beyond the limited period necessary to complete the immediate, session-based functionality requested by you.
          </P>
          <P>
            Where retention is required under applicable legal or regulatory obligations — such as KYC/AML requirements, RBI-mandated retention of financial records, or other statutory obligations — your Personal Data will be retained only for the mandated duration.
          </P>
          <P>
            Upon expiry of the retention period, Personal Data will be securely deleted or anonymised in accordance with applicable legal and security standards. Cred2Tech shall also cause its Data Processors to erase any Personal Data made available to them for processing.
          </P>
        </LegalSection>

        {/* IX. COOKIES */}
        <LegalSection id="cookies" index="IX." title="Cookies and Tracking Technologies">
          <P>
            We may use cookies and similar tracking technologies to enable core functionality of the Platform, enhance user experience, analyse usage patterns, and improve Platform performance.
          </P>
          <P>
            In accordance with the DPDP Act, we provide clear notice regarding the use of cookies and obtain your consent where required. Cookies are categorised as follows:
          </P>
          <UL>
            <LI><strong className="text-[var(--on-surface)]">(a) Essential Cookies:</strong> Necessary for the functioning of the Platform (e.g., session management, OTP verification). These cannot be disabled.</LI>
            <LI><strong className="text-[var(--on-surface)]">(b) Analytics Cookies:</strong> Used to analyse usage patterns and improve performance. These are used only with your consent.</LI>
            <LI><strong className="text-[var(--on-surface)]">(c) Marketing Cookies:</strong> Used to deliver personalised content. These are used only with your explicit consent.</LI>
          </UL>
          <P>You may manage or disable non-essential cookies — if in use — at any time through your browser settings. Disabling certain cookies may affect the functionality of the Platform.</P>
        </LegalSection>

        {/* X. DATA SECURITY */}
        <LegalSection id="data-security" index="X." title="Data Security and Personal Data Breach Notification">
          <P>
            Cred2Tech implements appropriate technical and organisational security measures in accordance with Section 8(4) and Section 8(5) of the DPDP Act to protect your Personal Data against unauthorised access, alteration, disclosure, or destruction. These measures include:
          </P>
          <UL>
            <LI>(a) 256-bit encryption and SSL/TLS protocols for data in transit</LI>
            <LI>(b) Role-based access controls and multi-factor authentication mechanisms</LI>
            <LI>(c) Audit logs and monitoring of access activities</LI>
            <LI>(d) Regular vulnerability assessments, penetration testing, and security reviews</LI>
            <LI>(e) Industry-standard secure cloud infrastructure and storage practices</LI>
          </UL>

          <LegalSub>Personal Data Breach Notification</LegalSub>
          <P>
            In the event of a Personal Data Breach, Cred2Tech shall, in accordance with Section 8(6) of the DPDP Act, give the Data Protection Board of India and each affected Data Principal intimation of such breach in the form and manner as may be prescribed. Without prejudice to the generality of the foregoing, and in accordance with the DPDP Rules, 2025, Cred2Tech shall: (i) intimate the Data Protection Board of India within seventy-two (72) hours of becoming aware of the Personal Data Breach (or such extended period as the Board may allow); and (ii) without delay, inform each affected Data Principal of the breach, describing its nature, likely consequences, the measures taken to mitigate the risk, and the safety measures such Data Principal may adopt.
          </P>
          <P>While we take commercially reasonable measures to safeguard your Personal Data, no system or network is completely secure, and we cannot guarantee absolute security.</P>
        </LegalSection>

        {/* XI. CHILDREN'S PRIVACY */}
        <LegalSection id="childrens-privacy" index="XI." title="Children's Privacy">
          <P>
            The Platform is not intended for individuals under the age of 18 years, consistent with the definition of &quot;child&quot; under Section 2(f) of the DPDP Act. We do not knowingly collect Personal Data from children without verifiable parental or guardian consent, as required under Section 9(1) of the DPDP Act. We rely on self-declaration of age at the point of registration as a reasonable measure to ascertain that you are not a child, in accordance with the DPDP Rules, 2025.
          </P>
          <P>
            We do not undertake tracking or behavioural monitoring of children or targeted advertising directed at children, in accordance with Section 9(3) of the DPDP Act. If we become aware that Personal Data of a child has been collected without verifiable parental consent, we will take immediate steps to delete such data. The penalty for breach of obligations relating to children shall be as applicable under, and to the extent prescribed by, the DPDP Act and the rules made thereunder, as amended from time to time.
          </P>
        </LegalSection>

        {/* XII. CROSS-BORDER TRANSFER */}
        <LegalSection id="cross-border-transfer" index="XII." title="Cross-Border Transfer of Personal Data">
          <P>
            In accordance with Section 16 of the DPDP Act, Cred2Tech shall not transfer Personal Data to any country or territory outside India that may be restricted by notification of the Central Government under Section 16(1). Any cross-border transfer of Personal Data shall be conducted only in compliance with applicable Indian law and any additional restrictions that may be imposed by the Central Government.
          </P>
        </LegalSection>

        {/* XIII. GRIEVANCE REDRESSAL */}
        <LegalSection id="grievance-redressal" index="XIII." title="Grievance Redressal">
          <P>
            In accordance with Section 8(10) of the DPDP Act and Section 13 of the DPDP Act, Cred2Tech has established an effective mechanism to redress the grievances of Data Principals.
          </P>
          <P>If you have any questions, concerns, or complaints regarding this Policy or the processing of your Personal Data, you may contact our Grievance Officer:</P>
          <ContactCard
            rows={[
              { label: 'Officer', value: 'Bobby Thomas M, Grievance Officer' },
              { label: 'Email', value: <a href="mailto:bobby@cred2tech.com" className="font-semibold hover:underline">bobby@cred2tech.com</a> },
              { label: 'Phone', value: <a href="tel:+919886401608" className="font-semibold hover:underline">9886401608</a> },
              { label: 'Address', value: 'A1103, Amoda Valmark, Gottigere, Bangalore – 560083' },
              { label: 'Working Hours', value: '10 AM to 5 PM, Monday to Friday (all holidays excluded)' },
            ]}
          />
          <P>
            We will acknowledge and address your grievance within the timeline prescribed under applicable rules made under the DPDP Act. You must exhaust this grievance mechanism before approaching the Data Protection Board of India under Section 13(3) of the DPDP Act.
          </P>
          <P>
            You may also approach the Data Protection Board of India (to be notified under Section 18 of the DPDP Act) for complaints in the event of a breach in observance by Cred2Tech of its obligations under the DPDP Act.
          </P>
        </LegalSection>

        {/* XIV. GOVERNING LAW */}
        <LegalSection id="governing-law" index="XIV." title="Governing Law and Jurisdiction">
          <P>
            This Policy shall be governed by and construed in accordance with the laws of India, including the DPDP Act. Subject to applicable law, and without prejudice to the jurisdiction of the Data Protection Board of India, the courts at Bengaluru shall have exclusive jurisdiction over any civil disputes arising out of or relating to this Policy.
          </P>
          <P>
            Notwithstanding the above, the Data Protection Board of India, constituted under Section 18 of the DPDP Act, shall have jurisdiction over matters falling under the DPDP Act, and no civil court shall entertain any suit or proceeding in respect of any matter for which the Board is empowered, in accordance with Section 39 of the DPDP Act.
          </P>
        </LegalSection>

        {/* XV. CHANGES */}
        <LegalSection id="changes-to-policy" index="XV." title="Changes to This Policy">
          <P>
            We may update this Policy from time to time to reflect changes in legal, regulatory, technical, or business requirements. Where required under applicable law, we will provide notice of material changes through the Platform or through a notice served to you in accordance with Section 5 of the DPDP Act. Continued use of the Platform after such updates become effective constitutes your acknowledgement of the revised Policy.
          </P>
        </LegalSection>

        {/* XVI. CONSENT DECLARATION */}
        <LegalSection id="consent-declaration" index="XVI." title="Consent Declaration">
          <P>By providing your Personal Data and using the Platform, you acknowledge and declare that:</P>
          <UL>
            <LI>(a) You have read and understood this Privacy Policy and the notices served under Section 5 of the DPDP Act;</LI>
            <LI>(b) You have been informed of the Specified Purposes for which your Personal Data will be collected and processed;</LI>
            <LI>(c) You provide your free, specific, informed, unconditional, and unambiguous consent to such processing, through clear affirmative action, in accordance with Section 6(1) of the Digital Personal Data Protection Act, 2023;</LI>
            <LI>(d) You understand that you may withdraw such consent at any time, subject to legal or contractual limitations, and that withdrawal does not affect the legality of prior processing; and</LI>
            <LI>(e) You acknowledge your duties as a Data Principal under Section 15 of the DPDP Act.</LI>
          </UL>
        </LegalSection>

        {/* XVII. OTHER SECTORAL LAWS */}
        <LegalSection id="other-sectoral-laws" index="XVII." title="Applicability of Other Sectoral Laws">
          <P>
            In addition to the DPDP Act, the processing of your Personal Data on the Platform is also subject to the following sector-specific laws and regulations, to the extent applicable:
          </P>
          <UL>
            <LI><strong className="text-[var(--on-surface)]">(a) KYC and Anti-Money Laundering Records:</strong> Notwithstanding Clause VIII, financial, KYC, and transaction records may be retained for the minimum period mandated under the Reserve Bank of India Master Direction on KYC and the Prevention of Money-Laundering (Maintenance of Records) Rules, 2005 (currently five (5) years from the date of cessation of the business relationship or the transaction, as applicable), or such other period as may be prescribed under applicable law from time to time.</LI>
            <LI><strong className="text-[var(--on-surface)]">(b) Credit Information Companies:</strong> Your financial and credit-related Personal Data may be shared with Credit Information Companies registered under the Credit Information Companies (Regulation) Act, 2005, solely with your specific consent obtained at the time of your credit or loan application, for the purposes of credit assessment and credit reporting.</LI>
            <LI><strong className="text-[var(--on-surface)]">(c) Significant Data Fiduciary:</strong> If Cred2Tech is notified as a &quot;Significant Data Fiduciary&quot; under Section 10 of the DPDP Act, Cred2Tech shall comply with the additional obligations prescribed thereunder, including appointment of a Data Protection Officer based in India, undertaking periodic Data Protection Impact Assessments, and independent data audits.</LI>
          </UL>
        </LegalSection>
      </LegalLayout>

      <LegalFooterCta otherLabel="Read our Terms of Use" otherHref="/terms-of-use" />

      <style>{`
.material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;}
      `}</style>
    </div>
  );
}
