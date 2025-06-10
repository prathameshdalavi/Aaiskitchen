export const WeSawSection = () => {
  return (
    <section id="we-saw" className="pt-16 md:pt-20 scroll-mt-16 pb-6 md:pb-8 px-4 sm:px-6 lg:px-8 bg-[#f8f9f0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#154313]">
            The Problem We Saw
          </h2>
          <div className="w-12 md:w-16 h-1 bg-[#8bc34a] mx-auto mt-2 rounded-full" />
          <div className="mt-2 text-[#154313] text-base md:text-lg">
            Not Just Bad Food — It's a Daily Struggle 
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
          {/* Problem Illustration - Shows first on mobile, first on desktop */}
          <div className="relative order-1 md:order-1">
            <div className="rounded-lg md:rounded-xl overflow-hidden h-48 md:h-64 lg:h-80">
              <img
                src="https://res.cloudinary.com/diqbtmjui/image/upload/v1749580828/problem-illustration_eoj9aa.png"
                alt="Unhappy students with cafeteria food"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 -inset-1 md:-inset-2 bg-[#e9f7ef] rounded-lg md:rounded-xl"></div>
          </div>

          {/* Problem Description - Shows second on mobile, second on desktop */}
          <div className="space-y-3 md:space-y-4 order-2 md:order-2">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                  Meals cooked for cost, not care
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mt-1">
                  Food prepared with budget as priority, sacrificing quality and nutrition.
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                  Kitchens with more stains than standards
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mt-1">
                  Unhygienic cooking environments compromising food safety and quality.
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                  No feedback taken. No one listening.
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mt-1">
                  Student complaints and suggestions falling on deaf ears with no improvement.
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
                  Food that drained you, instead of fueling you
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mt-1">
                  Meals lacking proper nutrition that left students tired rather than energized.
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
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                  Same monotonous menu every day
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mt-1">
                  Lack of variety in meals leading to food fatigue and reduced appetite.
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
                    d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                  No transparency in billing
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mt-1">
                  Hidden costs and unclear breakdowns of meal charges with no accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};