'use client';

export default function CtaSection({ onOpenAssessment }) {
  return (
    <div className="w-full bg-[url('/images/Landingpage/Innovate_Fearlessly_Bg.jpg')] bg-cover bg-center bg-no-repeat h-auto py-12 md:py-16 lg:h-[280px] flex justify-center items-center">
      <div className="max-w-4xl mx-auto text-center px-4 flex flex-col items-center justify-center space-y-4">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight">
          Ready to Innovate Fearlessly?
        </h2>
        
        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-300 font-light max-w-lg leading-relaxed">
          Partner with St. Fox to secure your digital transformation.
        </p>

        {/* Action Button */}
        <div className="pt-2">
          <button 
            onClick={() => onOpenAssessment('CTA Footer Assessment')}
            className="rounded-md border-2 border-white text-white text-[13px] font-bold px-8 py-2.5 hover:bg-white hover:text-gray-900 transition-colors uppercase tracking-wider cursor-pointer"
          >
            Schedule a Free Assessment
          </button>
        </div>

      </div>
    </div>
  );
}
