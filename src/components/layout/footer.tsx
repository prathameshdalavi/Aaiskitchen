import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0d3a0b] to-[#154313] text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start">
              <img
                src="https://res.cloudinary.com/diqbtmjui/image/upload/v1749580839/whitelogo_wq2hti.png"
                alt="Aais Kitchen Logo"
                className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105 mb-4"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                Serving love on a plate since 2025. Bringing the taste of home to your hostel or nearby hostel.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-[#cdebc5]">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', link: '#home' },
                { label: 'Our Story', link: '#our-story' },
                { label: 'We Saw', link: '#we-saw' },
                { label: 'We Solve', link: '#we-solve' },
                { label: 'Team', link: '#team' },
                { label: 'Contact Us', link: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-[#cdebc5]">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#cdebc5] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs mb-1">Email</p>
                  <a 
                    href="mailto:aaiskitchen2025@gmail.com" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 break-all"
                  >
                    aaiskitchen2025@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#cdebc5] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs mb-1">Phone</p>
                  <div className="text-gray-300 space-y-1">
                    <a 
                      href="tel:+919209361798"
                      className="hover:text-white transition-colors duration-300 block"
                    >
                      +91 9209361798
                    </a>
                    <a 
                      href="tel:+919767769226"
                      className="hover:text-white transition-colors duration-300 block"
                    >
                      +91 9767769226
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Extra Logo Section */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end items-start">
            <div className="text-center lg:text-right">
              <img 
                src="https://res.cloudinary.com/diqbtmjui/image/upload/v1749580793/AAI_S_KITCHEN_FINAL_LOGO_Neatfitted-removebg-preview_uqw4xo.png" 
                alt="Secondary Aai's Kitchen Logo" 
                className="h-55 w-auto object-contain transition-transform duration-300 hover:scale-105 mx-auto lg:mx-0"
              />
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2a5c24] pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Aai's Kitchen. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-6">
              <a 
                href="#" 
                className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a 
                href="#contact" 
                className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};