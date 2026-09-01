import { useState, useEffect } from 'react';

/**
 * Header Component
 * Sticky navigation with logo, nav links, country flags, and mobile hamburger menu.
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll for sticky header background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'Products', target: 'products' },
    { label: 'About', target: 'about' },
    { label: 'Process', target: 'process' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-forest-950/95 backdrop-blur-md border-b border-white/10 shadow-xl'
          : 'bg-gradient-to-b from-forest-950/90 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex flex-col group"
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold bg-gold-500 text-forest-950 px-2 py-0.5 rounded tracking-widest">
                AB
              </span>
              <span className="font-serif text-xl lg:text-2xl font-bold text-white tracking-wide group-hover:text-gold-400 transition-colors">
                AMA BISHI LTD
              </span>
            </div>
            <span className="text-[10px] lg:text-xs text-gold-400/80 tracking-[0.2em] uppercase font-mono mt-0.5">
              Pure African Naturals
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={`#${link.target}`}
                onClick={(e) => handleNavClick(e, link.target)}
                className="px-4 py-2 text-sm font-medium text-cream-200 hover:text-gold-400 transition-colors duration-300 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Country Registration Badge & Primary CTA (desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-cream-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <span className="inline-flex w-4 h-3 rounded-sm overflow-hidden shadow-sm">
                <span className="w-1/3 bg-green-600"></span>
                <span className="w-1/3 bg-white"></span>
                <span className="w-1/3 bg-green-600"></span>
              </span>
              <span className="text-sm leading-none">🇬🇧</span>
              <span className="text-cream-300 font-mono text-[11px]">Nigeria & UK</span>
            </div>

            {/* High-Contrast Primary CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="bg-gold-600 hover:bg-gold-500 text-forest-950 font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Make an Inquiry
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-cream-200 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-cream-200 rounded-full mt-1 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-cream-200 rounded-full mt-1 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-forest-950/98 backdrop-blur-lg border-t border-white/10 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              onClick={(e) => handleNavClick(e, link.target)}
              className="block px-4 py-3 text-cream-200 hover:text-gold-400 hover:bg-white/5 rounded-lg transition-all duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="block w-full text-center bg-gold-600 hover:bg-gold-500 text-forest-950 font-bold py-3 rounded-xl transition-all duration-300"
            >
              Make an Inquiry
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
