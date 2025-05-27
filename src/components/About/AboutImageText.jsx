import React, { useEffect } from 'react';
import image from "../../images/HomeCarousel.webp";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useTheme } from '../Constants/ThemeContext'; // Assuming ThemeContext is in src

const AboutImageText = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const { theme } = useTheme(); // Get current theme from context

  // Conditional classes based on theme
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white';
  const sectionTextColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-500';
  
  return (
    <div className={`${bgColor} ${textColor}`}>
      {/* First div */}
      <div className='flex flex-col md:flex-row mt-24 mx-4 md:mx-20 p-10' data-aos="fade-up">
        <div className='w-full md:w-1/2 mx-4 md:mx-10'>
          <img loading='lazy' src={image} alt="image1" />
        </div>
        <div className='w-full md:w-1/2 mx-4 md:mx-10' data-aos="fade-up" data-aos-delay="200">
          <p>
            <span className={`block text-lg ${sectionTextColor} font-inter`}>Welcome to the Amairah PG</span>
            <h1 className={`font-serif text-2xl ${textColor}`}>A Home Away From Your Home</h1>
            <p className='mt-5 font-thin'>
              Located in the heart of Gurgaon at Noble Enclave, opposite Orient Craft factory, Sector 18, Amairah PG offers a perfect blend of comfort, convenience, and security. With fully furnished rooms, 24/7 surveillance, and healthy home-cooked meals, we ensure every resident feels at home. Enjoy easy access to major hubs, a friendly atmosphere, and amenities tailored to your lifestyle. Whether you're a student or a professional, Amairah PG is your trusted choice for hassle-free living. Experience the warmth and care of a home, away from home, at Amairah PG.
            </p>
            <p className='mt-5 font-thin'>
              At Amairah PG, we redefine the concept of comfortable living with fully furnished rooms, modern amenities, and a homely atmosphere. Situated in the heart of Gurgaon, our PG ensures easy access to key locations, making it ideal for students and working professionals alike.
            </p>
          </p>
        </div>
      </div>

      {/* Second div */}
      <div className='flex flex-col md:flex-row mt-16 mx-4 md:mx-20 p-10' data-aos="fade-up" data-aos-delay="400">
        <div className='w-full md:w-1/2 mx-4 md:mx-10' data-aos="fade-up">
          <p className='font-thin'>
            <p className='mt-5'>
              We prioritize your safety with 24/7 security and CCTV surveillance. Enjoy delicious, home-cooked meals that feel just like mom’s kitchen. Stay connected with high-speed Wi-Fi and unwind in clean, well-maintained spaces designed for your comfort.
            </p>
            <p className='mt-5'>
              Whether you’re looking for short-term or long-term accommodation, Amairah PG offers flexible stay options to suit your needs.
            </p>
            <p>
              Choose Amairah PG for a safe, supportive, and welcoming community where you can truly thrive.
            </p>
            <p className='mt-5'>
              Amairah PG – Live, Work, and Relax with Peace of Mind
            </p>
          </p>
        </div>
        <div className='w-full md:w-1/2 mx-4 md:mx-10' data-aos="fade-up">
          <img loading='lazy' src={image} alt="image1" />
        </div>
      </div>

      {/* Third div */}
      <div className='flex flex-col md:flex-row mt-16 mx-4 md:mx-20 p-10' data-aos="fade-up" data-aos-delay="600">
        <div className='w-full md:w-1/2 mx-4 md:mx-10'>
          <img loading='lazy' src={image} alt="image1" />
        </div>
        <div className='w-full md:w-1/2 mx-4 md:mx-10' data-aos="fade-up">
          <p className='font-thin'>
            <p className='mt-5'>
              Welcome to Amairah PG, where comfort, security, and convenience come together to offer you the perfect living experience. We provide a home-like atmosphere for individuals looking for a peaceful stay. Our well-maintained facilities cater to your everyday needs, ensuring that you live stress-free and comfortably.
            </p>
            <p className='mt-5'>
              We understand how important it is to feel safe and cared for, which is why we prioritize your safety with round-the-clock security and surveillance. Our rooms are fully furnished, offering both privacy and comfort, making it easy for you to focus on your work or studies.
            </p>
            <p className='mt-5'>
              At Amairah PG, you don’t just get a place to stay, but a place to thrive. Whether you're a student or a working professional, we provide everything you need to live comfortably, including fast internet, healthy meals, and a clean, welcoming environment.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutImageText;
