import React from 'react';

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
    <p>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.g. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.</p>
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
    <p>Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>

    <h3 className="text-xl font-semibold text-slate-700 mt-4 mb-2">Widerspruch gegen Werbe-E-Mails</h3>
    <p>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>

  </div>
);

export default Datenschutz;