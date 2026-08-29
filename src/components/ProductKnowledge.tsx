import { useEffect, useRef, useState } from 'react';

/**
 * Product Gallery & Knowledge Section
 * Showcases all products with images and videos, plus educational details
 * about origin, storage, hygiene, and availability.
 */

interface ProductGalleryItem {
  id: string;
  product: string;
  type: 'image' | 'video';
  path: string;
  description?: string;
  duration?: string;
}

interface ProductEducation {
  product: string;
  origin: string;
  origin_detail: string;
  harvest_season: string;
  storage_info: string;
  hygiene_standards: string;
  quantity_available: string;
}

// Gallery items combining images and videos for each product
const galleryItems: ProductGalleryItem[] = [
  // Cassava
  {
    id: 'cassava-1',
    product: 'Cassava',
    type: 'video',
    path: '/videos/19b93041-35b8-474c-8936-51e7c656eede.MP4',
    description: 'Cassava: From Farm to Table',
    duration: '5:42',
  },
  {
    id: 'cassava-2',
    product: 'Cassava',
    type: 'video',
    path: '/videos/52e7bf7e-7b2c-4389-bd41-6670a5d50ebd.MP4',
    description: 'Cassava Processing Methods',
    duration: '6:15',
  },
  // Raw Honey
  {
    id: 'honey-1',
    product: 'Raw Honey',
    type: 'video',
    path: '/videos/28d2a013-d47b-42c6-984e-e5236d3d3b36.MP4',
    description: 'Raw Honey Production',
    duration: '6:30',
  },
  {
    id: 'honey-2',
    product: 'Raw Honey',
    type: 'video',
    path: '/videos/b2060645-6b00-48c9-81e2-ed71e2130525.MP4',
    description: 'Raw Honey: Ancient Harvesting Traditions',
    duration: '5:28',
  },
  // Dried Hibiscus
  {
    id: 'hibiscus-1',
    product: 'Dried Hibiscus',
    type: 'video',
    path: '/videos/edb33f4e-fed6-42b3-b5b6-7737a51cec05.MP4',
    description: 'Hibiscus Flower: Harvest & Processing',
    duration: '6:50',
  },
  // Sesame Seeds - Placeholder (to be updated when video is provided)
  {
    id: 'sesame-1',
    product: 'Sesame Seeds',
    type: 'image',
    path: '/images/sesame-seeds.png',
    description: 'Premium Sesame Seeds',
  },
  // Soya Beans - Placeholder (to be updated when video is provided)
  {
    id: 'soya-1',
    product: 'Soya Beans',
    type: 'image',
    path: '/images/soya-beans.png',
    description: 'High-Protein Soya Beans',
  },
];

// All images from videos folder
const productImages: ProductGalleryItem[] = [
  {
    id: 'img-1',
    product: 'Product Photos',
    type: 'image',
    path: '/videos/005aa14d-02b4-4478-aaee-818531745588.JPG',
  },
  {
    id: 'img-2',
    product: 'Product Photos',
    type: 'image',
    path: '/videos/03c5e27a-3659-405d-b42c-4d9072ada5c4.JPG',
  },
  {
    id: 'img-3',
    product: 'Product Photos',
    type: 'image',
    path: '/videos/097008b2-877f-4696-a03e-2c5f5bf01101.JPG',
  },
  {
    id: 'img-4',
    product: 'Product Photos',
    type: 'image',
    path: '/videos/0e3166c0-ed57-4579-a212-49766f7b1bc4.JPG',
  },
  {
    id: 'img-5',
    product: 'Product Photos',
    type: 'image',
    path: '/videos/11bda2dc-ea38-4c31-96ea-90d35bc8b869.JPG',
  },
  {
    id: 'img-6',
    product: 'Product Photos',
    type: 'image',
    path: '/videos/2eee404f-6f67-4bb8-8ce7-c07e7044495b.JPG',
  },
  {
    id: 'img-7',
    product: 'Product Photos',
    type: 'image',
    path: '/videos/38345c7f-b0a7-4027-b76f-c1acd3e37b5c.JPG',
  },
  {
    id: 'img-8',
    product: 'Product Photos',
    type: 'image',
    path: '/videos/39abe002-d612-4fd3-b6ac-5ff790a6e5ef.JPG',
  },
  {
    id: 'img-9',
    product: 'Product Photos',
    type: 'image',
    path: '/videos/3a683ac5-aec2-4097-b380-9937f6b70db0.JPG',
  },
  {
    id: 'img-10',
    product: 'Product Photos',
    type: 'image',
    path: '/videos/3a7880ef-e471-4717-af6d-cbc7d3fa809a.JPG',
  },
  {
    id: 'img-11',
    product: 'Product Photos',
    type: 'image',
    path: '/videos/61d79016-9646-4100-b005-13fcd40fe3b0.JPG',
  },
  {
    id: 'img-12',
    product: 'Product Photos',
    type: 'image',
    path: '/videos/82dad19d-58e4-41ec-97d9-6ea6a0eb93a2.JPG',
  },
  {
    id: 'img-13',
    product: 'Product Photos',
    type: 'image',
    path: '/videos/897e94af-a84e-48d8-9f80-d4eae54dedb2.JPG',
  },
  {
    id: 'img-14',
    product: 'Product Photos',
    type: 'image',
    path: '/videos/905fca9a-b289-4008-9858-cef0e636ab03.JPG',
  },
  {
    id: 'img-15',
    product: 'Product Photos',
    type: 'image',
    path: '/videos/983faa8c-5cb5-47b0-b49b-1cb5e460272e.JPG',
  },
  {
    id: 'img-16',
    product: 'Product Photos',
    type: 'image',
    path: '/videos/aff8e861-5a60-4d2c-9210-f6126e831da2.JPG',
  },
  {
    id: 'img-17',
    product: 'Product Photos',
    type: 'image',
    path: '/videos/cc57b69f-bc7d-45f6-a299-673fcc2405a9.JPG',
  },
  {
    id: 'img-18',
    product: 'Product Photos',
    type: 'image',
    path: '/videos/eb145535-4d38-40cc-931b-a6235e5f629c.JPG',
  },
  {
    id: 'img-19',
    product: 'Product Photos',
    type: 'image',
    path: '/videos/f1999060-53ab-4887-b12d-a83ed9ceaa50.JPG',
  },
];

