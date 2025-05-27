import React, { useEffect, useState } from 'react';
import image2 from "../../images/OutdoorFunImages/FunImage4.jpg";
import image3 from "../../images/OutdoorFunImages/FunImage5.jpg";
import image4 from "../../images/OutdoorFunImages/FunImage6.jpg";
import { FaGreaterThan } from 'react-icons/fa';
import { useTheme } from '../Constants/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
const CulturalFest = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { theme } = useTheme();
  // Add all actual outdoor fun images here; replace repeated image if needed
  const images = [image2, image3, image4];
useEffect(() => {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        offset: 50,
        delay: 0,
        mirror: false,
        anchorPlacement: 'top-bottom',
      });
    }, []);
  return (
    <div className="bg-white dark:bg-black">
      <div className="p-12 text-center mb-16">
          <h2 className="text-black text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up" data-aos-delay="0">Outdoor Fun At Our PG</h2>
          <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} data-aos="fade-up" data-aos-delay="50">
            We had a refreshing day outdoors filled with games, laughter, and bonding! From cricket matches to badminton and group activities, everyone enjoyed the sunshine and friendly competition. It was the perfect break to relax, connect, and make great memories together.
          </p>
        </div>

      {/* Gallery */}
      <div className="flex flex-wrap justify-center mt-16 gap-6 px-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Outdoor Fun ${idx + 1}`}
              className="w-full h-[300px] object-cover rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full View"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
          />
        </div>
      )}
    </div>
  );
};

export default CulturalFest;
