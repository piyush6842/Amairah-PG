import React, { useState, useEffect, useContext } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from './Constants/ThemeContext';
import ManishImage from "../images/GoogleReviewImages/GoogleReviewManish.jpg";
import SarthakImage from "../images/GoogleReviewImages/GoogleReviewSarthak.jpg";
import IpshitaImage from "../images/GoogleReviewImages/GoogleReviewIpshita.jpg";
import DevImage from "../images/GoogleReviewImages/GoogleReviewDev.jpg";
import ManpreetImage from "../images/GoogleReviewImages/GoogleReviewManpreet.jpg";
import ArshImage from "../images/GoogleReviewImages/GoogleReviewArsh.jpg";

const reviews = [
  {
    id: 1,
    name: "Manish Gupta",
    photo: ManishImage,
    rating: 5,
    review:
      "Amairah PG is a perfect place for working corporate people. Food is excellent and unlimited with many options.",
  },
  {
    id: 2,
    name: "Sarthak Sharma",
    photo: SarthakImage,
    rating: 5,
    review:
      "This pg feels like a home away from home. The owner is very polite and takes care of all our needs. The food quality is also very good. Would recommend this pg to everyone who is looking for a comfortable place in Gurgaon. ",
  },
  {
    id: 3,
    name: "Ipshita Choubey",
    photo: IpshitaImage,
    rating: 5,
    review:
      "A great place to live, I was there for just one month but had a great experience, especially the manager who is so calm, polite and helpful. They also serve great food with variety. …",
  },
  {
    id: 4,
    name: "Dev Chhabra",
    photo: DevImage,
    rating: 5,
    review:
      "I really liked this pg, I shifted recently here and it feels like home and also the food, it's very hygienic and tasty. The owner and their staff are very friendly towards everyone.",
  },
  {
    id: 5,
    name: "Manpreet Singh",
    photo: ManpreetImage,
    rating: 5,
    review:
      "Amairah PG provides excellent food with a homely touch and well-maintained facilities. The prompt maintenance service ensures a comfortable and hassle-free stay.",
  },
  {
    id: 6,
    name: "Arsh Nagpal",
    photo: ArshImage,
    rating: 5,
    review:
      "I've been staying at Amairah PG for the past few days, and it's been a home-like experience. The food is excellent, and the environment is very hygienic and well-maintained.",
  }
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction === 1 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction === 1 ? -300 : 300,
      opacity: 0,
    }),
  };

  const transition = { duration: 0.8, ease: "easeInOut" };

  const getReviewsToDisplay = () => {
    // On mobile, show only one review
    if (window.innerWidth < 768) {
      return [reviews[currentIndex]];
    }
    // On larger screens, show two reviews
    const secondIndex = (currentIndex + 1) % reviews.length;
    return [reviews[currentIndex], reviews[secondIndex]];
  };

  return (
    <div
      className={`relative w-full py-8 sm:py-12 px-4 sm:px-6 md:px-8 bg-cover bg-center ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
      style={{
        backgroundImage: "url('https://www.safehousepg.in/assets/23.webp')",
      }}
    >
      <div className="text-center mb-6 sm:mb-8">
        <h3 className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-black' : 'text-gray-200'} uppercase`}>
          Most Rating Reviews By
        </h3>
        <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ${theme === 'dark' ? 'text-black' : 'text-white'} mt-2 sm:mt-3`}>
          Our Clients
        </h2>
      </div>

      <div className="relative mx-4 sm:mx-8 md:mx-16 lg:mx-32 my-6 sm:my-8 md:my-10 overflow-hidden h-[400px] sm:h-[350px] md:h-[300px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className="absolute flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
          >
            {getReviewsToDisplay().map((review) => (
              <div
                key={review.id}
                className={`w-full md:w-1/2 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
                data-aos="fade-up"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <img
                    src={review.photo}
                    alt={review.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mr-3 sm:mr-4"
                  />
                  <div>
                    <h3 className={`text-lg sm:text-xl md:text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      {review.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={index < review.rating ? "#FFD700" : "#D3D3D3"}
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      className="mr-1"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{review.review}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center space-x-6 mt-4 sm:mt-6">
        <button
          className={`${theme === 'dark' ? 'bg-black' : 'bg-orange-400'} p-3 sm:p-4 rounded-full shadow-md border-2 border-white hover:scale-110 transition-transform duration-200`}
          onClick={prevSlide}
        >
          <FaChevronLeft className="text-white text-lg sm:text-xl" />
        </button>
        <button
          className={`${theme === 'dark' ? 'bg-black' : 'bg-orange-400'} p-3 sm:p-4 rounded-full shadow-md border-2 border-white hover:scale-110 transition-transform duration-200`}
          onClick={nextSlide}
        >
          <FaChevronRight className="text-white text-lg sm:text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ReviewCarousel;
