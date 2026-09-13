import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SlidingBanner from './SlidingBanner';

/**
 * Header Component
 * Sticky navigation with logo, nav links, country flags, and mobile hamburger menu.
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Products', to: '/products' },
    { label: 'Process', to: '/process' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Contact', to: '/contact' },
  ];

  const galleryLinks = [
    { label: 'Product Knowledge', to: '/product-knowledge' },
    { label: 'Certifications', to: '/certifications' },
    { label: 'Reviews', to: '/reviews' },
  ];

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-forest-950/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <SlidingBanner />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex flex-col group" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold bg-gold-500 text-forest-950 px-2 py-0.5 rounded tracking-[0.15em]">
                AB
              </span>
              <span className="text-lg lg:text-2xl font-semibold text-white tracking-wide group-hover:text-gold-400 transition-colors">
                AMA BISHI LTD
              </span>
            </div>
            <span className="text-[10px] lg:text-xs text-gold-400/80 tracking-[0.2em] uppercase mt-0.5">
              Pure African Naturals
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium text-cream-200 hover:text-gold-400 transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-cream-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <span className="inline-flex w-4 h-3 rounded-sm overflow-hidden shadow-sm">
                <span className="w-1/3 bg-green-600"></span>
                <span className="w-1/3 bg-white"></span>
                <span className="w-1/3 bg-green-600"></span>
              </span>
              <span className="text-sm leading-none">🇬🇧</span>
              <span className="text-[11px]">Nigeria & UK</span>
            </div>

            <Link
              to="/contact"
              className="bg-gold-600 hover:bg-gold-500 text-forest-950 font-bold text-sm px-5 py-2.5 rounded-full transition-colors"
            >
              Make an Inquiry
            </Link>
          </div>

          <button
            id="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`block w-5 h-0.5 bg-cream-200 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-5 h-0.5 bg-cream-200 rounded-full mt-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-cream-200 rounded-full mt-1 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[42rem] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="bg-forest-950/98 backdrop-blur-lg border-t border-white/10 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <div key={link.to}>
              {link.label === 'Gallery' ? (
                <div className="rounded-lg border border-white/10 bg-white/3">
                  <div className="px-4 py-3 text-cream-200 font-medium">{link.label}</div>
                  <div className="px-2 pb-2 space-y-1">
                    {galleryLinks.map((innerLink) => (
                      <Link
                        key={innerLink.to}
                        to={innerLink.to}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-cream-200 hover:text-gold-400 hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {innerLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-cream-200 hover:text-gold-400 hover:bg-white/5 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-gold-600 hover:bg-gold-500 text-forest-950 font-bold py-3 rounded-xl transition-colors"
            >
              Make an Inquiry
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
