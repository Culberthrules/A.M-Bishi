import { useEffect, useRef, useState } from 'react';

/**
 * Review data – 3 customer testimonials with star ratings.
 */
interface Review {
  id: number;
  name: string;
  location: string;
  quote: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Ada Okonkwo',
    location: 'Lagos, Nigeria',
    quote:
      'A.M.A BISHI\'s raw honey is absolutely exceptional — pure, rich, and nothing like what you find in most stores. Their commitment to quality is evident in every jar. Truly the gold standard of African naturals.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Bennett',
    location: 'London, United Kingdom',
    quote:
      'I\'ve been sourcing dried hibiscus and sesame seeds from A.M.A BISHI for my restaurant. The quality is consistently outstanding and the communication is always professional. Highly recommended.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Nkechi Eze',
    location: 'Abuja, Nigeria',
    quote:
      'From the arabic gum to the cassava flour, everything from A.M.A BISHI meets the highest standards. They are bridging Africa to the world with integrity and authenticity. A truly remarkable company.',
    rating: 5,
  },
];

/**
 * Star rating component – renders filled stars with a gold color.
 */
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-gold-500' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

/**
 * Reviews / Testimonials Section Component
 * Elegant review cards with star ratings, quotes, and reviewer info.
 */
const Reviews = () => {
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

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-cream-100 relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-60" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest-50 rounded-full translate-y-1/2 -translate-x-1/2 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold-500" />
            <span className="text-gold-600 text-xs tracking-[0.2em] uppercase font-semibold">
              Testimonials
            </span>
            <span className="w-10 h-px bg-gold-500" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Trusted by businesses and individuals across Africa and the UK
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`bg-white rounded-2xl p-8 shadow-lg shadow-forest-900/5 border border-forest-100/50 transition-all duration-700 hover:shadow-xl hover:shadow-forest-900/10 hover:-translate-y-1 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 200}ms` : '0ms' }}
            >
              {/* Quote Icon */}
              <div className="mb-5">
                <svg
                  className="w-10 h-10 text-gold-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>
              </div>

              {/* Star Rating */}
              <StarRating rating={review.rating} />

              {/* Quote */}
              <blockquote className="mt-5 mb-6 text-gray-600 leading-relaxed text-[15px] italic">
                "{review.quote}"
              </blockquote>

              {/* Reviewer Info */}
              <div className="border-t border-gray-100 pt-5 flex items-center gap-3">
                {/* Avatar placeholder with initials */}
                <div className="w-11 h-11 rounded-full bg-forest-800 flex items-center justify-center text-gold-400 font-semibold text-sm shrink-0">
                  {review.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="font-semibold text-forest-900 text-sm">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
