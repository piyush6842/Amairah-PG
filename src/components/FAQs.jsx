import React, { useState, useEffect } from "react";
import { useTheme } from './Constants/ThemeContext';
import { initializeAOS, refreshAOS, animations } from './Constants/AnimationUtils';
import {Link} from 'react-router-dom';
const FAQs = () => {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    initializeAOS();
  }, []);

  // Refresh AOS when theme changes
  useEffect(() => {
    refreshAOS();
  }, [theme]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What amenities are provided in the PG?",
      answer: "Our PG provides a range of amenities including Wi-Fi, 24/7 security, housekeeping, laundry facilities, fully equipped kitchen, air conditioning, power backup, and common areas for socializing."
    },
    {
      question: "What are the meal timings and arrangements?",
      answer: "We serve three meals daily: Breakfast (8-10 AM), Lunch (12.30-2 PM), and Dinner (8-10 PM). Our rotating menu offers a variety of nutritious meals, with options for dietary restrictions available upon request."
    },
    {
      question: "What is the room sharing policy?",
      answer: "We offer various room sharing options including single occupancy, double sharing, and triple sharing. All room types come with essential furniture and are designed for comfort and privacy."
    },
    {
      question: "Is there a security deposit requirement?",
      answer: "Yes, we require a refundable security deposit equivalent to one month's rent. This deposit is fully refundable at the end of your stay, subject to any deductions for damages beyond normal wear and tear."
    },
    {
      question: "What are the visitor/guest policies?",
      answer: "Visitors are welcome from 9 AM to 8 PM. Overnight guests require prior approval from management. All visitors must register at the reception desk, and residents are responsible for their guests' conduct."
    },
    {
      question: "What are the move-in and move-out procedures?",
      answer: "For move-in, we require advance booking with a security deposit. On arrival, complete documentation, room inspection, and payment. For move-out, provide 30 days' notice, schedule inspection, complete paperwork, and receive deposit refund."
    }
  ];

  return (
    <div className={`w-screen py-12 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" {...animations.fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Find answers to common questions about our PG accommodations
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`mb-4 rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}
              {...animations.fadeUpDelay(index)}
            >
              <div
                className={`px-6 py-4 cursor-pointer flex justify-between items-center ${activeIndex === index ? 'border-b border-gray-200' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-2xl transform transition-transform duration-300" style={{ transform: activeIndex === index ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
              </div>
              <div 
                className={`px-6 py-4 transition-all duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} 
                style={{ 
                  maxHeight: activeIndex === index ? '1000px' : '0',
                  opacity: activeIndex === index ? 1 : 0,
                  overflow: 'hidden'
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" {...animations.fadeUp}>
          <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Still have questions? Contact us for more information.
          </p>
          <Link 
            to="/contact" 
            className={`inline-block px-8 py-3 rounded-full font-bold text-white ${theme === 'dark' ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-500 hover:bg-orange-600'} transition-colors`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
