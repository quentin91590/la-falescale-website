import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import photoMaison from '../assets/Photo_maison.jpg';
import sejourImg from '../assets/sejour.jpg';
import chambreImg from '../assets/chambre.jpg';

import {
  ChevronLeft,
  ChevronRight,
  Gamepad2,
  Castle,
  Star,
  Waves,
  Wifi,
  Car,
  Sparkles,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

function useCenterBand(thresholdTop = 0.33, thresholdBottom = 0.66) {
  const ref = useRef<HTMLDivElement>(null);
  const [isCentered, setIsCentered] = useState(false);

  useEffect(() => {
    function checkPosition() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const vh = window.innerHeight;
      const bandTop = vh * thresholdTop;
      const bandBottom = vh * thresholdBottom;
      setIsCentered(center >= bandTop && center <= bandBottom);
    }

    checkPosition();
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);
    return () => {
      window.removeEventListener('scroll', checkPosition);
      window.removeEventListener('resize', checkPosition);
    };
  }, [thresholdTop, thresholdBottom]);

  return [ref, isCentered] as const;
}

const iconMap = {
  Waves,
  Castle,
  Sparkles,
  Gamepad2,
  Wifi,
  Car,
};

interface Feature {
  icon: keyof typeof iconMap;
  text: string;
}
interface Activity {
  emoji: string;
  title: string;
}
interface Testimonial {
  rating: number;
  text: string;
  name: string;
}

const Home = () => {
  const { t } = useTranslation();

const [ref1, isCentered1] = useCenterBand(0.33, 0.66); // Bande centrale (de 33% à 66% de la hauteur)
const [ref2, isCentered2] = useCenterBand(0.33, 0.66);
const [ref3, isCentered3] = useCenterBand(0.33, 0.66);
const centerBands = [
  { ref: ref1, centered: isCentered1 },
  { ref: ref2, centered: isCentered2 },
  { ref: ref3, centered: isCentered3 },
];


  const images = [chambreImg, sejourImg, photoMaison];

// On prépare une liste de hooks (refs/inView) à la bonne taille :

  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const swipeThreshold = 50;

  const heroImages = [
    photoMaison,
    sejourImg,
    chambreImg,
  ];

  const features = t('home.features', { returnObjects: true }) as Feature[];
  const activities = t('home.activities.items', { returnObjects: true }) as Activity[];
  const testimonials = t('home.testimonials.items', { returnObjects: true }) as Testimonial[];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const deltaX = touchStartX.current - touchEndX.current;

    if (deltaX > swipeThreshold) {
      nextSlide();
    } else if (deltaX < -swipeThreshold) {
      prevSlide();
    }
  };

  return (
    <div className="pt-20">

      {/* Hero Section - IMAGE/CAROUSEL */}
      <section
        className="relative w-full aspect-[16/9] sm:h-screen overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={image}
                alt={`Vue de La Falescale ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-cream/20 hover:bg-cream/30 p-2 sm:p-3 rounded-full transition-colors z-10 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-cream" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-cream/20 hover:bg-cream/30 p-2 sm:p-3 rounded-full transition-colors z-10 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-cream" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors cursor-pointer ${index === currentSlide ? 'bg-cream' : 'bg-cream/50'
                }`}
            />
          ))}
        </div>

        {/* Texte + bouton superposés – uniquement sur desktop/tablette */}
        <div className="hidden sm:flex absolute inset-0 flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-10">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-cream">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-4 md:mb-6 font-light px-2 text-cream">
            {t('home.hero.subtitle')}
          </p>
          <p className="text-lg opacity-90 px-2 max-w-2xl mx-auto text-cream">
            {t('home.hero.desc')}
          </p>
          <Link
            to="/reservation"
            className="mt-4 inline-flex items-center justify-center text-center
             bg-savoyard hover:bg-light-savoyard text-cream
             px-8 py-4 rounded-full
             font-semibold text-lg
             transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            {t('home.hero.button')}
          </Link>
        </div>
      </section>

      {/* Texte + bouton SOUS l’image – uniquement sur mobile */}
      <div className="flex flex-col items-center justify-center text-center bg-cream/95 text-warm-brown px-4 py-6 sm:hidden">
        <h1 className="font-playfair text-2xl font-bold mb-3 leading-tight">
          {t('home.hero.title')}
        </h1>
        <p className="text-base mb-2 font-light px-2">
          {t('home.hero.subtitle')}
        </p>
        <p className="text-sm opacity-90 px-2 max-w-2xl mx-auto mb-3">
          {t('home.hero.desc')}
        </p>
        <Link
          to="/reservation"
          className="mt-2 inline-flex items-center justify-center text-center
           bg-savoyard hover:bg-light-savoyard text-cream
           px-6 py-3 rounded-full
           font-semibold text-base
           transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          {t('home.hero.button')}
        </Link>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {features.map((feature: Feature, index: number) => {
              const Icon = iconMap[feature.icon] || Waves;
              return (
                <div
                  key={index}
                  className="text-center group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-savoyard/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-savoyard/20 transition-colors">
                    <Icon className="w-8 h-8 text-savoyard" />
                  </div>
                  <p className="text-warm-brown font-medium">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
{/* Gallery Preview */}
<section className="py-16">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-warm-brown mb-4">
        {t('home.gallery.title')}
      </h2>
      <p className="text-soft-green text-lg max-w-2xl mx-auto">
        {t('home.gallery.subtitle')}
      </p>
    </div>

    {/** === La déclaration des hooks pour chaque image (place ça AVANT le return, DANS le composant Home) === **/}
    {/* 
    const [ref1, isCentered1] = useCenterBand(0.33, 0.66);
    const [ref2, isCentered2] = useCenterBand(0.33, 0.66);
    const [ref3, isCentered3] = useCenterBand(0.33, 0.66);
    const centerBands = [
      { ref: ref1, centered: isCentered1 },
      { ref: ref2, centered: isCentered2 },
      { ref: ref3, centered: isCentered3 },
    ]; 
    */}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => {
        const { ref, centered } = centerBands[index];
        return (
          <div
            ref={ref}
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img
              src={image}
              alt={`Intérieur du gîte ${index + 1}`}
              className={`
                w-full h-64 object-cover transition-transform duration-500
                ${centered ? 'scale-110' : 'scale-100'}
                sm:scale-100 sm:group-hover:scale-110
              `}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        );
      })}
    </div>

    <div className="text-center mt-8">
      <Link
        to="/le-gite"
        className="inline-block bg-warm-brown hover:bg-dark-brown text-cream px-6 py-3 rounded-full font-medium transition-colors"
      >
        {t('home.gallery.button')}
      </Link>
    </div>
  </div>
</section>
      {/* Activities Preview */}
      <section className="py-16 bg-soft-green/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-warm-brown mb-4">
              {t('home.activities.title')}
            </h2>
            <p className="text-soft-green text-lg max-w-2xl mx-auto">
              {t('home.activities.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity: Activity, index: number) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{activity.emoji}</div>
                <h3 className="font-semibold text-warm-brown">
                  {activity.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/activites"
              className="inline-block bg-savoyard hover:bg-light-savoyard text-cream px-6 py-3 rounded-full font-medium transition-colors"
            >
              {t('home.activities.button')}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-warm-brown mb-4">
              {t('home.testimonials.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-warm-brown mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-savoyard">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
