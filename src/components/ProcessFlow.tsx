import { useEffect, useRef, useState } from 'react';

/**
 * Process Flow Component (N°03)
 * 4-step linear progression explaining the frictionless transaction model:
 * Inquire -> Review Certificate -> Verification -> Deal Confirmed
 */
const ProcessFlow = () => {
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

  const steps = [
    {
      number: '01',
      title: 'Inquire',
      subtitle: 'Specify Requirements',
      description:
        'Submit your commodity type, quantity, and spec requirements through our simple inquiry portal.',
      icon: (
        <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Review Certificate',
      subtitle: 'Lab Analysis Access',
      description:
        'Instantly review comprehensive lab-issued quality test certificates before commitment.',
      icon: (
        <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Verification',
      subtitle: 'Batch Specs Match',
      description:
        'Cross-verify lot data and compliance parameters without spending time or money on physical samples.',
      icon: (
        <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Deal Confirmed',
      subtitle: 'Frictionless Trade',
      description:
        'Finalize transparent contract terms and proceed directly to logistics and global export fulfillment.',
      icon: (
        <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-forest-950 text-white relative overflow-hidden"
    >
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-forest-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold-500/60" />
            <span className="text-gold-400 text-xs tracking-[0.25em] uppercase font-mono font-semibold">
              N°03 — Process Flow
            </span>
            <span className="w-10 h-px bg-gold-500/60" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frictionless B2B Transaction Model
          </h2>
          <p className="text-cream-200/80 text-lg max-w-2xl mx-auto font-sans">
            How we eliminate sample delays, reduce risk, and streamline agricultural commodity trade.
          </p>
        </div>

        {/* 4-Step Process Progression */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-700 hover:bg-white/10 hover:border-gold-500/40 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${idx * 150}ms` : '0ms' }}
            >
              {/* Connector line for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gold-500/30 z-20" />
              )}

              {/* Step Badge Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-2xl font-bold text-gold-500/90 group-hover:text-gold-400 transition-colors">
                  {step.number}
                </span>
                <div className="w-12 h-12 bg-forest-900 border border-gold-500/30 rounded-xl flex items-center justify-center shadow-inner group-hover:border-gold-400 transition-colors">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-bold text-white mb-1 group-hover:text-gold-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-xs text-gold-400/80 font-mono uppercase tracking-wider mb-4">
                {step.subtitle}
              </p>
              <p className="text-cream-300/75 text-sm leading-relaxed">
                {step.description}
              </p>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
