import React from 'react';
import { LegalHero, LegalLayout, LegalFooterCta, TocItem } from '../components/legal/LegalLayout';
import { LegalSection, LegalSub, P, UL, LI, OL, OLI, Callout, DefinitionList, ContactCard } from '../components/legal/LegalContent';

export { metadata } from './metadata';

const TOC: TocItem[] = [
  { id: 'about-us', label: '1. About Us' },
  { id: 'definitions', label: '2. Definitions' },
  { id: 'eligibility', label: '3. Eligibility & Declarations' },
  { id: 'services-and-flows', label: '4. Services & User Flows' },
  { id: 'nature-of-services', label: '5. Nature of Services & Disclaimer' },
  { id: 'esr-disclaimer', label: '6. ESR & Eligibility Disclaimer' },
  { id: 'obligations', label: '7. Obligations & Responsibilities' },
  { id: 'user-responsibilities', label: '8. Responsibilities of Users' },
  { id: 'wallet-subscription', label: '9. Wallet & Subscription Rules' },
  { id: 'account-security', label: '10. Account Registration & Security' },
  { id: 'licence', label: '11. Licence to Use the Platform' },
  { id: 'prohibited-use', label: '12. Prohibited Use' },
  { id: 'security-privacy', label: '13. Security & Privacy' },
  { id: 'user-content', label: '14. Information & Materials You Provide' },
  { id: 'waiver-liability', label: '15. Waiver & Limitation of Liability' },
  { id: 'ip', label: '16. Intellectual Property' },
  { id: 'governing-law', label: '17. Governing Law & Jurisdiction' },
  { id: 'miscellaneous', label: '18. Miscellaneous' },
  { id: 'indemnification', label: '19. Indemnification' },
  { id: 'warranty-disclaimer', label: '20. Warranty Disclaimer' },
  { id: 'liability-cap', label: '21. Liability Cap' },
  { id: 'termination', label: '22. Termination & Survival' },
  { id: 'force-majeure', label: '23. Force Majeure' },
  { id: 'assignment', label: '24. Assignment' },
  { id: 'notices', label: '25. Notices' },
];

