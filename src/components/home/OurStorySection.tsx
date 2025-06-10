export const OurStorySection = () => {
  return (
    <section
      id="our-story"
      className="scroll-mt-20 pt-16 md:pt-32 relative w-full overflow-hidden bg-gradient-to-br from-[#e0f2e9] via-[#f0f7ed] to-[#e9f7ef] py-8 md:py-16 px-4 md:px-8 lg:px-12 min-h-[70vh] flex items-center"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-[-2rem] md:top-[-3rem] left-[-2rem] md:left-[-3rem] w-32 md:w-56 h-32 md:h-56 bg-[#b9e4b1] opacity-20 rounded-full blur-[60px] md:blur-[80px] z-0 animate-float-slow" />
      <div className="absolute bottom-[-2rem] md:bottom-[-4rem] right-[-2rem] md:right-[-3rem] w-36 md:w-60 h-36 md:h-60 bg-[#a8d5a5] opacity-25 rounded-full blur-[60px] md:blur-[80px] z-0 animate-float" />
      <div className="absolute top-1/4 right-1/4 w-20 md:w-32 h-20 md:h-32 bg-[#f9e076] opacity-15 rounded-full blur-[40px] md:blur-[60px] z-0 animate-pulse" />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block relative">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#154313] relative z-10 px-2">
              The Spark Behind The Stove!
            </h2>
            <div className="absolute -bottom-1 md:-bottom-2 left-1/2 transform -translate-x-1/2 w-2/3 h-1.5 md:h-2 bg-[#cdebc5] rounded-full z-0" />
          </div>
          <div className="flex justify-center mt-4 md:mt-6">
            <div className="w-16 md:w-20 h-1 md:h-1.5 bg-gradient-to-r from-[#8bc34a] to-[#cdebc5] rounded-full" />
          </div>
        </div>

        {/* Content - Mobile: Image first, Desktop: Text first */}
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
          {/* Image - Shows first on mobile, second on desktop */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -right-2 md:-right-4 -bottom-2 md:-bottom-4 w-full h-full border-2 border-[#8bc34a] rounded-xl md:rounded-2xl z-0" />
              <img
                src="https://res.cloudinary.com/diqbtmjui/image/upload/v1749580838/story_pyscwr.png"
                alt="Founders at VJTI hostel or Aai's Kitchen team"
                className="relative z-10 w-full h-auto max-h-[250px] md:max-h-[400px] object-cover rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl transform transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute -left-2 md:-left-4 -top-2 md:-top-4 w-12 md:w-20 h-12 md:h-20 bg-[#e8c4c4] opacity-30 rounded-lg rotate-12 z-0" />
            </div>
          </div>

          {/* Text - Shows second on mobile, first on desktop */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -left-2 md:-left-4 -top-2 md:-top-4 w-8 md:w-12 h-8 md:h-12 bg-[#f9e076] opacity-20 rounded-full blur-md" />
              <p className="text-base md:text-lg italic leading-relaxed font-medium text-gray-800 border-l-4 border-[#8bc34a] pl-3 md:pl-4 py-2 bg-white/70 backdrop-blur-sm rounded-r-lg shadow-sm relative z-10">
                "It began in the hostel rooms of VJTI, Mumbai..."
              </p>
            </div>

            <div className="space-y-3 md:space-y-4 text-gray-800">
              <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                <span className="font-semibold text-[#154313] bg-[#e9f7ef] px-1 rounded">Aai's Kitchen</span> started when Swanand and Shlok faced the same frustration millions of students experience daily — tasteless mess food, constant menus, cooked with no care, and served without soul.
              </p>

              <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                They saw not just a gap, but a gaping wound in the everyday lives of students. So they decided to heal it — with food that feels like Aai's love.
              </p>

              <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                So they turned their frustration into a mission.
              </p>
            </div>

            <div className="mt-4 md:mt-6 p-3 md:p-4 bg-white/90 backdrop-blur-sm border border-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]">
              <p className="text-sm md:text-base lg:text-lg font-medium text-gray-800">
                Here's how Aai's Kitchen was born <span className="text-[#154313] font-bold">not from a business plan</span>, but from a hunger for food.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};