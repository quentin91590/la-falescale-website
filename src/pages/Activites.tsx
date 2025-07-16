import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Star, ExternalLink } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

// Types
type ActiviteSurPlace = {
  icon: string;
  title: string;
  description: string;
  disponibilite?: boolean;
  option?: boolean;
  category: string;
};
type POI = {
  id: number;
  nom: string;
  type: string;
  distance: string;
  description: string;
  rating: number;
  coord?: { lat: number; lng: number };
  website?: string;
  phone?: string;
  hasItinerary?: boolean;
};
type Excursion = {
  titre: string;
  distance: string;
  image?: string;
  description: string;
};
type Filter = { id: string; label: string; icon: string; };

const GITE_COORDS: [number, number] = [46.368858, 6.329471];

// ----------- Composant FitBounds ----------- //
function FitBoundsIfNeeded({
  points,
  filterKey,
  mapReady,
}: { points: [number, number][]; filterKey: string; mapReady: boolean }) {
  const map = useMap();
  const lastFilter = useRef<string | null>(null);

  useEffect(() => {
    if (!mapReady || !map) return;
    // Seulement si le filtre change (pas au premier render)
    if (lastFilter.current !== null && lastFilter.current !== filterKey) {
      if (points.length > 1) {
        map.fitBounds(points, { padding: [60, 60], maxZoom: 16 });
      }
    }
    lastFilter.current = filterKey;
  }, [points, filterKey, map, mapReady]);

  return null;
}
// ----------- Bouton recentrer maison ----------- //
const CenterHomeButton = ({ zoom = 15 }: { zoom?: number }) => {
  const map = useMap();

  const handleCenter = () => {
    map.flyTo(GITE_COORDS, 13, { duration: 0.7 });
    setTimeout(() => {
      map.flyTo(GITE_COORDS, zoom, { duration: 1.1 });
    }, 650);
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 18,
        right: 18,
        zIndex: 1000,
        background: 'rgba(255,255,255,0.92)',
        borderRadius: '100%',
        boxShadow: '0 1px 6px rgba(0,0,0,0.12)',
        width: 44,
        height: 44,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: '2px solid #a32b2b'
      }}
      title="Recentrer sur le gîte"
      onClick={handleCenter}
    >
      <span style={{ fontSize: 28, lineHeight: 1 }}>🏡</span>
    </div>
  );
};

const poiIcon = L.divIcon({
  className: 'emoji-marker-poi',
  html: "<div style='font-size: 2rem; line-height: 1;' title='Point d’intérêt'>📍</div>",
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36],
});

const homeIcon = L.divIcon({
  className: 'emoji-marker-home',
  html: `
    <div style="
      background: #fff;
      border-radius: 50%;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 6px rgba(0,0,0,0.12);
      width: 44px; height: 44px;
      border: 3px solid #a32b2b;
    ">
      <span style="font-size: 2rem; line-height: 1;" title="Le gîte La Falescale">🏡</span>
    </div>
  `,
  iconSize: [44, 44],
  iconAnchor: [22, 44],
  popupAnchor: [0, -44]
});

