import { useEffect, useRef, useState } from 'react';
import { SITE } from '../constants/site';

/**
 * About Section Component
 * Company description with registration badges and side image.
 */
const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-cream-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-gold-500" />
              <span className="text-gold-600 text-xs tracking-[0.2em] uppercase font-semibold">
                About Us
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mb-6 leading-tight">
              Authentic African Naturals,{' '}
              <span className="text-gold-600 italic">Trusted Worldwide.</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                A.M.A BISHI is a proudly African company dedicated to sourcing and
                showcasing the finest natural products from across the continent. From
                the rich, golden honey harvested in rural apiaries to the vibrant
                hibiscus petals dried under the African sun, every product we represent
                embodies purity, quality, and authenticity.
              </p>
              <p>
                Registered in both Nigeria and the United Kingdom, we bridge two
                continents to bring Africa's best natural ingredients to the global
                stage. Our commitment to quality ensures that every product meets
                international standards while preserving the traditional methods that
                make African naturals truly exceptional.
              </p>
            </div>

            {/* Registration Badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-sm border border-forest-100">
                <span className="inline-flex w-8 h-5.5 rounded overflow-hidden shadow-sm">
                  <span className="w-1/3 bg-green-600"></span>
                  <span className="w-1/3 bg-white"></span>
                  <span className="w-1/3 bg-green-600"></span>
                </span>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Registered in {SITE.registration.nigeria.country}</p>
                  <p className="text-sm font-semibold text-forest-800">Reg. No. {SITE.registration.nigeria.number}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-sm border border-forest-100">
                <span className="text-2xl">🇬🇧</span>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Registered in {SITE.registration.uk.country}</p>
                  <p className="text-sm font-semibold text-forest-800">Reg. No. {SITE.registration.uk.number}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Decorative background shape */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-gold-100 rounded-2xl" />
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-forest-200 rounded-2xl" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-forest-900/10">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
                alt="Collection of natural African produce and ingredients"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-forest-800 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-forest-900 text-sm">Quality Assured</p>
                    <p className="text-xs text-gray-500">International standards, African excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
