import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Certifications from './components/Certifications';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

/**
 * App Component
 * Root layout assembling all page sections in order.
 */
function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Certifications />
        <Reviews />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
