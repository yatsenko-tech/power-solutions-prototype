import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import heroImage from './assets/hero.png';
import ContactForm from './components/ContactForm';
import ProductCatalog, {Product} from './components/ProductCatalog';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src={heroImage} alt="PowerFort Logo" className="h-8 mr-2 filter brightness-0 invert" />
          PowerFort
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-accent">Produkte</Link>
          <Link to="/impressum" className="hover:text-accent">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-accent">Datenschutzerklärung</Link>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pt-2 pb-4 space-y-1 sm:px-3">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700" onClick={toggleMobileMenu}>Produkte</Link>
          <Link to="/impressum" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700" onClick={toggleMobileMenu}>Impressum</Link>
          <Link to="/datenschutz" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700" onClick={toggleMobileMenu}>Datenschutzerklärung</Link>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-slate-800 text-slate-300 p-8 mt-12">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} PowerFort. Alle Rechte vorbehalten.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <Link to="/impressum" className="hover:text-white">Impressum</Link>
        <Link to="/datenschutz" className="hover:text-white">Datenschutzerklärung</Link>
      </div>
    </div>
  </footer>
);

const AdminPanel: React.FC = () => (
  <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg mt-12 max-w-xl">
    <h1 className="text-3xl font-bold text-primary mb-6">Adminbereich</h1>
    <p className="text-slate-700">Dies ist ein geschützter Bereich für zukünftige Verwaltungsfunktionen.</p>
    <p className="text-slate-700 mt-4">Implementierung der Authentifizierung und der Admin-Funktionen folgt.</p>
  </div>
);

const NotFound: React.FC = () => (
  <div className="container mx-auto p-8 text-center mt-12">
    <h1 className="text-4xl font-bold text-primary mb-4">404 - Seite nicht gefunden</h1>
    <p className="text-xl text-slate-700 mb-8">Die angeforderte Seite konnte nicht gefunden werden. Bitte überprüfen Sie die URL oder kehren Sie zur Startseite zurück.</p>
    <Link to="/" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300">Zur Startseite</Link>
  </div>
);

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<ProductCatalog setSelectedProduct={setSelectedProduct} />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ContactForm selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
