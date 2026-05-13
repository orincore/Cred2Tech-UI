import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from "next";
import { ArticleJsonLd, BreadcrumbJsonLd } from "../../components/JsonLd";

type Section = { heading?: string; sub?: string; paragraphs: string[] };
type Post = { 
  title: string; 
  tag: string; 
  readTime: string; 
  intro: string; 
  sections: Section[]; 
  conclusion: string[];
  keywords?: string[];
  publishedDate?: string;
  modifiedDate?: string;
};

const POSTS: Record<string, Post> = {
  'bridging-the-gap-digital-renaissance-of-indian-msmes': {
    title: 'Bridging the Gap: The Digital Renaissance of Indian MSMEs',
    tag: 'MSME · Credit',
    readTime: '7 min read',
    intro:
      "Micro, Small, and Medium Enterprises (MSMEs) form the backbone of the Indian economy, contributing ~30% to GDP and over 45% to exports. Yet, they continue to face a persistent structural challenge: a massive credit gap, widely estimated in the range of ₹20–25 lakh crore by institutions like the International Finance Corporation and industry bodies. While newer estimates sometimes peg this higher, ₹30 lakh crore should be treated as an upper-bound directional figure rather than a confirmed consensus number.",
    sections: [
      {
        heading: 'The “Missing Middle” Problem',
        paragraphs: [
          'At the core of this gap lies the “missing middle” — millions of MSMEs that are too large for informal lending but too small or opaque for traditional bank financing. Conventional underwriting models rely heavily on collateral and formal credit histories, excluding a vast segment of viable but “thin-file” borrowers.',
        ],
      },
      {
        heading: 'The Digital Lending Revolution',
        paragraphs: [
          'Digital lending is reshaping this landscape by shifting from asset-based to cash-flow-based underwriting.',
        ],
      },
      {
        sub: 'Data-Driven Underwriting',
        paragraphs: [
          'Lenders are increasingly leveraging India’s digital infrastructure — GST filings, bank statements, and UPI transaction data — to assess borrower credibility. This “digital trail” enables financing for businesses that may lack collateral but demonstrate strong and consistent cash flows.',
        ],
      },
      {
        sub: 'Speed and Efficiency',
        paragraphs: [
          'Loan processing timelines have compressed dramatically. What once took weeks can now be completed in hours — or even minutes — through fully digital, paperless journeys. For MSMEs managing tight working capital cycles, this speed is not just convenient; it’s critical.',
        ],
      },
      {
        sub: 'The Role of ULI',
        paragraphs: [
          'The Reserve Bank of India has been piloting the Unified Lending Interface (ULI) — a framework inspired by UPI — to enable seamless, consent-based data flow between borrowers, lenders, and data providers. While still evolving, ULI aims to standardize and scale digital credit delivery.',
        ],
      },
      {
        heading: 'The Way Forward',
        paragraphs: [
          'Bridging the remaining gap will require a coordinated push across policy, infrastructure, and capital.',
        ],
      },
      {
        sub: 'Strengthening TReDS',
        paragraphs: [
          'Platforms under the Trade Receivables Discounting System allow MSMEs to convert invoices into immediate liquidity. The government has already mandated large corporates and CPSEs above certain thresholds to onboard TReDS, but enforcement and adoption still need to deepen to unlock full impact.',
        ],
      },
      {
        sub: 'Expanding Equity Support',
        paragraphs: [
          'The government’s ₹10,000 crore Fund of Funds for MSMEs (often referred to as a growth equity initiative) reflects a strategic shift. Debt alone cannot fuel MSME growth — equity capital is essential for scaling high-potential enterprises and reducing over-leverage.',
        ],
      },
      {
        sub: 'Digital Public Infrastructure (DPI)',
        paragraphs: [
          'India’s DPI stack continues to be a global benchmark. Frameworks like the Account Aggregator framework and the Open Credit Enablement Network are enabling secure, consent-driven data sharing and embedded finance. Together, they hold the potential to make small-ticket business loans as frictionless as a UPI payment.',
        ],
      },
    ],
    conclusion: [
      'As India advances toward its $5 trillion economy ambition, solving the MSME credit gap is no longer optional — it is foundational. The convergence of digital infrastructure, progressive regulation, and innovative lending models is creating a once-in-a-generation opportunity.',
      'The real unlock, however, lies in execution: scaling adoption, improving data reliability, and aligning incentives across the ecosystem. If done right, India won’t just bridge the MSME credit gap — it could redefine how emerging markets approach small business financing.',
    ],
    keywords: ["MSME credit gap", "digital lending India", "GST loan", "UPI transactions", "Account Aggregator", "ULI", "TReDS", "business loan India"],
    publishedDate: "2024-01-15",
    modifiedDate: "2024-01-15",
  },
  'empowering-the-engine-of-india-vital-role-of-dsas': {
    title: 'Empowering the Engine of India: The Vital Role of DSAs in MSME Credit',
    tag: 'DSA · Distribution',
    readTime: '6 min read',
    intro:
      'In the vast landscape of the Indian economy, Micro, Small, and Medium Enterprises (MSMEs) form a critical backbone — contributing ~30% to GDP and over 40% of exports, while employing more than 110 million people. Yet, despite their economic importance, MSMEs face a persistent structural challenge: a credit gap estimated at ₹25–30 lakh crore in recent years. At the center of bridging this gap is a relatively underappreciated player — the Direct Selling Agent (DSA) — acting as a key enabler between underserved entrepreneurs and formal financial institutions.',
    sections: [
      {
        heading: 'The Bridge to Financial Inclusion',
        paragraphs: [
          'A DSA is not merely a middleman; they function as a last-mile distribution and advisory layer for lenders.',
          'For MSME owners — especially in semi-urban and non-metro regions — the formal lending process can be opaque, documentation-heavy, and time-consuming. DSAs simplify this journey by offering assisted access to credit, often through doorstep engagement.',
          'Their strength lies in local context and language familiarity, which improves trust and communication; on-ground presence, bridging the gap where branch networks or digital adoption are limited; and handholding through processes, especially for first-time borrowers with thin or no formal credit history. This role is particularly critical in a market where a large portion of MSMEs remain informal or under-documented.',
        ],
      },
      {
        heading: 'Beyond Lead Generation: The Real Value Add',
        paragraphs: [
          'While traditionally viewed as lead generators, high-quality DSAs today operate closer to credit facilitators and originators. Their value extends across the lending lifecycle.',
        ],
      },
      {
        sub: 'Right Lender–Borrower Fit',
        paragraphs: [
          'DSAs assess borrower profiles and align them with suitable lenders — public/private banks, NBFCs, or fintechs — based on risk appetite, collateral availability, and cash flow patterns. This reduces mismatches and improves approval probability.',
        ],
      },
      {
        sub: 'Documentation & Process Management',
        paragraphs: [
          'From KYC to financial collation, DSAs streamline documentation, helping reduce turnaround time (TAT) and error rates — key drivers of loan rejection in MSME lending.',
        ],
      },
      {
        sub: 'Pre-screening & Quality Control',
        paragraphs: [
          'Experienced DSAs filter out weak or ineligible cases early, improving conversion ratios for lenders and saving processing bandwidth.',
        ],
      },
      {
        sub: 'Basic Credit Education',
        paragraphs: [
          'By explaining pricing, tenure, and obligations in simple terms, they contribute to credit awareness, though their depth here varies widely by capability.',
        ],
      },
      {
        heading: 'A Win–Win for the Ecosystem',
        paragraphs: [
          'For lenders — both banks and NBFCs — DSAs serve as a scalable, variable-cost distribution channel. Instead of expanding physical branches, institutions leverage DSAs to penetrate geographies with limited direct presence, acquire customers at lower fixed cost (though commissions can be significant), and improve loan file quality through assisted sourcing.',
          "However, it's worth noting that the model also requires strong governance and compliance oversight, as misaligned incentives can impact sourcing quality.",
        ],
      },
    ],
    conclusion: [
      'As India advances toward its ambition of becoming a $5 trillion economy, solving the MSME credit gap will be pivotal. DSAs — especially when augmented with digital tools, data-driven underwriting, and lender marketplaces — can play a transformative role.',
      'By converting "unserved demand" into "bankable opportunities", DSAs are not just enabling credit — they are unlocking economic potential at the grassroots.',
    ],
    keywords: ["DSA India", "Direct Selling Agent", "MSME credit", "loan distribution", "credit facilitator", "lender matching", "NBFC lending", "business loan agent"],
    publishedDate: "2024-02-01",
    modifiedDate: "2024-02-01",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  
  if (!post) {
    return {
      title: "Article Not Found | Cred2Tech",
      description: "The requested article could not be found.",
    };
  }
  
  const siteUrl = "https://www.cred2tech.com";
  
  return {
    title: `${post.title} | Sunby Credtech Blog`,
    description: post.intro.slice(0, 160),
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.intro.slice(0, 160),
      type: "article",
      publishedTime: post.publishedDate,
      modifiedTime: post.modifiedDate,
      authors: ["Sunby Credtech Private Limited"],
      tags: post.tag.split(" · "),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.intro.slice(0, 160),
    },
    alternates: {
      canonical: `${siteUrl}/blogs/${slug}/`,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cred2tech.com";
  const postUrl = `${siteUrl}/blogs/${slug}`;

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.intro}
        url={postUrl}
        image={`${siteUrl}/og-image.png`}
        datePublished={post.publishedDate || new Date().toISOString()}
        dateModified={post.modifiedDate || post.publishedDate || new Date().toISOString()}
        authorName="Cred2Tech - Sunby Credtech"
        keywords={post.keywords}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteUrl },
          { name: "Blog", url: `${siteUrl}/blogs` },
          { name: post.title, url: postUrl },
        ]}
      />
    <main className="bg-[#fcf9f8] text-[#1b1c1c] font-(family-name:--font-inter)">
      {/* Hero */}
      <section
        id="hero-section"
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0a1628 0%,#0d2d6b 35%,#1565d8 70%,#0a1628 100%)' }}
      >
        <div className="hidden lg:block px-orb w-[400px] h-[400px] bg-[#0d3a8e] absolute top-[-100px] left-[-150px] z-0" />
        <div className="hidden lg:block px-orb w-[300px] h-[300px] bg-[var(--on-surface)] absolute bottom-[-80px] right-[5%] z-0" />
        <div className="px-grid z-0" />

        <div className="w-full max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <Link href="/blogs" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium mb-6">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            All articles
          </Link>
          <span className="inline-block font-(family-name:--font-jb-mono) text-xs font-bold tracking-[0.18em] uppercase text-[var(--on-surface)] mb-4 px-3 py-1 border border-[var(--on-surface)]/30 bg-[var(--on-surface)]/10">
            {post.tag} · {post.readTime}
          </span>
          <h1 className="font-(family-name:--font-outfit) font-extrabold text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] leading-[1.1] tracking-tight text-white">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Body */}
      <article className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="w-full max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-[#2e3340] mb-10">{post.intro}</p>

          {post.sections.map((section, i) => (
            <div key={i} className="mb-8">
              {section.heading && (
                <h2 className="font-(family-name:--font-outfit) text-2xl sm:text-3xl font-bold text-[var(--on-surface)] mb-4 mt-4">
                  {section.heading}
                </h2>
              )}
              {section.sub && (
                <h3 className="font-(family-name:--font-outfit) text-lg sm:text-xl font-semibold text-[var(--surface-low)] mb-3">
                  {section.sub}
                </h3>
              )}
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-base leading-relaxed text-[#424751] mb-4">
                  {p}
                </p>
              ))}
            </div>
          ))}

          <div className="mt-10 pt-8 border-t border-[#e8e4e1]">
            <h2 className="font-(family-name:--font-outfit) text-2xl sm:text-3xl font-bold text-[var(--on-surface)] mb-4">Conclusion</h2>
            {post.conclusion.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-[#424751] mb-4">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <Link href="/blogs" className="inline-flex items-center justify-center gap-1.5 border-2 border-[var(--on-surface)]/25 text-[var(--on-surface)] px-5 py-2.5 sm:px-6 sm:py-3 font-bold text-sm hover:bg-[var(--on-surface)]/5 hover:border-[var(--on-surface)]/50 transition-all">
              Back to all articles
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-1.5 bg-[var(--on-surface)] text-white px-5 py-2.5 sm:px-6 sm:py-3 font-bold text-sm hover:bg-[var(--surface-low)] transition-all">
              Talk to the team
            </Link>
          </div>
        </div>
      </article>
    </main>
    </>
  );
}
