export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full bg-[#f8f9f0] px-4 sm:px-6 md:px-12 overflow-hidden min-h-screen flex items-center"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-[-3rem] right-[-3rem] w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-[#cdeac0] rounded-full opacity-30 blur-3xl z-0" />
      <div className="absolute bottom-[-3rem] left-[-3rem] w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-[#a4d4ae] rounded-full opacity-20 blur-3xl z-0" />

      {/* Content */}
      <div className="container mx-auto relative z-10 py-12 md:py-0">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 transition-all duration-500">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out">
            <img
              src="https://res.cloudinary.com/diqbtmjui/image/upload/v1749580800/home1st_brrgpm.jpg"
              alt="Home-cooked meals"
              className="object-cover w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] rounded-xl"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-[#154313] leading-snug">
              <span className="bg-gradient-to-r from-[#154313] to-[#1e5c1b] bg-clip-text text-transparent">
                We Don't Just Feed Stomachs, <br className="hidden sm:block" />We Feed Hearts
              </span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-800">
              <span className="font-semibold text-[#154313]">Leaving home shouldn't mean leaving behind</span> the warmth of mom's kitchen. Every meal from Aai's Kitchen carries the same <span className="font-semibold text-[#154313]">love, care, and comfort</span> you grew up with.
            </p>

            <div className="p-4 sm:p-5 md:p-6 bg-amber-50 rounded-xl border-l-4 border-[#154313] shadow-sm">
              <p className="text-sm sm:text-base md:text-lg italic text-gray-700">
                "We don't just serve food - we deliver <span className="font-bold text-[#154313]">memories, emotions,</span> and the <span className="font-bold text-[#154313]">irreplaceable taste</span> of mother's cooking. Keeping alive the tradition of <span className="text-[#154313] font-medium">'Maa ke haath ka khana'</span>, no matter where life takes you."
              </p>
            </div>

            <p className="text-base sm:text-lg text-gray-800">
              Our <span className="font-semibold text-[#154313]">technology</span> and <span className="font-semibold text-[#154313]">heartfelt service</span> ensure you never have to compromise on <span className="underline decoration-[#154313]">taste or emotional nourishment</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
