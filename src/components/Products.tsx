import { useEffect, useRef, useState } from 'react';

/**
 * Product data for all 6 products displayed on the site.
 * Images are locally generated or from Unsplash as fallbacks.
 */
interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 'raw-honey',
    name: 'Raw Honey',
    description:
      'Pure unprocessed African honey, harvested from traditional apiaries. Rich in natural enzymes and antioxidants with an unforgettable golden flavor.',
    image: '/images/raw-honey.png',
  },
  {
    id: 'sesame-seeds',
    name: 'Sesame Seeds',
    description:
      'Premium quality sesame seeds, carefully cleaned and sorted. Perfect for culinary use, oil extraction, and health products.',
    image: '/images/sesame-seeds.png',
  },
  {
    id: 'soya-beans',
    name: 'Soya Beans',
    description:
      'Nutritious whole soya beans grown in fertile African soils. High in protein and ideal for processing into a variety of food products.',
    image: '/images/soya-beans.png',
  },
  {
    id: 'dried-hibiscus',
    name: 'Dried Hibiscus',
    description:
      'Vibrant, sun-dried hibiscus petals known locally as "Zobo." Perfect for teas, beverages, and natural food coloring with a tangy, cranberry-like flavor.',
    image: '/images/dried-hibiscus.png',
  },
  {
    id: 'arabic-gum',
    name: 'Arabic Gum',
    description:
      'Natural tree resin (acacia gum) sustainably harvested from the Sahel region. Widely used in food, pharmaceutical, and cosmetic industries.',
    image: '/images/arabic-gum.png',
  },
  {
    id: 'cassava',
    name: 'Cassava',
    description:
      'High-quality cassava roots and processed flour. A staple crop of Africa, versatile for garri, fufu, starch production, and more.',
    image: '/images/cassava.png',
  },
];

/**
 * Products Section Component
 * Responsive grid of product cards with enquiry links.
 */
const Products = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleEnquiryClick = (e: React.MouseEvent<HTMLAnchorElement>, productName: string) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Pre-select the product in the dropdown after a short delay for scroll
      setTimeout(() => {
        const select = document.getElementById('product-select') as HTMLSelectElement | null;
        if (select) {
          select.value = productName;
          select.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }, 800);
    }
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-forest-900 relative overflow-hidden"
    >
      {/* Decorative background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-gold-500 rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-gold-500 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold-500/50 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold-500/60" />
            <span className="text-gold-400 text-xs tracking-[0.2em] uppercase font-semibold">
              Our Collection
            </span>
            <span className="w-10 h-px bg-gold-500/60" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gold-400/80 font-serif italic">
            Pure. Natural. Authentic.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-700 hover:bg-white/10 hover:border-gold-500/30 hover:shadow-2xl hover:shadow-gold-500/10 hover:-translate-y-1 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              {/* Product Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-cream-300/70 text-sm leading-relaxed mb-5">
                  {product.description}
                </p>
                <a
                  href="#contact"
                  onClick={(e) => handleEnquiryClick(e, product.name)}
                  className="inline-flex items-center gap-2 text-gold-400 font-medium text-sm hover:text-gold-300 transition-all duration-300 group/link"
                >
                  Enquire about this product
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
