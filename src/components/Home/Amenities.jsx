import React, { useEffect, useContext } from 'react';
import { useTheme } from '../Constants/ThemeContext';
import { initializeAOS, refreshAOS, animations } from '../Constants/AnimationUtils';

const Amenities = () => {
  const { theme } = useTheme(); 

  useEffect(() => {
    // Initialize AOS with optimized settings
    initializeAOS();
  }, []);

  // Refresh AOS when theme changes
  useEffect(() => {
    refreshAOS();
  }, [theme]);

  return (
    <div className={`w-full ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} py-8 sm:py-12`}>
      <div>
        <h1 className='text-center text-3xl sm:text-4xl md:text-5xl font-serif' {...animations.fadeUp}>
          Accommodations
        </h1>
      </div>
      <div>
        <h1 className={`text-center mt-4 sm:mt-6 text-base sm:text-lg md:text-xl px-4 ${theme === 'dark' ? 'text-orange-400' : 'text-orange-500'}`} {...animations.fadeUp}>
          Enjoy Dozens Of Happiness With A Wide Range Of Accommodations In Our Properties
        </h1>
      </div>
      <div className="mt-6 sm:mt-10">
        {/* First row of amenities */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className={`group shadow-xl w-[200px] sm:w-[250px] h-32 sm:h-40 flex flex-col items-center justify-center rounded-xl cursor-pointer relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : ''}`} {...animations.fadeUpDelay(0)}>
            <img loading='lazy' className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full p-2 sm:p-3 transition-transform duration-300 group-hover:translate-y-full" 
                 src="https://www.safehousepg.in/assets/img/amenities/wifi.png" alt="WiFi" />
            <p className={`text-center font-bold text-base sm:text-lg mt-2 z-10 ${theme === 'dark' ? 'text-white' : ''}`}>WIFI</p>
            <div className={`absolute inset-0 bg-orange-200 flex items-center justify-center text-white text-base sm:text-lg font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${theme === 'dark' ? 'bg-gray-700' : ''}`}>
              High-Speed Internet
            </div>
          </div>
          <div className={`group shadow-xl w-[200px] sm:w-[250px] h-32 sm:h-40 flex flex-col items-center justify-center rounded-xl cursor-pointer relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : ''}`} {...animations.fadeUpDelay(1)}>
            <img loading='lazy' className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full p-2 sm:p-3 transition-transform duration-300 group-hover:translate-y-full" 
                 src="https://www.safehousepg.in/assets/img/amenities/washing-machine.png" alt="Washing Machine" />
            <p className={`text-center font-bold text-base sm:text-lg mt-2 z-10 ${theme === 'dark' ? 'text-white' : ''}`}>WASHING MACHINE</p>
            <div className={`absolute inset-0 bg-blue-200 flex items-center justify-center text-white text-base sm:text-lg font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${theme === 'dark' ? 'bg-gray-700' : ''}`}>
              Laundry Services
            </div>
          </div>
          <div className={`group shadow-xl w-[200px] sm:w-[250px] h-32 sm:h-40 flex flex-col items-center justify-center rounded-xl cursor-pointer relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : ''}`} {...animations.fadeUpDelay(2)}>
            <img className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full p-2 sm:p-3 transition-transform duration-300 group-hover:translate-y-full" 
                 src="https://www.safehousepg.in/assets/img/amenities/refrigerator.png" alt="Refrigerator" />
            <p className={`text-center font-bold text-base sm:text-lg mt-2 z-10 ${theme === 'dark' ? 'text-white' : ''}`}>REFRIGERATOR</p>
            <div className={`absolute inset-0 bg-green-200 flex items-center justify-center text-white text-base sm:text-lg font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${theme === 'dark' ? 'bg-gray-700' : ''}`}>
              Cold Storage
            </div>
          </div>
          <div className={`group shadow-xl w-[200px] sm:w-[250px] h-32 sm:h-40 flex flex-col items-center justify-center rounded-xl cursor-pointer relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : ''}`} {...animations.fadeUpDelay(3)}>
            <img className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full p-2 sm:p-3 transition-transform duration-300 group-hover:translate-y-full" 
                 src="https://www.safehousepg.in/assets/img/amenities/surveillance.png" alt="CCTV" />
            <p className={`text-center font-bold text-base sm:text-lg mt-2 z-10 ${theme === 'dark' ? 'text-white' : ''}`}>CCTV</p>
            <div className={`absolute inset-0 bg-red-200 flex items-center justify-center text-white text-base sm:text-lg font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${theme === 'dark' ? 'bg-gray-700' : ''}`}>
              24/7 Security
            </div>
          </div>
        </div>

        {/* Second row of amenities */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 mt-4 sm:mt-6 lg:mt-10">
          <div className={`group shadow-xl w-[200px] sm:w-[250px] h-32 sm:h-40 flex flex-col items-center justify-center rounded-xl cursor-pointer relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : ''}`} {...animations.fadeUpDelay(4)}>
            <img className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full p-2 sm:p-3 transition-transform duration-300 group-hover:translate-y-full" 
                 src="https://www.safehousepg.in/assets/img/amenities/air-conditioner.png" alt="AC" />
            <p className={`text-center font-bold text-base sm:text-lg mt-2 z-10 ${theme === 'dark' ? 'text-white' : ''}`}>AC</p>
            <div className={`absolute inset-0 bg-purple-200 flex items-center justify-center text-white text-base sm:text-lg font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${theme === 'dark' ? 'bg-gray-900' : ''}`}>
              Air Conditioning
            </div>
          </div>
          <div className={`group shadow-xl w-[200px] sm:w-[250px] h-32 sm:h-40 flex flex-col items-center justify-center rounded-xl cursor-pointer relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : ''}`} {...animations.fadeUpDelay(5)}>
            <img className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full p-2 sm:p-3 transition-transform duration-300 group-hover:translate-y-full" 
                 src="https://www.safehousepg.in/assets/img/amenities/food-delivery.png" alt="Food" />
            <p className={`text-center font-bold text-base sm:text-lg mt-2 z-10 ${theme === 'dark' ? 'text-white' : ''}`}>FOOD</p>
            <div className={`absolute inset-0 bg-yellow-200 flex items-center justify-center text-white text-base sm:text-lg font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${theme === 'dark' ? 'bg-gray-900' : ''}`}>
              Delicious Meals
            </div>
          </div>
          <div className={`group shadow-xl w-[200px] sm:w-[250px] h-32 sm:h-40 flex flex-col items-center justify-center rounded-xl cursor-pointer relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : ''}`} {...animations.fadeUpDelay(6)}>
            <img className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full p-2 sm:p-3 transition-transform duration-300 group-hover:translate-y-full" 
                 src="https://www.safehousepg.in/assets/img/amenities/tv-screen.png" alt="TV" />
            <p className={`text-center font-bold text-base sm:text-lg mt-2 z-10 ${theme === 'dark' ? 'text-white' : ''}`}>TV</p>
            <div className={`absolute inset-0 bg-teal-200 flex items-center justify-center text-white text-base sm:text-lg font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${theme === 'dark' ? 'bg-gray-900' : ''}`}>
              Entertainment
            </div>
          </div>
          <div className={`group shadow-xl w-[200px] sm:w-[250px] h-32 sm:h-40 flex flex-col items-center justify-center rounded-xl cursor-pointer relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : ''}`} {...animations.fadeUpDelay(7)}>
            <img className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full p-2 sm:p-3 transition-transform duration-300 group-hover:translate-y-full" 
                 src="https://www.safehousepg.in/assets/img/amenities/wire.png" alt="Power Backup" />
            <p className={`text-center font-bold text-base sm:text-lg mt-2 z-10 ${theme === 'dark' ? 'text-white' : ''}`}>POWER BACKUP</p>
            <div className={`absolute inset-0 bg-orange-200 flex items-center justify-center text-white text-base sm:text-lg font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${theme === 'dark' ? 'bg-gray-700' : ''}`}>
              Uninterrupted Power
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
