import { useState } from 'react';
import { Calendar, Users, Euro, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Reservation = () => {
  const [selectedDates, setSelectedDates] = useState({ start: '', end: '' });
  const [guests, setGuests] = useState(2);
  const [isChecking, setIsChecking] = useState(false);

  const tarifs = [
    { saison: 'Haute saison (Juillet-Août)', prix: 150, description: 'Week-end et semaine' },
    { saison: 'Moyenne saison (Mai-Juin, Septembre)', prix: 120, description: 'Printemps et début automne' },
    { saison: 'Basse saison (Octobre-Avril)', prix: 90, description: 'Hiver et début printemps' },
  ];

  const conditions = [
    { icon: Clock, title: 'Arrivée', detail: 'À partir de 16h00' },
    { icon: Clock, title: 'Départ', detail: 'Avant 11h00' },
    { icon: CheckCircle, title: 'Linge fourni', detail: 'Draps et serviettes inclus' },
    { icon: AlertCircle, title: 'Animaux', detail: 'Admis sur demande (supplément)' },
  ];

  const handleCheckAvailability = () => {
    if (!selectedDates.start || !selectedDates.end) {
      alert('Veuillez sélectionner les dates d\'arrivée et de départ');
      return;
    }
    
    setIsChecking(true);
    
    // Simulation d'une vérification
    setTimeout(() => {
      setIsChecking(false);
      alert('Dates disponibles ! Vous pouvez procéder à la réservation via nos partenaires.');
    }, 2000);
  };

  const openAirbnb = () => {
    window.open('https://www.airbnb.fr/rooms/lafalescale', '_blank');
  };

  const openBooking = () => {
    window.open('https://www.booking.com/hotel/fr/la-falescale.html', '_blank');
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section style={{ backgroundColor: "#a32b2b" }} className="py-16 text-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Réservation
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Réservez votre séjour à La Falescale et profitez d'un moment magique au bord du lac Léman
          </p>
        </div>
      </section>


      {/* Réservation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div className="bg-cream p-8 rounded-2xl shadow-lg">
              <h2 className="font-playfair text-2xl font-bold text-warm-brown mb-6">
                Vérifier les disponibilités
              </h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-warm-brown font-medium mb-2">
                      Date d'arrivée
                    </label>
                    <input
                      type="date"
                      className="w-full p-3 border border-soft-green/30 rounded-lg focus:ring-2 focus:ring-savoyard focus:border-transparent"
                      value={selectedDates.start}
                      onChange={(e) => setSelectedDates({...selectedDates, start: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-warm-brown font-medium mb-2">
                      Date de départ
                    </label>
                    <input
                      type="date"
                      className="w-full p-3 border border-soft-green/30 rounded-lg focus:ring-2 focus:ring-savoyard focus:border-transparent"
                      value={selectedDates.end}
                      onChange={(e) => setSelectedDates({...selectedDates, end: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-warm-brown font-medium mb-2">
                    Nombre de personnes
                  </label>
                  <select
                    className="w-full p-3 border border-soft-green/30 rounded-lg focus:ring-2 focus:ring-savoyard focus:border-transparent"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                  >
                    <option value={1}>1 personne</option>
                    <option value={2}>2 personnes</option>
                    <option value={3}>3 personnes</option>
                    <option value={4}>4 personnes</option>
                  </select>
                </div>
                
                <button
                  type="button"
                  onClick={handleCheckAvailability}
                  disabled={isChecking}
                  className="w-full bg-savoyard hover:bg-light-savoyard text-cream py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <Calendar className="w-5 h-5" />
                  <span>{isChecking ? 'Vérification...' : 'Vérifier la disponibilité'}</span>
                </button>
              </form>
              
              <div className="mt-8 p-4 bg-soft-green/10 rounded-lg">
                <p className="text-warm-brown text-sm">
                  <strong>Note :</strong> La réservation sera confirmée après vérification de la disponibilité. 
                  Vous pouvez également réserver directement via nos partenaires.
                </p>
              </div>
            </div>

            {/* Réservation directe */}
            <div>
              <div className="bg-cream p-8 rounded-2xl shadow-lg mb-6">
                <h3 className="font-playfair text-xl font-bold text-warm-brown mb-4">
                  Réservation immédiate
                </h3>
                <p className="text-soft-green mb-6">
                  Pour une réservation instantanée, utilisez nos plateformes partenaires :
                </p>
                
                <div className="space-y-4">
                  <button
                    onClick={openAirbnb}
                    className="block w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-4 px-6 rounded-lg font-semibold text-center hover:from-pink-600 hover:to-pink-700 transition-all cursor-pointer"
                  >
                    Réserver sur Airbnb
                  </button>
                  <button
                    onClick={openBooking}
                    className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-blue-800 transition-all cursor-pointer"
                  >
                    Réserver sur Booking.com
                  </button>
                </div>
              </div>

              <div className="bg-cream p-8 rounded-2xl shadow-lg">
                <h3 className="font-playfair text-xl font-bold text-warm-brown mb-4">
                  Capacité du gîte
                </h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-savoyard/10 rounded-lg">
                    <Users className="w-8 h-8 text-savoyard mx-auto mb-2" />
                    <p className="font-semibold text-warm-brown">4 personnes</p>
                    <p className="text-sm text-soft-green">Maximum</p>
                  </div>
                  <div className="p-4 bg-savoyard/10 rounded-lg">
                    <Calendar className="w-8 h-8 text-savoyard mx-auto mb-2" />
                    <p className="font-semibold text-warm-brown">2 nuits</p>
                    <p className="text-sm text-soft-green">Minimum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16 bg-soft-green/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-warm-brown mb-4">
              Nos tarifs
            </h2>
            <p className="text-soft-green text-lg">
              Prix par nuit, pour 4 personnes maximum
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tarifs.map((tarif, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold text-warm-brown mb-2">{tarif.saison}</h3>
                <div className="flex items-center justify-center mb-4">
                  <Euro className="w-6 h-6 text-savoyard mr-1" />
                  <span className="text-3xl font-bold text-savoyard">{tarif.prix}</span>
                  <span className="text-soft-green ml-1">/ nuit</span>
                </div>
                <p className="text-sm text-soft-green text-center">{tarif.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-soft-green">
              * Taxe de séjour non incluse (1€/personne/nuit)
            </p>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-warm-brown mb-4">
              Conditions de séjour
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-xl shadow-md text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <condition.icon className="w-8 h-8 text-savoyard mx-auto mb-3" />
                <h3 className="font-semibold text-warm-brown mb-2">{condition.title}</h3>
                <p className="text-sm text-soft-green">{condition.detail}</p>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 bg-cream p-8 rounded-xl">
            <h3 className="font-playfair text-xl font-bold text-warm-brown mb-4">
              Politique d'annulation
            </h3>
            <ul className="space-y-2 text-soft-green">
              <li>• Annulation gratuite jusqu'à 7 jours avant l'arrivée</li>
              <li>• 50% de remboursement entre 7 et 3 jours avant l'arrivée</li>
              <li>• Aucun remboursement moins de 3 jours avant l'arrivée</li>
              <li>• En cas de circonstances exceptionnelles, nous étudierons chaque demande individuellement</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;