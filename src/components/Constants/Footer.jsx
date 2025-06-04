import React from 'react';
import { useTheme } from './ThemeContext';
import emailImage from '../../images/email.png';
import phoneImage from '../../images/call.png';
import logoimage from "../../images/logo-image.png";
import mapImage from '../../images/maps-and-flags.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <div className={`mt-8 w-screen ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className={`w-[90%] mx-[21px] sm:mx-20 absolute ${theme === 'dark' ? 'bg-gray-900' : 'bg-orange-500'} h-36 rounded-sm flex flex-col sm:flex-row justify-between items-center sm:items-start`} style={{ transform: 'translateY(-75px)' }}>

        <div className='mt-[40px] text-center sm:text-left sm:ml-[10px]'>
          <p className='text-center text-white text-xl sm:text-2xl font-bold'>
            Looking for a Dream PG?
          </p>
          <p className='text-center sm:text-left text-white sm:ml-[64px]'>
            We Help you make the dream of new PG a reality
          </p>
        </div>
        <div className="sm:ml-6 mb-2 sm:mt-0 mx-4 sm:mx-0">
          <Link to="/explore" className="block">
            <h1 className="relative px-12 rounded-md py-[2px] md:py-[6px] font-inter text-xl text-black bg-white sm:mt-[55px] group transition-all duration-300 mx-auto sm:mr-[50px]">
              <span className="absolute inset-0 w-full h-full bg-black dark:bg-black transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left"></span>
              <span className="relative z-10 group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
                Explore →
              </span>
            </h1>
          </Link>
        </div>
      </div>

      <footer className={`py-8 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className="container mx-auto px-6 mt-14">
          {/* Footer Links Section */}
          <div className={`flex flex-col sm:flex-row justify-between gap-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            {/* Left Section */}
            <div className="flex flex-col space-y-2 sm:flex-1">
              <Link to="/">
              <img className='w-[110px]' src={logoimage} alt="logo" />
              </Link>
              <p>
                Amairah’s PG is located in the city’s finest and trendiest place (Sector 18), Opp. Orient Craft factory. Amairah’s PG was built with an aim to make guests as comfortable as they stay at their homes. #Best PG House in Gurgaon.
              </p>
            </div>
            {/* Middle Section (Pages) */}
            <div className="flex flex-col space-y-2 sm:flex-1">
              <h4 className="font-semibold text-black dark:text-white">Pages</h4>
              <Link
                className="relative hover:text-orange-500 dark:hover:text-white transition-colors duration-300 group"
               to="/"
              >
                Home
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-300 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                <span className="ml-2 inline-block opacity-0 group-hover:opacity-100 transform transition-opacity duration-300">→</span>
              </Link>
              <Link
                className="relative hover:text-orange-500 dark:hover:text-white transition-colors duration-300 group"
                to="/about"
              >
                About
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-300 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                <span className="ml-2 inline-block opacity-0 group-hover:opacity-100 transform transition-opacity duration-300">→</span>
              </Link>
              <Link
                className="relative hover:text-orange-500 dark:hover:text-white transition-colors duration-300 group"
                to="/contact"
              >
                Contact
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-300 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                <span className="ml-2 inline-block opacity-0 group-hover:opacity-100 transform transition-opacity duration-300">→</span>
              </Link>
              <Link
                className="relative hover:text-orange-500 dark:hover:text-white transition-colors duration-300 group"
                to="/explore"
              >
                Explore
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-300 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                <span className="ml-2 inline-block opacity-0 group-hover:opacity-100 transform transition-opacity duration-300">→</span>
              </Link>
            </div>

            {/* Right Section (Contact Info) */}
            <div className="flex flex-col space-y-2 sm:flex-1">
              <h4 className="font-semibold text-black dark:text-white lg:ml-[35px]">Get In Touch</h4>
              <p className="flex items-center">
                <a
                  href="https://www.google.com/maps/place/Amairah+PG/@28.490662,77.0707222,17z/data=!3m1!4b1!4m6!3m5!1s0x390d19519e886315:0xb7f22032ab47d7b0!8m2!3d28.490662!4d77.0707222!16s%2Fg%2F11lw0b8y83?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
                  className="relative flex items-center hover:text-orange-500 dark:hover:text-white transition-colors duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-5 h-5 inline mr-2 lg:mx-2 dark:bg-white dark:w-6 dark:h-6 dark:p-1 dark:rounded-full mt-[5px] transform transition-transform duration-300 group-hover:scale-105"
                    src={mapImage}
                    alt="Map Icon"
                  />
                  <span className="flex flex-col">
                    <span>Gate no 7d, A-216, opposite Orient Craft factory, Sarhaul,</span>
                    <span>Gurgaon (Sector 18)</span>
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-300 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                  <span className="ml-2 inline-block opacity-0 group-hover:opacity-100 transform transition-opacity duration-300">→</span>
                </a>
              </p>
              <a
                href='tel:+917015373796'
                className="relative hover:text-orange-500 dark:hover:text-white transition-colors duration-300 group"
              >
                <img className='w-4 h-4 inline mr-2 lg:mx-2 dark:bg-white dark:w-5 dark:h-5 dark:p-1 dark:rounded-full' src={phoneImage} alt="Phone" />
                +91 70153 73796
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-300 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                <span className="ml-2 inline-block opacity-0 group-hover:opacity-100 transform transition-opacity duration-300">→</span>
              </a>
              <a
                href="mailto:amairahpg@gmail.com"
                className="relative hover:text-orange-500 dark:hover:text-white transition-colors duration-300 group"
              >
                <img className="w-4 h-4 inline mr-2 lg:mx-2 dark:bg-white dark:w-5 dark:h-5 dark:p-1 dark:rounded-full" src={emailImage} alt="Email" />
                amairahpg@gmail.com
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-300 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                <span className="ml-2 inline-block opacity-0 group-hover:opacity-100 transform transition-opacity duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Copyright */}
      <div className='w-screen'>
        <div className={`border-t border-gray-600 mx-auto w-[80%] ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <p className={`font-extralight text-center p-3 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
          © All Rights Reserved, <strong><a href='/' className='text-orange-600 dark:text-white'>Amairah PG</a></strong>
        </p>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
