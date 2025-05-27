import React, { useState, useEffect } from 'react';
import image1 from "../../images/HomCarouselImageGirls.jpg";
import image2 from "../../images/ExploreSectionImages/happy-woman-her-husband-standing-reception-desk-while-checking-hotel-min.jpg"
import image3 from "../../images/HomeCarousel.webp";

const Carousel = () => {
  const images = [
    {
      url: image1,
      text: [
        'Welcome to the Amairah PG',
        'at Amairah PG',
        'Where Comfort Meets Style',
      ],
    },
    {
      url: image2,
      text: [
        'Welcome to the Amairah PG',
        'of Home, Away from Home',
        'Designed for You',
      ],
    },
    {
      url: image3,
      text: [
        'Welcome to the Amairah PG',
        'Prime Comfort',
        'For Your Peace of Mind',
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(-1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setIsImageLoaded(false);
    const imageLoader = new Image();
    imageLoader.src = images[currentIndex].url;
    imageLoader.onload = () => {
      setIsImageLoaded(true);
      setTimeout(() => setCurrentTextIndex(0), 500);
    };
  }, [currentIndex]);

  useEffect(() => {
    if (currentTextIndex >= 0 && currentTextIndex < images[currentIndex].text.length - 1) {
      const timer = setTimeout(() => {
        setCurrentTextIndex((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentTextIndex, currentIndex]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentTextIndex(-1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[50vh] xs:h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen bg-white dark:bg-gray-900">
      <div className="relative w-full h-full">
        <img
          loading='lazy'
          src={images[currentIndex].url}
          alt={`Slide ${currentIndex + 1}`}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {isImageLoaded && (
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 dark:bg-opacity-60">
            <div className="text-center px-4 sm:px-8 max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
              {images[currentIndex].text.map((line, index) => (
                <p
                  key={index}
                  className={`text-white dark:text-gray-200 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold transition-all duration-1000 ease-in-out transform ${
                    index <= currentTextIndex
                      ? 'opacity-100 scale-105 translate-y-0'
                      : 'opacity-0 scale-95 translate-y-5'
                  } ${index > 0 ? 'mt-2 sm:mt-3 md:mt-4' : ''}`}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => { setCurrentIndex(index); setCurrentTextIndex(-1); }}
            className={`w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 rounded-full transition-colors duration-300 
              ${currentIndex === index 
                ? 'bg-orange-400 dark:bg-blue-500' 
                : 'bg-gray-300 dark:bg-gray-600'
              } focus:outline-none`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
