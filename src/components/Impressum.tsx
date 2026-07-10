import React from 'react';
import { Link } from 'react-router-dom';

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
    <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG для eigenen Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
    <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
    <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">Streitschlichtung:</h2>
    <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr</a>.</p>
    <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
    <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
  </div>
);

export default Impressum;