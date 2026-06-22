'use client';

export default function VigileVideo() {
  return (
    <div className="w-full flex items-center justify-center px-4 py-8 md:py-12 lg:py-16 2xl:px-40 lg:px-20 md:px-5">
      <div className="max-w-6xl w-full flex flex-col items-center justify-center text-center space-y-4">
        
        {/* Header Slogan */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-[#3B73CC] uppercase tracking-widest">
            The VIGILE Framework
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 tracking-tight">
            Your Path to Cyber Resilience
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl font-light">
            Our proprietary VIGILE Framework ensures comprehensive security for every layer of your organization.
          </p>
        </div>

        {/* Video Player Display Container */}
        <div className="relative w-full max-w-4xl h-[180px] sm:h-[240px] md:h-[340px] lg:h-[450px] overflow-hidden rounded-xl shadow-2xl mt-6 border border-gray-100">
          <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none rounded-xl"></div>
          <video 
            src="/video/Vigile_Video.webm"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-xl"
            aria-label="Vigile Framework details loop video"
          />
        </div>
      </div>
    </div>
  );
}