// Educational content for each product
const productEducation: ProductEducation[] = [
  {
    product: 'Raw Honey',
    origin: 'Northern Nigeria',
    origin_detail:
      'Sourced from pristine beehives in the northern regions of Nigeria, where diverse wildflowers and vegetation produce exceptional honey with unique flavor profiles.',
    harvest_season: 'Year-round with peak harvest in dry season (November-March)',
    storage_info:
      'Store in airtight glass containers at room temperature (18-24°C). Honey naturally preserves itself indefinitely. Keep away from direct sunlight and moisture.',
    hygiene_standards:
      'Unfiltered, unheated, and unpasteurized. Meets international food safety standards. Sourced from registered apiaries with proper sanitation protocols.',
    quantity_available: '500kg - 2000kg per month depending on season',
  },
  {
    product: 'Sesame Seeds',
    origin: 'Northern Nigeria',
    origin_detail:
      'Grown in the fertile soil of Northern Nigeria (Sokoto, Kebbi, and Niger states) where traditional farming methods ensure superior quality and taste.',
    harvest_season: 'August - October (main harvest), with secondary harvest November - December',
    storage_info:
      'Keep in cool, dry conditions (15-20°C, <70% humidity). Store in breathable bags to prevent moisture accumulation. Use food-grade containers for long-term storage. Shelf life: 12-18 months.',
    hygiene_standards:
      'Triple-cleaned and sorted. Tested for aflatoxins and pesticide residues. Packaged in food-grade, moisture-resistant containers. Complies with international food safety standards.',
    quantity_available: '2000kg - 5000kg per month',
  },
  {
    product: 'Soya Beans',
    origin: 'Northern Nigeria',
    origin_detail:
      'Cultivated in the nutrient-rich agricultural zones of Northern Nigeria. Our soya beans are naturally grown without GMO modification, maintaining authentic nutritional value.',
    harvest_season: 'September - November (main season), with secondary harvests February-March',
    storage_info:
      'Store in sealed containers at 12-18°C with <65% humidity. Protect from pests and moisture. Use airtight bags with oxygen absorbers for extended storage (6-12 months). Keep away from direct light.',
    hygiene_standards:
      'Cleaned, sorted, and tested for contaminants. Packaged in food-grade bags. Non-GMO certified. Meets all international quality and food safety regulations.',
    quantity_available: '3000kg - 8000kg per month',
  },
  {
    product: 'Dried Hibiscus',
    origin: 'Northern Nigeria',
    origin_detail:
      'Hand-harvested from hibiscus plants in Northern Nigeria. Sun-dried using traditional methods to preserve color, flavor, and nutritional properties.',
    harvest_season: 'August - November (peak season)',
    storage_info:
      'Store in airtight containers away from light and heat. Ideal storage: 15-20°C, <65% humidity. Keep away from strong odors as hibiscus absorbs aromas easily. Shelf life: 12-18 months when properly stored.',
    hygiene_standards:
      'Hand-sorted and cleaned. Free from additives and artificial colorants. Tested for microbial contamination. Packaged in food-grade materials with tamper-proof seals.',
    quantity_available: '800kg - 2500kg per month',
  },
  {
    product: 'Arabic Gum',
    origin: 'Sahel Region (Northern Nigeria/Niger Border)',
    origin_detail:
      'Collected from wild acacia trees in the Sahel, harvested using sustainable methods. This ancient natural product has been used for centuries across Africa.',
    harvest_season: 'December - May (dry season collection)',
    storage_info:
      'Keep in sealed containers at room temperature (18-24°C) in a dry environment (<60% humidity). Protect from moisture and contamination. Can be stored for several years without degradation.',
    hygiene_standards:
      'Raw gum is sorted and inspected for purity. Tested for heavy metals and microbial content. Meets Pharmacopeial standards. Packaged in food-grade containers.',
    quantity_available: '500kg - 1500kg per month',
  },
  {
    product: 'Cassava',
    origin: 'Northern Nigeria',
    origin_detail:
      'Fresh cassava roots and flour from Northern Nigerian farms. Processed using traditional and modern methods to maintain nutritional integrity.',
    harvest_season: 'Year-round with peak production July - November',
    storage_info:
      'Fresh roots: Store at 12-15°C in humid conditions, use within 3-5 days. Cassava flour: Keep in sealed containers at 15-18°C, <65% humidity. Shelf life: 8-12 months. Protect from pests and moisture.',
    hygiene_standards:
      'Roots cleaned and inspected. Flour processed in food-grade facilities. Tested for cyanide levels (compliant with international standards). Packaged in food-grade bags.',
    quantity_available: 'Fresh roots: 2000kg - 5000kg weekly | Flour: 1000kg - 3000kg monthly',
  },
];

