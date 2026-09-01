import { useEffect, useRef, useState } from 'react';

/**
 * Value Proposition Component (N°04)
 * Focused feature callout emphasizing the elimination of physical sampling cost & waste
 * by leveraging lab-issued quality certificates.
 */
const ValueProposition = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: 'Zero Physical Sampling Cost & Waste',
      description:
        'Save thousands in international freight, sample shipping delays, and wasted agricultural produce by relying on verified digital lab analysis certificates.',
      icon: (
        <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Accredited Independent Laboratory Reports',
      description:
        'Every batch is independently tested for purity, moisture level, oil content, and foreign matter by certified laboratories prior to offering.',
      icon: (
        <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: 'Accelerated Procurement Timeline',
      description:
        'Eliminate weeks of back-and-forth sample shipping. Instant access to lot certificates allows you to confirm contracts with complete confidence.',
      icon: (
        <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="value-prop"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-forest-900 text-white relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Value Proposition Summary */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold-500" />
              <span className="text-gold-400 text-xs tracking-[0.25em] uppercase font-mono font-semibold">
                N°04 — Value Proposition
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Trade Smarter.{' '}
              <span className="text-gold-400 italic block">Eliminate Waste.</span>
            </h2>

            <p className="text-cream-200/90 text-base lg:text-lg leading-relaxed mb-8">
              Traditional commodity trading relies on slow, expensive physical sampling. At{' '}
              <strong className="text-gold-400 font-semibold">AMA BISHI LTD</strong>, we provide
              transparent, accredited lab testing results up front — giving global buyers complete quality certainty before placing an order.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-mono px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                Lab Verified
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-cream-200 text-xs font-mono px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                100% Lab-Tested Lots
              </span>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 bg-gold-600 hover:bg-gold-500 text-forest-950 font-bold px-7 py-3.5 rounded-full text-base transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30"
            >
              Make an Inquiry
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Right Column: Feature Cards Stack */}
          <div
            className={`lg:col-span-7 space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-forest-950/80 backdrop-blur-md border border-white/10 hover:border-gold-500/40 rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:shadow-xl hover:shadow-gold-500/5 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/30 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 group-hover:border-gold-400 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-cream-300/80 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
