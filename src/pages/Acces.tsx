import { useTranslation } from "react-i18next";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Bus, Car, Train, Plane, Ship, Clock, Phone, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import type { LatLngTuple } from "leaflet";

const GITE_COORDS: LatLngTuple = [46.368858, 6.329471];

const homeIcon = L.divIcon({
  className: "emoji-marker-home",
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
  popupAnchor: [0, -44],
});

// Nouveau composant flyTo façon Google Maps
function RecenterButton({
  coords,
  zoom = 16,
  zoomOut = 13,
}: { coords: LatLngTuple; zoom?: number; zoomOut?: number }) {
  const map = useMap();

  const handleClick = () => {
    map.flyTo(coords, zoomOut, { duration: 0.7 });
    setTimeout(() => {
      map.flyTo(coords, zoom, { duration: 1.1 });
    }, 700);
  };

  return (
    <button
      aria-label="Recentrer sur la maison"
      onClick={handleClick}
      style={{
        position: "absolute",
        top: 18,
        right: 18,
        zIndex: 1000,
        background: "#fff",
        borderRadius: "50%",
        width: 48,
        height: 48,
        border: "3px solid #a32b2b",
        boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "box-shadow 0.2s",
      }}
      className="hover:shadow-xl"
    >
      <span style={{ fontSize: "2rem", lineHeight: 1 }}>🏡</span>
    </button>
  );
}