const ProductKnowledge = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ProductGalleryItem | null>(null);
  const [showMediaModal, setShowMediaModal] = useState(false);
  const [selectedProductFilter, setSelectedProductFilter] = useState<string | null>(null);
  const [expandedEducation, setExpandedEducation] = useState<string | null>(null);

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

  // Get unique products
  const products = Array.from(new Set(galleryItems.map(item => item.product)));
  
  // Filter gallery items based on selected product
  const filteredGalleryItems = selectedProductFilter
    ? galleryItems.filter(item => item.product === selectedProductFilter)
    : galleryItems;

  const handleOpenMedia = (item: ProductGalleryItem) => {
    setSelectedItem(item);
    setShowMediaModal(true);
  };

  const closeMediaModal = () => {
    setShowMediaModal(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <section
      id="product-knowledge"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-b from-cream-50 to-cream-100 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-3">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gold-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========== PRODUCT GALLERY SECTION ========== */}
        <div
          className={`mb-24 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-forest-900/30" />
              <span className="text-forest-700 text-xs tracking-[0.2em] uppercase font-semibold">
                Product Gallery
              </span>
              <span className="w-10 h-px bg-forest-900/30" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mb-4">
              See What We Sell
            </h2>
            <p className="text-lg text-forest-700/70 font-serif italic max-w-2xl mx-auto">
              Video showcases and images of our products from Northern Nigeria
            </p>
          </div>

          {/* Product Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setSelectedProductFilter(null)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                selectedProductFilter === null
                  ? 'bg-forest-900 text-cream-50 shadow-lg'
                  : 'bg-white/60 text-forest-700 hover:bg-white/80 border border-forest-200'
              }`}
            >
              All Products
            </button>
            {products.map(product => (
              <button
                key={product}
                onClick={() => setSelectedProductFilter(product)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                  selectedProductFilter === product
                    ? 'bg-gold-600 text-white shadow-lg'
                    : 'bg-gold-100/50 text-gold-700 hover:bg-gold-100 border border-gold-200'
                }`}
              >
                {product}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGalleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-1 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
                onClick={() => handleOpenMedia(item)}
              >
                {/* Media Thumbnail */}
                <div className="relative h-56 bg-gradient-to-br from-forest-800 to-forest-900 flex items-center justify-center overflow-hidden">
                  {item.type === 'video' ? (
                    <>
                      <div className="absolute inset-0 bg-black/40" />
                      <button className="relative z-10 w-16 h-16 bg-gold-500 hover:bg-gold-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg">
                        <svg
                          className="w-8 h-8 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                      {item.duration && (
                        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {item.duration}
                        </div>
                      )}
                    </>
                  ) : (
                    <img
                      src={item.path}
                      alt={item.description}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-gold-600 bg-gold-50 px-2 py-1 rounded">
                      {item.product}
                    </span>
                    <span className="text-xs text-forest-600 bg-forest-50 px-2 py-1 rounded">
                      {item.type === 'video' ? '🎥 Video' : '🖼️ Image'}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-forest-900 group-hover:text-gold-600 transition-colors">
                    {item.description}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== IMAGES SECTION ========== */}
        <div
          className={`mb-24 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-forest-900/30" />
              <span className="text-forest-700 text-xs tracking-[0.2em] uppercase font-semibold">
                Photo Collection
              </span>
              <span className="w-10 h-px bg-forest-900/30" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900">
              Images
            </h2>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {productImages.map((item, index) => (
              <div
                key={item.id}
                className={`group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-1 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 50}ms` : '0ms' }}
                onClick={() => handleOpenMedia(item)}
              >
                {/* Image */}
                <div className="relative h-40 sm:h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={item.path}
                    alt="Product"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== PRODUCT EDUCATION SECTION ========== */}
        <div className="border-t-2 border-forest-200 pt-24">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-forest-900/30" />
              <span className="text-forest-700 text-xs tracking-[0.2em] uppercase font-semibold">
                Product Knowledge
              </span>
              <span className="w-10 h-px bg-forest-900/30" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mb-4">
              Learn About Our Products
            </h2>
            <p className="text-lg text-forest-700/70 font-serif italic max-w-2xl mx-auto">
              Origin, harvest, storage, quality standards, and availability
            </p>
          </div>

          {/* Education Accordion */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {productEducation.map((edu, index) => (
              <div
                key={edu.product}
                className={`bg-white border-2 border-forest-200 rounded-2xl overflow-hidden transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              >
                {/* Header */}
                <button
                  onClick={() =>
                    setExpandedEducation(
                      expandedEducation === edu.product ? null : edu.product
                    )
                  }
                  className="w-full p-6 flex items-center justify-between hover:bg-cream-50 transition-colors duration-300"
                >
                  <h3 className="font-serif text-2xl font-bold text-forest-900">
                    {edu.product}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-gold-600 transition-transform duration-300 ${
                      expandedEducation === edu.product ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>

                {/* Content */}
                {expandedEducation === edu.product && (
                  <div className="px-6 pb-6 border-t-2 border-forest-100 space-y-6">
                    {/* Origin */}
                    <div>
                      <h4 className="font-serif text-lg font-bold text-gold-600 mb-2">
                        📍 Origin: {edu.origin}
                      </h4>
                      <p className="text-forest-700/80 leading-relaxed">{edu.origin_detail}</p>
                    </div>

                    {/* Quick Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                        <h5 className="font-semibold text-amber-900 mb-1">🌾 Harvest Season</h5>
                        <p className="text-amber-800/80 text-sm">{edu.harvest_season}</p>
                      </div>
                      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                        <h5 className="font-semibold text-emerald-900 mb-1">📦 Quantity Available</h5>
                        <p className="text-emerald-800/80 text-sm font-medium">{edu.quantity_available}</p>
                      </div>
                    </div>

                    {/* Storage */}
                    <div className="p-5 bg-blue-50 border-l-4 border-blue-600 rounded-lg">
                      <h5 className="font-semibold text-blue-900 mb-2">🏪 Storage Guidelines</h5>
                      <p className="text-blue-800/80 text-sm leading-relaxed">{edu.storage_info}</p>
                    </div>

                    {/* Hygiene Standards */}
                    <div className="p-5 bg-purple-50 border-l-4 border-purple-600 rounded-lg">
                      <h5 className="font-semibold text-purple-900 mb-2">✓ Quality & Hygiene Standards</h5>
                      <p className="text-purple-800/80 text-sm leading-relaxed">{edu.hygiene_standards}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Media Modal */}
      {showMediaModal && selectedItem && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-gradient-to-r from-forest-900 to-forest-950 text-white p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold">{selectedItem.description}</h3>
                  <p className="text-gold-300 text-sm">{selectedItem.product}</p>
                </div>
                <button
                  onClick={closeMediaModal}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Media Display */}
              <div className="bg-black">
                {selectedItem.type === 'video' ? (
                  <video controls autoPlay className="w-full h-auto max-h-[70vh]">
                    <source src={selectedItem.path} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={selectedItem.path}
                    alt={selectedItem.description}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                )}
              </div>

              {/* Info */}
              <div className="p-6 bg-cream-50">
                <div className="flex gap-3 mb-4">
                  <span className="text-sm font-semibold text-gold-600 bg-gold-100 px-3 py-1 rounded-full">
                    {selectedItem.product}
                  </span>
                  <span className="text-sm text-forest-600 bg-forest-100 px-3 py-1 rounded-full">
                    {selectedItem.type === 'video' ? '🎥 Video' : '🖼️ Image'}
                  </span>
                  {selectedItem.duration && (
                    <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      ⏱️ {selectedItem.duration}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductKnowledge;
