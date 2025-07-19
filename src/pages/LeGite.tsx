import {
  Bed,
  Sofa,
  Tv,
  Wifi,
  Car,
  Utensils,
  Coffee,
  Waves,
  Flower2,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

// --- IMPORT DES IMAGES ---
import sejourImg    from '../assets/-1 - sejour.jpg';
import chambreImg   from '../assets/-1 - chambre.jpg';
import photoMaison  from '../assets/Photo_maison.jpg';

// --- MAPPING pour galerie ---
const photoMapping: Record<string, string> = {
  '-1 - sejour.jpg': sejourImg,
  '-1 - chambre.jpg': chambreImg,
  'Photo_maison.jpg': photoMaison,
};

// --- INTERFACES ---
interface Equipement {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
}
interface Photo {
  src: string;
  alt: string;
}

// --- ICONS ---
const iconMap = {
  Bed,
  Sofa,
  Tv,
  Wifi,
  Car,
  Utensils,
  Coffee,
  Waves,
  Flower2,
};

const LeGite = () => {
  const { t } = useTranslation();

  // --- Données de traduction ---
  const equipementsInterieurs = t('leGite.interieurs.items', { returnObjects: true }) as Equipement[];
  const equipementsExterieurs = t('leGite.exterieurs.items', { returnObjects: true }) as Equipement[];

  // --- Galerie images ---
  // Attention : dans ton fichier de traduction, mets bien les bons noms !
  // Ex: { "src": "sejour.jpg", "alt": "Séjour lumineux" }
  const galerieRaw = t('leGite.galerie.photos', { returnObjects: true }) as Photo[];
  const galerie = galerieRaw.map(photo => ({
    src: photoMapping[photo.src] || '',
    alt: photo.alt,
  }));

  return (
    <div className="pt-20">
      {/* Header */}
      <section style={{ backgroundColor: "#a32b2b" }} className="py-16 text-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            {t('leGite.header.title')}
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {t('leGite.header.desc')}
          </p>
        </div>
      </section>

      {/* Description du gîte */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="font-playfair text-3xl font-bold text-warm-brown mb-6">
                {t('leGite.ambiance.title')}
              </h2>
              <div className="space-y-4 text-soft-green leading-relaxed">
                <p>{t('leGite.ambiance.p1')}</p>
                <p>{t('leGite.ambiance.p2')}</p>
                <p>{t('leGite.ambiance.p3')}</p>
              </div>
            </div>
            <div className="animate-slide-up">
              <img
                src={sejourImg}
                alt={t('leGite.galerie.photos.0.alt')}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plan du gîte */}
      <section className="py-16 bg-soft-green/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-warm-brown mb-4">
              {t('leGite.plan.title')}
            </h2>
            <p className="text-soft-green text-lg">
              {t('leGite.plan.desc')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-cream p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-warm-brown mb-4">
                  {t('leGite.plan.groundfloor')}
                </h3>
                <ul className="space-y-2 text-soft-green">
                  {(t('leGite.plan.list1', { returnObjects: true }) as string[]).map((line: string, i: number) => (
                    <li key={i}>• {line}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-warm-brown mb-4">
                  {t('leGite.plan.floor')}
                </h3>
                <ul className="space-y-2 text-soft-green">
                  {(t('leGite.plan.list2', { returnObjects: true }) as string[]).map((line: string, i: number) => (
                    <li key={i}>• {line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Équipements intérieurs */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-warm-brown mb-4">
              {t('leGite.interieurs.title')}
            </h2>
            <p className="text-soft-green text-lg">
              {t('leGite.interieurs.desc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipementsInterieurs.map((equipement: Equipement, index: number) => {
              const Icon = iconMap[equipement.icon] || Bed;
              return (
                <div
                  key={index}
                  className="bg-cream p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-8 h-8 text-savoyard mb-4" />
                  <h3 className="font-semibold text-warm-brown mb-2">
                    {equipement.title}
                  </h3>
                  <p className="text-soft-green text-sm">
                    {equipement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Équipements extérieurs */}
      <section className="py-16 bg-savoyard/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-warm-brown mb-4">
              {t('leGite.exterieurs.title')}
            </h2>
            <p className="text-soft-green text-lg">
              {t('leGite.exterieurs.desc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipementsExterieurs.map((equipement: Equipement, index: number) => {
              const Icon = iconMap[equipement.icon] || Waves;
              return (
                <div
                  key={index}
                  className="bg-cream p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-8 h-8 text-savoyard mx-auto mb-4" />
                  <h3 className="font-semibold text-warm-brown mb-2">
                    {equipement.title}
                  </h3>
                  <p className="text-soft-green text-sm">
                    {equipement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Galerie photos */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-warm-brown mb-4">
              {t('leGite.galerie.title')}
            </h2>
            <p className="text-soft-green text-lg">
              {t('leGite.galerie.desc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galerie.map((photo, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-cream p-4 font-medium">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeGite;
