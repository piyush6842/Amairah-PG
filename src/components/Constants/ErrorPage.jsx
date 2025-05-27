import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 dark:bg-black dark:text-white px-4 sm:px-6 md:px-8">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex flex-col items-center text-center"
      >
        <FaExclamationTriangle
          className="text-red-500 text-7xl sm:text-8xl mb-4"
          data-aos="zoom-in"
        />
        <h1
          className="text-4xl sm:text-5xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Oops!
        </h1>
        <p
          className="text-base sm:text-lg mb-6 max-w-md"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          We can't seem to find the page you're looking for.
        </p>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-4"
        >
          <Link
            to="/"
            className="px-5 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 dark:bg-white dark:text-black transition-all duration-300"
          >
            Go Back Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
