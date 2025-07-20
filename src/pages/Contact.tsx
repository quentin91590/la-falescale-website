import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Send, MessageCircle, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: '',
    dateArrivee: '',
    dateDepart: '',
  });

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
    // Logique d'envoi du formulaire
    console.log('Formulaire envoyé:', formData);
    alert(t('contactPage.form.success'));
  };

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/33612345678', '_blank');
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section style={{ backgroundColor: "#a32b2b" }} className="py-16 text-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            {t('contactPage.header.title')}
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {t('contactPage.header.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact & Formulaire */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="animate-slide-in">
              <h2 className="font-playfair text-3xl font-bold text-warm-brown mb-8">
                {t('contactPage.info.title')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-savoyard/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-savoyard" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-brown mb-1">{t('contactPage.info.address.title')}</h3>
                    <p className="text-soft-green">
                      La Falescale<br />
                      130 rue des Bouchets, 74140 Yvoire<br />
                      Haute-Savoie, France
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-savoyard/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-savoyard" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-brown mb-1">{t('contactPage.info.phone.title')}</h3>
                    <a href="tel:+33665689483" className="text-soft-green hover:text-savoyard transition-colors">
                      +33 6 65 68 94 83
                    </a>
                    <p className="text-sm text-soft-green/80">{t('contactPage.info.phone.available')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-savoyard/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-savoyard" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-brown mb-1">{t('contactPage.info.email.title')}</h3>
                    <a href="mailto:contact@lafalescale.fr" className="text-soft-green hover:text-savoyard transition-colors">
                      contact@lafalescale.fr
                    </a>
                    <p className="text-sm text-soft-green/80">{t('contactPage.info.email.response')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-savoyard/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-savoyard" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-brown mb-1">{t('contactPage.info.whatsapp.title')}</h3>
                    <button 
                      onClick={openWhatsApp}
                      className="text-soft-green hover:text-savoyard transition-colors cursor-pointer"
                    >
                      +33 6 65 68 94 83
                    </button>
                    <p className="text-sm text-soft-green/80">{t('contactPage.info.whatsapp.response')}</p>
                  </div>
                </div>
              </div>
              {/* Réseaux sociaux */}
              <div className="mt-8">
                <h3 className="font-semibold text-warm-brown mb-4">{t('contactPage.info.social.title')}</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/lafalescale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/lafalescale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            {/* Formulaire de contact */}
            <div className="bg-cream p-8 rounded-2xl shadow-lg animate-slide-up">
              <h2 className="font-playfair text-2xl font-bold text-warm-brown mb-6">
                {t('contactPage.form.title')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-warm-brown font-medium mb-2">
                      {t('contactPage.form.name')}
                    </label>
                    <input
                      type="text"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full p-3 border border-soft-green/30 rounded-lg focus:ring-2 focus:ring-savoyard focus:border-transparent"
                      placeholder={t('contactPage.form.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-warm-brown font-medium mb-2">
                      {t('contactPage.form.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-soft-green/30 rounded-lg focus:ring-2 focus:ring-savoyard focus:border-transparent"
                      placeholder={t('contactPage.form.emailPlaceholder')}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-warm-brown font-medium mb-2">
                    {t('contactPage.form.phone')}
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full p-3 border border-soft-green/30 rounded-lg focus:ring-2 focus:ring-savoyard focus:border-transparent"
                    placeholder={t('contactPage.form.phonePlaceholder')}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-warm-brown font-medium mb-2">
                      {t('contactPage.form.arrival')}
                    </label>
                    <input
                      type="date"
                      name="dateArrivee"
                      value={formData.dateArrivee}
                      onChange={handleChange}
                      className="w-full p-3 border border-soft-green/30 rounded-lg focus:ring-2 focus:ring-savoyard focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-warm-brown font-medium mb-2">
                      {t('contactPage.form.departure')}
                    </label>
                    <input
                      type="date"
                      name="dateDepart"
                      value={formData.dateDepart}
                      onChange={handleChange}
                      className="w-full p-3 border border-soft-green/30 rounded-lg focus:ring-2 focus:ring-savoyard focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-warm-brown font-medium mb-2">
                    {t('contactPage.form.message')}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-soft-green/30 rounded-lg focus:ring-2 focus:ring-savoyard focus:border-transparent resize-none"
                    placeholder={t('contactPage.form.messagePlaceholder')}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-savoyard hover:bg-light-savoyard text-cream py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{t('contactPage.form.send')}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