export default function TermsOfUsePage() {
  return (
    <div className="bg-[var(--bg)] text-[var(--on-surface)] font-(family-name:--font-inter) overflow-x-clip transition-colors duration-500">
      <LegalHero
        badge="Sunby Credtech Platform · Terms of Use"
        title="The agreement that governs every session on Cred2Tech."
        lastUpdated="14/09/2026"
        intro="These Terms of Use constitute a legally binding agreement between you and Sunby Credtech Private Limited, governing your access to and use of the Cred2Tech Platform and all Services made available through it."
      />

      <LegalLayout toc={TOC}>
        <LegalSection id="intro-note" title="">
          <P>
            Certain features or programmes may be governed by platform-specific or service-specific terms, policies, or notices (the &quot;Specific Terms&quot;). The Specific Terms apply in addition to these Terms and, to the extent of any inconsistency, the Specific Terms shall prevail for the relevant feature or transaction.
          </P>
          <P>
            By accessing or using the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and any applicable Specific Terms. If you do not agree, you must refrain from using the Platform. Cred2Tech reserves the right, at its sole discretion, to change, modify, add, or remove portions of these Terms at any time. Your continued use of the Platform following the posting of changes shall constitute your acceptance of and agreement to such changes.
          </P>
        </LegalSection>

        {/* 1. ABOUT US */}
        <LegalSection id="about-us" index="1." title="About Us">
          <P>
            The Platform is operated by <strong className="text-[var(--on-surface)]">Sunby Credtech Private Limited</strong> (the &quot;Company&quot;), a company incorporated under the Companies Act, 2013 with its registered office at Bangalore. Any reference to &quot;you,&quot; &quot;your,&quot; or &quot;User&quot; refers to you as a user of the Platform and the Services; and any reference to &quot;we,&quot; &quot;our,&quot; and &quot;us&quot; shall refer to the Company as the provider of the Services.
          </P>
        </LegalSection>

        {/* 2. DEFINITIONS */}
        <LegalSection id="definitions" index="2." title="Definitions">
          <P>In these Terms:</P>
          <DefinitionList
            items={[
              { term: '"Applicable Law"', def: 'includes any statute, rule, regulation, order, judgment, decree, or other requirement having the force of law, as applicable to your use of the Platform.' },
              { term: '"Agent" or "Sourcing Partner"', def: 'means any individual or entity registered on the Platform as an agent, field executive, or direct selling agent authorized by Cred2Tech to onboard Users, verify their details, and facilitate the submission of their credit or scheme applications to financial institutions or government bodies through the Platform.' },
              { term: '"Agent Portal"', def: 'means the dedicated interface and set of tools within the Platform made available exclusively to Agents for performing their authorized functions, including User onboarding, document verification, credit bureau soft pull, and form submission.' },
              { term: '"Administrator"', def: 'means an authorised employee or representative of Sunby Credtech Private Limited who has been granted administrative access rights to the Admin Portal for the purpose of platform management, oversight, and operations.' },
              { term: '"ESR (Eligibility Summary Report) / Analysis Report"', def: 'means an Eligibility Summary Report (ESR) or financial analysis report generated by Cred2Tech based on financial statements and documents provided by the User or Agent. For the purposes of these Terms, "ESR" and "Analysis Report" shall have the same meaning and may be used interchangeably.' },
              { term: '"Specialist"', def: 'means an individual or organization specializing in assisting the users to avail schemes from nodal agencies by helping the users prepare the documentation and liaisoning between the nodal agency and the user.' },
              { term: '"Credit Bureau Soft Pull"', def: 'means a credit inquiry initiated by the Agent on behalf of the User as per the Credit Information Companies (Regulation) Act, 2005.' },
              { term: '"Government Scheme"', def: 'means any central or state government scheme, subsidy, grant, loan, credit guarantee, or related programme in respect of which the Platform provides eligibility matching, information, and application facilitation services.' },
              { term: '"Materials"', def: 'means all information, text, logos, graphics, images, sounds, software, documents, products, and other content made available on the Platform.' },
              { term: '"Platform"', def: 'means the Cred2Tech website(s) and mobile application(s), including the User interface, Agent Portal, and Admin Portal, as updated from time to time.' },
              { term: '"Indicative Credit Limit"', def: "means an indicative, non-binding credit or scheme eligibility offer generated by the Platform based on information provided by the User or on the User's behalf by the Agent, subject to final verification and approval by the relevant financial institution or government authority." },
              { term: '"Services"', def: 'means the services provided by Cred2Tech via the Platform, including User and Agent onboarding, scheme eligibility matching, ESR reports, analysis reports, loan eligibility checks, credit bureau soft pulls, government scheme application facilitation, and any other services offered by Cred2Tech from time to time.' },
              { term: '"User"', def: 'means any individual or business entity accessing or using the Platform for the purpose of availing Services, including discovering government schemes, checking credit eligibility, or applying for loans or credit facilities.' },
              { term: '"User Content"', def: 'means any content, data, documents, or information submitted, uploaded, or otherwise made available by Users or Agents on the Platform.' },
            ]}
          />
        </LegalSection>

        {/* 3. ELIGIBILITY */}
        <LegalSection id="eligibility" index="3." title="Eligibility and User Declarations">
          <P>By accessing or using the Platform, you represent and warrant that:</P>
          <OL>
            <OLI>You are of sound mind and are able to understand the terms and consequences of these Terms;</OLI>
            <OLI>You are at least 18 years of age;</OLI>
            <OLI>You are not disqualified by any Applicable Law from entering into contracts;</OLI>
            <OLI>If you are acting on behalf of an organization or entity, you have full authority to bind such organization or entity to these Terms, and that such entry into the Terms is within the powers of the organization or entity.</OLI>
          </OL>
          <P>
            You further agree that all information you provide is true, accurate, current, and complete, and you agree not to use the Platform for any unlawful or unauthorized purpose and to comply with all Applicable Law. You acknowledge that, for the purpose of providing Services, we may undertake identity verification processes through digital means in accordance with our Privacy Policy, and you consent to such verification and related data processing.
          </P>
        </LegalSection>

        {/* 4. DESCRIPTION OF SERVICES */}
        <LegalSection id="services-and-flows" index="4." title="Description of Services and User Flows">
          <LegalSub>4.1 General Services</LegalSub>
          <P>Sunby Credtech Private Limited provides a technology-driven, AI-powered platform that enables Users and Agents to access and utilize the following services:</P>
          <UL>
            <LI>User onboarding through verification of PAN, mobile number, email address, GSTIN, and other information as may be required;</LI>
            <LI>AI-powered, personalized eligibility matching across a growing catalogue of central and state government schemes for MSMEs and businesses;</LI>
            <LI>Instant, indicative assessment of loan eligibility based on information provided by the User and publicly available data sources;</LI>
            <LI>Collection, upload, processing, and analysis of financial and related information submitted by Users;</LI>
            <LI>Generation of financial analysis reports, government scheme eligibility reports (including downloadable and email-shareable reports), and ESRs (Eligibility Summary Reports) and eligibility assessments;</LI>
            <LI>Facilitation of credit bureau soft pulls, subject to User consent;</LI>
            <LI>Wallet, subscription, payment, and account management features for accessing Platform services;</LI>
            <LI>Access to an Agent Portal for registered Sourcing Partners/Agents to onboard Users, verify details, and submit applications to financial institutions; and</LI>
            <LI>Expert support and guided application assistance throughout the government scheme or credit application process.</LI>
          </UL>

          <LegalSub>4.2 User Onboarding and User Flow</LegalSub>
          <P>The following describes the standard User onboarding process on the Platform:</P>
          <OL>
            <OLI><strong className="text-[var(--on-surface)]">Account Creation and Mobile Verification:</strong> A User initiates registration by entering their mobile number on the Platform. A one-time password (OTP) is sent to the registered mobile number for verification. Upon successful OTP verification, the User is permitted to proceed.</OLI>
            <OLI><strong className="text-[var(--on-surface)]">PAN Verification and Business Detail Auto-Fill:</strong> The User is required to submit their Permanent Account Number (PAN). The Platform auto-fills associated business details such as the User&apos;s legal name, constitution type, state, and GSTIN from authorised data sources. The User is required to provide or verify their email address.</OLI>
            <OLI>
              <strong className="text-[var(--on-surface)]">Business Profile Completion:</strong> The User is required to complete their business profile by providing the following information, which is used to match the User with eligible government schemes and credit products:
              <UL>
                <LI>Annual turnover range;</LI>
                <LI>Total number of employees;</LI>
                <LI>Business stage (including whether the business is a registered startup);</LI>
                <LI>Udyam (MSME) registration status;</LI>
                <LI>Primary benefit focus;</LI>
                <LI>Proprietor/Director gender, age, and social category;</LI>
                <LI>Disability status;</LI>
                <LI>BPL (Below Poverty Line) card status;</LI>
                <LI>Minority community status;</LI>
                <LI>Employment details, property details, income details;</LI>
                <LI>Co-borrower&apos;s details (where applicable); and</LI>
                <LI>Bank statements, income tax reports, and GST details.</LI>
              </UL>
            </OLI>
            <OLI><strong className="text-[var(--on-surface)]">AI-Powered Scheme and Eligibility Matching:</strong> Upon completion of the business profile, the Platform&apos;s AI engine analyses the User&apos;s full business profile against a growing catalogue of government schemes and generates a personalized eligibility report. The User is presented with a list of eligible schemes, categorized by type (e.g., Loans &amp; Credit, Seed Funding &amp; Grants, Subsidies, Incubation &amp; Training, Other Benefits).</OLI>
            <OLI><strong className="text-[var(--on-surface)]">Scheme Report Access and Payment:</strong> Access to the full scheme eligibility report, including eligibility reasons, required documents, and step-by-step application guidance, may require a one-time nonrefundable payment by the User. Payment is processed through an authorised third-party payment gateway (currently Razorpay).</OLI>
            <OLI><strong className="text-[var(--on-surface)]">Generation of Indicative Credit Limit:</strong> Based on the financial details, income data, bank statements, GST returns, ITR, and other documentation provided by the User, the Platform generates an Indicative Credit Limit for the User in respect of applicable credit products or government schemes. Such limit is indicative only and is subject to final verification, sanction, and approval by the relevant financial institution or government authority. The users are to make necessary due diligence at their end before proceeding with the application.</OLI>
            <OLI>Few schemes can be availed through the specialists empaneled on the platform. The user can choose to avail the services of the specialist through the platform. The user may use the facility available on the platform for availing the scheme benefit. Availing the services of the specialist is at the discretion of the user and the Cred2Tech platform does not guarantee success. The fees for the services of the specialist will be decided mutually between the user and the specialist, and a separate agreement will be entered between the parties. The users are advised to make all payment via the platform. The platform may not have a specialist available for all schemes/programs though all efforts will be made by the platform to provide the assistance of a specialist to the user.</OLI>
            <OLI><strong className="text-[var(--on-surface)]">Application Tracking:</strong> The User may track the status of their scheme applications and transactions through the Platform&apos;s dashboard. The updating of the status is the responsibility of the specialist.</OLI>
          </OL>

          <LegalSub>4.3 Sourcing Partner Onboarding and Flow</LegalSub>
          <P>The Platform provides a dedicated Agent Portal for registered Sourcing Partners and Agents. The following describes the standard Sourcing Partner workflow:</P>
          <OL>
            <OLI><strong className="text-[var(--on-surface)]">Agent Registration and Onboarding:</strong> Agents are onboarded by Cred2Tech onto the Platform through a separate registration process. Upon successful registration, the Agent is provided access to the Agent Portal. Agents accessing the Platform must select the &quot;Agent Portal&quot; option at login and authenticate using their registered credentials.</OLI>
            <OLI><strong className="text-[var(--on-surface)]">User Onboarding by Agent:</strong> The Agent is authorized to onboard Users onto the Platform on their behalf. This includes collecting and entering the User&apos;s details, including but not limited to: PAN number, mobile number, email address, name, GSTIN, income tax returns, GST details, bank statements, employment details, property details, income details, and co-borrower&apos;s details.</OLI>
            <OLI><strong className="text-[var(--on-surface)]">User Detail Verification:</strong> The Agent is responsible for verifying the accuracy, completeness, and authenticity of all User information and documentation submitted through the Platform. The Agent undertakes to ensure that all documents uploaded and data entered are genuine, current, and obtained with the User&apos;s full knowledge and consent. The user authentication is received by the platform once the user clicks on the link sent to them and enters the OTP received in the open link and approves the access. The Agent is solely responsible for ensuring valid consent is obtained prior to OTP entry and shall maintain a record of such consent in accordance with Sunby Credtech Private Limited&apos;s operational guidelines mentioned in the Sourcing Partner Agreement.</OLI>
            <OLI><strong className="text-[var(--on-surface)]">Credit Bureau Soft Pull and Financial Document Analysis:</strong> The Agent, on behalf of the User and with the User&apos;s explicit consent, undertakes a credit bureau soft pull to obtain the User&apos;s credit profile for initial eligibility assessment purposes. The soft pull does not negatively affect the User&apos;s credit score. In addition to the credit bureau soft pull, the Platform may, with the User&apos;s consent, access and analyse the User&apos;s bank statements, GST returns, and Income Tax Returns (ITR) for the purposes of credit and eligibility assessment, consistent with the Privacy Policy.</OLI>
            <OLI><strong className="text-[var(--on-surface)]">Form Filling and Financial Institution Submission:</strong> The Agent fills up application forms and compiles the required documentation in accordance with the specific onboarding and lending requirements of each financial institution (bank, NBFC, or regulated financial entity) to which the User&apos;s application is being submitted. The Agent ensures that the application package meets the documentation standards of the respective lender.</OLI>
            <OLI><strong className="text-[var(--on-surface)]">Submission to Financial Institutions:</strong> Upon completion of the application form and compilation of documents, the Agent submits the application package to the relevant financial institution(s) through the Platform or through other authorized channels.</OLI>
          </OL>
        </LegalSection>

        {/* 5. NATURE OF SERVICES */}
        <LegalSection id="nature-of-services" index="5." title="Nature of Services and Disclaimer">
          <P>
            Cred2Tech is a technology and artificial intelligence-enabled platform that provides indicative assessments, eligibility evaluations, scheme matching, and recommendations based on User-provided information and publicly available data.
          </P>
          <Callout tone="strong">
            Any loan eligibility results, indicative credit limit offers, scheme eligibility determinations, recommendations, scores, or analyses generated through the Platform are for informational purposes only and do not constitute a loan approval, sanction, commitment, guarantee, or binding offer from any bank, NBFC, lender, financial institution, or government body.
          </Callout>
          <P>
            Cred2Tech does not act as a lender, credit provider, or financial institution and does not make lending or scheme approval decisions. All lending decisions, approvals, sanctions, disbursements, terms, and conditions remain solely within the discretion of the respective lender or financial institution. Similarly, all government scheme approvals remain subject to the decision of the relevant government authority.
          </P>
          <P>
            Users and Agents acknowledge and agree that Cred2Tech, its affiliates, directors, officers, employees, partners, and service providers shall not be liable for any rejection, delay, modification, withdrawal, or non-approval of any loan, credit facility, government scheme, or financial product by any lender, financial institution, or government authority.
          </P>
        </LegalSection>

        {/* 6. ESR DISCLAIMER */}
        <LegalSection id="esr-disclaimer" index="6." title="ESR, Analysis Report, and Loan Eligibility Disclaimer">
          <P>
            ESRs, Analysis Reports, Government Scheme Eligibility Reports, Loan Eligibility Checks, and all related outputs provided through the Platform are generated automatically based on information submitted by the User and/or publicly available data sources. Cred2Tech does not independently verify the accuracy, completeness, or authenticity of such information.
          </P>
          <P>
            All reports, assessments, scores, recommendations, and eligibility results are indicative in nature and are provided solely for informational purposes. They do not constitute financial advice, credit advice, loan approval, sanction, commitment, guarantee, or a binding offer from Cred2Tech or any lender or government authority. Use of the Platform&apos;s reports, analyses, and eligibility assessments is entirely at the User&apos;s own risk.
          </P>
        </LegalSection>

        {/* 7. OBLIGATIONS AND RESPONSIBILITIES */}
        <LegalSection id="obligations" index="7." title="Obligations and Responsibilities">
          <LegalSub>A) Agent&apos;s Obligations and Responsibilities</LegalSub>
          <P>By registering and operating as an Agent on the Platform, each Agent agrees to and shall at all times:</P>
          <OL>
            <OLI>Comply with all Applicable Laws, including those governing direct selling, financial services distribution, KYC norms, and data protection;</OLI>
            <OLI>Obtain explicit, free, informed, and documented consent from each User prior to collecting, submitting, or processing their personal data, financial information, or documents on the Platform;</OLI>
            <OLI>Ensure that all information and documentation submitted on behalf of Users is accurate, complete, authentic, and current;</OLI>
            <OLI>Not submit any fabricated, forged, altered, or misleading documents or information;</OLI>
            <OLI>Ensure that the credit bureau soft pull is undertaken only after obtaining the User&apos;s specific prior written or digital consent;</OLI>
            <OLI>Maintain the confidentiality of User data and not use such data for any purpose other than as authorized under these Terms and the instructions of Cred2Tech;</OLI>
            <OLI>Not engage in any fraudulent, deceptive, or coercive conduct in the course of User onboarding;</OLI>
            <OLI>Comply with the financial institution-specific onboarding requirements and documentation standards at all times;</OLI>
            <OLI>Promptly notify Cred2Tech of any unauthorized access to the Agent Portal or any security incident; and</OLI>
            <OLI>Be solely responsible for their own conduct and representations made to Users in the course of the Sourcing Partner engagement.</OLI>
          </OL>
          <P>Cred2Tech reserves the right to suspend or terminate any Agent&apos;s access to the Platform without notice in the event of any breach of these Terms or applicable law.</P>

          <LegalSub>B) Specialist&apos;s Obligations and Responsibilities</LegalSub>
          <P>By registering and operating as a Specialist on the Platform, each Specialist agrees to and shall at all times:</P>
          <OL>
            <OLI>Comply with all Applicable Laws, including those governing professional and consultancy services, the eligibility and application requirements of the relevant nodal agency or scheme, and data protection;</OLI>
            <OLI>Obtain explicit, free, informed, and documented consent from each User prior to collecting, accessing, or processing their personal data, financial information, or documents in connection with the scheme application;</OLI>
            <OLI>Ensure that all information and documentation prepared, compiled, or submitted on behalf of the User to the relevant nodal agency is accurate, complete, authentic, and current;</OLI>
            <OLI>Not submit, or assist in the submission of, any fabricated, forged, altered, or misleading documents or information to any nodal agency or to Cred2Tech;</OLI>
            <OLI>Maintain the confidentiality of User data and use such data solely for the purpose of assisting the User with the specific scheme application for which the Specialist&apos;s services were engaged, and not for any other purpose;</OLI>
            <OLI>Not engage in any fraudulent, deceptive, or coercive conduct in the course of assisting or liaising with the User or any nodal agency;</OLI>
            <OLI>Comply with the nodal agency-specific documentation standards, timelines, and procedural requirements applicable to each scheme;</OLI>
            <OLI>Promptly notify Cred2Tech of any unauthorized access to the Platform, or any security incident, involving User data handled by the Specialist;</OLI>
            <OLI>Be solely responsible for their own conduct, advice, and representations made to Users, including any representations regarding the likelihood of success, timelines, or outcome of a scheme application;</OLI>
            <OLI>Not represent, and expressly clarify to the User where relevant, that Cred2Tech does not guarantee the approval, sanction, or successful outcome of any scheme application; and</OLI>
            <OLI>Acknowledge that the fees, if any, payable by the User for the Specialist&apos;s services are governed solely by the separate agreement referred to above.</OLI>
          </OL>
          <P>Cred2Tech reserves the right to suspend or terminate any Specialist&apos;s access to the Platform without notice in the event of any breach of these Terms or Applicable Law, or upon receipt of any credible complaint regarding the Specialist&apos;s conduct.</P>
        </LegalSection>

        {/* 8. RESPONSIBILITIES OF USERS */}
        <LegalSection id="user-responsibilities" index="8." title="Responsibilities of Users">
          <P>By accessing or using the Platform, Users agree to:</P>
          <OL>
            <OLI>Provide accurate, complete, current, and lawful information, data, and documents;</OLI>
            <OLI>Promptly update any information that becomes inaccurate or outdated;</OLI>
            <OLI>Use the Platform only for lawful purposes and in compliance with all Applicable Laws and regulations;</OLI>
            <OLI>Maintain the confidentiality and security of their account credentials, including login IDs, passwords, and OTPs;</OLI>
            <OLI>Immediately notify Cred2Tech of any unauthorized access to or use of their account;</OLI>
            <OLI>Cooperate with Cred2Tech in connection with document verification, compliance requirements, investigations, or grievance resolution processes;</OLI>
            <OLI>Use ESRs, Analysis Reports, Government Scheme Eligibility Reports, Loan Eligibility Checks, and other Platform tools responsibly and solely as informational aids; and</OLI>
            <OLI>Grant explicit consent prior to any credit bureau soft pull being undertaken on their behalf, whether directly or through an Agent.</OLI>
          </OL>
          <P>Users shall be solely responsible for the accuracy and authenticity of all information submitted through the Platform and for any decisions taken based on outputs generated by the Platform.</P>
        </LegalSection>

        {/* 9. WALLET */}
        <LegalSection id="wallet-subscription" index="9." title="Wallet and Subscription Rules">
          <P>
            Cred2Tech may offer wallet, credit, subscription, and other prepaid services that enable Users and Sourcing Partners to access ESRs, Analysis Reports, Government Scheme Eligibility Reports, and other services available on the Platform. Wallet credits, in particular, are issued to and consumed by Sourcing Partners for their use of the Agent Portal and related Platform services, as further described in Clause 9.1 below.
          </P>
          <P>
            Subscription plans may include bundled reports, tools, credits, features, or other benefits as specified on the Platform from time to time. The scope, pricing, validity, usage limits, and benefits applicable to wallet credits and subscription plans shall be as displayed on the Platform and may be modified, suspended, or discontinued by Cred2Tech at its sole discretion.
          </P>

          <LegalSub>9.1 Wallet Credits: Validity and Policy</LegalSub>
          <P>Unless otherwise specified on the Platform, wallet credits:</P>
          <OL>
            <OLI>Do not expire;</OLI>
            <OLI>Are non-transferable;</OLI>
            <OLI>Are non-refundable; and</OLI>
            <OLI>Have no cash value and cannot be redeemed for cash.</OLI>
          </OL>
          <P>
            Notwithstanding the foregoing, Cred2Tech may, in its discretion, refund any unused wallet credits to a Sourcing Partner upon receipt of a written request sent to Cred2Tech from the email address registered by such Sourcing Partner at the time of their registration on the Platform.
          </P>
          <P>Cred2Tech reserves the right to modify, suspend, or discontinue any wallet credit policy at its sole discretion. Any such changes shall become effective upon publication on the Platform.</P>
          <P>Payments for scheme report unlocking or subscription services are processed through authorized third-party payment gateways. Cred2Tech is not responsible for any failure, error, or delay caused by the payment gateway provider.</P>
        </LegalSection>

        {/* 10. ACCOUNT REGISTRATION */}
        <LegalSection id="account-security" index="10." title="Account Registration and Security">
          <P>
            You may access certain areas of the Platform without registration; however, most features require the creation of an account or login using your mobile number, in which case you must provide accurate and complete information and keep it updated. You are solely responsible for maintaining the confidentiality and security of your account credentials and for all activity under your account.
          </P>
          <P>
            We may suspend or terminate your account where we reasonably believe there is misuse, a violation of these Terms, or inaccurate information, and we are not liable for losses arising from unauthorised use of your account that results from your failure to safeguard your credentials. You must promptly notify us of any unauthorised access or security breach.
          </P>
          <P>
            The Platform offers separate login portals for Users, Agents, and Administrators. Each portal is accessible only to duly authorized individuals, and any unauthorized access to a portal for which you are not registered constitutes a violation of these Terms.
          </P>
        </LegalSection>

        {/* 11. LICENCE */}
        <LegalSection id="licence" index="11." title="Licence to Use the Platform">
          <P>
            Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, and revocable licence to access and use the Platform and the Services strictly for lawful purposes and in accordance with these Terms.
          </P>
          <P>
            Except as expressly permitted under this licence, you must not copy, reproduce, distribute, transmit, adapt, decompile, reverse engineer, or create derivative works from any part of the Platform or the Materials, nor may you remove or alter any copyright, trade mark, or other proprietary notices.
          </P>
        </LegalSection>

        {/* 12. PROHIBITED USE */}
        <LegalSection id="prohibited-use" index="12." title="Prohibited Use">
          <P>You must not use the Platform or the Services in any manner that:</P>
          <OL>
            <OLI>Violates Applicable Law, court orders, or regulatory requirements;</OLI>
            <OLI>Infringes, misappropriates, or violates any intellectual property, privacy, publicity, or other rights of any person;</OLI>
            <OLI>Is defamatory, obscene, harassing, hateful, or otherwise objectionable;</OLI>
            <OLI>Involves impersonation, misrepresentation of affiliation, or misleading statements as to the source or origin of information;</OLI>
            <OLI>Uploads, posts, or transmits viruses, malware, or other harmful code;</OLI>
            <OLI>Seeks unauthorized access to, or interferes with, any account, system, network, data, or security component;</OLI>
            <OLI>Involves automated access, scraping, crawling, or harvesting of the Platform or Materials;</OLI>
            <OLI>Uses the Platform for benchmarking or to build a competing product or service;</OLI>
            <OLI>Results in the submission of fabricated, forged, or fraudulent User documentation or information through the Agent Portal;</OLI>
            <OLI>Causes harm, liability, or reputational damage or interferes with the rights, safety, or experience of other Users or any third party.</OLI>
          </OL>
          <P>We may investigate and refer suspected illegal activity to the appropriate authorities and cooperate with them, including by disclosing relevant information consistent with Applicable Law.</P>
        </LegalSection>

        {/* 13. SECURITY AND PRIVACY */}
        <LegalSection id="security-privacy" index="13." title="Security and Privacy">
          <P>
            We care about data privacy and security. Please review our{' '}
            <a href="/privacy-policy" className="text-[var(--on-surface)] font-semibold hover:underline">Privacy Policy</a>. By accessing or using the Platform, you acknowledge that you have read and understood, and agree to be bound by, our Privacy Policy, as updated from time to time, which is incorporated by reference into these Terms. The Platform employs 256-bit encryption to protect your data during transmission.
          </P>
        </LegalSection>

        {/* 14. USER CONTENT */}
        <LegalSection id="user-content" index="14." title="Information and Materials You Provide">
          <P>
            When you create an account or otherwise interact with the Platform, you may provide information and data. You are responsible for such information and agree not to use inappropriate language or upload unlawful or infringing content. We may remove or restrict content or usernames that, in our discretion, are inappropriate or violate these Terms.
          </P>
          <P>
            By submitting or making available any User Content on or through the Platform, you grant Cred2Tech a perpetual, irrevocable, worldwide, royalty-free, fully paid, transferable, and sublicensable licence to host, store, use, reproduce, adapt, modify, publish, translate, create derivative works from, distribute, and publicly display such User Content for the purposes of operating, providing, improving the Platform and Services, and to comply with legal and regulatory obligations. For the avoidance of doubt, this licence does not extend to the use of any User Content comprising personal financial data, credit information, identity documents, or other sensitive personal information for promotional, marketing, or commercial purposes unrelated to the provision of the Services.
          </P>
        </LegalSection>

        {/* 15. WAIVER */}
        <LegalSection id="waiver-liability" index="15." title="Waiver and Limitation of Liability">
          <P>By using the Platform, Users and Agents acknowledge and agree that:</P>
          <OL>
            <OLI>Cred2Tech does not guarantee uninterrupted, secure, timely, or error-free operation of the Platform; the Platform and Services are provided on a best-effort basis;</OLI>
            <OLI>ESRs, Analysis Reports, Government Scheme Eligibility Reports, Loan Eligibility Checks, and other outputs are generated automatically based on available information and should not be relied upon as professional, financial, legal, tax, credit, or investment advice;</OLI>
            <OLI>All decisions made on the basis of any report, analysis, recommendation, score, eligibility assessment, or other Platform output are made solely at the User&apos;s or Agent&apos;s discretion and risk; and</OLI>
            <OLI>To the maximum extent permitted by Applicable Law, Cred2Tech shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, including loss of profits, business opportunities, goodwill, data, or anticipated savings arising out of or in connection with the use of the Platform or any output generated through it.</OLI>
          </OL>
        </LegalSection>

        {/* 16. IP */}
        <LegalSection id="ip" index="16." title="Intellectual Property">
          <P>
            All intellectual property rights in and to the Platform, the Materials, the Services, and all related technology, software, content, and outputs are owned by or licensed to Cred2Tech. Nothing in these Terms shall be construed as conferring any intellectual property right upon you except as expressly set forth herein.
          </P>
        </LegalSection>

        {/* 17. GOVERNING LAW */}
        <LegalSection id="governing-law" index="17." title="Governing Law and Jurisdiction">
          <P>
            These Terms shall be governed by and construed in accordance with the laws of India. Subject to Applicable Law, the courts at Bangalore shall have exclusive jurisdiction over any disputes arising out of or relating to these Terms or the use of the Platform.
          </P>
        </LegalSection>

        {/* 18. MISCELLANEOUS */}
        <LegalSection id="miscellaneous" index="18." title="Miscellaneous">
          <P>
            If any provision of these Terms is held to be unenforceable or invalid, that provision shall be modified to the minimum extent necessary to make it enforceable and the remaining provisions shall continue in full force and effect. Cred2Tech&apos;s failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. These Terms, together with our Privacy Policy and any Specific Terms, constitute the entire agreement between you and Cred2Tech with respect to your use of the Platform.
          </P>
        </LegalSection>

        {/* 19. INDEMNIFICATION */}
        <LegalSection id="indemnification" index="19." title="Indemnification">
          <P>
            You agree to indemnify, defend, and hold harmless Sunby Credtech Private Limited, its directors, officers, employees, affiliates, agents, licensors, and service providers from and against any and all claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable legal fees) arising out of or relating to: (a) your violation of these Terms; (b) your use of the Platform or the Services; (c) any User Content submitted by you or on your behalf; (d) your violation of any Applicable Law; (e) any fraud, misrepresentation, or submission of false or fabricated information by you or any Agent acting on your behalf; or (f) any third-party claim arising from your use of the Platform.
          </P>
        </LegalSection>

        {/* 20. WARRANTY DISCLAIMER */}
        <LegalSection id="warranty-disclaimer" index="20." title="Warranty Disclaimer">
          <Callout tone="strong">
            THE PLATFORM AND THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT. SUNBY CREDTECH PRIVATE LIMITED DOES NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT DEFECTS WILL BE CORRECTED. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM CRED2TECH OR THROUGH THE PLATFORM SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THESE TERMS.
          </Callout>
        </LegalSection>

        {/* 21. LIABILITY CAP */}
        <LegalSection id="liability-cap" index="21." title="Liability Cap">
          <P>
            To the maximum extent permitted by Applicable Law, and notwithstanding anything to the contrary in these Terms, the aggregate liability of Sunby Credtech Private Limited, its directors, officers, employees, and affiliates to you for any and all claims arising out of or in connection with these Terms or your use of the Platform shall not exceed the total amounts paid by you to Cred2Tech in the three (3) months immediately preceding the event giving rise to the claim, or INR 10,000 (Indian Rupees Ten Thousand), whichever is lower. This limitation shall apply regardless of the form of action, whether in contract, tort, strict liability, or otherwise, and whether or not Cred2Tech has been advised of the possibility of such damages.
          </P>
        </LegalSection>

        {/* 22. TERMINATION */}
        <LegalSection id="termination" index="22." title="Termination and Survival">
          <P>
            Cred2Tech may, at its sole discretion and without prior notice, suspend or terminate your access to the Platform or your account if: (a) you breach these Terms; (b) Cred2Tech is required to do so by Applicable Law or a regulatory or government authority; (c) your account has been inactive for an extended period; or (d) the continuation of Services is no longer commercially or operationally practicable. You may terminate your account by writing to Cred2Tech at{' '}
            <a href="mailto:contact@cred2tech.com" className="text-[var(--on-surface)] font-semibold hover:underline">contact@cred2tech.com</a>. Upon termination, your right to access and use the Platform ceases immediately.
          </P>
          <P>
            The following provisions shall survive termination of these Terms: Section 5 (Nature of Services and Disclaimer), Section 6 (ESR, Analysis Report, and Loan Eligibility Disclaimer), Section 14 (Information and Materials You Provide), Section 15 (Waiver and Limitation of Liability), Section 16 (Intellectual Property), Section 17 (Governing Law and Jurisdiction), Section 19 (Indemnification), Section 20 (Warranty Disclaimer), Section 21 (Liability Cap), and this Section 22.
          </P>
        </LegalSection>

        {/* 23. FORCE MAJEURE */}
        <LegalSection id="force-majeure" index="23." title="Force Majeure">
          <P>
            Cred2Tech shall not be liable for any delay or failure to perform its obligations under these Terms to the extent that such delay or failure is caused by events beyond its reasonable control, including but not limited to acts of God, natural disasters, epidemics, pandemics, war, civil unrest, strikes, lockouts, failure of internet or telecommunications infrastructure, regulatory action, power failures, or any other event of force majeure. Cred2Tech shall use reasonable efforts to mitigate the effect of any force majeure event and shall notify Users of any material disruption to Services arising therefrom.
          </P>
        </LegalSection>

        {/* 24. ASSIGNMENT */}
        <LegalSection id="assignment" index="24." title="Assignment">
          <P>
            You may not assign, transfer, delegate, or sub-licence any of your rights or obligations under these Terms without the prior written consent of Cred2Tech. Cred2Tech may assign or transfer these Terms, in whole or in part, to any affiliate, successor, or acquirer of all or substantially all of its business or assets relating to the Platform, without your prior consent. Any purported assignment in violation of this clause shall be null and void.
          </P>
        </LegalSection>

        {/* 25. NOTICES */}
        <LegalSection id="notices" index="25." title="Notices">
          <P>Any notices or communications under these Terms shall be in writing and delivered:</P>
          <UL>
            <LI>(a) to Cred2Tech by email to <a href="mailto:contact@cred2tech.com" className="text-[var(--on-surface)] font-semibold hover:underline">contact@cred2tech.com</a> or by post to the registered office of Sunby Credtech Private Limited; and</LI>
            <LI>(b) to you at the email address or mobile number registered on your Platform account.</LI>
          </UL>
          <P>Notices shall be deemed effective upon delivery or, if sent by email, upon confirmation of receipt.</P>
          <ContactCard
            rows={[
              { label: 'Company', value: 'Sunby Credtech Private Limited' },
              { label: 'Email', value: <a href="mailto:contact@cred2tech.com" className="font-semibold hover:underline">contact@cred2tech.com</a> },
              { label: 'Address', value: 'A1103, Amoda Valmark, Gottigere, Bangalore – 560083' },
            ]}
          />
        </LegalSection>
      </LegalLayout>

      <LegalFooterCta otherLabel="Read our Privacy Policy" otherHref="/privacy-policy" />

      <style>{`
.material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;}
      `}</style>
    </div>
  );
}
