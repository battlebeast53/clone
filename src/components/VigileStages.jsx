'use client';
import { useState } from 'react';

const WHY_CHOOSE_CARDS = [
  {
    icon: '/images/home/Comprehensive.webp',
    title: 'Comprehensive Protection',
    description: 'Addresses threats across Identity, Cloud, Endpoints, and more.',
    boxShadowColor: '#3898B4'
  },
  {
    icon: '/images/home/AIpowered.webp',
    title: 'AI-Powered Operations',
    description: 'Harness Generative AI for self-healing and self-learning security systems.',
    boxShadowColor: '#B5AB34'
  },
  {
    icon: '/images/home/Excellence.webp',
    title: 'Regulatory Excellence',
    description: 'Stay compliant with GDPR, HIPAA, DPDP Act, PCI DSS, and beyond.',
    boxShadowColor: '#C7466F'
  },
  {
    icon: '/images/home/Proofsecurity.webp',
    title: 'Future-Proof Security',
    description: 'Adapt to evolving threats with predictive and proactive risk management.',
    boxShadowColor: '#356193'
  }
];

const STAGES = [
  {
    id: 0,
    imgurl: '/images/home/Validate.png',
    title: 'VALIDATE',
    description: 'Assess security posture, identify gaps, and provide visibility into risk levels.',
    points: [
      { text: 'Vulnerability Assessment and Penetration Testing (VAPT)', route: '/vapt' },
      { text: 'SOC 2 Audits and Readiness', route: '/soc2' },
      { text: 'ISO Audits', route: '/iso' },
      { text: 'Cloud Security Posture Assessment', route: '/cloud-security' },
      { text: 'Compromise Assessment', route: '/compromise-assessment' }
    ]
  },
  {
    id: 1,
    imgurl: '/images/home/Identity.png',
    title: 'IDENTIFY',
    description: 'Detect vulnerabilities, risks, and threat actors impacting assets and systems.',
    points: [
      { text: 'Identity Assessment', route: '/identity-assessment' },
      { text: 'Third-Party Cyber Risk Management (TPCRM)', route: '/tpcrm' },
      { text: 'Incident Response and Forensics Readiness Assessment', route: '/incident-response' },
      { text: 'Data Discovery and Classification (Privacy Ops)', route: '/privacy-ops' }
    ]
  },
  {
    id: 2,
    imgurl: '/images/home/Guard.png',
    title: 'GUARD',
    description: 'Proactively protect against threats by deploying defensive tools and practices.',
    points: [
      { text: 'Managed Security Operations Center (SOC)', route: '/soc' },
      { text: 'Managed Detection and Response (MDR)', route: '/managed-detection-and-response' },
      { text: 'Managed Firewall', route: '/managed-firewall' },
      { text: 'Managed Email Security', route: '/email-security' },
      { text: 'Endpoint Detection and Response (EDR)', route: '/edr' },
      { text: 'Zero Trust Network Access (ZTNA)', route: '/ztna' },
      { text: 'Cloud Security', route: '/cloud-security' }
    ]
  },
  {
    id: 3,
    imgurl: '/images/home/Implement.png',
    title: 'IMPLEMENT',
    description: 'Operationalize security strategies, compliance processes, and advanced technologies.',
    points: [
      { text: 'Virtual CISO (vCISO)', route: '/virtual-ciso' },
      { text: 'Virtual DPO (vDPO)', route: '/vdpo' },
      { text: 'Privacy Ops', route: '/privacy-ops' },
      { text: 'Managed DevSecOps', route: '/dev-secops' },
      { text: 'Compliance Automation (SOC 2, ISO)', route: '/compliance' }
    ]
  },
  {
    id: 4,
    imgurl: '/images/home/Learn.png',
    title: 'LEARN',
    description: 'Use threat intelligence, AI insights, and post-incident analysis to improve continuously.',
    points: [
      { text: 'AI for Security', route: '/ai-security' },
      { text: 'Incident Response and Digital Forensics', route: '/incident-response' },
      { text: 'Red, Blue, and Purple Teaming', route: '/optimizedefenses' },
      { text: 'Advanced Threat Hunting', route: '/threat-hunting' },
      { text: 'Breach Attack Simulation (BAS)', route: '/bas' }
    ]
  },
  {
    id: 5,
    imgurl: '/images/home/Enhance.png',
    title: 'ENHANCE',
    description: 'Strengthen resilience, optimize security strategies, and ensure continuous adaptation.',
    points: [
      { text: 'Cyber Resilience Programs', route: '/resilience' },
      { text: 'Managed Breach and Attack Simulation (BAS)', route: '/bas' },
      { text: 'Third-Party Risk Mitigation (TPCRM)', route: '/tpcrm' },
      { text: 'Cybersecurity Training and Awareness Programs', route: '/training' },
      { text: 'Continuous Improvement Plans', route: '/continuous-improvement' }
    ]
  }
];

