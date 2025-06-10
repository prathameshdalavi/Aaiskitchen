export const ContactUsSection = () => {
  const founders = [
    {
      name: "Swanand Bhosale",
      role: "Co-Founder",
      image: "https://res.cloudinary.com/diqbtmjui/image/upload/v1749580835/swanand_qwqzoj.png",
      email: "swanandbhosale25@gmail.com",
      contact: "+91 9209361798",
    },
    {
      name: "Shlok Khode",
      role: "Co-Founder",
      image: "https://res.cloudinary.com/diqbtmjui/image/upload/v1749580857/shlok_wliuay.png",
      email: "shlokhode11@gmail.com",
      contact: "+91 9767769226",
    },
  ];

  return (
    <section
      className="bg-gradient-to-br from-[#f0f7ed] to-[#e2efe0] py-10 px-4 sm:px-6 scroll-mt-10 md:px-12 min-h-screen flex items-center"
      id="contact"
    >
      <div className="max-w-6xl mx-auto w-full text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#154313] mb-2">
          Get in Touch With Us
        </h2>
        <div className="w-14 sm:w-16 h-1.5 bg-gradient-to-r from-[#8bc34a] to-[#4a7c20] mx-auto rounded-full mb-4" />
        <p className="text-base sm:text-lg text-[#154313] mb-8 max-w-xl mx-auto leading-relaxed px-2">
          We're here to answer any questions you may have about our services or partnership opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className="bg-[#f8f9f0] rounded-3xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center border border-[#8bc34a]/30 hover:shadow-xl transition-all"
            >
              <img
                src={founder.image}
                alt={founder.name}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mb-4 border-4 border-[#8bc34a]/40 shadow-md"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-[#154313] mb-1">
                {founder.name}
              </h3>
              <p className="text-[#4a7c20] font-medium mb-2">{founder.role}</p>
              <p className="text-gray-700 text-sm">
                ✉️{" "}
                <a
                  href={`mailto:${founder.email}`}
                  className="hover:underline text-[#154313] break-words"
                >
                  {founder.email}
                </a>
              </p>
              <p className="text-gray-700 text-sm mt-1">📞 {founder.contact}</p>
            </div>
          ))}
        </div>

        {/* General Contact Section */}
        <div className="mt-12 sm:mt-16 text-[#154313] max-w-xl mx-auto px-2">
          <p className="text-base sm:text-lg leading-relaxed">
            Prefer a general inquiry? Just drop us a mail at{" "}
            <a
              href="mailto:aaiskitchen2025@gmail.com"
              className="text-[#4a7c20] font-medium underline hover:text-[#366a1f]"
            >
              aaiskitchen2025@gmail.com
            </a>{" "}
            — we'll get back to you as soon as possible!
          </p>
        </div>
      </div>
    </section>
  );
};
