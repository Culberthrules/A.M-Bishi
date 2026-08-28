/**
 * Hero Section Component
 * Full-screen hero with background image, headline, subtitle, and CTA button.
 */
const Hero = () => {
  const handleEnquiryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1920&q=80"
          alt="Lush African farmland at golden hour"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-900/60 to-forest-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/40 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-forest-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <span className="w-12 h-px bg-gold-500/60" />
          <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
            Premium Quality Since Day One
          </span>
          <span className="w-12 h-px bg-gold-500/60" />
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
          A.M.A BISHI
          <span className="block text-gold-500 mt-2 text-3xl sm:text-4xl lg:text-5xl font-normal italic">
            Pure African Naturals
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-cream-200/90 max-w-2xl mx-auto mb-4 animate-fade-in-up animate-delay-200 leading-relaxed">
          Premium quality ingredients sourced directly from the heart of Africa.
          Pure, natural, and trusted worldwide.
        </p>

        <p className="text-sm text-cream-300/70 mb-10 animate-fade-in-up animate-delay-300">
          Display & Enquiry only — We do not sell products online.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-up animate-delay-400">
          <a
            href="#contact"
            onClick={handleEnquiryClick}
            className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-forest-950 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            Send Enquiry
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-600">
          <div className="flex flex-col items-center gap-2 text-cream-300/50">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-cream-300/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-cream-300/50 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
