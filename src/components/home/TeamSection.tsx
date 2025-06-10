import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const TeamSection = () => {
  const teamVisuals = [
    {
      title: "Master Chefs",
      text: "From head cooks who treat meals like sacred rituals...",
      description:
        "Our chefs bring generations of culinary wisdom to every dish, blending traditional techniques with modern creativity.",
      img: "https://res.cloudinary.com/diqbtmjui/image/upload/v1749580840/chiefsaaiskitchen_pv7402.png",
    },
    {
      title: "Menu Crafters",
      text: "Our menu planners design meals with care and love.",
      description:
        "Each menu is carefully curated to balance nutrition, flavor, and seasonal availability for the perfect dining experience.",
      img: "https://res.cloudinary.com/diqbtmjui/image/upload/v1749580837/menuPlanner_pcubsw.png",
    },
    {
      title: "Quality Guardians",
      text: "Our quality control team ensures every bite is perfect.",
      description:
        "From farm to table, we maintain rigorous standards to guarantee freshness, safety, and exceptional taste in every meal.",
      img: "https://res.cloudinary.com/diqbtmjui/image/upload/v1749580857/qualitycontrol_i7znlq.png",
    },
    {
      title: "Kitchen Caretakers",
      text: "And helpers who keep kitchens sparkling clean and warm.",
      description:
        "Our sanitation team works tirelessly to maintain impeccable hygiene standards, creating a welcoming environment for both staff and food preparation.",
      img: "https://res.cloudinary.com/diqbtmjui/image/upload/v1749580855/workersaaiskitchen_gll77j.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamVisuals.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [teamVisuals.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamVisuals.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamVisuals.length) % teamVisuals.length);
  };

  return (
    <section id="team" className="py-12 px-4 scroll-mt-18 sm:px-6 lg:px-8 bg-[#f8f9f0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#154313] tracking-tight">
            It's Not Just a Kitchen — It's Aai's Kitchen
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#8bc34a] to-[#4a7c20] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-[#154313] text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Our team isn't made of faceless contractors. It's made of people who believe in food with emotion.
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-8 md:mt-12 relative">
          <div className="flex flex-col md:flex-row h-[500px] md:h-[400px] bg-[#f8f9f0] rounded-xl shadow-lg overflow-hidden">
            {/* Image Side */}
            <div className="w-full md:w-1/2  relative h-[250px] md:h-full">
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                {teamVisuals.map((item, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      idx === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full  object-cover object-center"
                      style={{ objectPosition: "center 30%" }} // Adjust this to show the same part of image
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full cursor-pointer shadow-md hover:bg-white transition-all z-10 md:p-1.5"
              >
                <FiChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-[#154313]" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 cursor-pointer rounded-full shadow-md hover:bg-white transition-all z-10 md:p-1.5"
              >
                <FiChevronRight className="w-4 h-4 md:w-5 md:h-5 text-[#154313]" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {teamVisuals.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      idx === currentSlide ? "bg-[#8bc34a] w-4" : "bg-white/60"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center h-[250px] md:h-full">
              <div className="relative w-full h-full overflow-y-auto">
                {teamVisuals.map((item, idx) => (
                  <div
                    key={idx}
                    className={`absolute transition-opacity duration-500 w-full ${
                      idx === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <h3 className="text-lg md:text-2xl font-bold text-[#154313] mb-2 md:mb-3">{item.title}</h3>
                    <p className="text-base md:text-xl text-[#154313] italic relative pl-4 md:pl-6 py-1 leading-relaxed">
                      <span className="absolute left-0 top-0 text-3xl md:text-4xl text-[#8bc34a] font-serif leading-none">"</span>
                      {item.text}
                    </p>
                    <div className="mt-3 md:mt-4 h-0.5 w-10 md:w-12 bg-gradient-to-r from-[#8bc34a] to-[#4a7c20] mb-3 md:mb-4" />
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="mt-10 md:mt-16 text-center max-w-3xl mx-auto relative bg-[#f8f9f0] backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-md border border-[#8bc34a]/20">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#8bc34a] p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-base md:text-lg text-[#154313] italic mb-3 md:mb-4 leading-relaxed">
            Every part of our service is built around trust and taste
          </p>
          <p className="text-lg md:text-xl font-bold text-[#154313] bg-gradient-to-r from-[#8bc34a] to-[#4a7c20] bg-clip-text text-transparent">
            When you eat with Aai's Kitchen, you're not just fed — you're cared for.
          </p>
        </div>
      </div>
    </section>
  );
};