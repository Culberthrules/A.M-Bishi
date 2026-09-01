/**
 * Hero Section Component
 * Full-screen hero with background image, headline, subtitle, and CTA button.
 */
const Hero = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-950 pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1920&q=80"
          alt="Lush African farmland at golden hour"
          className="w-full h-full object-cover opacity-35"
          loading="eager"
        />
        {/* Gradient overlays for high legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/90 via-forest-950/80 to-forest-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/60 via-transparent to-forest-950/60" />
      </div>

      {/* Decorative lighting glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-forest-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 lg:py-28">
        {/* Section Index & Trust Badge Header */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 animate-fade-in">
          <span className="font-mono text-xs text-gold-400 font-bold bg-gold-500/10 border border-gold-500/30 px-3 py-1 rounded-full uppercase tracking-widest">
            01 — AMA BISHI LTD
          </span>
          <span className="hidden sm:inline text-gold-500/40">•</span>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-forest-900/90 border border-emerald-500/40 text-emerald-300 text-xs font-mono px-3 py-1 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              LAB VERIFIED
            </span>
            <span className="inline-flex items-center gap-1.5 bg-forest-900/90 border border-gold-500/40 text-gold-300 text-xs font-mono px-3 py-1 rounded-full shadow-sm">
              100% LAB-TESTED LOTS
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up leading-[1.1] tracking-tight">
          Trade without the <span className="text-gold-400 italic font-serif">guesswork.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-xl text-cream-200/90 max-w-3xl mx-auto mb-6 animate-fade-in-up animate-delay-200 leading-relaxed font-sans">
          Premium African agricultural commodities sourced directly from Northern Nigeria with accredited laboratory certificates on file. Zero physical sample waste, zero friction.
        </p>

        <p className="text-xs sm:text-sm text-gold-400/80 uppercase font-mono tracking-wider mb-10 animate-fade-in-up animate-delay-300">
          Display & B2B Inquiry Portal • Direct Bulk Supply
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-400">
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold-600 hover:bg-gold-500 text-forest-950 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            Make an Inquiry
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a
            href="#products"
            onClick={(e) => handleScrollTo(e, 'products')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 backdrop-blur-sm hover:border-gold-400/50"
          >
            View Products
            <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Bottom scroll hint */}
        <div className="mt-16 animate-fade-in animate-delay-600">
          <a
            href="#products"
            onClick={(e) => handleScrollTo(e, 'products')}
            className="inline-flex flex-col items-center gap-2 text-cream-300/60 hover:text-gold-400 transition-colors group"
          >
            <span className="text-xs tracking-widest uppercase font-mono">Explore Catalog</span>
            <div className="w-6 h-10 border-2 border-cream-300/30 group-hover:border-gold-400/60 rounded-full flex justify-center pt-2 transition-colors">
              <div className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
