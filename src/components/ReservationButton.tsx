import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const ReservationButton = () => {
  return (
    <Link
      to="/reservation"
      className="fixed bottom-6 right-6 bg-savoyard hover:bg-light-savoyard text-cream px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 z-40 animate-pulse hover:animate-none"
    >
      <Calendar className="w-5 h-5" />
      <span className="font-medium">Réserver</span>
    </Link>
  );
};

export default ReservationButton;