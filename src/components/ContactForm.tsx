import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product } from './ProductCatalog';

interface ContactFormProps {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ selectedProduct, setSelectedProduct }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(selectedProduct ? `Я зацікавлений у продукті: ${selectedProduct.name}` : '');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setMessage(`Я зацікавлений у продукті: ${selectedProduct.name}`);
    } else {
      setMessage('');
    }
  }, [selectedProduct]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!privacyAgreed) {
      alert('Будь ласка, погодьтеся з політикою конфіденційності.');
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("selectedProduct", selectedProduct ? selectedProduct.name : 'None (General Inquiry)');

    try {
      const response = await fetch(import.meta.env.VITE_WEB3FORMS_API_URL, {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert("Успішно! Ваше повідомлення було надіслано.");
        setName('');
        setEmail('');
        setMessage('');
        setPrivacyAgreed(false);
        setSelectedProduct(null);
      } else {
        alert("Помилка: " + (data.message || "Не вдалося надіслати."));
      }
    } catch (error) {
      alert("Щось пішло не так. Будь ласка, спробуйте ще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="container mx-auto p-8 bg-white shadow-lg rounded-lg mt-12 max-w-2xl">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">Запит на консультацію експерта</h2>
      <p className="text-center text-slate-700 mb-8">Маєте запитання або бажаєте індивідуальну консультацію? Заповніть форму, і наша команда зв'яжеться з вами найближчим часом.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-slate-700 text-sm font-bold mb-2">Ваше ім'я:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-slate-700 text-sm font-bold mb-2">Ваш E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-slate-700 text-sm font-bold mb-2">Ваше повідомлення:</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            disabled={isSubmitting}
          ></textarea>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="privacyAgreed"
            className="mr-2 leading-tight"
            checked={privacyAgreed}
            onChange={(e) => setPrivacyAgreed(e.target.checked)}
            required
            disabled={isSubmitting}
          />
          <label htmlFor="privacyAgreed" className="text-sm text-slate-700">
            Я погоджуюся з <Link to="/datenschutz" className="text-primary hover:underline">політикою конфіденційності</Link>.
          </label>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ${
            isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-accent hover:bg-orange-600'
          }`}
        >
          {isSubmitting ? 'Надсилання...' : 'Надіслати запит'}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
