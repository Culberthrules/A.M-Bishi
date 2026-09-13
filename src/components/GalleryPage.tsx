import { Link } from 'react-router-dom';

const galleryImages = [
  { name: 'Raw Honey', src: '/images/raw-honey.png' },
  { name: 'Sesame Seeds', src: '/images/sesame-seeds.png' },
  { name: 'Soya Beans', src: '/images/soya-beans.png' },
  { name: 'Dried Hibiscus', src: '/images/dried-hibiscus.png' },
  { name: 'Arabic Gum', src: '/images/arabic-gum.png' },
  { name: 'Cassava', src: '/images/cassava.png' },
];

const galleryLinks = [
  { label: 'Product Knowledge', to: '/product-knowledge', description: 'Product specs, sourcing details, and quality notes.' },
  { label: 'Certifications', to: '/certifications', description: 'Independent lab and specification documentation.' },
  { label: 'Reviews', to: '/reviews', description: 'Client feedback and trusted partner testimonials.' },
];

const GalleryPage = () => {
  return (
    <section className="pt-40 pb-24 bg-cream-50 text-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold-500" />
            <span className="text-gold-600 text-xs tracking-[0.2em] uppercase font-semibold">Gallery</span>
            <span className="w-10 h-px bg-gold-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Visuals & Trust Assets</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Product visuals, proof points, and supporting verification pages for the AMA BISHI export offer.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {galleryLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group rounded-2xl border border-forest-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gold-100 text-gold-700">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm5 6l2.5 2.5L16 9l4 5V18H4v-4l5-2z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-forest-900 mb-2">{item.label}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-forest-900">Product Gallery</h2>
            <span className="text-sm text-gold-700">6 products</span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <div key={image.name} className="overflow-hidden rounded-2xl border border-forest-100 bg-white shadow-sm">
                <img src={image.src} alt={image.name} className="h-64 w-full object-cover" loading="lazy" />
                <div className="px-4 py-3">
                  <p className="text-base font-semibold text-forest-900">{image.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
