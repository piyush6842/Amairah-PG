import React, { useEffect, useState } from 'react';
import image2 from "../../images/DiwaliImages/DiwaliImage1.jpeg";
import image3 from "../../images/DiwaliImages/DiwaliImage2.jpg";
import image4 from "../../images/DiwaliImages/DiwaliImage3.jpeg";
import image5 from "../../images/DiwaliImages/DiwaliImage4.jpeg";
import image6 from "../../images/DiwaliImages/DiwaliImage5.jpg";
import image7 from "../../images/DiwaliImages/DiwaliImage6.jpg";
import { useTheme } from '../Constants/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Diwali = () => {
  const [selectedImage, setSelectedImage] = useState(null);
const { theme } = useTheme();
  const images = [image2, image3, image4, image5, image6, image7];
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
    <div className='bg-white dark:bg-black'>
      <div className="p-12 text-center mb-16">
          <h2 className="text-black text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up" data-aos-delay="0">Diwali Celebration At Our PG</h2>
          <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} data-aos="fade-up" data-aos-delay="50">
            Our PG lit up with joy and lights this Diwali! Residents decorated the space with diyas, rangoli, and fairy lights. We shared sweets, played games, and enjoyed a warm evening filled with laughter, togetherness, and festive spirit.
          </p>
        </div>

      {/* Image Gallery */}
      <div className="flex flex-wrap justify-center mt-16 gap-6 px-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Diwali ${index + 1}`}
              className="w-full h-[300px] object-cover rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Modal for image view */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Full View" className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl" />
        </div>
      )}
    </div>
  );
};

export default Diwali;
