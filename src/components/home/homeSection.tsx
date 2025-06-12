import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const HomeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      headline: "Lifestyle Mess Brand",
      subheadline: "Aai's Kitchen",
      subtext:
        "We're building a brand that students feel proud to eat from — consistent, caring, clean, and community-driven .",
      imageUrl: "https://res.cloudinary.com/diqbtmjui/image/upload/v1749711223/studentforntofaaiskitchen_vagdyv.png",
    },
    {
      headline: "Four Meals of Love",
      subheadline: "Every Single Day.",
      subtext:
        "We serve four meals daily — breakfast, lunch, snacks, and dinner that feel like Maa ke haath ka khana.",
      imageUrl: "https://res.cloudinary.com/diqbtmjui/image/upload/v1749711171/meal_esubke.png",
    },
    {
      headline: "Not Just Another Mess",
      subheadline: "We Are Mission.",
      subtext:
        "Aai's Kitchen isn't just a mess contractor — we're a student-first startup changing hostel food forever.",
      imageUrl: "https://res.cloudinary.com/diqbtmjui/image/upload/v1749711173/messarea_oethpl.jpg",
    },
    {
      headline: "India's Most",
      subheadline: "Trusted Mess Chain.",
      subtext:
        "We're not just serving food — we're building India's most loved and trusted mess food brand.",
      imageUrl: "https://res.cloudinary.com/diqbtmjui/image/upload/v1749711198/trust_uqox2e.png",
    },
  ];

  // Function to reset and restart the interval
  const resetInterval = useCallback(() => {
    // This will be used to store the interval ID
    return setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
  }, [slides.length]);

  // Auto-slide effect with interval management
  useEffect(() => {
    const interval = resetInterval();
    return () => clearInterval(interval);
  }, [resetInterval]);

  // Function to handle manual navigation and reset timer
  const handleManualNavigation = useCallback((navigationFn) => {
    return () => {
      if (isAnimating) return;
      
      setIsAnimating(true);
      navigationFn();
      setTimeout(() => setIsAnimating(false), 800);
      
      // Reset the auto-slide timer by clearing and recreating the interval
      // We'll trigger a re-render of the useEffect above
      setCurrentSlide(prev => prev); // This forces a state update without changing the value
    };
  }, [isAnimating]);

  const nextSlide = handleManualNavigation(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  });

  const prevSlide = handleManualNavigation(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  });

  const goToSlide = useCallback((index) => {
    if (isAnimating || index === currentSlide) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 800);
    
    // Reset the auto-slide timer
    setCurrentSlide(prev => prev); // Force useEffect to re-run
  }, [isAnimating, currentSlide]);

  return (
    <div id="home" className="relative overflow-hidden bg-gradient-to-br from-[#e0f2e9] via-[#f0f7ed] to-[#e9f7ef]">
      <div className="relative z-10 mt-38 md:mt-16">
        <div className="w-full pb-32 sm:pb-24 lg:pb-20 ">
          {/* Set fixed height to center arrows */}
          <div className="relative h-[480px] sm:h-[520px] md:h-[580px] lg:h-[600px] xl:h-[640px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-800 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : index < currentSlide
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="flex flex-col-reverse lg:flex-row h-full">
                  {/* Text Content */}
                  <div className="w-full lg:w-2/3 flex items-center justify-start px-4 py-2 sm:px-2 sm:py-8 lg:p-16 xl:p-20">
                    <div className="max-w-3xl w-full">
                      <div className="mb-4 relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#e0f2e9] via-[#f0f7ed] to-[#e9f7ef] blur-2xl rounded-3xl opacity-60 animate-pulse hidden sm:block"></div>
                        <h1 className="relative z-20 text-xl sm:text-xl md:text-5xl lg:text-7xl font-black">
                          <span className="block hover:scale-105 transition-all duration-500 mb-2 lg:mb-4 text-black bg-clip-text drop-shadow-2xl">
                            {slide.headline}
                          </span>
                          <span className="block lg:ml-8 xl:ml-16 hover:scale-105 transition-all duration-500 text-[#154313] bg-clip-text drop-shadow-2xl font-extrabold">
                            {slide.subheadline}
                          </span>
                        </h1>
                      </div>
                      <div className="relative z-20">
                        <p className="text-base sm:text-md lg:text-lg xl:text-xl leading-relaxed text-gray-800 font-semibold pl-2 sm:pl-8 pr-4">
                          {slide.subtext.split(/(We're building|We serve|Aai's Kitchen|We're|Aai's Kitchen — that's our dream)/).map((part, i) => {
                            if (
                              [
                                "We're building",
                                "We serve",
                                "Aai's Kitchen",
                                "We're",
                                "Aai's Kitchen — that's our dream",
                              ].includes(part)
                            ) {
                              return (
                                <span
                                  key={i}
                                  className="text-[#154313] font-bold"
                                >
                                  {part}
                                </span>
                              );
                            }
                            return part;
                          })}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image Content */}
                  <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 py-4 sm:py-6">
                    <div className="relative w-full max-w-lg">
                      {/* Decorations */}
                      <div className="hidden sm:block absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-30 blur-xl"></div>
                      <div className="hidden sm:block absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br from-green-400 to-green-500 rounded-full opacity-20 blur-2xl"></div>

                      <div
                        className="aspect-[4/4] sm:aspect-[4/4] bg-cover bg-center rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl transform transition-all duration-500 hover:scale-105 overflow-hidden"
                        style={{ backgroundImage: `url(${slide.imageUrl})` }}
                      ></div>

                      <div className="hidden sm:block absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-[#f8f9f0] backdrop-blur-sm rounded-2xl p-3 sm:p-4 shadow-xl border border-green-100">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">4</div>
                        <div className="text-xs sm:text-sm text-gray-600">Meals Daily</div>
                      </div>

                      <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-[#f8f9f0] backdrop-blur-sm rounded-2xl p-3 sm:p-4 shadow-xl border border-green-100">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">100%</div>
                        <div className="text-xs sm:text-sm text-gray-600">Fresh Food</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-110 shadow-xl cursor-pointer"
            >
              <ChevronLeft size={20} className="text-gray-800 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-110 shadow-xl cursor-pointer"
            >
              <ChevronRight size={20} className="text-gray-800 sm:w-6 sm:h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute -bottom-28 sm:-bottom-20 lg:-bottom-14 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2 sm:space-x-3 lg:space-x-4 pb-16">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 cursor-pointer ${
                    index === currentSlide
                      ? 'w-6 sm:w-8 h-2.5 bg-green-600 rounded-full shadow-lg'
                      : 'w-2.5 h-2.5 bg-white/70 rounded-full hover:bg-white hover:scale-110'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};