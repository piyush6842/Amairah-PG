import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import logoimage from "../../images/logo-image.png";

const Header = () => {
  const [activeTab, setActiveTab] = useState('');
  const [hoveredTab, setHoveredTab] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const tabs = {
    HOME: '/',
    ABOUT: '/about',
    EXPLORE: '/explore',
    'LIFE@PG': '/life@pg',
    CONTACT: '/contact'
  };
  const tabRefs = useRef([]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle URL changes and set active tab accordingly
  useEffect(() => {
    const currentPath = location.pathname.toLowerCase();
    const foundTab = Object.keys(tabs).find(tab => tabs[tab] === currentPath);
    if (foundTab) {
      setActiveTab(foundTab);
    } else if (currentPath.includes('/life@pg')) {
      setActiveTab('LIFE@PG');
    } else {
      setActiveTab('');
    }
  }, [location.pathname]);

  // Instant navigation when clicking tabs
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(tabs[tab]); // Navigate immediately without delay
  };

  const selectedTab = hoveredTab || activeTab;
  const selectedIndex = Object.keys(tabs).indexOf(selectedTab);
  const selectedTabRef = tabRefs.current[selectedIndex];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-screen flex justify-between items-center py-4 px-6 z-50 transition-all duration-300 ${
          isScrolled ? 'border-transparent bg-opacity-95' : 'border-black'
        } ${theme === 'dark' ? 'bg-black text-white' : 'text-black '}`}
      >
        <div className="flex items-center">
          <a href="/">
            <img
              src={logoimage}
              alt="Logo"
              className="w-32 h-auto animate-spinHorizontal"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`relative hidden md:flex items-center justify-center rounded-full overflow-hidden ${
            isScrolled ? 'border-white bg-gray-300 bg-opacity-85' : 'bg-white border-white'
          } transition-all duration-300 border-gray-300 dark:bg-black dark:border-white dark:border`}
        >
          <div
            className="absolute top-0 bottom-0 left-0 bg-black dark:bg-white rounded-full transition-all duration-300 ease-in-out"
            style={{
              width: selectedTabRef ? `${selectedTabRef.offsetWidth}px` : '0px',
              left: selectedTabRef ? `${selectedTabRef.offsetLeft}px` : '0px',
              transition: 'left 0.3s ease-in-out, width 0.3s ease-in-out',
            }}
          ></div>

          <div className="flex items-center justify-center w-full">
            {Object.keys(tabs).map((tab, index) => (
              <button
                key={tab}
                ref={(el) => (tabRefs.current[index] = el)}
                onClick={() => handleTabClick(tab)}
                onMouseEnter={() => setHoveredTab(tab)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`relative flex-1 px-8 py-4 font-semibold z-10 text-center transition-colors duration-300 ${
                  activeTab === tab
                    ? hoveredTab && hoveredTab !== activeTab
                      ? 'text-black dark:text-gray-300'
                      : 'text-white dark:text-gray-800 animate-pulse'
                    : hoveredTab === tab
                    ? 'text-white dark:text-gray-800'
                    : 'text-black dark:text-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        {/* Theme Toggle & Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`relative p-3 rounded-full overflow-hidden group transition-all duration-300 border border-black dark:border-white ${
              isScrolled
                ? 'bg-gray-200 text-black dark:bg-black dark:text-white group-hover:bg-black'
                : 'bg-gray-100 text-black dark:bg-black dark:text-gray-300'
            }`}
          >
            <span className="relative z-10">
              {theme === 'dark' ? (
                <MoonIcon className="h-6 w-6 text-white" />
              ) : (
                <SunIcon className="h-6 w-6 text-black transform group-hover:rotate-90 transition-transform duration-300" />
              )}
            </span>
          </button>

          {/* Burger Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-full text-black dark:text-white"
          >
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="flex flex-col items-center justify-center h-full bg-white dark:bg-black">
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  handleTabClick(tab);
                  setIsMenuOpen(false); // Close menu after selection
                }}
                className={`py-4 px-8 text-center text-black dark:text-white font-semibold`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
