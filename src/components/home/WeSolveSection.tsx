export const WeSolveSection = () => {
  return (
    <section id="we-solve" className="pt-12 md:pt-16 pb-6 md:pb-8 px-4 scroll-mt-10 sm:px-6 lg:px-8 bg-[#f8f9f0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#154313]">
            How We Solve It
          </h2>
          <div className="w-12 md:w-16 h-1 bg-[#8bc34a] mx-auto mt-2 rounded-full" />
          <div className="mt-2 text-[#154313] text-base md:text-lg">
            Delivering Quality, Transparency, and Satisfaction
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
          {/* Solution Illustration - Shows first on mobile, second on desktop */}
          <div className="relative order-1 md:order-2">
            <div className="rounded-lg md:rounded-xl overflow-hidden h-48 md:h-64 lg:h-80">
              <img
                src="https://res.cloudinary.com/diqbtmjui/image/upload/v1749580859/wesolve_a9xd4x.png"
                alt="Happy students enjoying quality food"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 -inset-1 md:-inset-2 bg-[#e9f7ef] rounded-lg md:rounded-xl"></div>
          </div>

          {/* Solution Description - Shows second on mobile, first on desktop */}
          <div className="space-y-3 md:space-y-4 order-2 md:order-1">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-[#e9f7ef] p-1 md:p-1.5 rounded-md mr-2 md:mr-3">
                <svg
                  className="h-4 w-4 md:h-5 md:w-5 text-[#154313]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                  Nutritious & delicious meals
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mt-1">
                  Tasty food prepared by skilled chefs using quality ingredients, proving healthy can be flavorful too.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-[#e9f7ef] p-1 md:p-1.5 rounded-md mr-2 md:mr-3">
                <svg
                  className="h-4 w-4 md:h-5 md:w-5 text-[#154313]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                  Certified hygienic kitchens
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mt-1">
                  Regular audits and strict hygiene protocols ensure food safety at every step.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-[#e9f7ef] p-1 md:p-1.5 rounded-md mr-2 md:mr-3">
                <svg
                  className="h-4 w-4 md:h-5 md:w-5 text-[#154313]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                  Real-time feedback system
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mt-1">
                  Digital platform for instant feedback and weekly menu adjustments based on preferences.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-[#e9f7ef] p-1 md:p-1.5 rounded-md mr-2 md:mr-3">
                <svg
                  className="h-4 w-4 md:h-5 md:w-5 text-[#154313]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                  Energy-boosting meals
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mt-1">
                  Balanced macros and superfood ingredients to keep you energized throughout the day.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-[#e9f7ef] p-1 md:p-1.5 rounded-md mr-2 md:mr-3">
                <svg
                  className="h-4 w-4 md:h-5 md:w-5 text-[#154313]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                  Diverse rotating menu
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mt-1">
                  4-week rotating menu with seasonal specialties to keep meals exciting and varied.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-[#e9f7ef] p-1 md:p-1.5 rounded-md mr-2 md:mr-3">
                <svg
                  className="h-4 w-4 md:h-5 md:w-5 text-[#154313]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                  Transparent billing
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mt-1">
                  Itemized receipts and clear pricing breakdowns so you know exactly what you're paying for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};