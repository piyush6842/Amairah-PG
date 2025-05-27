import React, { useState, useEffect } from 'react';
import { useTheme } from './Constants/ThemeContext';
import { initializeAOS, refreshAOS, animations } from './Constants/AnimationUtils';
import contactImage from '../images/ContactUsImage.webp';
import mapIcon from '../images/maps-and-flags.png';
import emailIcon from '../images/email.png';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  useEffect(() => {
    initializeAOS();
  }, []);

  useEffect(() => {
    refreshAOS();
  }, [theme]);

  return (
    <div className={`w-full min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4" {...animations.fadeUp}>Contact Us</h1>
        <p className="text-sm sm:text-base text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-2" {...animations.fadeUp}>We're here to help you with any questions or concerns. Fill out the form below and we'll get back to you as soon as possible.</p>
        
        <div className="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="w-full lg:w-1/2" {...animations.slideRight}>
            <img src={contactImage} alt="Contact Us" className="w-full h-auto rounded-lg shadow-lg mb-6 sm:mb-8" loading="lazy" />
            
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Get in Touch</h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="cursor-pointer flex items-center border border-orange-400 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
                  <FaPhoneAlt className="w-8 h-8 sm:w-12 sm:h-12" color="orange" />
                  <div className="flex-1">
                    <a href='tel:7814073920' className="block">
                      <p className="font-medium ml-3 sm:ml-6 text-sm sm:text-base">Call Us</p>
                      <p className={`ml-3 sm:ml-6 text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>+91 78140 73920</p>
                    </a>
                  </div>
                </div> 
                
                <div className="cursor-pointer flex items-center border border-orange-400 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
                  <FaEnvelope className="w-8 h-8 sm:w-12 sm:h-12" color="orange" />
                  <div className="flex-1">
                    <a href='mailto:info@mypgwebsite.com' className="block">
                      <p className="font-medium ml-3 sm:ml-6 text-sm sm:text-base">Email Us</p>
                      <p className={`ml-3 sm:ml-6 text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>info@mypgwebsite.com</p>
                    </a>
                  </div>
                </div>
                
                <div className="cursor-pointer flex items-center border border-orange-400 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
                  <FaMapMarkerAlt className="w-8 h-8 sm:w-12 sm:h-12" color="orange" />
                  <div className="flex-1">
                    <a href='https://www.google.com/maps/place/Amairah+PG/@28.490662,77.0707222,17z/data=!3m1!4b1!4m6!3m5!1s0x390d19519e886315:0xb7f22032ab47d7b0!8m2!3d28.490662!4d77.0707222!16s%2Fg%2F11lw0b8y83?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D' className="block">
                      <p className="font-medium ml-3 sm:ml-6 text-sm sm:text-base">Visit Us</p>
                      <p className={`ml-3 sm:ml-6 text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Gate no 7d, A-216, opposite Orient Craft factory</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`w-full lg:w-1/2 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg`} {...animations.slideLeft}>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-3 sm:mb-4">
                <label htmlFor="name" className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base ${theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-orange-500`}
                  required
                />
              </div>
              
              <div className="mb-3 sm:mb-4">
                <label htmlFor="email" className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base ${theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-orange-500`}
                  required
                />
              </div>
              
              <div className="mb-3 sm:mb-4">
                <label htmlFor="phone" className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base ${theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-orange-500`}
                  required
                />
              </div>
              
              <div className="mb-4 sm:mb-6">
                <label htmlFor="message" className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base ${theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-orange-500`}
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-bold text-sm sm:text-base text-white transition-colors ${theme === 'dark' ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-500 hover:bg-orange-600'}`}
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-12 sm:mt-16" {...animations.fadeUp}>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Find Us on the Map</h2>
          <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3575605985036!2d77.06814727549228!3d28.49066277574481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19519e886315%3A0xb7f22032ab47d7b0!2sAmairah%20PG!5e0!3m2!1sen!2sin!4v1715511047056!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Amairah PG Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
