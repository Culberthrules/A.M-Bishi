import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Product data — streamlined cards showing source, price, and brief info.
 * Full details (description, benefits, storage, hygiene) appear in "Learn More" modal.
 */
interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  origin: string;
  quality: string;
  origin_detail: string;
  harvest_season: string;
  storage_info: string;
  hygiene_standards: string;
  quantity_available: string;
  price: string;
  video?: string;
  benefits: string[];
}

const products: Product[] = [
  {
    id: 'raw-honey',
    name: 'Raw Honey',
    description:
      'Pure unprocessed African honey, harvested from traditional apiaries. Rich in natural enzymes and antioxidants with an unforgettable golden flavor.',
    image: '/images/raw-honey.png',
    origin: 'Northern Nigeria',
    quality: 'Export-grade · Moisture controlled · Lab-tested',
    origin_detail:
      'Sourced from pristine beehives in the northern regions of Nigeria, where diverse wildflowers and vegetation produce exceptional honey with unique flavor profiles.',
    harvest_season: 'Year-round with peak harvest in dry season (November-March)',
    storage_info:
      'Store in airtight glass containers at room temperature (18-24°C). Honey naturally preserves itself indefinitely. Keep away from direct sunlight and moisture.',
    hygiene_standards:
      'Unfiltered, unheated, and unpasteurized. Meets international food safety standards. Sourced from registered apiaries with proper sanitation protocols.',
    quantity_available: '10,000kg - 25,000kg per month depending on season',
    price: 'Contact for pricing',
    benefits: ['Natural energy booster', 'Rich in antioxidants', 'Supports immunity', 'Pure and unprocessed'],
  },
  {
    id: 'sesame-seeds',
    name: 'Sesame Seeds',
    description:
      'Premium quality sesame seeds, carefully cleaned and sorted. Perfect for culinary use, oil extraction, and health products.',
    image: '/images/sesame-seeds.png',
    origin: 'Northern Nigeria',
    quality: 'Cleaned and sorted · Oil-rich · Aflatoxin tested',
    origin_detail:
      'Grown in the fertile soil of Northern Nigeria (Sokoto, Kebbi, and Niger states) where traditional farming methods ensure superior quality and taste.',
    harvest_season: 'August - October (main harvest), with secondary harvest November - December',
    storage_info:
      'Keep in cool, dry conditions (15-20°C, <70% humidity). Store in breathable bags to prevent moisture accumulation. Use food-grade containers for long-term storage. Shelf life: 12-18 months.',
    hygiene_standards:
      'Triple-cleaned and sorted. Tested for aflatoxins and pesticide residues. Packaged in food-grade, moisture-resistant containers. Complies with international food safety standards.',
    quantity_available: '15,000kg - 50,000kg per month',
    price: 'Contact for pricing',
    benefits: ['High in protein', 'Rich in minerals', 'Oil extraction ready', 'Traditional variety'],
  },
  {
    id: 'soya-beans',
    name: 'Soya Beans',
    description:
      'Nutritious whole soya beans grown in fertile African soils. High in protein and ideal for processing into a variety of food products.',
    image: '/images/soya-beans.png',
    origin: 'Northern Nigeria',
    quality: 'Non-GMO · Protein-rich · Food-grade quality',
    origin_detail:
      'Cultivated in the nutrient-rich agricultural zones of Northern Nigeria. Our soya beans are naturally grown without GMO modification, maintaining authentic nutritional value.',
    harvest_season: 'September - November (main season), with secondary harvests February-March',
    storage_info:
      'Store in sealed containers at 12-18°C with <65% humidity. Protect from pests and moisture. Use airtight bags with oxygen absorbers for extended storage (6-12 months). Keep away from direct light.',
    hygiene_standards:
      'Cleaned, sorted, and tested for contaminants. Packaged in food-grade bags. Non-GMO certified. Meets all international quality and food safety regulations.',
    quantity_available: '20,000kg - 60,000kg per month',
    price: 'Contact for pricing',
    benefits: ['High protein content', 'Non-GMO', 'Versatile processing', 'Long shelf life'],
  },
  {
    id: 'dried-hibiscus',
    name: 'Dried Hibiscus',
    description:
      'Vibrant, sun-dried hibiscus petals known locally as "Zobo." Perfect for teas, beverages, and natural food coloring with a tangy, cranberry-like flavor.',
    image: '/images/dried-hibiscus.png',
    origin: 'Northern Nigeria',
    quality: 'Sun-dried · Naturally vibrant · Additive-free',
    origin_detail:
      'Hand-harvested from hibiscus plants in Northern Nigeria. Sun-dried using traditional methods to preserve color, flavor, and nutritional properties.',
    harvest_season: 'August - November (peak season)',
    storage_info:
      'Store in airtight containers away from light and heat. Ideal storage: 15-20°C, <65% humidity. Keep away from strong odors as hibiscus absorbs aromas easily. Shelf life: 12-18 months when properly stored.',
    hygiene_standards:
      'Hand-sorted and cleaned. Free from additives and artificial colorants. Tested for microbial contamination. Packaged in food-grade materials with tamper-proof seals.',
    quantity_available: '10,000kg - 30,000kg per month',
    price: 'Contact for pricing',
    benefits: ['Natural antioxidants', 'Vitamin C rich', 'Traditional flavor', 'Natural food coloring'],
  },
  {
    id: 'arabic-gum',
    name: 'Arabic Gum',
    description:
      'Natural tree resin (acacia gum) sustainably harvested from the Sahel region. Widely used in food, pharmaceutical, and cosmetic industries.',
    image: '/images/arabic-gum.png',
    origin: 'Sahel Region (Northern Nigeria/Niger Border)',
    quality: 'Sustainable harvest · Clean grade · Consistent viscosity',
    origin_detail:
      'Collected from wild acacia trees in the Sahel, harvested using sustainable methods. This ancient natural product has been used for centuries across Africa.',
    harvest_season: 'December - May (dry season collection)',
    storage_info:
      'Keep in sealed containers at room temperature (18-24°C) in a dry environment (<60% humidity). Protect from moisture and contamination. Can be stored for several years without degradation.',
    hygiene_standards:
      'Raw gum is sorted and inspected for purity. Tested for heavy metals and microbial content. Meets Pharmacopeial standards. Packaged in food-grade containers.',
    quantity_available: '10,000kg - 25,000kg per month',
    price: 'Contact for pricing',
    benefits: ['Natural binder', 'Pharmaceutical grade', 'Sustainable harvesting', 'Centuries-old tradition'],
  },
  {
    id: 'cassava',
    name: 'Cassava',
    description:
      'High-quality cassava roots and processed flour. A staple crop of Africa, versatile for garri, fufu, starch production, and more.',
    image: '/images/cassava.png',
    origin: 'Northern Nigeria',
    quality: 'Fresh and processed · Stable supply · Food-safe handling',
    origin_detail:
      'Fresh cassava roots and flour from Northern Nigerian farms. Processed using traditional and modern methods to maintain nutritional integrity.',
    harvest_season: 'Year-round with peak production July - November',
    storage_info:
      'Fresh roots: Store at 12-15°C in humid conditions, use within 3-5 days. Cassava flour: Keep in sealed containers at 15-18°C, <65% humidity. Shelf life: 8-12 months. Protect from pests and moisture.',
    hygiene_standards:
      'Roots cleaned and inspected. Flour processed in food-grade facilities. Tested for cyanide levels (compliant with international standards). Packaged in food-grade bags.',
    quantity_available: 'Fresh roots: 10,000kg - 30,000kg weekly | Flour: 10,000kg - 30,000kg monthly',
    price: 'Contact for pricing',
    benefits: ['Versatile starch source', 'High carbohydrate content', 'Traditional staple', 'Year-round availability'],
  },
];

