import { useEffect, useRef, useState } from 'react';
import { CERTIFICATES, type Certificate } from '../constants/site';

/**
 * Certifications Section
 * Displays quality certificates and lab analysis documents with a lightbox viewer.
 */
const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

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

  // Close lightbox on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCert(null);
    };
    if (activeCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeCert]);

  return (
    <>
      <section
        id="certifications"
        ref={sectionRef}
        className="py-24 lg:py-32 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold-500" />
              <span className="text-gold-600 text-xs tracking-[0.2em] uppercase font-semibold">
                Quality Assurance
              </span>
              <span className="w-10 h-px bg-gold-500" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mb-4">
              Our Certifications
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Every product meets rigorous international standards, backed by independent
              laboratory testing and export-quality specifications.
            </p>
          </div>

          {/* Certificate Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {CERTIFICATES.map((cert, index) => (
              <button
                key={cert.src}
                type="button"
                onClick={() => setActiveCert(cert)}
                className={`group text-left bg-cream-50 rounded-2xl overflow-hidden border border-forest-100 shadow-lg shadow-forest-900/5 transition-all duration-700 hover:shadow-xl hover:shadow-forest-900/10 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 200}ms` : '0ms' }}
                aria-label={`View ${cert.title}`}
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-forest-950/0 group-hover:bg-forest-950/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-forest-800 text-sm font-medium px-4 py-2 rounded-full shadow-lg">
                      View Certificate
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-forest-800 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-forest-900 mb-1 group-hover:text-gold-600 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-gold-600 font-medium mb-2">{cert.issuer}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeCert && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={activeCert.title}
        >
          <button
            type="button"
            className="absolute inset-0 bg-forest-950/80 backdrop-blur-sm"
            onClick={() => setActiveCert(null)}
            aria-label="Close certificate viewer"
          />
          <div className="relative z-10 max-w-4xl w-full max-h-[90vh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <h3 className="font-serif text-lg font-bold text-forest-900">{activeCert.title}</h3>
                <p className="text-sm text-gold-600">{activeCert.issuer}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="w-10 h-10 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="overflow-auto flex-1 bg-gray-50 p-4">
              <img
                src={activeCert.src}
                alt={activeCert.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certifications;
