'use client';

const LOGOS = [
  { name: 'Zensar', src: '/images/Landingpage/Ourcustomer/Zensar.webp' },
  { name: 'FIAT', src: '/images/Landingpage/Ourcustomer/FIAT.webp' },
  { name: 'Exela', src: '/images/Landingpage/Ourcustomer/Exela.webp' },
  { name: 'Future Generali', src: '/images/Landingpage/Ourcustomer/Futuregenerali.webp' },
  { name: 'NIMHANS', src: '/images/Landingpage/Ourcustomer/Nimhans.webp' },
  { name: 'Pattern', src: '/images/Landingpage/Ourcustomer/Pattern.webp' },
  { name: 'Efl', src: '/images/Landingpage/Ourcustomer/Efl.webp' },
  { name: 'Amdocs', src: '/images/Landingpage/Ourcustomer/Amdocs.webp' },
  { name: 'KPIT', src: '/images/Landingpage/Ourcustomer/KPIT.webp' },
  { name: 'IB Group', src: '/images/Landingpage/Ourcustomer/IBGroup.webp' },
  { name: 'Persistent', src: '/images/Landingpage/Ourcustomer/Persistent.webp' },
  { name: 'Kytes', src: '/images/Landingpage/Ourcustomer/Kytes.webp' },
  { name: 'Secureview', src: '/images/Landingpage/Ourcustomer/Secureview.webp' },
  { name: 'LTI Mindtree', src: '/images/Landingpage/Ourcustomer/LTIMindtree.webp' },
  { name: 'Emcure', src: '/images/Landingpage/Ourcustomer/Emcure.webp' },
  { name: 'Arctera', src: '/images/Landingpage/Ourcustomer/Arctera.webp' },
  { name: 'Veritas', src: '/images/Landingpage/Ourcustomer/Veritas.webp' }
];

export default function LogosSlider() {
  // Double the list for seamless continuous infinite loop scroll
  const doubleLogos = [...LOGOS, ...LOGOS];

  return (
    <div className="relative w-full max-w-[1920px] mx-auto py-4 overflow-hidden select-none">
      {/* Gradients on sides for fading edge effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#07111A] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#07111A] to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-max items-center">
        {/* Infinite scrolling track */}
        <div className="flex animate-scroll gap-12 items-center hover-pause py-4">
          {doubleLogos.map((logo, idx) => (
            <div key={idx} className="shrink-0 flex items-center justify-center">
              <img 
                src={logo.src} 
                alt={`${logo.name} logo`} 
                className="h-[35px] w-auto max-w-[120px] object-contain opacity-55 hover:opacity-100 transition-opacity duration-300 filter brightness-200 contrast-75" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
