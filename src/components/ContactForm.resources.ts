export const contactFormResources = {
  interestInProduct: (productName: string) => `Ich interessiere mich für das Produkt: ${productName}`,
  privacyValidationAlert: 'Bitte stimmen Sie der Datenschutzerklärung zu.',
  defaultProductInquiry: 'Keine (allgemeine Anfrage)',
  submitSuccessAlert: 'Erfolgreich! Ihre Nachricht wurde gesendet.',
  submitErrorAlert: (errMsg: string) => `Fehler: ${errMsg}`,
  submitErrorDefault: 'Senden fehlgeschlagen.',
  generalErrorAlert: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
  title: 'Anfrage für eine Expertenberatung',
  description: 'Haben Sie Fragen oder wünschen Sie eine persönliche Beratung? Füllen Sie das Formular aus, und unser Team wird sich in Kürze mit Ihnen in Verbindung setzen.',
  labelName: 'Ihr Name:',
  labelEmail: 'Ihre E-Mail:',
  labelMessage: 'Ihre Nachricht:',
  privacyConsentTextBeforeLink: 'Ich stimme der ',
  privacyConsentLinkText: 'Datenschutzerklärung',
  privacyConsentTextAfterLink: ' zu.',
  buttonSubmitting: 'Wird gesendet...',
  buttonSubmit: 'Anfrage senden'
};