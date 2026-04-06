

export default function InfiniteFlow() {
  const cards = [
    { id: 1, emoji: '🏆', title: 'IIT Hyderabad Hackathon', sub: 'Intelli-Credit · AI Credit Platform', color: '#4f46e5' },
    { id: 2, emoji: '🛡️', title: 'HCL GUVI Buildathon', sub: 'Honeypot API · 40,000+ Participants', color: '#059669' },
    { id: 3, emoji: '📊', title: 'UIDAI Data Hackathon 2026', sub: 'AadhaarIQ · Team Leader', color: '#0284c7' },
    { id: 4, emoji: '🎓', title: 'JEC Mechatronics', sub: 'CGPA 8.167 · Sep 2024 – May 2028', color: '#7c3aed' },
    { id: 5, emoji: '🤖', title: 'Anthropic Certified', sub: 'Model Context Protocol · Claude 101', color: '#dc2626' },
    { id: 6, emoji: '☁️', title: 'Google Cloud Certified', sub: 'Gemini Certified University Student', color: '#d97706' },
  ];

  return (
    <div className="w-full overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        .scroll-trackk {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
          will-change: transform;
        }

        .scroll-trackk:hover {
          animation-play-state: paused;
        }

             .hover-pause-container:hover .scroll-trackk {
          animation-play-state: paused;
        }

        
      `}</style>

      <div className="scroll-trackk hover-pause-container space-x-4 max-md:p-2">
        {[...cards, ...cards].map((card, idx) => (
          <div
            key={idx}
            className=" flex-shrink-0 p-3 rounded-2xl bg-[var(--color-infiniteimgbg)] backdrop-blur-xl border border-[var(--color-infiniteimgbg)]"
            style={{ minWidth: '240px', minHeight: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
          >
            <div style={{ fontSize: '2rem' }}>{card.emoji}</div>
            <p style={{ color: card.color, fontWeight: 700, fontSize: '0.85rem', textAlign: 'center', lineHeight: 1.3 }}>{card.title}</p>
            <p style={{ color: 'var(--color-sidetext)', fontSize: '0.7rem', textAlign: 'center' }}>{card.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}