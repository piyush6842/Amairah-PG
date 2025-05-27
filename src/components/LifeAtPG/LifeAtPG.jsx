import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Constants/ThemeContext';
import { initializeAOS, refreshAOS, animations } from '../Constants/AnimationUtils';
import holiImage from '../../images/FrontImages/HoliFrontImage.jpg';
import diwaliImage from '../../images/FrontImages/DiwaliFrontImage.jpg';
import birthdayImage from '../../images/FrontImages/BirthdayFrontImage.jpg';
import funImage from '../../images//FrontImages/OutdoorFunFrontImage.jpg';
import lohriImage from '../../images//FrontImages/LohriFrontImage.jpg';
import tourImage from '../../images/adventure-travel-tourism-hike-people-concept-three-girls-forest-min.jpg';

const LifeAtPG = () => {
  const { theme } = useTheme();

  useEffect(() => {
    initializeAOS();
  }, []);

  // Refresh AOS when theme changes
  useEffect(() => {
    refreshAOS();
  }, [theme]);

  const events = [
    {
      id: 1,
      title: 'Holi Celebration',
      description: 'Celebrate the festival of colors with joy and togetherness at our PG.',
      image: holiImage,
      url: '/life@pg/holi'
    },
    {
      id: 2,
      title: 'Diwali Festival',
      description: 'Light up your festive spirit and celebrate Diwali with your PG family.',
      image: diwaliImage,
      url: '/life@pg/diwali'
    },
    {
      id: 3,
      title: 'Birthday Celebrations',
      description: 'Celebrate your special day with love, laughter, and your PG family.',
      image: birthdayImage,
      url: '/life@pg/birthday'
    },
    {
      id: 4,
      title: 'Outdoor Fun',
      description: 'Dive into fun-filled moments of sports, laughter, and adventure together!',
      image: funImage,
      url: '/life@pg/cultural'
    },
    {
      id: 5,
      title: 'Lohri Celebration',
      description: 'Gather around the bonfire, enjoy delicious treats, and share laughter under the starry sky!',
      image: lohriImage,
      url: '/life@pg/sports'
    },
    {
      id: 6,
      title: 'Tours & Adventures',
      description: 'Explore new places, create unforgettable memories, and embrace the thrill of adventure together!',
      image: tourImage,
      url: '/life@pg/tour'
    }
  ];

  return (
    <div className={`py-12 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" {...animations.fadeUp}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Life at Our PG</h1>
          <p className={`text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Experience a vibrant community with exciting events and activities throughout the year. 
            We believe in creating memorable experiences beyond just providing accommodation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Link key={event.id} to={event.url} className="block">
              <div 
                className={`rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
                {...animations.fadeUpDelay(index)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300`}>
                    <span className="text-white text-lg font-bold px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{event.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center" {...animations.fadeUp}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Our Community</h2>
          <p className={`text-lg max-w-3xl mx-auto mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Living at our PG is more than just having a place to stay - it's about being part of a vibrant, supportive community 
            where memories are made and friendships are formed that last a lifetime.
          </p>
          <Link 
            to="/contact" 
            className={`inline-block px-8 py-3 rounded-full font-bold text-white ${theme === 'dark' ? 'bg-black border border-white hover:bg-white hover:text-black' : 'bg-orange-500 hover:bg-orange-600'} transition-colors`}
          >
            Book Your Stay Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LifeAtPG;
