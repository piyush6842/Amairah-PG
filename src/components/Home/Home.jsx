import React, { useEffect } from 'react';
import { useTheme } from '../Constants/ThemeContext';
import { initializeAOS, refreshAOS } from '../Constants/AnimationUtils';
import FAQs from '../FAQs';
import Amenities from './Amenities';
import MakeItHappen from './MakeItHappen';
import Carousel from './Carousel';
import AboutForHome from './AboutForHome';
import RoomList from '../RoomList';
import ReviewCarousel from '../ReviewCarousel';

const Home = () => {
  const { theme } = useTheme();

  useEffect(() => {
    initializeAOS();
  }, []);

  // Refresh AOS when theme changes
  useEffect(() => {
    refreshAOS();
  }, [theme]);

  return (
    <>
      <div className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
          <Carousel />
          <AboutForHome />
          <Amenities />
          <MakeItHappen />
          {/* <RoomList /> */}
          <ReviewCarousel />
          <FAQs />
      </div>
    </>
  );
}

export default Home;
