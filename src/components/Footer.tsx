import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-warm-brown text-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="md:col-span-2">
            <p className="text-cream/90 mb-4 leading-relaxed">
              {t('footer.desc').split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/lafalescale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-cream transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/lafalescale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-cream transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  {t('footer.nav.accueil')}
                </Link>
              </li>
              <li>
                <Link
                  to="/le-gite"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  {t('footer.nav.gite')}
                </Link>
              </li>
              <li>
                <Link
                  to="/activites"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  {t('footer.nav.activites')}
                </Link>
              </li>
              <li>
                <Link
                  to="/acces"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  {t('footer.nav.acces')}
                </Link>
              </li>
              <li>
                <Link
                  to="/reservation"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  {t('footer.nav.reservation')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  {t('footer.nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-cream/70" />
                <div className="text-cream/80 text-sm">
                  <p>{t('footer.address.line1')}</p>
                  <p>{t('footer.address.line2')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cream/70" />
                <a
                  href={`tel:${t('footer.phone')}`}
                  className="text-cream/80 text-sm hover:text-cream transition-colors"
                >
                  {t('footer.phone')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cream/70" />
                <a
                  href={`mailto:${t('footer.email')}`}
                  className="text-cream/80 text-sm hover:text-cream transition-colors"
                >
                  {t('footer.email')}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 text-center">
          <p className="text-cream/70 text-sm">
            © 2024 La Falescale. {t('footer.rights')} |
            <Link
              to="/mentions-legales"
              className="hover:text-cream transition-colors ml-1"
            >
              {t('footer.mentions')}
            </Link>{' '}
            |
            <Link
              to="/confidentialite"
              className="hover:text-cream transition-colors ml-1"
            >
              {t('footer.confidentialite')}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
