'use client';
import theme from '../theme';

const { colors, gradients, shadows, radii, fonts } = theme;

/**
 * CreditCard3D — reusable 3D animated credit card
 *
 * Props:
 *   cardHolder  — name on card (default: "MSME ENTERPRISE")
 *   cardNumber  — first 4 digits shown (default: "4291")
 *   expires     — expiry string (default: "12/28")
 *   brandName   — top-left brand text (default: "Cred2Tech")
 *   wrapId      — id for the wrapper div (default: "card-wrapper")
 *   cardId      — id for the inner card div (default: "credit-card")
 *   frontId     — id for the front face (default: "card-front")
 *   shimmerId   — id for shimmer layer (default: "card-shimmer")
 *   streakId    — id for streak div (default: "card-streak")
 *   glowId      — id for glow div (default: "card-glow")
 *   particlesId — id for particles container (default: "card-particles")
 */

interface CreditCard3DProps {
  cardHolder?: string;
  cardNumber?: string;
  expires?: string;
  brandName?: string;
  wrapId?: string;
  cardId?: string;
  frontId?: string;
  shimmerId?: string;
  streakId?: string;
  glowId?: string;
  particlesId?: string;
  sceneId?: string;
}

export default function CreditCard3D({
  cardHolder = 'MSME ENTERPRISE',
  cardNumber = '4291',
  expires = '12/35',
  brandName = 'Cred2Tech',
  wrapId = 'card-wrapper',
  cardId = 'credit-card',
  frontId = 'card-front',
  shimmerId = 'card-shimmer',
  streakId = 'card-streak',
  glowId = 'card-glow',
  particlesId = 'card-particles',
  sceneId = 'card-scene',
}: CreditCard3DProps) {
  return (
    <div className="relative flex items-center justify-center" id={sceneId}>
      {/* Perspective wrapper */}
      <div 
        id={wrapId} 
        className="w-[320px] h-[200px] sm:w-[380px] sm:h-[240px] transition-all duration-500"
        style={{ 
          perspective: '1200px',
        }}
      >
        <div
          id={cardId}
          style={{
            width: '100%', height: '100%',
            position: 'relative',
            transformStyle: 'preserve-3d',
            transform: 'rotateX(12deg) rotateY(-18deg)',
            transition: 'transform 0.1s ease-out',
            borderRadius: radii.card,
            cursor: 'pointer',
          }}
        >
          {/* ── FRONT FACE ── */}
          <div
            id={frontId}
            style={{
              position: 'absolute', inset: 0,
              backfaceVisibility: 'hidden',
              borderRadius: radii.card,
              background: gradients.cardFront,
              boxShadow: shadows.card,
              overflow: 'hidden',
            }}
          >
            {/* Holographic shimmer */}
            <div id={shimmerId} style={{ position: 'absolute', inset: 0, borderRadius: '20px', background: 'linear-gradient(115deg,transparent 0%,rgba(29,255,155,0.04) 30%,rgba(0,170,255,0.08) 50%,rgba(255,224,102,0.05) 70%,transparent 100%)', opacity: 0, transition: 'opacity 0.3s ease', pointerEvents: 'none' }} />

            {/* Noise texture */}
            <div style={{ position: 'absolute', inset: 0, borderRadius: '20px', opacity: 0.03, backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')", pointerEvents: 'none' }} />

            {/* Glow orbs */}
            <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(29,255,155,0.18) 0%,transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '160px', height: '160px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,170,255,0.14) 0%,transparent 70%)', pointerEvents: 'none' }} />

            {/* Top row: brand + contactless */}
            <div style={{ position: 'absolute', top: '24px', left: '28px', right: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Manrope,sans-serif', fontWeight: 900, fontSize: '18px', color: '#fff', letterSpacing: '-0.5px' }}>{brandName}</span>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 6 Q22 14 14 22" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M14 9 Q20 14 14 19" stroke="rgba(255,255,255,0.65)" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M14 12 Q18 14 14 16" stroke="rgba(255,255,255,0.85)" strokeWidth="2" strokeLinecap="round" fill="none" />
                <circle cx="14" cy="14" r="2" fill="rgba(255,255,255,0.9)" />
              </svg>
            </div>

            {/* EMV Chip */}
            <div style={{ position: 'absolute', top: '72px', left: '28px' }}>
              <div style={{ width: '44px', height: '34px', borderRadius: '6px', background: 'linear-gradient(135deg,#c8a84b 0%,#f0d060 30%,#b8922a 60%,#e8c040 100%)', boxShadow: '0 2px 8px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.3)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'rgba(0,0,0,0.2)', transform: 'translateY(-50%)' }} />
                <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', background: 'rgba(0,0,0,0.2)', transform: 'translateX(-50%)' }} />
                <div style={{ position: 'absolute', top: '8px', left: '8px', right: '8px', bottom: '8px', border: '1px solid rgba(0,0,0,0.15)', borderRadius: '3px' }} />
              </div>
            </div>

            {/* Card number */}
            <div style={{ position: 'absolute', bottom: '60px', left: '28px', right: '28px', fontFamily: "'Space Grotesk',monospace", fontSize: '15px', fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '3px', display: 'flex', gap: '16px' }}>
              <span>{cardNumber}</span><span>••••</span><span>••••</span><span>7834</span>
            </div>

            {/* Bottom row: holder + expiry + network */}
            <div style={{ position: 'absolute', bottom: '22px', left: '28px', right: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>Card Holder</div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.5px' }}>{cardHolder}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>Expires</div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>{expires}</div>
              </div>
              {/* Mastercard-style circles */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,80,0,0.7)', marginRight: '-10px' }} />
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,160,0,0.7)' }} />
              </div>
            </div>

            {/* Streak sweep */}
            <div id={streakId} style={{ position: 'absolute', top: '-100%', left: '-60%', width: '40%', height: '300%', background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.04),transparent)', transform: 'skewX(-20deg)', pointerEvents: 'none', transition: 'left 0.6s ease' }} />
          </div>

          {/* ── BACK FACE ── */}
          <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', borderRadius: radii.card, background: gradients.cardBack, transform: 'rotateY(180deg)', boxShadow: shadows.card, overflow: 'hidden' }}>

            {/* Dark magnetic stripe with realistic sheen */}
            <div style={{ position: 'absolute', top: '32px', left: 0, right: 0, height: '46px', background: 'linear-gradient(180deg,#191919 0%,#0f0f0f 30%,#262626 50%,#0a0a0a 70%,#191919 100%)', boxShadow: '0 2px 4px rgba(0,0,0,0.5)' }} />

            {/* Continuous Signature Strip & CVV */}
            <div style={{ position: 'absolute', top: '96px', left: '24px', width: '240px', height: '34px', background: '#fff', borderRadius: '4px', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
              {/* Signature Pattern Area */}
              <div style={{ flex: 1, height: '100%', background: 'repeating-linear-gradient(45deg, rgba(200,200,200,0.3), rgba(200,200,200,0.3) 2px, transparent 2px, transparent 6px)', position: 'relative' }}>
                {/* Simulated signature cursive squiggle */}
                <svg viewBox="0 0 100 30" style={{ position: 'absolute', top: '4px', left: '10px', height: '24px', opacity: 0.8, stroke: '#003f7d', strokeWidth: 1.5, fill: 'none', strokeLinecap: 'round' }}>
                  <path d="M5,20 C10,5 20,5 25,20 S35,5 40,20 S50,5 55,20 S65,5 75,15 S85,25 95,5" />
                </svg>
              </div>
              {/* CVV Area (Inside the same strip, separated by thin line) */}
              <div style={{ padding: '0 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', height: '100%', borderLeft: '1px solid rgba(0,0,0,0.1)' }}>
                <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', fontWeight: 700, color: '#000', letterSpacing: '2px', fontStyle: 'normal', textTransform: 'uppercase' }}>XXX</span>
              </div>
            </div>

            {/* Micro text (Legal/Support) */}
            <div style={{ position: 'absolute', bottom: '22px', left: '24px', right: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '6.5px', fontWeight: 500, color: 'rgba(255,255,255,0.4)', lineHeight: 1.4, fontFamily: 'var(--font-inter)' }}>
                This card is issued by Cred2Tech Partner Bank pursuant to a license by the network. Use of this card is subject to the cardholder agreement.<br />If found, please return to: Cred2Tech HQ, Cyber City, Phase-1. DO NOT SHARE your CVV with anyone.
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '6px' }}>
                <span style={{ fontSize: '8px', fontWeight: 700, fontFamily: 'var(--font-jb-mono)', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.5px' }}>SUPPORT: +91 1800 234 5678</span>
                <span style={{ fontSize: '9px', fontWeight: 800, fontFamily: 'var(--font-outfit)', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>cred2tech.com</span>
              </div>
            </div>

            {/* Secondary holographic/watermark element */}
            <div style={{ position: 'absolute', top: '150px', left: '28px', width: '40px', height: '20px', borderRadius: '2px', border: '1px solid rgba(255,255,255,0.1)', background: 'linear-gradient(135deg,rgba(255,255,255,0.05) 0%,rgba(255,255,255,0) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '6px', color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-jb-mono)' }}>VALID</span>
            </div>

            {/* Noise texture for realism */}
            <div style={{ position: 'absolute', inset: 0, borderRadius: radii.card, opacity: 0.04, backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')", pointerEvents: 'none' }} />

          </div>
        </div>
      </div>

      {/* Glow shadow */}
      <div id={glowId} style={{ position: 'absolute', bottom: '-30px', left: '50%', transform: 'translateX(-50%)', width: '280px', height: '40px', borderRadius: '50%', background: 'radial-gradient(ellipse,rgba(29,255,155,0.25) 0%,transparent 70%)', filter: 'blur(12px)', transition: 'transform 0.1s ease-out,opacity 0.3s' }} />

      {/* Particles container */}
      <div id={particlesId} style={{ position: 'absolute', inset: '-40px', pointerEvents: 'none', overflow: 'visible' }} />
    </div>
  );
}