export default function VigileStages({ onOpenAssessment }) {
  const [activeStage, setActiveStage] = useState(0);

  const selectedStage = STAGES[activeStage];

  return (
    <div className="w-full bg-[#07111A] text-white py-16 px-5 lg:px-24 2xl:px-[150px] space-y-16">
      
      {/* Why Choose Vigile Section */}
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
            Why Choose the VIGILE Framework?
          </h2>
        </div>

        {/* 4 Column Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {WHY_CHOOSE_CARDS.map((card, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-start p-6 rounded-lg bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <div className="w-16 h-16 rounded-md flex items-center justify-center bg-white/10 mb-6 transition-transform group-hover:scale-105">
                <img 
                  src={card.icon} 
                  alt={card.title} 
                  className="w-10 h-10 object-contain"
                  loading="lazy" 
                />
              </div>
              
              {/* Box Shadow Left accent on hover/active */}
              <h3 
                className="font-semibold text-base lg:text-[17px] mb-2 pl-3 border-l-2 transition-all duration-300"
                style={{ borderColor: card.boxShadowColor }}
              >
                {card.title}
              </h3>
              
              <p className="text-xs lg:text-sm text-gray-400 font-light leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center pt-2">
          <button 
            onClick={() => onOpenAssessment('Vigile Framework Details')}
            className="bg-gradient-to-r from-[#3B73CC] to-[#1A3F7E] text-white text-xs md:text-sm font-semibold py-2.5 px-10 rounded-lg hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Learn more
          </button>
        </div>
      </div>

      {/* Interactive Stages Carousel Section */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-16">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Interactive Security Lifecycle</h2>
          <p className="text-xs sm:text-sm text-gray-400 font-light">
            We guide your organization through our cyclical defense model to establish comprehensive threat management.
          </p>
        </div>

        {/* Horizontal Tab controls */}
        <div className="flex flex-wrap justify-center border-b border-white/10 mb-10 overflow-x-auto whitespace-nowrap">
          {STAGES.map((stage, idx) => (
            <button
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className={`px-5 py-3 text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 border-b-2 ${
                idx === activeStage 
                  ? 'border-white text-white opacity-100' 
                  : 'border-transparent text-gray-400 opacity-60 hover:opacity-100'
              }`}
            >
              {stage.title}
            </button>
          ))}
        </div>

        {/* Tab display layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[300px] transition-all duration-500">
          
          {/* Left info column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#3B73CC] uppercase tracking-widest">
                Stage {selectedStage.id + 1}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {selectedStage.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                {selectedStage.description}
              </p>
            </div>

            {/* List of sub-services with tick icon */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Key Components:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                {selectedStage.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-gray-300">
                    <img 
                      src="/images/ManagedIdentity/Tickimg.webp" 
                      alt="Check icon" 
                      className="w-4 h-4 mt-0.5 object-contain shrink-0 filter invert brightness-200" 
                    />
                    <span>{point.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => onOpenAssessment(`Stage: ${selectedStage.title}`)}
              className="px-6 py-2.5 bg-white text-gray-900 text-xs sm:text-sm font-bold rounded-lg hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Consult an Expert
            </button>
          </div>

          {/* Right illustration column */}
          <div className="flex justify-center md:justify-end">
            <div className="relative rounded-xl border-[6px] border-white/10 overflow-hidden shadow-2xl p-4 bg-white/5 backdrop-blur flex justify-center items-center">
              <img 
                src={selectedStage.imgurl} 
                alt={`${selectedStage.title} lifecycle illustration`} 
                className="w-48 sm:w-56 md:w-64 lg:w-72 object-contain"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
