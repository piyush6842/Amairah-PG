import React, { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import AOS from 'aos';
import { useTheme } from '../Constants/ThemeContext';

import 'aos/dist/aos.css'; // Import AOS styles

const MakeItHappen = () => {
  const { theme } = useTheme(); // Use the 'theme' state from context

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: false,
    });
  }, []);

  return (
    <div className={`p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row w-full ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      {/* Text Section */}
      <div className={`lg:w-[55%] w-full px-2 sm:px-4 md:px-6 lg:px-0 ${theme === 'dark' ? 'text-white' : 'text-black'}`} data-aos="fade-up">
        <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-orange-400' : 'text-orange-500'} mt-6 sm:mt-8 lg:mt-20 lg:ml-24`}>
          The Amairah PG way
        </p>
        <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold lg:w-[70%] lg:ml-20 mt-2 sm:mt-3`}>
          Make it happen, with the Amairah PG
        </h1>
        <p className={`p-2 sm:p-4 lg:p-8 lg:w-[70%] lg:ml-12 text-sm sm:text-base`}>
          The Amairah PG is a place to call home. With thoughtfully personalised &amp; crafted luxury, our PG combines 
          urban design sensibilities with premium upgraded amenities. Located in Gurgaon, this PG has been customised 
          to suit: cosy single-occupancy rooms and privately shared double-occupancy rooms.
        </p>
        {/* List Section */}
        <ul className="flex flex-wrap lg:w-[70%] lg:ml-12 gap-3 sm:gap-4 mt-3 sm:mt-4">
          {[
            'Luxurious interior design and amenities',
            'A rare combination of inspired architecture',
            'Common spaces with unparalleled lung space',
            'Located at prime locations of Gurgaon',
            'Rooms with strategically designer furniture',
            'Excellent privacy & amplifies spacious living',
          ].map((text, index) => (
            <li key={index} className="flex items-center gap-2 w-full sm:w-[48%] text-sm sm:text-base" data-aos="fade-up">
              <span className={`p-1.5 sm:p-2 ${theme === 'dark' ? 'bg-gray-700' : 'bg-orange-500'} rounded-full flex items-center justify-center`}>
                <FaCheck className="text-white text-xs sm:text-sm" />
              </span>
              {text}
            </li>
          ))}
        </ul>
      </div>
      {/* Image Section */}
      <div className="lg:w-[45%] w-full mt-6 sm:mt-8 lg:mt-0 flex justify-center" data-aos="fade-up">
        <img 
          src="https://www.safehousepg.in/assets/img/bg/21.jpg" 
          alt="Make it happen" 
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-none rounded-lg shadow-lg" 
        />
      </div>
    </div>
  );
};

export default MakeItHappen;
