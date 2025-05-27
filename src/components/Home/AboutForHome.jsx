import React, { useEffect, useContext } from 'react';
import image from "../../images/RoomImage2.webp";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useTheme } from '../Constants/ThemeContext';
import callCenter from "../../images/call-center-agent.jpg"
import houseIcon from "../../images/minimal-house-logo.avif"
import locationIcon from "../../images/location-map-icon.jpg"

const AboutForHome = () => {
  const { theme, toggleTheme } = useTheme(); 
  useEffect(() => {
    // Initialize AOS with desired settings
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease',  // Easing function
      once: false,      // Set to false to trigger animation every time it comes into view
    });
  }, []);

  return (
    <>
      <div className={`w-full ${theme === 'dark' ? 'bg-black' : 'bg-white'} flex flex-col lg:flex-row p-4 sm:p-6 md:p-8 lg:p-16 relative lg:mt-20`}>
        {/* Image Section */}
        <div className="relative w-full lg:w-[50%]" data-aos="fade-up">
          <img 
            loading='lazy' 
            className="w-full h-auto max-w-[265px] mx-auto mt-6 sm:mt-8 lg:mt-48 relative z-10" 
            src={image} 
            alt="room image" 
          />
          <img
            loading='lazy'
            className="absolute bottom-10 sm:bottom-20 left-1/4 w-[200px] sm:w-[265px] h-auto lg:ml-48 lg:mb-36 z-0 hidden lg:block"
            src={image}
            alt="room image"
          />
        </div>

        {/* Text Section */}
        <div className={`w-full lg:w-[50%] px-2 sm:px-4 lg:px-8 mt-8 lg:mt-0 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} data-aos="fade-up">
          <span className="text-xl sm:text-2xl lg:text-3xl font-bold">The Amairah PG -</span> <br />
          <span className="text-lg sm:text-xl font-semibold text-orange-500">
            Affordable Co-Living
          </span>
          <p className={`mt-3 sm:mt-4 text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            <span className={`${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'} text-base sm:text-lg`}>
              Looking for a Safe and Comfortable Co-Living Space or PG Near You?
            </span> <br />
            Whether you're a student or working professional, Amairah PG offers
            the perfect living solution for girls and boys. Our spaces are
            equipped with all the essential amenities you need to feel at home.
            Not only do we provide a welcoming environment, but we also
            prioritize your safety with a robust security system. Plus, enjoy
            hassle-free living with free maintenance included in your stay!
            Explore the comfort and convenience of Amairah PG - your ideal
            co-living space.
          </p>

          {/* Icon with Text Section */}
          <div className="mt-4 sm:mt-6 flex flex-col gap-3 sm:gap-4 lg:gap-6">
            {/* First Box */}
            <div className={`cursor-pointer relative flex items-center gap-3 sm:gap-4 border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'} p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group`} data-aos="fade-up">
              <img
                loading='lazy'
                className="w-12 sm:w-16 h-auto"
                src={houseIcon}
                alt="House icon"
              />
              <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'} text-sm sm:text-base`}>
                <h1 className='text-lg sm:text-xl lg:text-2xl font-bold text-orange-400'>
                  Impeccable Interiors That Rival Your Style
                </h1> <br />
                Fully furnished & managed spaces with contemporary decor and top-notch functionality.
              </span>
              <span className="absolute top-0 left-0 h-full w-1 bg-orange-400 dark:bg-white transform scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-500 ease-in-out"></span>
            </div>

            {/* Second Box */}
            <div className={`cursor-pointer relative flex items-center gap-3 sm:gap-4 border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'} p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group`} data-aos="fade-up">
              <img
                loading='lazy'
                className="w-12 sm:w-16 h-auto"
                src={callCenter}
                alt="Call center icon"
              />
              <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'} text-sm sm:text-base`}>
                <h1 className='text-lg sm:text-xl lg:text-2xl font-bold text-orange-400'>
                  All-Inclusive In-House Amenities
                </h1><br />
                From fresh meals to doorstep laundry, all your lifestyle needs are met with a click within your property.
              </span>
              <span className="absolute top-0 left-0 h-full w-1 bg-orange-400 dark:bg-white transform scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-500 ease-in-out"></span>
            </div>

            {/* Third Box */}
            <div className={`cursor-pointer relative flex items-center gap-3 sm:gap-4 border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'} p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group`} data-aos="fade-up">
              <img
                loading='lazy'
                className="w-12 sm:w-16 h-auto dark:bg-white dark:p-2"
                src={locationIcon}
                alt="Location icon"
              />
              <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'} text-sm sm:text-base`}>
                <h1 className='text-lg sm:text-xl lg:text-2xl font-bold text-orange-400'>
                  Privacy + Community + Security
                </h1><br />
                The perfect blend of personal and communal living, with the added assurance of 24/7 security.
              </span>
              <span className="absolute top-0 left-0 h-full w-1 bg-orange-400 dark:bg-white transform scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-500 ease-in-out"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutForHome;