const Activites: React.FC = () => {
  const { t, i18n } = useTranslation();

  // -------- DATA i18n + types -------- //
  const actCategories = t('activitesPage.onSite.categories', { returnObjects: true }) as string[];
  const activitesSurPlace = t('activitesPage.onSite.list', { returnObjects: true }) as ActiviteSurPlace[];
  const poiFilters = t('activitesPage.poiSection.filters', { returnObjects: true }) as Filter[];
  const POI_COORDS: Record<number, { lat: number; lng: number }> = {
    1: { lat: 46.371251, lng: 6.326331 },
    2: { lat: 46.370524, lng: 6.325746 },
    3: { lat: 46.37028432969342, lng: 6.327514781448015 },
    4: { lat: 46.369728, lng: 6.330201 },
    5: { lat: 46.371194, lng: 6.324045 },
    6: { lat: 46.367960, lng: 6.340007 },
    7: { lat: 46.369786, lng: 6.326880 },
    8: { lat: 46.370522518279, lng: 6.327428365287104 },
    9: { lat: 46.37089357381346, lng: 6.324894360648332 },
    10: { lat: 46.367425, lng: 6.349314 },
    11: { lat: 46.370339, lng: 6.333573 },
    12: { lat: 46.349075, lng: 6.359872 },
    13: { lat: 46.369319, lng: 6.330434 },
    14: { lat: 46.370068, lng: 6.325923 },
    15: { lat: 46.369965, lng: 6.326567 },
    16: { lat: 46.362696, lng: 6.326119 },
    17: { lat: 46.362567, lng: 6.331547 },
  };
  
  const poiListI18n = t('activitesPage.poiList', { returnObjects: true }) as Omit<POI, 'coord'>[];
  const pointsInteret: POI[] = poiListI18n.map((p) => ({
    ...p,
    coord: POI_COORDS[p.id],
  }));  const excursions = t('activitesPage.excursionsSection.list', { returnObjects: true }) as Excursion[];

  const [selectedActCat, setSelectedActCat] = useState<string>(actCategories[0]);
  const [selectedPOIFilter, setSelectedPOIFilter] = useState<string>('all');
  const [mapReady, setMapReady] = useState(false);
  
  useEffect(() => {
    setSelectedActCat(actCategories[0]);
    // eslint-disable-next-line
  }, [i18n.language]); // Ne dépend plus de actCategories
  // -------- Filtres dynamiques -------- //
  const filteredActs = selectedActCat === actCategories[0]
    ? activitesSurPlace
    : activitesSurPlace.filter((a: ActiviteSurPlace) => a.category === selectedActCat);

  const filteredPOI = selectedPOIFilter === 'all'
    ? pointsInteret
    : pointsInteret.filter((p: POI) => p.type === selectedPOIFilter);

  const coordsList: [number, number][] = [
    GITE_COORDS,
    ...filteredPOI
      .map((p: POI) => p.coord ? [p.coord.lat, p.coord.lng] as [number, number] : null)
      .filter((c): c is [number, number] => !!c)
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section style={{ backgroundColor: "#a32b2b" }} className="py-16 text-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            {t('activitesPage.header.title')}
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {t('activitesPage.header.subtitle')}
          </p>
        </div>
      </section>


      {/* Activités sur place */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-warm-brown mb-4">
              {t('activitesPage.onSite.title')}
            </h2>
            <p className="text-soft-green text-lg max-w-2xl mx-auto">
              {t('activitesPage.onSite.subtitle')}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {actCategories.map((cat: string) => (
              <button
                key={cat}
                onClick={() => setSelectedActCat(cat)}
                className={`px-4 py-2 rounded-full transition ${
                  selectedActCat === cat
                    ? 'bg-savoyard text-cream shadow-lg'
                    : 'bg-cream text-warm-brown hover:bg-savoyard/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActs.map((a: ActiviteSurPlace, i: number) => (
              <div key={i} className="bg-cream p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{a.icon}</div>
                <h3 className="font-semibold text-warm-brown text-xl mb-3 text-center">
                  {a.title}
                </h3>
                <p className="text-soft-green text-center mb-4">{a.description}</p>
                <div className="text-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      a.option
                        ? 'bg-orange-100 text-orange-800'
                        : a.disponibilite
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {a.option
                      ? t('activitesPage.onSite.optionnel')
                      : a.disponibilite
                        ? t('activitesPage.onSite.compris')
                        : t('activitesPage.onSite.surDemande')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Points d'intérêt */}
      <section className="py-16 bg-soft-green/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-warm-brown mb-4">
              {t('activitesPage.poiSection.title')}
            </h2>
            <p className="text-soft-green text-lg">
              {t('activitesPage.poiSection.subtitle')}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {poiFilters.map((f: Filter) => (
              <button
                key={f.id}
                onClick={() => setSelectedPOIFilter(f.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition ${
                  selectedPOIFilter === f.id
                    ? 'bg-savoyard text-cream shadow-lg'
                    : 'bg-cream text-warm-brown hover:bg-savoyard/10'
                }`}
              >
                <span>{f.icon}</span>
                <span className="font-medium">{f.label}</span>
              </button>
            ))}
          </div>
          {/* Carte OSM */}
          <div className="bg-cream rounded-2xl shadow-lg p-8 mb-8 relative">
            <div className="rounded-xl overflow-hidden w-full h-[550px] z-10 relative">
              <MapContainer
                center={GITE_COORDS}
                zoom={15}
                style={{ width: "100%", height: "100%" }}
                scrollWheelZoom={true}
                className="rounded-xl"
                whenReady={() => setMapReady(true)}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* Marqueurs POI */}
                {filteredPOI.map((p: POI) => (
                  <Marker
                    key={p.id}
                    position={p.coord ? [p.coord.lat, p.coord.lng] as [number, number] : GITE_COORDS}
                    icon={poiIcon}
                    zIndexOffset={0}
                  >
<Popup>
  <div className="min-w-[180px] bg-cream/95 rounded-xl px-4 py-3 font-savoyard text-[15px] text-warm-brown shadow-lg">
    <div className="font-bold text-warm-brown mb-1">{p.nom}</div>
    <div className="text-savoyard text-xs mb-0.5">{p.distance}</div>
    <div className="text-soft-green text-sm mb-1">{p.description}</div>
    <div className="flex items-center mb-1">
      {[...Array(5)].map((_, ii) => (
        <Star
          key={ii}
          className={`w-4 h-4 ${
            ii < Math.round(p.rating >= 4.5 ? 5 : p.rating)
              ? 'text-yellow-400 fill-current'
              : 'text-savoyard/30'
          }`}
        />
      ))}
      <span className="ml-2 text-savoyard font-medium">{p.rating}</span>
    </div>

    {/* Site web */}
    {p.website && (
      <a
        href={p.website}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-xs text-savoyard underline hover:text-warm-brown mb-1"
      >
        {t('activitesPage.poiSection.website')}
      </a>
    )}

    {/* Téléphone */}
    {p.phone && (
      <div className="text-xs text-savoyard mt-1 mb-1">
        📞 <a href={`tel:${p.phone}`} className="underline hover:text-warm-brown">{p.phone}</a>
      </div>
    )}

    {/* === Itinéraire juste après site & téléphone === */}
    {p.hasItinerary !== false && p.coord && (
      <a
        href={`https://www.google.com/maps/dir/?api=1&origin=130+Rue+des+Bouchets,+Yvoire&destination=${p.coord.lat},${p.coord.lng}&travelmode=${p.nom === "Plage d'Excenevex" ? "bicycling" : "walking"}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-savoyard hover:text-warm-brown font-medium text-xs mt-1 underline"
      >
        <ExternalLink className="w-4 h-4" />
        <span>{t('activitesPage.poiSection.gmapsItineraire')}</span>
      </a>
    )}
  </div>
</Popup>

                  </Marker>
                ))}

                {/* Marqueur maison */}
                <Marker
                  key={'maison-' + selectedPOIFilter}
                  position={GITE_COORDS}
                  icon={homeIcon}
                  zIndexOffset={1000}
                >
                  <Popup>
                    <div className="min-w-[170px] bg-cream/95 rounded-xl px-3 py-2 font-savoyard text-[14px] text-warm-brown shadow-lg">
                      <div className="font-bold text-warm-brown mb-0.5">{t('activitesPage.poiSection.popup.yourGiteTitle')}</div>
                      <div className="text-savoyard text-xs mb-1">{t('activitesPage.poiSection.popup.yourGiteHome')}</div>
                      <div className="text-soft-green text-xs mb-1 leading-snug">
                        {t('activitesPage.poiSection.popup.yourGiteDesc')}
                      </div>
                      <div className="flex flex-col gap-0.5 mt-1">
                        <a
                          href="/le-gite"
                          className="text-savoyard text-[12px] underline hover:text-warm-brown"
                        >
                          {t('activitesPage.poiSection.popup.seeGitePage')}
                        </a>
                        <div className="text-[12px] text-savoyard">
                          {t('activitesPage.poiSection.popup.call')}
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>
                {/* FitBounds et bouton recentrer */}
                <FitBoundsIfNeeded
                  points={coordsList}
                  filterKey={selectedPOIFilter}
                  mapReady={mapReady}
                />
                <CenterHomeButton />
              </MapContainer>
            </div>
          </div>
          {/* Cartes POI en dessous */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPOI.map((p: POI) => (
              <div
                key={p.id}
                className="bg-cream p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-warm-brown text-lg">{p.nom}</h3>
                  <span className="text-sm text-savoyard font-medium bg-savoyard/10 px-2 py-1 rounded">
                    {p.distance}
                  </span>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, ii) => (
                    <Star
                      key={ii}
                      className={`w-4 h-4 ${ii < Math.round(p.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-soft-green">{p.rating}</span>
                </div>
                <p className="text-soft-green text-sm mb-4">{p.description}</p>
                {/* Si restaurant (site web & téléphone) */}
                {p.type === 'restaurant' && (
                  <div className="mt-2 space-y-1">
                    {p.website && (
                      <a
                        href={p.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-savoyard underline hover:text-light-savoyard"
                      >
                        {t('activitesPage.poiSection.website')}
                      </a>
                    )}
                    {p.phone && (
                      <p className="text-sm text-soft-green">
                        📞 <a href={`tel:${p.phone}`} className="underline hover:text-savoyard">
                          {p.phone}
                        </a>
                      </p>
                    )}
                  </div>
                )}
                {/* Toujours afficher l’itinéraire en dernier */}
                {p.hasItinerary !== false && p.coord && (
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&origin=130+Rue+des+Bouchets,+Yvoire&destination=${p.coord.lat},${p.coord.lng}&travelmode=${p.nom === "Plage d'Excenevex" ? "bicycling" : "walking"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-savoyard underline block mt-2"
                  >
                    {t('activitesPage.poiSection.gmapsItineraire')}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Excursions recommandées */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-warm-brown mb-4">
              {t('activitesPage.excursionsSection.title')}
            </h2>
            <p className="text-soft-green text-lg">{t('activitesPage.excursionsSection.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {excursions.map((ex: Excursion, idx: number) => (
              <div
                key={idx}
                className="bg-cream rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {ex.image && (
                  <img src={ex.image} alt={ex.titre} className="w-full h-48 object-cover" />
                )}
                <div className="p-6">
                  <h3 className="font-semibold text-warm-brown text-xl mb-2">{ex.titre}</h3>
                  <p className="text-savoyard font-medium mb-3">{ex.distance}</p>
                  <p className="text-soft-green">{ex.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activites;
