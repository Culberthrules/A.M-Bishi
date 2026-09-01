import { SITE } from '../constants/site';

/**
 * Footer Component
 * Company info, registration, contact emails, social icons, and copyright.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const emailLinks = [
    { label: 'Enquiries', address: SITE.emails.enquiry },
    { label: 'General Info', address: SITE.emails.info },
    { label: 'Sales', address: SITE.emails.sales },
    { label: 'Support', address: SITE.emails.support },
    { label: 'Contact', address: SITE.emails.contact },
  ];

  const quickLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About Us', target: 'about' },
    { label: 'Products', target: 'products' },
    { label: 'Certifications', target: 'certifications' },
    { label: 'Reviews', target: 'reviews' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <footer className="bg-forest-950 text-cream-300 relative overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-forest-800 via-gold-500 to-forest-800" />

      {/* High-Contrast Closing CTA Banner */}
      <div className="bg-gradient-to-r from-forest-900 via-forest-800 to-forest-900 border-b border-white/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="font-mono text-xs text-gold-400 font-semibold uppercase tracking-[0.2em] bg-gold-500/10 border border-gold-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Start Your Trade Inquiry
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to trade without the guesswork?
          </h2>
          <p className="text-cream-200/80 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Access lab-verified certificate parameters and request competitive bulk export quotes directly from <strong className="text-gold-400">AMA BISHI LTD</strong>.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-forest-950 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/30 hover:-translate-y-0.5"
          >
            Make an Inquiry
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 – Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-serif text-2xl font-bold text-gold-500">
                {SITE.name}
              </span>
              <p className="text-xs text-cream-400 tracking-[0.15em] uppercase mt-0.5">
                {SITE.tagline}
              </p>
            </div>
            <p className="text-sm text-cream-400/80 leading-relaxed max-w-md mb-6">
              Proudly showcasing Africa's finest natural products to the world.
              Premium quality ingredients sourced with integrity and care.
            </p>

            {/* Registration */}
            <div className="space-y-2 text-xs text-cream-400">
              <div className="flex items-center gap-2">
                <span className="inline-flex w-5 h-3.5 rounded-sm overflow-hidden shrink-0">
                  <span className="w-1/3 bg-green-600" />
                  <span className="w-1/3 bg-white" />
                  <span className="w-1/3 bg-green-600" />
                </span>
                <span>
                  {SITE.registration.nigeria.country} — Reg. No. {SITE.registration.nigeria.number}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base shrink-0">🇬🇧</span>
                <span>
                  {SITE.registration.uk.country} — Reg. No. {SITE.registration.uk.number}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-5 tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.target}>
                  <a
                    href={`#${link.target}`}
                    className="text-sm text-cream-400 hover:text-gold-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-gold-400 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Contact & Social */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-5 tracking-wide uppercase">
              Contact
            </h3>
            <div className="space-y-3 mb-6">
              <a
                href={SITE.phone.href}
                className="flex items-center gap-3 text-sm text-cream-400 hover:text-gold-400 transition-colors duration-300"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {SITE.phone.display}
              </a>
              {emailLinks.map(({ label, address }) => (
                <a
                  key={address}
                  href={`mailto:${address}`}
                  className="flex items-center gap-3 text-sm text-cream-400 hover:text-gold-400 transition-colors duration-300"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>
                    <span className="text-cream-500 text-xs block">{label}</span>
                    {address}
                  </span>
                </a>
              ))}
            </div>

            <h3 className="font-semibold text-white text-sm mb-4 tracking-wide uppercase">
              Follow Us
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/5 hover:bg-gold-500 border border-white/10 hover:border-gold-500 rounded-lg flex items-center justify-center text-cream-400 hover:text-forest-950 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/5 hover:bg-gold-500 border border-white/10 hover:border-gold-500 rounded-lg flex items-center justify-center text-cream-400 hover:text-forest-950 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-white/5 hover:bg-gold-500 border border-white/10 hover:border-gold-500 rounded-lg flex items-center justify-center text-cream-400 hover:text-forest-950 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/4477300396424`}
                aria-label="WhatsApp"
                className="w-10 h-10 bg-white/5 hover:bg-gold-500 border border-white/10 hover:border-gold-500 rounded-lg flex items-center justify-center text-cream-400 hover:text-forest-950 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream-500">
            © {currentYear} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-cream-600">
            {SITE.tagline} — Premium Quality Ingredients
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