const Acces = () => {
  const { t } = useTranslation();

  const openGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=46.368858,6.329471&travelmode=driving",
      "_blank"
    );
  };

  const openItinerary = (destination: string) => {
    const url = `https://www.google.com/maps/dir/${destination}/130+Rue+des+Bouchets,+Yvoire,+France`;
    window.open(url, "_blank");
  };

  // i18n data extraction
  const transport = t("accesPage.transport", { returnObjects: true }) as any;
  const distances = t("accesPage.distances.list", { returnObjects: true }) as any[];

  return (
    <div className="pt-20">
      {/* Header */}
      <section style={{ backgroundColor: "#a32b2b" }} className="py-16 text-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            {t("accesPage.header.title")}
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {t("accesPage.header.subtitle")}
          </p>
        </div>
      </section>

      {/* Localisation avec carte */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-warm-brown mb-4">
              {t("accesPage.localisation.title")}
            </h2>
            <p className="text-soft-green text-lg">
              {t("accesPage.localisation.desc")}
            </p>
          </div>
          <div className="min-w-[170px] bg-cream/95 rounded-xl px-3 py-2 pt-8 font-savoyard text-[14px] text-warm-brown shadow-lg">
            <div className="rounded-xl overflow-hidden w-full h-[400px] relative">
              <MapContainer
                center={GITE_COORDS}
                zoom={16}
                style={{ width: "100%", height: "100%" }}
                scrollWheelZoom={true}
                className="rounded-xl"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={GITE_COORDS} icon={homeIcon} zIndexOffset={1000}>
                <Popup>
  <div
    className="min-w-[170px] bg-cream/95 rounded-xl px-3 py-2 font-savoyard text-[14px] text-warm-brown shadow-lg"
    style={{ paddingRight: "2.5rem" }} // Ajoute ce style
  >
    <div className="font-bold text-warm-brown mb-0.5">
      {t("accesPage.localisation.popup.title")}
    </div>
    <div className="text-savoyard text-xs mb-1">
      {t("accesPage.localisation.popup.home")}
    </div>
    <div
      className="text-soft-green text-xs mb-1 leading-snug"
      style={{ whiteSpace: "pre-line" }}
    >
      {t("accesPage.localisation.popup.desc")}
    </div>
    <div className="flex flex-col gap-0.5 mt-1">
      <Link
        to="/le-gite"
        className="text-savoyard text-[12px] underline hover:text-warm-brown"
      >
        {t("accesPage.localisation.popup.seeGite")}
      </Link>
      <div className="text-[12px] text-savoyard">
        {t("accesPage.localisation.popup.phone")}
      </div>
    </div>
  </div>
</Popup>

                </Marker>
                <RecenterButton coords={GITE_COORDS} />
              </MapContainer>
            </div>
            <div className="text-center mt-6">
              <button
                onClick={openGoogleMaps}
                className="bg-savoyard text-cream px-6 py-3 rounded-full font-medium hover:bg-light-savoyard transition-colors"
              >
                {t("accesPage.localisation.openGmaps")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Moyens de transport */}
      <section className="py-16 bg-soft-green/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-warm-brown mb-4">
              {t("accesPage.transport.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Carte voiture */}
            <TransportCard
              Icon={Car}
              title={transport.voiture.title}
              list={transport.voiture.infos}
              linkText={transport.voiture.itineraire}
              link="https://www.google.com/maps/dir/?api=1&destination=130+Rue+des+Bouchets,+74140+Yvoire"
            />
            {/* Carte train+bateau */}
            <TransportCard
              Icon={Train}
              title={transport.train.title}
              list={transport.train.infos}
              linkText={transport.train.trainBtn}
              link="https://www.sncf-connect.com"
              link2Text={transport.train.bateauBtn}
              link2="https://www.cgn.ch/fr/horaires-billets"
            />
            {/* Carte bus */}
            <TransportCard
              Icon={Bus}
              title={transport.bus.title}
              list={transport.bus.infos}
              linkText={transport.bus.busBtn}
              link="https://www.tp-info.ch/sites/default/files/fap/2025/pdf/11.271.pdf"
            />
            {/* Carte avion */}
            <TransportCard
              Icon={Plane}
              title={transport.avion.title}
              list={transport.avion.infos}
              linkText={transport.avion.geneveBtn}
              link="https://www.gva.ch"
              link2Text={transport.avion.lyonBtn}
              link2="https://www.google.com/maps/dir/?api=1&origin=Lyon+Saint-Exupery+Airport&destination=130+Rue+des+Bouchets,+74140+Yvoire&travelmode=driving"
            />
            {/* Carte lac */}
            <TransportCard
              Icon={Ship}
              title={transport.lac.title}
              list={transport.lac.infos}
              linkText={transport.lac.bateauBtn}
              link="https://www.cgn.ch/fr/horaires-billets"
            />
          </div>
        </div>
      </section>

      {/* Distances et temps de trajet */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-warm-brown mb-4">
              {t("accesPage.distances.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {distances.map((destination, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-warm-brown text-lg">{destination.ville}</h3>
                  <span className="text-xs text-savoyard bg-savoyard/10 px-2 py-1 rounded">
                    {destination.type}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-soft-green">{t("accesPage.distances.distance")}</span>
                    <span className="font-medium text-warm-brown">{destination.distance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-soft-green">{t("accesPage.distances.time")}</span>
                    <span className="font-medium text-warm-brown">{destination.temps}</span>
                  </div>
                </div>
                <button
                  onClick={() => openItinerary(destination.ville)}
                  className="w-full mt-4 flex items-center justify-center space-x-2 text-savoyard hover:text-light-savoyard transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span className="text-sm">{t("accesPage.distances.itineraireBtn")}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-16 bg-warm-brown text-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold mb-4">
              {t("accesPage.infos.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Check-in */}
            <InfoCard Icon={Clock} title={t("accesPage.infos.checkin.title")}>
              <p className="text-cream/80">{t("accesPage.infos.checkin.desc")}</p>
              <p className="text-sm text-cream/60">{t("accesPage.infos.checkin.flex")}</p>
            </InfoCard>
            {/* Check-out */}
            <InfoCard Icon={Clock} title={t("accesPage.infos.checkout.title")}>
              <p className="text-cream/80">{t("accesPage.infos.checkout.desc")}</p>
              <p className="text-sm text-cream/60">{t("accesPage.infos.checkout.flex")}</p>
            </InfoCard>
            {/* Parking */}
            <InfoCard Icon={Car} title={t("accesPage.infos.parking.title")}>
              <p className="text-cream/80">{t("accesPage.infos.parking.desc")}</p>
              <p className="text-sm text-cream/60">{t("accesPage.infos.parking.guarantee")}</p>
            </InfoCard>
            {/* Assistance */}
            <InfoCard Icon={Phone} title={t("accesPage.infos.assistance.title")}>
              <p className="text-cream/80">{t("accesPage.infos.assistance.desc")}</p>
              <p className="text-sm text-cream/60">{t("accesPage.infos.assistance.help")}</p>
            </InfoCard>
          </div>
          <div className="text-center mt-12">
            <div className="bg-cream/10 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="font-semibold mb-3">{t("accesPage.infos.helpBlock.title")}</h3>
              <p className="text-cream/80 mb-4">{t("accesPage.infos.helpBlock.desc")}</p>
              <a
                href="/contact"
                className="inline-block bg-savoyard hover:bg-light-savoyard text-cream px-6 py-3 rounded-full font-medium transition-colors"
              >
                {t("accesPage.infos.helpBlock.contactBtn")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function TransportCard({ Icon, title, list, linkText, link, link2Text, link2 }: any) {
  return (
    <div className="flex flex-col bg-cream p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-slide-up h-full min-h-[380px]">
      <div className="w-16 h-16 bg-savoyard/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-savoyard" />
      </div>
      <h3 className="font-semibold text-warm-brown text-xl mb-3 text-center">{title}</h3>
      <ul className="text-soft-green text-sm space-y-2 flex-1">
        {list && list.map((li: string, i: number) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: li }} />
        ))}
      </ul>
      <div className="flex flex-col gap-2 mt-auto">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-savoyard/10 text-savoyard py-2 rounded-lg hover:bg-savoyard/20 transition-colors text-center"
          >
            {linkText}
          </a>
        )}
        {link2 && (
          <a
            href={link2}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-savoyard/10 text-savoyard py-2 rounded-lg hover:bg-savoyard/20 transition-colors text-center"
          >
            {link2Text}
          </a>
        )}
      </div>
    </div>
  );
}

function InfoCard({ Icon, title, children }: any) {
  return (
    <div className="text-center">
      <Icon className="w-8 h-8 mx-auto mb-3" />
      <h3 className="font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
}

export default Acces;
