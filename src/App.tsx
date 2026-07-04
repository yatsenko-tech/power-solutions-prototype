import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import productsData from './data/products.json';

interface Product {
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

interface ContactFormProps {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
}

const Header: React.FC = () => (
  <header className="bg-primary text-white p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">PowerFort</Link>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-accent">Produkte</Link></li>
          <li><Link to="/impressum" className="hover:text-accent">Impressum</Link></li>
          <li><Link to="/datenschutz" className="hover:text-accent">Datenschutzerklärung</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

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

const Home: React.FC<ContactFormProps> = ({ selectedProduct, setSelectedProduct }) => {
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
          <ProductCard key={product.id} product={product} onContact={handleContactClick} />
        ))}
      </div>
    </div>
  );
};

const ContactForm: React.FC<ContactFormProps> = ({ selectedProduct, setSelectedProduct }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(selectedProduct ? `Ich interessiere mich für das Produkt: ${selectedProduct.name}` : '');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  React.useEffect(() => {
    if (selectedProduct) {
      setMessage(`Ich interessiere mich für das Produkt: ${selectedProduct.name}`);
    } else {
      setMessage('');
    }
  }, [selectedProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAgreed) {
      alert('Bitte stimmen Sie der Datenschutzerklärung zu.');
      return;
    }
    // Handle form submission logic here
    console.log({ name, email, message, privacyAgreed });
    alert('Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.');
    setName('');
    setEmail('');
    setMessage('');
    setPrivacyAgreed(false);
    setSelectedProduct(null);
  };

  return (
    <section id="contact-form" className="container mx-auto p-8 bg-white shadow-lg rounded-lg mt-12 max-w-2xl">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">Experten-Beratung anfordern</h2>
      <p className="text-center text-slate-700 mb-8">Haben Sie Fragen oder möchten Sie eine individuelle Beratung? Füllen Sie das Formular aus, und unser Team wird sich umgehend mit Ihnen in Verbindung setzen.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-slate-700 text-sm font-bold mb-2">Ihr Name:</label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-slate-700 text-sm font-bold mb-2">Ihre E-Mail:</label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-slate-700 text-sm font-bold mb-2">Ihre Nachricht:</label>
          <textarea
            id="message"
            rows={5}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
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
          />
          <label htmlFor="privacyAgreed" className="text-sm text-slate-700">
            Ich stimme der <Link to="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</Link> zu.
          </label>
        </div>
        <button
          type="submit"
          className="bg-accent hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
        >
          Anfrage senden
        </button>
      </form>
    </section>
  );
};

const Impressum: React.FC = () => (
  <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg mt-12 max-w-3xl">
    <h1 className="text-3xl font-bold text-primary mb-6">Impressum</h1>
    <h2 className="text-2xl font-semibold text-slate-800 mb-4">Angaben gemäß § 5 TMG:</h2>
    <p>PowerFort GmbH</p>
    <p>Musterstraße 123</p>
    <p>12345 Musterstadt</p>
    <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">Vertreten durch:</h2>
    <p>Geschäftsführer: Max Mustermann</p>
    <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">Kontakt:</h2>
    <p>Telefon: +49 (0) 123 456789</p>
    <p>Telefax: +49 (0) 123 456789-0</p>
    <p>E-Mail: <a href="mailto:info@powerfort.de" className="text-primary hover:underline">info@powerfort.de</a></p>
    <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">Registereintrag:</h2>
    <p>Eintragung im Handelsregister.</p>
    <p>Registergericht: Amtsgericht Musterstadt</p>
    <p>Registernummer: HRB 12345</p>
    <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">Umsatzsteuer-ID:</h2>
    <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
    <p>DE123456789</p>
    <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">Haftung für Inhalte:</h2>
    <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
    <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
    <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">Streitschlichtung:</h2>
    <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr</a>.</p>
    <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
    <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
  </div>
);

const Datenschutz: React.FC = () => (
  <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg mt-12 max-w-3xl">
    <h1 className="text-3xl font-bold text-primary mb-6">Datenschutzerklärung</h1>
    <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Datenschutz auf einen Blick</h2>
    <h3 className="text-xl font-semibold text-slate-700 mb-2">Allgemeine Hinweise</h3>
    <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
    <h3 className="text-xl font-semibold text-slate-700 mt-4 mb-2">Datenerfassung auf unserer Website</h3>
    <h4 className="font-semibold text-slate-600 mb-1">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
    <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
    <h4 className="font-semibold text-slate-600 mt-4 mb-1">Wie erfassen wir Ihre Daten?</h4>
    <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
    <p>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.</p>
    <h4 className="font-semibold text-slate-600 mt-4 mb-1">Wofür nutzen wir Ihre Daten?</h4>
    <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
    <h4 className="font-semibold text-slate-600 mt-4 mb-1">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
    <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
    
    <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
    <h3 className="text-xl font-semibold text-slate-700 mb-2">Datenschutz</h3>
    <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
    <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
    <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
    <h3 className="text-xl font-semibold text-slate-700 mt-4 mb-2">Hinweis zur verantwortlichen Stelle</h3>
    <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
    <p>PowerFort GmbH</p>
    <p>Musterstraße 123</p>
    <p>12345 Musterstadt</p>
    <p>Telefon: +49 (0) 123 456789</p>
    <p>E-Mail: <a href="mailto:info@powerfort.de" className="text-primary hover:underline">info@powerfort.de</a></p>
    <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>

    <h3 className="text-xl font-semibold text-slate-700 mt-4 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
    <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>

    <h3 className="text-xl font-semibold text-slate-700 mt-4 mb-2">Recht auf Datenübertragbarkeit</h3>
    <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>

    <h3 className="text-xl font-semibold text-slate-700 mt-4 mb-2">SSL- bzw. TLS-Verschlüsselung</h3>
    <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>

    <h3 className="text-xl font-semibold text-slate-700 mt-4 mb-2">Auskunft, Sperrung, Löschung</h3>
    <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.</p>
    <p>Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>

    <h3 className="text-xl font-semibold text-slate-700 mt-4 mb-2">Widerspruch gegen Werbe-E-Mails</h3>
    <p>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>

  </div>
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
            <Route path="/" element={<Home selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />} />
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