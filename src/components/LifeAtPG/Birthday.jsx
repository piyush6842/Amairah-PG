import React, { useEffect, useState } from 'react';
import image2 from "../../images/BirthdayImages/BirthdayImage1.jpg";
import image3 from "../../images/BirthdayImages/BirthdayImage2.jpg";
import image4 from "../../images/BirthdayImages/BirthdayImage3.jpeg";
import image5 from "../../images/BirthdayImages/BirthdayImage4.jpeg";
import { useTheme } from '../Constants/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Birthday = () => {
  const { theme } = useTheme();
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

  const images = [image2, image3, image4, image5];

  return (
    <div className='bg-white dark:bg-black'>
      <div className="p-12 text-center mb-16">
          <h2 className="text-black text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up" data-aos-delay="0">Birthday Celebration At Our PG</h2>
          <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} data-aos="fade-up" data-aos-delay="50">
            We love celebrating special moments together! A fun-filled birthday bash at our PG included cake cutting, decorations, music, and lots of laughter. Everyone joined in to make the day memorable for the birthday star with cheers, snacks, and good vibes.
          </p>
        </div>

      {/* Gallery */}
      <div className="flex flex-wrap justify-center mt-16 gap-6 px-4">
        {images.map((img, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer" onClick={() => setSelectedImage(img)}>
            <img
              src={img}
              alt={`Birthday ${index + 1}`}
              className="w-full h-[300px] object-cover rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Image Modal */}
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

export default Birthday;
