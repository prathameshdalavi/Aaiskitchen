import { useState, useEffect } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "Our Story", path: "#our-story" },
    { name: "We Saw", path: "#we-saw" },
    { name: "We Solve", path: "#we-solve" },
    { name: "Team", path: "#team" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f8f9f0]/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 max-w-[1800px] mx-auto">
          {/* Brand */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <img
                src="https://res.cloudinary.com/diqbtmjui/image/upload/v1749580795/mainlogo_kbajkv.png"
                alt="Aais Kitchen Logo"
                className="w-auto h-55 sm:h-55 md:h-60 lg:h-70 mt-4 object-contain transition-transform duration-300 "
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="relative px-3 py-2 text-gray-800 font-medium hover:text-[#154313] transition duration-300 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8bc34a] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-[#154313] text-white rounded-full font-medium hover:bg-[#1e5720] transition duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-[#154313] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#8bc34a] transition-all duration-200"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        menuOpen 
          ? 'max-h-96 opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible'
      } overflow-hidden`}>
        <div className="px-4 pt-2 pb-6 bg-[#f8f9f0] shadow-lg border-t border-gray-200">
          <div className="space-y-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.path}
                onClick={handleLinkClick}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-white hover:bg-[#8bc34a] transition-all duration-200 transform hover:translate-x-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-3 mt-3 border-t border-gray-200">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="block w-full px-4 py-3 bg-[#154313] text-white text-center rounded-lg font-medium hover:bg-[#1e5720] transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};