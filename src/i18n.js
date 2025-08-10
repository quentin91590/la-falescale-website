import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      // Navigation / Menu (toujours label à la racine)
      accueil: 'Accuei',
      gite: 'Le Gîte',
      activites: 'Activités',  // 👈 Pour t('activites.label')
      acces: 'Accès',
      reserver: 'Réserver',
      contact: 'Contact',

      // Bloc ACTIVITÉS (page)
      activitesPage: {
        header: {
          title: "Activités",
          subtitle: "Découvrez les activités sur place et explorez Yvoire & le Léman"
        },
        onSite: {
          title: "Activités sur place",
          subtitle: "Détente et loisirs directement depuis votre gîte",
          categories: ["Tous", "Sport", "Détente", "Famille"],
          optionnel: "Optionnel",
          compris: "Compris",
          surDemande: "Sur demande",
          list: [
            { icon: "🏖️", title: "Baignade", description: "Plongez dans les eaux cristallines du Léman, à deux pas du gîte.", disponibilite: true, category: "Détente" },
            { icon: "🤿", title: "Snorkeling", description: "Découvrez les secrets sous-marins du Léman avec masque et tuba.", disponibilite: true, category: "Sport" },
            { icon: "🚲", title: "Vélos", description: "Balades à vélo entre lac et campagne.", disponibilite: true, category: "Sport" },
            { icon: "🎾", title: "Tennis", description: "Court de tennis à 15 min à pied et raquettes à disposition.", disponibilite: true, category: "Sport" },
            { icon: "🏓", title: "Ping-pong", description: "Table de ping-pong couverte pour des moments conviviaux.", disponibilite: true, category: "Sport" },
            { icon: "🏸", title: "Badminton", description: "Filet et raquettes à disposition pour des échanges sportifs.", disponibilite: true, category: "Sport" },
            { icon: "🎲", title: "Jeux de société", description: "Large sélection de jeux pour petits et grands.", disponibilite: true, category: "Famille" },
            { icon: "🍖", title: "Barbecue", description: "Barbecue à dispo pour vos soirées grillades.", disponibilite: true, category: "Famille" },
            { icon: "🧖", title: "Jacuzzi", description: "Détente absolue dans notre jacuzzi.", option: true, category: "Détente" },
            { icon: "🛶", title: "Kayak", description: "Explorez le lac Léman à votre rythme. Kayaks disponibles sur demande.", option: true, category: "Sport" },
            { icon: "🏄", title: "Paddle", description: "Stand-up paddle pour découvrir le lac en toute tranquillité.", option: true, category: "Sport" }
          ]
        },
        poiSection: {
          title: "Points d'intérêt à proximité",
          subtitle: "Explorez les trésors d’Yvoire et de ses environs",
          filters: [
            { id: "all", label: "Tout voir", icon: "🗺️" },
            { id: "restaurant", label: "Restaurants", icon: "🍽️" },
            { id: "plage", label: "Plages", icon: "🏖️" },
            { id: "culture", label: "Culture", icon: "🏛️" },
            { id: "nature", label: "Nature", icon: "🌿" },
            { id: "activite", label: "Activités", icon: "⛵" }
          ],
          map: { centerHome: "Recentrer sur le gîte" },
          popup: {
            yourGiteTitle: "Votre Gîte – La Falescale",
            yourGiteHome: "C’est chez vous !",
            yourGiteDesc: "Gîte de charme aux portes d'Yvoire pour 4 personnes.\nCadre bucolique & accès direct au lac.",
            seeGitePage: "👉 Voir la page du gîte",
            call: "📞 06 65 68 94 83"
          },
          gmapsItineraire: "Itinéraire Google Maps",
          website: "🌐 Site web"
        },
        poiList: [
          { id: 1, nom: "Château d'Yvoire", type: "culture", distance: "450m", description: "Château médiéval du 14ᵉ siècle.", rating: 4.6 },
          { id: 2, nom: "Jardin des Cinq Sens", type: "nature", distance: "400m", description: "Une promenade sensorielle étonnante à la découverte du monde végétal.", rating: 4.3 },
          { id: 3, nom: "Pizzeria La Dîme", type: "restaurant", distance: "250m", description: "Pizzas cuites au feu de bois.", rating: 4.4, website: "https://www.la-dime-yvoire.fr", phone: "+33 04 50 72 89 87" },
          { id: 4, nom: "Plage de la Garritte", type: "plage", distance: "100m", description: "Agréable pelouse et plage de galets.", rating: 4.0 },
          { id: 5, nom: "Port de plaisance", type: "activite", distance: "500m", description: "Location de bateaux et excursions vers/depuis Genève, Lausanne et Nyon.", rating: 4.8 },
          { id: 6, nom: "Domaine de Rovorée", type: "nature", distance: "1,2km", description: "Un domaine de 24 hectares entre lac, forêt et culture, accessible à pied ou vélo", rating: 4.6 },
          { id: 7, nom: "Restaurant Le Vieux Logis", type: "restaurant", distance: "250m", description: "Cuisine traditionnelle et locale de qualité.", rating: 4.1, website: "https://restaurantlevieuxlogis.fr", phone: "+33 4 50 72 80 24" },
          { id: 8, nom: "Église St-Pancrace", type: "culture", distance: "300m", description: "Église médiévale emblématique d’Yvoire, au clocher étincelant.", rating: 4.5 },
          { id: 9, nom: "Restaurant du Port", type: "restaurant", distance: "400m", description: "Vue lac, cuisine du terroir et saveurs authentiques.", rating: 4.4, website: "https://restaurantduport-yvoire.fr", phone: "+33 4 50 72 80 17" },
          { id: 10, nom: "Plage du Domaine de Rovorée", type: "plage", distance: "1,7km", description: "Plage discrète et nature à 30 min de marche.", rating: 4.8 },
          { id: 11, nom: "Plage des canards", type: "plage", distance: "600m", description: "Plage secrète, difficile d’accès à pied, mais magique par les eaux du Léman. Demander des conseils pour l'accès.", rating: 4.3, "hasItinerary": false },
          { id: 12, nom: "Plage d'Excenevex", type: "plage", distance: "4,4km", description: "Unique plage de sable fin du Léman et ambiance estivale.", rating: 4.4 },
          { id: 13, nom: "Espace boisé des Bouchets", type: "nature", distance: "20m", description: "Espace boisé avec pelouse et tables, idéal pour pique-niquer et se reposer.", rating: 5 },
          { id: 14, nom: "Le Bateau Ivre", type: "restaurant", distance: "300m", description: "Bistrot chaleureux, cuisine du marché et produits locaux au cœur du village.", rating: 4.6, website: "https://www.restaurant-lebateauivre.com/", phone: "+33 4 50 72 81 84" },
          { id: 15, nom: "La Traboule", type: "restaurant", distance: "260m", description: "Cadre médiéval, cuisine raffinée et terrasse pleine de charme au cœur d’Yvoire.", rating: 4.6, website: "https://la-traboule.fr/", phone: "+33 4 50 72 83 73" },
          { id: 16, nom: "Espace multisports", type: "activite", distance: "1.2km", description: "Plateau multisports (football, basket, tennis, ping-pong, skate), jeux pour enfants", rating: 4.6 },
          { id: 17, nom: "Bois de Feycler", type: "nature", distance: "1,0km", description: "Un bois accessible avec circuits de randonnée et VTT pour tous les niveaux", rating: 5 }
        ],
        excursionsSection: {
          title: "Excursions recommandées",
          subtitle: "Découvrez la région depuis Yvoire",
          list: [
            {
              titre: "Genève",
              distance: "45 min en voiture",
              image: "https://images.pexels.com/photos/11277773/pexels-photo-11277773.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Ville cosmopolite, jet d’eau."
            },
            {
              titre: "Annecy",
              distance: "1 h en voiture",
              image: "https://images.pexels.com/photos/12780893/pexels-photo-12780893.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Venise des Alpes, lac cristallin."
            },
            {
              titre: "Chamonix",
              distance: "1 h 30 en voiture",
              image: "https://images.pexels.com/photos/12358219/pexels-photo-12358219.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Mont-Blanc et randonnées."
            }
          ]
        }


      },

      // Footer
      footer: {
        desc: "Maison de charme à Yvoire, pour 4 personnes,\nà 100m de la plage du lac Léman.\nUn havre de paix pour vos vacances en Haute-Savoie.",
        navigation: "Navigation",
        nav: {
          accueil: "Accueil",
          gite: "Le Gîte",
          activites: "Activités",
          acces: "Accès",
          reservation: "Réservation",
          contact: "Contact"
        },
        contact: "Contact",
        address: {
          line1: "Yvoire, Haute-Savoie",
          line2: "À 100m du lac Léman"
        },
        phone: "+33 6 65 68 94 83",
        email: "contact@lafalescale.fr",
        rights: "Tous droits réservés.",
        mentions: "Mentions légales",
        confidentialite: "Confidentialité"
      },

      // Home page
      home: {
        hero: {
          title: "La Falescale",
          subtitle: "Un havre de paix au bord du Léman",
          desc: "Maison de charme à Yvoire, pour 4 personnes, à 100m de la plage",
          button: "Voir les disponibilités"
        },
        features: [
          { icon: "MapPin", text: "À 100m de la plage" },
          { icon: "Castle", text: "Aux portes d'Yvoire" },
          { icon: "Sparkles", text: "Lieu romantique & calme" },
          { icon: "Gamepad2", text: "Jeux et activités pour tous" },
          { icon: "Wifi", text: "Wi-Fi gratuit" },
          { icon: "Car", text: "Parking privé" }
        ],
        gallery: {
          title: "Découvrez notre gîte",
          subtitle: "Un cadre authentique et chaleureux pour vos vacances au bord du lac Léman",
          button: "Voir plus de photos"
        },
        activities: {
          title: "Nos activités",
          subtitle: "Détente et aventure au cœur de la Haute-Savoie",
          items: [
            { title: "Kayak", emoji: "🛶" },
            { title: "Paddle", emoji: "🏄" },
            { title: "Jacuzzi", emoji: "🧘" },
            { title: "Ping-pong", emoji: "🏓" }
          ],
          button: "Découvrir toutes les activités"
        },
        testimonials: {
          title: "Ce que disent nos hôtes",
          items: [
            {
              name: "Marie & Jean",
              text: "Un séjour magique dans ce gîte de charme ! La vue sur le lac est époustouflante et l'accueil chaleureux.",
              rating: 5
            },
            {
              name: "Famille Dubois",
              text: "Parfait pour nos vacances en famille. Les enfants ont adoré la proximité du lac et nous la tranquillité.",
              rating: 5
            },
            {
              name: "Sophie",
              text: "Yvoire est un petit bijou et ce gîte en est l'écrin parfait. Nous reviendrons sans hésiter !",
              rating: 5
            }
          ]
        }
      },

      //Le Gite
      leGite: {
        header: {
          title: "Le Gîte",
          desc: "Découvrez notre maison de charme, authentique et chaleureuse, où chaque détail a été pensé pour votre confort et votre bien-être"
        },
        ambiance: {
          title: "Une ambiance authentique",
          p1: "La Falescale vous accueille dans une atmosphère chaleureuse et authentique, typique des maisons savoyardes. Nos matériaux nobles et notre décoration soignée créent un cadre parfait pour vos vacances.",
          p2: "Bois naturel, pierres locales et textiles doux composent une harmonie parfaite entre tradition et confort moderne. Chaque pièce respire la quiétude et invite à la détente.",
          p3: "Située à seulement 50 mètres du lac Léman, notre maison offre une vue imprenable et un accès privilégié aux plus belles plages d'Yvoire."
        },
        plan: {
          title: "Plan du gîte",
          desc: "70m² aménagés avec goût pour 4 personnes",
          groundfloor: "Rez-de-chaussée",
          floor: "Étage",
          list1: [
            "Salon avec canapé-lit (30m²)",
            "Cuisine équipée ouverte (15m²)",
            "Salle de bain avec douche italienne",
            "WC séparés",
            "Terrasse couverte (20m²)"
          ],
          list2: [
            "Chambre 1 avec lit double (12m²)",
            "Chambre 2 avec lit double (10m²)",
            "Salle d'eau avec WC",
            "Balcon vue lac (8m²)"
          ]
        },
        interieurs: {
          title: "Équipements intérieurs",
          desc: "Tout le confort moderne dans un cadre authentique",
          items: [
            {
              icon: "Bed",
              title: "Chambre 1",
              description: "Lit double 160x200, armoire, vue lac"
            },
            {
              icon: "Bed",
              title: "Chambre 2",
              description: "Lit double 140x190, commode, vue jardin"
            },
            {
              icon: "Sofa",
              title: "Salon",
              description: "Canapé-lit 2 personnes, table basse"
            },
            {
              icon: "Tv",
              title: "Divertissement",
              description: "TV écran plat, Netflix, livres"
            },
            {
              icon: "Wifi",
              title: "Connexion",
              description: "Wi-Fi haut débit gratuit"
            },
            {
              icon: "Utensils",
              title: "Cuisine équipée",
              description: "Lave-vaisselle, four, micro-ondes"
            },
            {
              icon: "Coffee",
              title: "Petit-déjeuner",
              description: "Machine à café, grille-pain, bouilloire"
            }
          ]
        },
        exterieurs: {
          title: "Espaces extérieurs",
          desc: "Profitez de la nature et de la vue exceptionnelle sur le lac",
          items: [
            {
              icon: "Waves",
              title: "Accès lac",
              description: "Plage à 100m"
            },
            {
              icon: "Car",
              title: "Parking",
              description: "Place de parking privée"
            },
            {
              icon: "Flower2",
              title: "Jardin fleuri",
              description: "Espace vert privatif, barbecue"
            }
          ]
        },
        galerie: {
          title: "Galerie photos",
          desc: "Découvrez chaque espace de notre gîte de charme",
          // Les images/alt peuvent rester fixes ou être traduits :
          photos: [
            { src: "sejour.jpg", alt: "Salon principal" },
            { src: "chambre.jpg", alt: "Cuisine équipée" },
            { src: "Photo_maison.jpg", alt: "Chambre principale" },
            { src: "sejour.jpg", alt: "Salle de bain" },
            { src: "chambre.jpg", alt: "Terrasse vue lac" },
            { src: "Photo_maison.jpg", alt: "Espace extérieur" }
          ]
        },
        cta: {
          title: "Prêt pour votre séjour ?",
          desc: "Réservez dès maintenant votre escapade dans notre gîte de charme et créez des souvenirs inoubliables au bord du lac Léman",
          reserver: "Réserver maintenant",
          contact: "Nous contacter"
        }
      },
      //Accès
      accesPage: {
        header: {
          title: "Comment nous rejoindre",
          subtitle: "Découvrez tous les moyens de transport pour venir à La Falescale, aux portes du village médiéval d'Yvoire"
        },
        localisation: {
          title: "Notre localisation",
          desc: "Yvoire, Haute-Savoie, France - Au bord du lac Léman",
          popup: {
            title: "Votre Gîte – La Falescale",
            home: "C’est chez vous !",
            desc: "Gîte chaleureux pour 4 personnes.\nTerrasse panoramique & accès direct au lac.",
            seeGite: "👉 Voir la page du gîte",
            phone: "📞 +33 6 65 68 94 83"
          },
          openGmaps: "Ouvrir dans Google Maps"
        },
        transport: {
          title: "Comment venir facilement à Yvoire ?",
          voiture: {
            title: "En voiture",
            infos: [
              "Genève centre : <b>30-40 min</b> (25 km par la D1005)",
              "Aéroport Genève : <b>35-40 min</b>",
              "Annecy : <b>50-55 min</b> (via A410/D1005)",
              "Lyon : <b>2 h</b> (A40 sortie 13 Bellegarde)",
              "Village piéton, parkings <b>payants</b> (5 municipaux), parking privé <b>gratuit</b>"
            ],
            itineraire: "Calculer mon itinéraire"
          },
          train: {
            title: "Train + bateau",
            infos: [
              "Train Genève-Cornavin → Nyon (IR15/95/RE33, toutes 10-15 min)",
              "Bateau Nyon → Yvoire (ligne CGN N3, traversée 20 min)",
              "Comptez <b>45-60 min porte-à-porte</b> depuis Genève"
            ],
            trainBtn: "Réserver un train",
            bateauBtn: "Horaires bateau"
          },
          bus: {
            title: "100% bus",
            infos: [
              "TPG ligne 25 jusqu'à Genève Rive",
              "Bus transfrontalier 271 vers Yvoire (Alpbus)",
              "Durée totale <b>~1 h 30</b> selon trafic"
            ],
            busBtn: "Voir horaires bus 271"
          },
          avion: {
            title: "Depuis l'aéroport",
            infos: [
              "Genève GVA : <b>35-40 min</b> (voiture/taxi)",
              "Train + bateau : <b>~1 h 30</b> via Nyon",
              "Lyon St-Exupéry : <b>~2 h</b> (A40 sortie 13)"
            ],
            geneveBtn: "Aéroport Genève",
            lyonBtn: "Lyon St-Exupéry ➔ Yvoire"
          },
          lac: {
            title: "Par le lac",
            infos: [
              "Bateau Nyon-Yvoire : toute l’année (ligne CGN N3)",
              "Croisières Genève → Yvoire en été",
              "Port de plaisance (400m) : amarrage visiteurs, pas de carburant"
            ],
            bateauBtn: "Voir horaires bateaux"
          }
        },
        distances: {
          title: "Distances depuis les principales villes",
          list: [
            { ville: "Genève", distance: "45 km", temps: "45 min", type: "Internationale" },
            { ville: "Annecy", distance: "75 km", temps: "1h", type: "Touristique" },
            { ville: "Lyon", distance: "150 km", temps: "2h", type: "Métropole" },
            { ville: "Chamonix", distance: "90 km", temps: "1h30", type: "Montagne" },
            { ville: "Thonon-les-Bains", distance: "15 km", temps: "20 min", type: "Locale" },
            { ville: "Évian-les-Bains", distance: "25 km", temps: "30 min", type: "Thermale" }
          ],
          itineraireBtn: "Itinéraire",
          distance: "Distance :",
          time: "Temps :"
        },
        infos: {
          title: "Informations pratiques",
          checkin: {
            title: "Check-in",
            desc: "À partir de 16h00",
            flex: "Arrivée flexible possible"
          },
          checkout: {
            title: "Check-out",
            desc: "Avant 11h00",
            flex: "Départ tardif sur demande"
          },
          parking: {
            title: "Parking",
            desc: "Gratuit et privé",
            guarantee: "Place garantie"
          },
          assistance: {
            title: "Assistance",
            desc: "24h/24 - 7j/7",
            help: "Support voyage"
          },
          helpBlock: {
            title: "Besoin d'aide pour organiser votre voyage ?",
            desc: "Notre équipe peut vous aider à organiser votre transport et vous donner tous les conseils nécessaires pour un voyage serein.",
            contactBtn: "Nous contacter"
          }
        }
      },
      contactPage: {
        header: {
          title: "Contact",
          subtitle: "Nous sommes là pour vous accompagner dans l'organisation de votre séjour et répondre à toutes vos questions"
        },
        info: {
          title: "Nos coordonnées",
          address: { title: "Adresse" },
          phone: {
            title: "Téléphone",
            available: "Disponible de 9h à 19h"
          },
          email: {
            title: "Email",
            response: "Réponse sous 24h"
          },
          whatsapp: {
            title: "WhatsApp",
            response: "Réponse rapide"
          },
          social: { title: "Suivez-nous" }
        },
        form: {
          title: "Envoyez-nous un message",
          name: "Nom complet *",
          namePlaceholder: "Votre nom",
          email: "Email *",
          emailPlaceholder: "votre@email.com",
          phone: "Téléphone",
          phonePlaceholder: "+33 6 12 34 56 78",
          arrival: "Date d'arrivée souhaitée",
          departure: "Date de départ souhaitée",
          message: "Message *",
          messagePlaceholder: "Parlez-nous de votre projet de séjour, vos questions, besoins spécifiques...",
          send: "Envoyer le message",
          success: "Message envoyé ! Nous vous répondrons dans les plus brefs délais."
        }
      },
      reservationPage: {
  header: {
    title: "Réservation",
    subtitle: "Réservez votre séjour à La Falescale et profitez d'un moment magique au bord du lac Léman"
  },
  form: {
    title: "Vérifier les disponibilités",
    arrival: "Date d'arrivée",
    departure: "Date de départ",
    guests: "Nombre de personnes",
    guest1: "1 personne",
    guest2: "2 personnes",
    guest3: "3 personnes",
    guest4: "4 personnes",
    checking: "Vérification...",
    check: "Vérifier la disponibilité",
    noteTitle: "Note :",
    note: "La réservation sera confirmée après vérification de la disponibilité. Vous pouvez également réserver directement via nos partenaires.",
    missingDates: "Veuillez sélectionner les dates d'arrivée et de départ",
    success: "Dates disponibles ! Vous pouvez procéder à la réservation via nos partenaires."
  },
  direct: {
    title: "Réservation immédiate",
    text: "Pour une réservation instantanée, utilisez nos plateformes partenaires :",
    airbnb: "Réserver sur Airbnb",
    booking: "Réserver sur Booking.com"
  },
  capacity: {
    title: "Capacité du gîte",
    persons: "4 personnes",
    max: "Maximum",
    nights: "2 nuits",
    min: "Minimum"
  },
  tarifsTitle: "Nos tarifs",
  tarifsSubtitle: "Prix par nuit, pour 4 personnes maximum",
  tarifs: [
    { saison: "Haute saison (Juillet-Août)", prix: 150, description: "Week-end et semaine" },
    { saison: "Moyenne saison (Mai-Juin, Septembre)", prix: 120, description: "Printemps et début automne" },
    { saison: "Basse saison (Octobre-Avril)", prix: 90, description: "Hiver et début printemps" }
  ],
  night: "/ nuit",
  tax: "* Taxe de séjour non incluse (1€/personne/nuit)",
  conditionsTitle: "Conditions de séjour",
  conditions: [
    { icon: "Clock", title: "Arrivée", detail: "À partir de 16h00" },
    { icon: "Clock", title: "Départ", detail: "Avant 11h00" },
    { icon: "CheckCircle", title: "Linge fourni", detail: "Draps et serviettes inclus" },
    { icon: "AlertCircle", title: "Animaux", detail: "Admis sur demande (supplément)" }
  ],
  cancellationTitle: "Politique d'annulation",
  cancellation: [
    "Annulation gratuite jusqu'à 7 jours avant l'arrivée",
    "50% de remboursement entre 7 et 3 jours avant l'arrivée",
    "Aucun remboursement moins de 3 jours avant l'arrivée",
    "En cas de circonstances exceptionnelles, nous étudierons chaque demande individuellement"
  ]
},
    }
  },
  en: {
    translation: {
      // Header/Footer navigation
      accueil: 'Home',
      gite: 'The Cottage',
      activites: 'Activities',
      acces: 'Access',
      reserver: 'Book now',
      contact: 'Contact',

      activitesPage: {
        header: {
          title: "Activities",
          subtitle: "Discover on-site activities and explore Yvoire & Lake Geneva"
        },
        onSite: {
          title: "On-site activities",
          subtitle: "Relaxation and leisure directly from your cottage",
          categories: ["All", "Sport", "Relaxation", "Family"],
          optionnel: "Optional",
          compris: "Included",
          surDemande: "On request",
          list: [
            { icon: "🏖️", title: "Swimming", description: "Dive into the crystal-clear waters of Lake Geneva, just steps from the cottage.", disponibilite: true, category: "Relaxation" },
            { icon: "🤿", title: "Snorkeling", description: "Discover the underwater secrets of Lake Geneva with mask and snorkel.", disponibilite: true, category: "Sport" },
            { icon: "🚲", title: "Bikes", description: "Bike rides between lake and countryside.", disponibilite: true, category: "Sport" },
            { icon: "🎾", title: "Tennis", description: "Tennis court 15 min walk away, rackets available.", disponibilite: true, category: "Sport" },
            { icon: "🏓", title: "Table tennis", description: "Covered table tennis for friendly moments.", disponibilite: true, category: "Sport" },
            { icon: "🏸", title: "Badminton", description: "Net and rackets available for sporty exchanges.", disponibilite: true, category: "Sport" },
            { icon: "🎲", title: "Board games", description: "Large selection of games for young and old.", disponibilite: true, category: "Family" },
            { icon: "🍖", title: "Barbecue", description: "Barbecue available for your grilling evenings.", disponibilite: true, category: "Family" },
            { icon: "🧖", title: "Jacuzzi", description: "Absolute relaxation in our jacuzzi.", option: true, category: "Relaxation" },
            { icon: "🛶", title: "Kayak", description: "Explore Lake Geneva at your own pace. Kayaks available on request.", option: true, category: "Sport" },
            { icon: "🏄", title: "Paddle", description: "Stand-up paddle to discover the lake in complete tranquility.", option: true, category: "Sport" }
          ]
        },
        poiSection: {
          title: "Nearby points of interest",
          subtitle: "Explore the treasures of Yvoire and its surroundings",
          filters: [
            { id: "all", label: "Show all", icon: "🗺️" },
            { id: "restaurant", label: "Restaurants", icon: "🍽️" },
            { id: "plage", label: "Beaches", icon: "🏖️" },
            { id: "culture", label: "Culture", icon: "🏛️" },
            { id: "nature", label: "Nature", icon: "🌿" },
            { id: "activite", label: "Activities", icon: "⛵" }
          ],
          map: { centerHome: "Recenter on the cottage" },
          popup: {
            yourGiteTitle: "Your Cottage – La Falescale",
            yourGiteHome: "This is your place!",
            yourGiteDesc: "Charming cottage at the gates of Yvoire for 4 guests.\nBucolic setting & direct access to the lake.",
            seeGitePage: "👉 See the cottage page",
            call: "📞 +33 6 65 68 94 83"
          },
          gmapsItineraire: "Google Maps Itinerary",
          website: "🌐 Website"
        },
        poiList: [
          { id: 1, nom: "Yvoire Castle", type: "culture", distance: "450m", description: "14th-century medieval castle.", rating: 4.6 },
          { id: 2, nom: "Garden of Five Senses", type: "nature", distance: "400m", description: "An amazing sensory walk to discover the plant world.", rating: 4.3 },
          { id: 3, nom: "Pizzeria La Dîme", type: "restaurant", distance: "250m", description: "Wood-fired pizzas.", rating: 4.4, website: "https://www.la-dime-yvoire.fr", phone: "+33 04 50 72 89 87" },
          { id: 4, nom: "Garritte Beach", type: "plage", distance: "100m", description: "Pleasant lawn and pebble beach.", rating: 4.0 },
          { id: 5, nom: "Marina", type: "activite", distance: "500m", description: "Boat rental and excursions to/from Geneva, Lausanne, and Nyon.", rating: 4.8 },
          { id: 6, nom: "Rovorée Estate", type: "nature", distance: "1.2km", description: "A 24-hectare estate between lake, forest and culture, accessible on foot or by bike", rating: 4.6 },
          { id: 7, nom: "Le Vieux Logis Restaurant", type: "restaurant", distance: "250m", description: "Quality traditional and local cuisine.", rating: 4.1, website: "https://restaurantlevieuxlogis.fr", phone: "+33 4 50 72 80 24" },
          { id: 8, nom: "St-Pancrace Church", type: "culture", distance: "300m", description: "Emblematic medieval church in Yvoire, with a sparkling steeple.", rating: 4.5 },
          { id: 9, nom: "Port Restaurant", type: "restaurant", distance: "400m", description: "Lake view, local cuisine and authentic flavors.", rating: 4.4, website: "https://restaurantduport-yvoire.fr", phone: "+33 4 50 72 80 17" },
          { id: 10, nom: "Rovorée Estate Beach", type: "plage", distance: "1.7km", description: "Discreet, natural beach 30 min walk away.", rating: 4.8 },
          { id: 11, nom: "Duck Beach", type: "plage", distance: "600m", description: "Secret beach, hard to reach on foot but magical from the lake. Ask for tips on access.", rating: 4.3 },
          { id: 12, nom: "Excenevex Beach", type: "plage", distance: "4.4km", description: "The only fine sandy beach on Lake Geneva and a summer vibe.", rating: 4.4 },
          { id: 13, nom: "Bouchets Wooded Area", type: "nature", distance: "20m", description: "Wooded area with lawn and tables, perfect for picnics and relaxing.", rating: 5 },
          { id: 14, nom: "Le Bateau Ivre", type: "restaurant", distance: "300m", description: "Warm bistro, market cuisine and local produce in the heart of the village.", rating: 4.6, website: "https://www.restaurant-lebateauivre.com/", phone: "+33 4 50 72 81 84" },
          { id: 15, nom: "La Traboule", type: "restaurant", distance: "260m", description: "Medieval setting, refined cuisine and charming terrace in the heart of Yvoire.", rating: 4.6, website: "https://la-traboule.fr/", phone: "+33 4 50 72 83 73" },
          { id: 16, nom: "Multi-sports area", type: "activite", distance: "1.2km", description: "Multi-sports field (football, basketball, tennis, table tennis, skateboarding), children's games", rating: 4.6 },
          { id: 17, nom: "Bois de Feycler", type: "nature", distance: "1.0km", description: "A wood accessible with hiking and mountain bike trails for all levels", rating: 5 }
        ],
        excursionsSection: {
          title: "Recommended excursions",
          subtitle: "Discover the region from Yvoire",
          list: [
            {
              titre: "Geneva",
              distance: "45 min by car",
              image: "https://images.pexels.com/photos/11277773/pexels-photo-11277773.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Cosmopolitan city, water jet."
            },
            {
              titre: "Annecy",
              distance: "1 h by car",
              image: "https://images.pexels.com/photos/12780893/pexels-photo-12780893.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Venice of the Alps, crystal-clear lake."
            },
            {
              titre: "Chamonix",
              distance: "1 h 30 by car",
              image: "https://images.pexels.com/photos/12358219/pexels-photo-12358219.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Mont-Blanc and hiking."
            }
          ]
        }

      },



      // Footer
      footer: {
        desc: "Charming house in Yvoire for 4 guests,\n100m from Lake Geneva beach.\nA peaceful haven for your holidays in Haute-Savoie.",
        navigation: "Navigation",
        nav: {
          accueil: "Home",
          gite: "The Cottage",
          activites: "Activities",
          acces: "Access",
          reservation: "Booking",
          contact: "Contact"
        },
        contact: "Contact",
        address: {
          line1: "Yvoire, Haute-Savoie",
          line2: "100m from Lake Geneva"
        },
        phone: "+33 6 65 68 94 83",
        email: "contact@lafalescale.fr",
        rights: "All rights reserved.",
        mentions: "Legal notice",
        confidentialite: "Privacy"
      },

      // Home page
      home: {
        hero: {
          title: "La Falescale",
          subtitle: "A haven of peace by Lake Geneva",
          desc: "Charming house in Yvoire for 4 guests, 100m from the beach",
          button: "Check availability"
        },
        features: [
          { icon: "MapPin", text: "100m from the beach" },
          { icon: "Castle", text: "At the gates of Yvoire" },
          { icon: "Sparkles", text: "Romantic & peaceful spot" },
          { icon: "Gamepad2", text: "Games & activities for all" },
          { icon: "Wifi", text: "Free Wi-Fi" },
          { icon: "Car", text: "Private parking" }
        ],
        gallery: {
          title: "Discover our cottage",
          subtitle: "An authentic and warm setting for your lakeside holiday",
          button: "See more photos"
        },
        activities: {
          title: "Our activities",
          subtitle: "Relaxation and adventure in the heart of Haute-Savoie",
          items: [
            { title: "Kayak", emoji: "🛶" },
            { title: "Paddle", emoji: "🏄" },
            { title: "Jacuzzi", emoji: "🧘" },
            { title: "Ping-pong", emoji: "🏓" }
          ],
          button: "See all activities"
        },
        testimonials: {
          title: "What our guests say",
          items: [
            {
              name: "Marie & Jean",
              text: "A magical stay in this charming cottage! The lake view is breathtaking and the welcome is warm.",
              rating: 5
            },
            {
              name: "Dubois Family",
              text: "Perfect for our family holiday. The children loved being so close to the lake, and we enjoyed the peace and quiet.",
              rating: 5
            },
            {
              name: "Sophie",
              text: "Yvoire is a real gem and this cottage is the perfect setting. We'll definitely be back!",
              rating: 5
            }
          ]
        }
      },
      //Le Gite
      leGite: {
        header: {
          title: "The Cottage",
          desc: "Discover our authentic and charming home, where every detail is designed for your comfort and well-being"
        },
        ambiance: {
          title: "An authentic atmosphere",
          p1: "La Falescale welcomes you into a warm and authentic atmosphere, typical of Savoyard homes. Our fine materials and careful decoration create the perfect setting for your holiday.",
          p2: "Natural wood, local stone and soft fabrics create a perfect harmony between tradition and modern comfort. Each room breathes tranquility and invites you to relax.",
          p3: "Located just 50 meters from Lake Geneva, our house offers breathtaking views and privileged access to Yvoire's most beautiful beaches."
        },
        plan: {
          title: "Cottage plan",
          desc: "70m² tastefully furnished for 4 guests",
          groundfloor: "Ground floor",
          floor: "Upstairs",
          list1: [
            "Living room with sofa bed (30m²)",
            "Open fitted kitchen (15m²)",
            "Bathroom with Italian shower",
            "Separate toilet",
            "Covered terrace (20m²)"
          ],
          list2: [
            "Bedroom 1 with double bed (12m²)",
            "Bedroom 2 with double bed (10m²)",
            "Shower room with toilet",
            "Lake-view balcony (8m²)"
          ]
        },
        interieurs: {
          title: "Indoor amenities",
          desc: "All modern comfort in an authentic setting",
          items: [
            {
              icon: "Bed",
              title: "Bedroom 1",
              description: "160x200cm double bed, wardrobe, lake view"
            },
            {
              icon: "Bed",
              title: "Bedroom 2",
              description: "140x190cm double bed, chest of drawers, garden view"
            },
            {
              icon: "Sofa",
              title: "Living room",
              description: "Double sofa-bed, coffee table"
            },
            {
              icon: "Tv",
              title: "Entertainment",
              description: "Flat-screen TV, Netflix, books"
            },
            {
              icon: "Wifi",
              title: "Connection",
              description: "Free high-speed Wi-Fi"
            },
            {
              icon: "Utensils",
              title: "Fitted kitchen",
              description: "Dishwasher, oven, microwave"
            },
            {
              icon: "Coffee",
              title: "Breakfast",
              description: "Coffee machine, toaster, kettle"
            }
          ]
        },
        exterieurs: {
          title: "Outdoor spaces",
          desc: "Enjoy nature and the exceptional view of the lake",
          items: [
            {
              icon: "Waves",
              title: "Lake access",
              description: "Beach 100m away"
            },
            {
              icon: "Car",
              title: "Parking",
              description: "Private parking space"
            },
            {
              icon: "Flower2",
              title: "Flower garden",
              description: "Private green area, barbecue"
            }
          ]
        },
        galerie: {
          title: "Photo gallery",
          desc: "Discover every space of our charming cottage",
          photos: [
            { src: "sejour.jpg", alt: "Salon principal" },
            { src: "chambre.jpg", alt: "Cuisine équipée" },
            { src: "Photo_maison.jpg", alt: "Chambre principale" },
            { src: "sejour.jpg", alt: "Salle de bain" },
            { src: "chambre.jpg", alt: "Terrasse vue lac" },
            { src: "Photo_maison.jpg", alt: "Espace extérieur" }
          ]
        },
        cta: {
          title: "Ready for your stay?",
          desc: "Book your getaway in our charming cottage now and create unforgettable memories by Lake Geneva",
          reserver: "Book now",
          contact: "Contact us"
        }
      },
      //Accès
      accesPage: {
        header: {
          title: "How to reach us",
          subtitle: "Discover all transport options to get to La Falescale, on the doorstep of the medieval village of Yvoire"
        },
        localisation: {
          title: "Our location",
          desc: "Yvoire, Haute-Savoie, France – On the shore of Lake Geneva",
          popup: {
            title: "Your Cottage – La Falescale",
            home: "This is your place!",
            desc: "Warm cottage for 4 guests.\nPanoramic terrace & direct access to the lake.",
            seeGite: "👉 See the cottage page",
            phone: "📞 +33 6 65 68 94 83"
          },
          openGmaps: "Open in Google Maps"
        },
        transport: {
          title: "How to easily reach Yvoire?",
          voiture: {
            title: "By car",
            infos: [
              "Geneva city center: <b>30-40 min</b> (25 km via D1005)",
              "Geneva airport: <b>35-40 min</b>",
              "Annecy: <b>50-55 min</b> (via A410/D1005)",
              "Lyon: <b>2 h</b> (A40 exit 13 Bellegarde)",
              "Pedestrian village, <b>paid parking</b> (5 municipal lots), <b>free</b> private parking"
            ],
            itineraire: "Get my route"
          },
          train: {
            title: "Train + boat",
            infos: [
              "Geneva-Cornavin train → Nyon (IR15/95/RE33, every 10-15 min)",
              "Boat Nyon → Yvoire (CGN line N3, crossing 20 min)",
              "Plan <b>45-60 min door-to-door</b> from Geneva"
            ],
            trainBtn: "Book a train",
            bateauBtn: "Boat timetables"
          },
          bus: {
            title: "100% bus",
            infos: [
              "TPG line 25 to Geneva Rive",
              "Cross-border bus 271 to Yvoire (Alpbus)",
              "Total trip <b>~1 h 30</b> depending on traffic"
            ],
            busBtn: "See bus 271 schedule"
          },
          avion: {
            title: "From the airport",
            infos: [
              "Geneva GVA: <b>35-40 min</b> (car/taxi)",
              "Train + boat: <b>~1 h 30</b> via Nyon",
              "Lyon St-Exupéry: <b>~2 h</b> (A40 exit 13)"
            ],
            geneveBtn: "Geneva Airport",
            lyonBtn: "Lyon St-Exupéry ➔ Yvoire"
          },
          lac: {
            title: "By lake",
            infos: [
              "Boat Nyon–Yvoire: all year round (CGN line N3)",
              "Geneva → Yvoire cruises in summer",
              "Marina (400m): visitor mooring, no fuel"
            ],
            bateauBtn: "See boat timetables"
          }
        },
        distances: {
          title: "Distances from main cities",
          list: [
            { ville: "Geneva", distance: "45 km", temps: "45 min", type: "International" },
            { ville: "Annecy", distance: "75 km", temps: "1h", type: "Tourist" },
            { ville: "Lyon", distance: "150 km", temps: "2h", type: "Metropolis" },
            { ville: "Chamonix", distance: "90 km", temps: "1h30", type: "Mountain" },
            { ville: "Thonon-les-Bains", distance: "15 km", temps: "20 min", type: "Local" },
            { ville: "Évian-les-Bains", distance: "25 km", temps: "30 min", type: "Spa town" }
          ],
          itineraireBtn: "Itinerary",
          distance: "Distance:",
          time: "Time:"
        },
        infos: {
          title: "Practical information",
          checkin: {
            title: "Check-in",
            desc: "From 4:00 pm",
            flex: "Flexible arrival possible"
          },
          checkout: {
            title: "Check-out",
            desc: "Before 11:00 am",
            flex: "Late departure on request"
          },
          parking: {
            title: "Parking",
            desc: "Free and private",
            guarantee: "Space guaranteed"
          },
          assistance: {
            title: "Assistance",
            desc: "24/7",
            help: "Travel support"
          },
          helpBlock: {
            title: "Need help planning your trip?",
            desc: "Our team can help you organize your transport and provide all the advice you need for a worry-free journey.",
            contactBtn: "Contact us"
          }
        }
      },
      contactPage: {
        header: {
          title: "Contact",
          subtitle: "We are here to help organize your stay and answer all your questions"
        },
        info: {
          title: "Contact details",
          address: { title: "Address" },
          phone: {
            title: "Phone",
            available: "Available from 9am to 7pm"
          },
          email: {
            title: "Email",
            response: "Reply within 24h"
          },
          whatsapp: {
            title: "WhatsApp",
            response: "Quick reply"
          },
          social: { title: "Follow us" }
        },
        form: {
          title: "Send us a message",
          name: "Full name *",
          namePlaceholder: "Your name",
          email: "Email *",
          emailPlaceholder: "your@email.com",
          phone: "Phone",
          phonePlaceholder: "+1 555 123 4567",
          arrival: "Desired arrival date",
          departure: "Desired departure date",
          message: "Message *",
          messagePlaceholder: "Tell us about your project, your questions or special needs...",
          send: "Send message",
          success: "Message sent! We will reply as soon as possible."
        }
      },
      reservationPage: {
  header: {
    title: "Booking",
    subtitle: "Book your stay at La Falescale and enjoy a magical moment by Lake Geneva"
  },
  form: {
    title: "Check availability",
    arrival: "Arrival date",
    departure: "Departure date",
    guests: "Number of guests",
    guest1: "1 guest",
    guest2: "2 guests",
    guest3: "3 guests",
    guest4: "4 guests",
    checking: "Checking...",
    check: "Check availability",
    noteTitle: "Note:",
    note: "Booking will be confirmed after checking availability. You can also book directly via our partners.",
    missingDates: "Please select arrival and departure dates",
    success: "Dates available! You can proceed to book via our partners."
  },
  direct: {
    title: "Instant booking",
    text: "For instant booking, use our partner platforms:",
    airbnb: "Book on Airbnb",
    booking: "Book on Booking.com"
  },
  capacity: {
    title: "Cottage capacity",
    persons: "4 guests",
    max: "Maximum",
    nights: "2 nights",
    min: "Minimum"
  },
  tarifsTitle: "Our rates",
  tarifsSubtitle: "Price per night, for up to 4 guests",
  tarifs: [
    { saison: "High season (July-August)", prix: 150, description: "Weekend and week" },
    { saison: "Mid season (May-June, September)", prix: 120, description: "Spring and early autumn" },
    { saison: "Low season (October-April)", prix: 90, description: "Winter and early spring" }
  ],
  night: "/ night",
  tax: "* Tourist tax not included (€1/guest/night)",
  conditionsTitle: "Stay conditions",
  conditions: [
    { icon: "Clock", title: "Check-in", detail: "From 4:00 pm" },
    { icon: "Clock", title: "Check-out", detail: "Before 11:00 am" },
    { icon: "CheckCircle", title: "Linen included", detail: "Sheets and towels provided" },
    { icon: "AlertCircle", title: "Pets", detail: "Allowed on request (extra charge)" }
  ],
  cancellationTitle: "Cancellation policy",
  cancellation: [
    "Free cancellation up to 7 days before arrival",
    "50% refund between 7 and 3 days before arrival",
    "No refund less than 3 days before arrival",
    "In case of exceptional circumstances, each request will be considered individually"
  ]
},

    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: { escapeValue: false },
  });

export default i18n;
