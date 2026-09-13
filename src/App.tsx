import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import ProcessFlow from './components/ProcessFlow';
import ProductKnowledge from './components/ProductKnowledge';
import Certifications from './components/Certifications';
import Reviews from './components/Reviews';
import GalleryPage from './components/GalleryPage';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <Products />
    <About />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-forest-950 font-sans text-white selection:bg-gold-500 selection:text-forest-950">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/process" element={<ProcessFlow />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/product-knowledge" element={<ProductKnowledge />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
