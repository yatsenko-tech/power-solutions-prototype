import React from 'react';
import { Zap, BatteryCharging, Info } from 'lucide-react';
import productsData from '../data/products.json';

export interface Product {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  price: string;
  power: string;
  waveType: string;
  batteryType: string;
  description: string;
  specs: { [key: string]: string | undefined }; // Allow undefined for optional specs
  features: string[];
  inStock: boolean;
  image: string;
}

interface ProductCatalogProps {
  setSelectedProduct: (product: Product | null) => void;
}

const ProductCard: React.FC<{ product: Product; onContact: (product: Product) => void }> = ({ product, onContact }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-primary mb-2">{product.name}</h3>
      <p className="text-sm text-slate-600 mb-4">{product.categoryLabel}</p>
      <p className="text-3xl font-bold text-blue-600 mb-4">€{product.price}</p>
      <p className="text-slate-500 leading-relaxed mb-4 flex-grow">{product.description}</p>
      <div className="mb-4">
        <h4 className="font-semibold mb-2 flex items-center">
          <Zap className="w-5 h-5 text-primary mr-2" />
          Technische Daten:
        </h4>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-600">
          {Object.entries(product.specs).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              {key.toLowerCase().includes("batterie") || key.toLowerCase().includes("akku") || key.toLowerCase().includes("ladung") ? (
                <div className="flex items-center">
                  <BatteryCharging className="w-4 h-4 text-primary mr-2" />
                  <strong className="font-semibold">{key}:</strong>
                </div>
              ) : (
                <strong className="font-semibold">{key}:</strong>
              )}
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <h4 className="font-semibold mb-2 flex items-center">
          <Info className="w-5 h-5 text-primary mr-2" />
          Besondere Merkmale:
        </h4>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-600">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => onContact(product)}
        className={`w-full py-4 px-6 rounded-lg text-white text-lg font-bold shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
          ${product.inStock ? 'bg-primary hover:bg-primary-dark' : 'bg-slate-400 cursor-not-allowed'}`}
        disabled={!product.inStock}
      >
        {product.inStock ? 'Experten-Beratung anfordern' : 'Derzeit nicht auf Lager'}
      </button>
    </div>
  </div>
);

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ setSelectedProduct }) => {
  const handleContactClick = (product: Product) => {
    setSelectedProduct(product);
    // Scroll to contact form or navigate to a contact page
    // For this example, we'll assume a scroll to form functionality within the same page
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">Unsere Produkte</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsData.map(product => (
          <ProductCard key={product.id} product={product as Product} onContact={handleContactClick} />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
