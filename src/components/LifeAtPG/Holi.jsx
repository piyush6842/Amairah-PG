import React, { useEffect, useState } from 'react';
import image2 from "../../images/HoliImages/HoliImage1.jpeg";
import image3 from "../../images/HoliImages/HoliImage2.jfif";
import image4 from "../../images/HoliImages/HoliImage3.jpg";
import image5 from "../../images/HoliImages/HoliImage4.jpg";
import image6 from "../../images/HoliImages/HoliImage5.jpg";
import image7 from "../../images/HoliImages/HoliImage6.jpeg";
import image8 from "../../images/HoliImages/HoliImage7.jpeg";
import image9 from "../../images/HoliImages/HoliImage8.jpeg";
import { IoMdClose } from "react-icons/io";
import { useTheme } from '../Constants/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Holi = () => {
  const { theme } = useTheme();
  const images = [image2, image3, image4, image5, image6, image7, image8, image9];
  const [selectedImage, setSelectedImage] = useState(null);


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

  const openImage = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className='bg-white dark:bg-black'>
      <div className="p-12 text-center mb-16">
          <h2 className="text-black text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up" data-aos-delay="0">Holi Celebration At Our PG</h2>
          <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} data-aos="fade-up" data-aos-delay="50">
            We celebrated Holi with vibrant colors, music, and lots of fun at our PG! Everyone joined in for the color play, danced to upbeat songs, and enjoyed festive treats like gujiyas and thandai. It was a joyful day filled with laughter, unity, and unforgettable memories.
          </p>
        </div>

      {/* Image Grid */}
      <div className="flex flex-wrap justify-center gap-8 mt-16 px-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="w-[300px] h-[200px] overflow-hidden rounded-lg shadow-md cursor-pointer"
            onClick={() => openImage(img)}
          >
            <img
              src={img}
              alt={`Holi ${idx + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Modal View */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={closeImage}
            >
              <IoMdClose />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged Holi"
              className="max-w-full max-h-[90vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Holi;
