"use client";

import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

const posts = [
  {
    slug: 'bridging-the-gap-digital-renaissance-of-indian-msmes',
    title: 'Bridging the Gap: The Digital Renaissance of Indian MSMEs',
    excerpt:
      'MSMEs contribute ~30% to GDP and over 45% to exports, yet face a persistent ₹20–25 lakh crore credit gap. How digital lending, the Account Aggregator framework, and ULI are reshaping the landscape.',
    icon: 'trending_up',
    readTime: '7 min read',
    tag: 'MSME · Credit',
  },
  {
    slug: 'empowering-the-engine-of-india-vital-role-of-dsas',
    title: 'Empowering the Engine of India: The Vital Role of DSAs in MSME Credit',
    excerpt:
      'DSAs are not just lead generators — they function as a last-mile credit facilitation layer. How tech-enabled DSAs are converting unserved demand into bankable opportunities.',
    icon: 'groups',
    readTime: '6 min read',
    tag: 'DSA · Distribution',
  },
];

export default function BlogsPage() {
  return (
    <main className="bg-[#fcf9f8] text-[#1b1c1c] font-(family-name:--font-inter)">
      {/* Hero */}
      <section
        id="hero-section"
        className="relative min-h-[40vh] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0a1628 0%,#0d2d6b 35%,#1565d8 70%,#0a1628 100%)' }}
      >
        <div className="hidden lg:block px-orb w-[400px] h-[400px] bg-[#0d3a8e] absolute top-[-100px] left-[-150px] z-0" id="orb-h1" />
        <div className="hidden lg:block px-orb w-[300px] h-[300px] bg-[var(--on-surface)] absolute bottom-[-80px] right-[5%] z-0" id="orb-h2" />
        <div className="px-grid z-0" id="hero-grid" />

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.18em] uppercase text-[var(--on-surface)] mb-4 px-3 py-1 border border-[var(--on-surface)]/30 bg-[var(--on-surface)]/10">
              Blogs
            </span>
            <h1 className="font-(family-name:--font-outfit) font-extrabold text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.05] tracking-tight text-white mb-6">
              Insights from the Cred2Tech team
            </h1>
            <p className="text-base lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Perspectives on MSME credit, the role of DSAs, and the digital infrastructure powering India&apos;s lending ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group relative overflow-hidden bg-[#fcf9f8] border border-[#e8e4e1] p-6 sm:p-8 hover:border-[var(--on-surface)]/30 hover:shadow-[0_24px_60px_rgba(11,33,71,0.08)] transition-all duration-500"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--on-surface)] via-[var(--surface-low)] to-[var(--on-surface)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-[var(--on-surface)]/5 flex items-center justify-center group-hover:bg-[var(--on-surface)]/10 transition-colors">
                    <span className="material-symbols-outlined text-2xl text-[var(--on-surface)]">{post.icon}</span>
                  </div>
                  <div>
                    <p className="font-(family-name:--font-jb-mono) text-[10px] font-bold tracking-widest uppercase text-[var(--on-surface)]">{post.tag}</p>
                    <p className="text-xs text-[#424751]/70">{post.readTime}</p>
                  </div>
                </div>
                <h2 className="font-(family-name:--font-outfit) text-xl sm:text-2xl font-bold text-[var(--on-surface)] mb-3 group-hover:text-[var(--surface-low)] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm sm:text-base text-[#424751] leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 font-bold text-sm text-[var(--on-surface)] group-hover:gap-2.5 transition-all">
                  Read article
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Script id="blogs-animations" strategy="afterInteractive">{`
(function(){
  function initAnimations(){
    if(!window.gsap||!window.ScrollTrigger)return;
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero orbs
    const orbH1=document.getElementById('orb-h1'),orbH2=document.getElementById('orb-h2'),heroGrid=document.getElementById('hero-grid');
    if(orbH1)gsap.to(orbH1,{opacity:0.55,duration:0.8,ease:'power2.out'});
    if(orbH2)gsap.to(orbH2,{opacity:0.15,duration:0.8,delay:0.15,ease:'power2.out'});
    if(heroGrid)gsap.to(heroGrid,{opacity:1,duration:0.6});
    gsap.to('#orb-h1',{scrollTrigger:{trigger:'#hero-section',start:'top top',end:'bottom top',scrub:true},y:60});
    gsap.to('#orb-h2',{scrollTrigger:{trigger:'#hero-section',start:'top top',end:'bottom top',scrub:true},y:-40});
    gsap.to('#hero-grid',{scrollTrigger:{trigger:'#hero-section',start:'top top',end:'bottom top',scrub:true},y:20});
    
    // Hero entrance animation
    gsap.from('#hero-section h1',{opacity:0,y:25,duration:0.5,delay:0.1,ease:'power2.out'});
    gsap.from('#hero-section > div > div > span',{opacity:0,scale:0.9,duration:0.4,ease:'back.out(1.7)'});
    gsap.from('#hero-section p',{opacity:0,y:15,duration:0.5,delay:0.2,ease:'power2.out'});
  }
  window.addEventListener('libs-ready',initAnimations,{once:true});
})();
      `}</Script>

      <style>{`
.px-orb{position:absolute;border-radius:50%;pointer-events:none;will-change:transform;filter:blur(70px);opacity:0;}
.px-grid{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px);background-size:52px 52px;will-change:transform;}
.material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;}
@media(max-width:1023px){.px-orb{opacity:0.08!important;}}
      `}</style>
    </main>
  );
}
