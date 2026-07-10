import React from 'react';
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
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-primary mb-2">{product.name}</h3>
      <p className="text-sm text-slate-600 mb-4">{product.categoryLabel}</p>
      <p className="text-2xl font-bold text-accent mb-4">€{product.price}</p>
      <p className="text-slate-700 mb-4 flex-grow">{product.description}</p>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Technische Daten:</h4>
        <ul className="text-sm text-slate-600 space-y-1">
          {Object.entries(product.specs).map(([key, value]) => (
            <li key={key}><strong>{key}:</strong> {value}</li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="font-semibold mb-2">Besondere Merkmale:</h4>
        <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => onContact(product)}
        className={`w-full py-3 px-6 rounded-lg text-white font-semibold transition duration-300
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
