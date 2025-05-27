import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import image from "../../images/RoomImage2.webp"
import { FaHome, FaUtensils, FaShieldAlt, FaBolt, FaMapPin } from 'react-icons/fa';
import { useTheme } from '../Constants/ThemeContext'; 

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: false,    
      easing: 'ease-in-out',
    });
  }, []);

  const { theme } = useTheme();

  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white';
  const sectionTextColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-300';
  const hoverTextColor = theme === 'dark' ? 'hover:text-orange-400' : 'hover:text-orange-600';

  return (
    <div className={`${bgColor} ${textColor}`}>
      <div data-aos="fade-down">
        <h1 className='text-center text-6xl mt-16 font-serif'>
          Why Choose Us
        </h1>
      </div>

      <div className={`w-full ${bgColor} flex flex-col lg:flex-row p-8 lg:p-16`}>
        {/* Text Section */}
        <div className="w-full lg:w-[50%] px-8">
          <div className="mt-6 flex flex-col gap-6">
            {/* List of Features */}
            {[
              { icon: <FaHome size={50} color="orange" />, title: "Comfortable Living", desc: "At Amairah PG, we provide a cozy and peaceful environment where comfort meets convenience." },
              { icon: <FaUtensils size={50} color="orange" />, title: "Hygienic Meal", desc: "Enjoy fresh, home-style meals prepared with care and cleanliness. At Amairah PG, we prioritize your health by maintaining high standards." },
              { icon: <FaShieldAlt size={50} color="orange" />, title: "24/7 Security", desc: "Your safety is our top priority. Amairah PG is equipped with round-the-clock security, including CCTV surveillance" },
              { icon: <FaBolt size={50} color="orange" />, title: "24/7 Water and Electricity", desc: "At Amairah PG, we ensure your comfort with 24/7 water availability and continuous electricity, including power backup." },
              { icon: <FaMapPin size={50} color="orange" />, title: "Strategic Location", desc: "Amairah PG is conveniently located near major colleges, offices, markets, and public transport, making daily commutes easy and hassle-free." }
            ].map((item, index) => (
              <div 
                key={index}
                className={`cursor-pointer relative flex items-center gap-4 border ${borderColor} p-4 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group`}
                data-aos="fade-right"
                data-aos-delay={index * 200}
              >
                {item.icon}
                <div className="flex-1 pl-4">
                  <a className={`font-bold text-xl ${sectionTextColor} ${hoverTextColor}`} href='/about'>
                    {item.title}
                  </a>
                  <p className="mt-2">{item.desc}</p>
                </div>
                <span className="absolute top-0 left-0 h-full w-1 bg-orange-300 dark:bg-white transform scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-500 ease-in-out"></span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 relative w-full lg:w-[50%]" data-aos="fade-up">
          <img 
            loading='lazy' 
            className="w-[265px] h-auto ml-0 lg:ml-48 mt-32 relative z-10" 
            src={image} 
            alt="room image" 
            data-aos="zoom-in"
          />
          <img
            loading='lazy'
            className="absolute bottom-20 left-24 w-[265px] h-auto  lg:ml-48 mb-10 z-0"
            src={image}
            alt="room image"
            data-aos="zoom-in"
            data-aos-delay="300"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
