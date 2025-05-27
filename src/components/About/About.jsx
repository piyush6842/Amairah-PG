import React, { useEffect } from 'react';
import WhyChooseUs from './WhyChooseUs';
import AboutImageText from './AboutImageText';
import { initializeAOS, refreshAOS } from '../Constants/AnimationUtils';
import { useTheme } from '../Constants/ThemeContext';

const About = () => {
  const { theme } = useTheme();

  useEffect(() => {
    initializeAOS();
  }, []);

  // Refresh AOS when theme changes
  useEffect(() => {
    refreshAOS();
  }, [theme]);

  return (
    <div className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="p-14 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up" data-aos-delay="0">About Us</h2>
          <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} data-aos="fade-up" data-aos-delay="50">
           Discover who we are and what drives us to provide exceptional living experiences. Our mission is to create safe, comfortable, and welcoming PG accommodations that feel like home while ensuring affordability and convenience.
          </p>
        </div>
      
      <AboutImageText />

      {/* Content Section */}
      <div data-aos="fade-up" data-aos-delay="600">
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default About;
