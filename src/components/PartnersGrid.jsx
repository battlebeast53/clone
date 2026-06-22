'use client';

const PARTNERS = [
  { id: 1, name: 'Crowdstrike', image: '/images/Landingpageold/Crowdstrike.webp', alt: 'Crowdstrike logo' },
  { id: 2, name: 'Forcepoint', image: '/images/Landingpageold/Forcepoint.webp', alt: 'Forcepoint logo' },
  { id: 3, name: 'Checkpoint', image: '/images/Landingpageold/Checkpoint.webp', alt: 'Checkpoint logo' },
  { id: 4, name: 'Wiz', image: '/images/Landingpageold/Wiz.webp', alt: 'Wiz logo' },
  { id: 5, name: 'Saviynt', image: '/images/Landingpageold/Saviynt.webp', alt: 'Saviynt logo' },
  { id: 6, name: 'Fortinet', image: '/images/Landingpageold/Fortinet.webp', alt: 'Fortinet logo' },
  { id: 7, name: 'Splunk', image: '/images/Landingpageold/Splunk.webp', alt: 'Splunk logo' },
  { id: 8, name: 'Riskrecon', image: '/images/Landingpageold/Riskrecon.webp', alt: 'Riskrecon logo' },
  { id: 9, name: 'Privasapien', image: '/images/Landingpageold/Privasapien.webp', alt: 'Privasapien logo' },
  { id: 10, name: 'Skyflow', image: '/images/Landingpageold/Skyflow.webp', alt: 'Skyflow logo' },
  { id: 11, name: 'Cymulate', image: '/images/Landingpageold/Cymulate.webp', alt: 'Cymulate logo' },
  { id: 12, name: 'Lineaje', image: '/images/Landingpageold/Lineaje.webp', alt: 'Lineaje logo' },
  { id: 13, name: 'And Many More', image: '/images/Landingpageold/Manymore.webp', alt: 'Many more partners' }
];

export default function PartnersGrid() {
  return (
    <section className="w-full bg-black py-16 flex flex-col items-center">
      <div className="max-w-[1920px] w-full px-5 lg:px-24 2xl:px-[150px] space-y-10">
        
        {/* Title */}
        <h3 className="text-center text-xl lg:text-3xl font-semibold text-white mb-10 tracking-tight">
          Powering Security with Leading Technologies
        </h3>

        {/* First Grid Row (7 items) */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 justify-center items-center gap-6 lg:gap-10 mt-4">
          {PARTNERS.slice(0, 7).map((partner) => (
            <div 
              key={partner.id} 
              className="flex justify-center items-center h-20 px-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 hover:scale-105 transition-all duration-300 group"
            >
              <img 
                src={partner.image} 
                alt={partner.alt} 
                className="max-w-full max-h-[45px] object-contain opacity-60 group-hover:opacity-100 transition-opacity filter brightness-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Second Grid Row (6 items) */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-center items-center gap-6 lg:gap-10 pt-4">
          {PARTNERS.slice(7).map((partner) => (
            <div 
              key={partner.id} 
              className="flex justify-center items-center h-20 px-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 hover:scale-105 transition-all duration-300 group"
            >
              <img 
                src={partner.image} 
                alt={partner.alt} 
                className="max-w-full max-h-[45px] object-contain opacity-60 group-hover:opacity-100 transition-opacity filter brightness-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
