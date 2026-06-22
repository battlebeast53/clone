'use client';

const ACCOMPLISHMENTS = [
  {
    text: 'Expertise across ',
    highlight: 'BFSI, Healthcare, Telecom, and Enterprise IT',
    suffix: ', delivering tailored cybersecurity solutions'
  },
  {
    text: 'AI-driven security with autonomous SOCs, real-time threat detection, and proactive risk mitigation',
    highlight: '',
    suffix: ''
  },
  {
    text: 'Proven success with a ',
    highlight: '98% client retention rate',
    suffix: ' and 100% compliance achievement'
  },
  {
    text: 'Comprehensive services, including Red Teaming, compliance audits, and end-to-end cybersecurity solutions',
    highlight: '',
    suffix: ''
  }
];

const SERVICE_CARDS = [
  { title: 'Security For AI', image: '/images/Landingpage/SecurityAI.webp', href: '/ai-security' },
  { title: 'Managed Services', image: '/images/Landingpage/Managedservice.webp', href: '/managed-services' },
  { title: 'Specialised Services', image: '/images/Landingpage/Specializedservice.webp', href: '/specializedservice' },
  { title: 'Data Services', image: '/images/Landingpage/Dataservice.webp', href: '/data-services' },
  { title: 'Cloud Engineering', image: '/images/Landingpage/Cloudengineering.webp', href: '/cloud-engineering' }
];

export default function ExpertiseTabs({ onOpenAssessment }) {
  return (
    <div className="w-full text-white py-16 px-5 lg:px-24 2xl:px-[150px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left side checklist */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-1">
            <h2 className="text-[#fff] lg:font-bold font-semibold 2xl:text-[36px] lg:text-4xl md:text-2xl text-xl">
              Our expertise, Innovation,
            </h2>
            <p className="text-sm sm:text-base lg:text-[20px] font-medium text-[#fff] leading-normal opacity-95">
              delivering tailored cybersecurity solutions make us the top choice for businesses facing evolving threats.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            {ACCOMPLISHMENTS.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                {/* Green/White tick asset */}
                <img 
                  src="/images/ManagedIdentity/Tickimg.webp" 
                  alt="Check icon" 
                  className="w-5 h-5 mt-0.5 object-contain shrink-0 filter invert brightness-200" 
                />
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                  {item.text}
                  {item.highlight && <span className="font-semibold text-white">{item.highlight}</span>}
                  {item.suffix}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side services list grid */}
        <div className="lg:col-span-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICE_CARDS.map((card, idx) => (
              <div 
                key={idx}
                onClick={() => onOpenAssessment(`Consult: ${card.title}`)}
                className="flex items-center justify-between p-4 bg-white/5 border border-white/10 backdrop-blur rounded-lg cursor-pointer hover:bg-white/10 hover:border-white/25 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-8 h-8 object-contain filter invert brightness-200" 
                  />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide group-hover:text-[#3B73CC] transition-colors">
                    {card.title}
                  </span>
                </div>
                {/* Arrow icon */}
                <svg 
                  className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors transform group-hover:translate-x-1 duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
