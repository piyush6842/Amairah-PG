import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ScrollToTopButton from './components/Constants/ScrollToTopButton';
import Footer from './components/Constants/Footer';
import Header from './components/Constants/Header';
import About from "./components/About/About";
import Contact from './components/Contact';
import Home from './components/Home/Home';
import MessageBox from './components/Constants/MessageBox';
import GirlsPG from './components/ExplorePG/GirlsPG';
import CoLivingPG from './components/ExplorePG/CoLivingPG';
import LifeAtPG from './components/LifeAtPG/LifeAtPG';
import Diwali from './components/LifeAtPG/Diwali';
import Holi from './components/LifeAtPG/Holi';
import Sports from './components/LifeAtPG/Sports';
import CulturalFest from './components/LifeAtPG/CulturalFest';
import Birthday from './components/LifeAtPG/Birthday';
import TourAdv from './components/LifeAtPG/TourAdv';
import ErrorPage from './components/Constants/ErrorPage';
import Explore from './components/ExplorePG/Explore';


const ScrollToTopInsideApp = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTopInsideApp /> 

      <div className="min-h-screen bg-gray-100 dark:bg-black">
        <Header />
        <div className="py-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/explore-girls-pg" element={<GirlsPG />} />
            <Route path="/explore-coliving-pg" element={<CoLivingPG />} />
            <Route path="/life@pg" element={<LifeAtPG />} />
            <Route path="/life@pg/diwali" element={<Diwali />} />
            <Route path="/life@pg/holi" element={<Holi />} />
            <Route path="/life@pg/sports" element={<Sports />} />
            <Route path="/life@pg/cultural" element={<CulturalFest />} />
            <Route path="/life@pg/birthday" element={<Birthday />} />
            <Route path="/life@pg/tour" element={<TourAdv />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/error-404" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/error-404" replace />} />
          </Routes>
        </div>
        <Footer />
        <ScrollToTopButton />
        <MessageBox />
      </div>
    </Router>
  );
}

export default App;
