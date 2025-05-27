// src/components/ScrollToTopButton.jsx
import { useState, useEffect } from 'react';
import GoTopImg from "../../images/GoTopImg.png";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-3 right-6 lg:right-8 p-4 rounded-full transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-180"
      >
        <img
          loading='lazy'
          src={GoTopImg}
          alt="Back to top"
          width="60"
          height="60"
          className="transition-transform duration-300 ease-in-out transform hover:rotate-180 dark:border dark:border-white dark:rounded-full"
        />
      </button>
    )
  );
};

export default ScrollToTopButton;
