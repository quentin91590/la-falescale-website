import { useEffect, Suspense } from 'react';
import 'leaflet/dist/leaflet.css';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ReservationButton from './components/ReservationButton';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import LeGite from './pages/LeGite';
import Activites from './pages/Activites';
import Contact from './pages/Contact';
import Acces from './pages/Acces';
import './i18n'; // <-- Ajoute ceci !

// Composant pour remonter en haut lors du changement de page
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-cream font-poppins">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/le-gite" element={<LeGite />} />
              <Route path="/activites" element={<Activites />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/acces" element={<Acces />} />
            </Routes>
          </main>
          <Footer />
          <ReservationButton />
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
