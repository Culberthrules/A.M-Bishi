import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import ProcessFlow from './components/ProcessFlow';
import ValueProposition from './components/ValueProposition';
import About from './components/About';
import ProductKnowledge from './components/ProductKnowledge';
import Certifications from './components/Certifications';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

/**
 * App Component
 * Root layout assembling all page sections in structured narrative order:
 * 01 Hero -> N°02 Product Catalog -> N°03 Process Flow -> N°04 Value Proposition -> Company & Contact
 */
function App() {
  return (
    <div className="min-h-screen bg-forest-950 font-sans selection:bg-gold-500 selection:text-forest-950">
      <Header />
      <main>
        <Hero />
        <Products />
        <ProcessFlow />
        <ValueProposition />
        <About />
        <ProductKnowledge />
        <Certifications />
        <Reviews />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