/**
 * Products Section Component
 * Streamlined product cards showing source and price on the face,
 * with full details accessible via "Learn More" modal.
 */
const Products = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showDetails, setShowDetails] = useState(false);

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
    navigate('/contact', { state: { productName } });
  };

  const handleLearnMore = (product: Product) => {
    setSelectedProduct(product);
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-forest-950 relative overflow-hidden"
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
            <span className="text-gold-400 text-xs tracking-[0.25em] uppercase font-semibold">
              Product Catalog
            </span>
            <span className="w-10 h-px bg-gold-500/60" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Export Commodities
          </h2>
          <p className="text-xl text-cream-200/80 max-w-2xl mx-auto">
            Pure African agricultural ingredients sourced directly from Northern Nigeria, selected for export quality and reliable supply.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-gold-500/40 hover:shadow-xl hover:shadow-gold-500/5 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
              </div>

              {/* Product Info — streamlined: name, source, price */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
                  {product.name}
                </h3>
                
                <div className="mb-4 pt-3 border-t border-white/10 space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-cream-300/60 font-medium">Source</span>
                    <span className="text-sm text-gold-400 font-semibold text-right">{product.origin}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-cream-300/60 font-medium">Price</span>
                    <span className="text-sm text-cream-200 font-medium text-right">{product.price}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-cream-300/60 font-medium">Quality</span>
                    <span className="text-sm text-cream-200 text-right">{product.quality}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleLearnMore(product)}
                    className="flex-1 px-3 py-2.5 text-sm font-semibold text-cream-50 bg-gold-500/20 hover:bg-gold-500/30 border border-gold-500/30 rounded-lg transition-colors duration-200"
                  >
                    Learn More
                  </button>
                  <a
                    href="#contact"
                    onClick={(e) => handleEnquiryClick(e, product.name)}
                    className="flex-1 px-3 py-2.5 text-sm font-semibold text-gold-400 hover:text-gold-300 border border-gold-400/30 hover:border-gold-400/60 rounded-lg transition-colors duration-200 text-center"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      {showDetails && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4 md:p-0">
          <div
            className={`bg-forest-950 border border-gold-500/20 rounded-2xl md:rounded-3xl w-full md:max-w-4xl max-h-[90vh] overflow-y-auto transition-all duration-300 ${
              showDetails ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-forest-950 border-b border-gold-500/20 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-1">
                  {selectedProduct.name}
                </h2>
                <p className="text-gold-400/80 text-sm">Origin: {selectedProduct.origin}</p>
              </div>
              <button
                onClick={closeDetails}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 space-y-8">
              {/* Main Description */}
              <div>
                <h3 className="text-xl font-bold text-gold-400 mb-3">About This Product</h3>
                <p className="text-cream-200 leading-relaxed mb-4">
                  {selectedProduct.description}
                </p>
                <p className="text-cream-300/80 leading-relaxed">
                  {selectedProduct.origin_detail}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <p className="text-xs uppercase tracking-[0.2em] text-cream-400 mb-2">Source</p>
                  <p className="text-cream-100 font-medium">{selectedProduct.origin}</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <p className="text-xs uppercase tracking-[0.2em] text-cream-400 mb-2">Price</p>
                  <p className="text-cream-100 font-medium">{selectedProduct.price}</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <p className="text-xs uppercase tracking-[0.2em] text-cream-400 mb-2">Quality</p>
                  <p className="text-cream-100 font-medium">{selectedProduct.quality}</p>
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h3 className="text-xl font-bold text-gold-400 mb-4">Key Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProduct.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-gold-500/10 border border-gold-500/20 rounded-lg"
                    >
                      <svg
                        className="w-5 h-5 text-gold-400 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-cream-200">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Harvest & Availability */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <h4 className="text-lg font-bold text-gold-400 mb-2">Harvest Season</h4>
                  <p className="text-cream-200">{selectedProduct.harvest_season}</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <h4 className="text-lg font-bold text-gold-400 mb-2">Quantity Available</h4>
                  <p className="text-cream-200 font-semibold text-lg">{selectedProduct.quantity_available}</p>
                </div>
              </div>

              {/* Storage Information */}
              <div>
                <h3 className="text-xl font-bold text-gold-400 mb-3">Proper Storage Guidelines</h3>
                <div className="p-4 bg-gold-500/10 border border-gold-500/30 rounded-xl">
                  <p className="text-cream-200 leading-relaxed">{selectedProduct.storage_info}</p>
                </div>
              </div>

              {/* Hygiene & Quality Standards */}
              <div>
                <h3 className="text-xl font-bold text-gold-400 mb-3">Quality & Hygiene Standards</h3>
                <div className="p-4 bg-forest-800/50 border border-forest-600/30 rounded-xl">
                  <p className="text-cream-200 leading-relaxed">{selectedProduct.hygiene_standards}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    closeDetails();
                    navigate('/contact', { state: { productName: selectedProduct.name } });
                  }}
                  className="flex-1 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold rounded-lg transition-colors duration-300"
                >
                  Make an Enquiry
                </button>
                <button
                  onClick={closeDetails}
                  className="flex-1 px-6 py-3 border border-gold-500/50 text-gold-400 hover:bg-gold-500/10 font-semibold rounded-lg transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
