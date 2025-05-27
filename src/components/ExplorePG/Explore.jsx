import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from '../Constants/ThemeContext';
import { Link } from 'react-router-dom';
// Import images
import restaurantImage from '../../images/ExploreSectionImages/restaurant-interior-min.jpg';
import wifiImage from '../../images/ExploreSectionImages/man-plugging-ethernet-cable-wireless-router-min.jpg';
import transportImage from '../../images/ExploreSectionImages/side-view-woman-waiting-bus-min.jpg';
import laundryImage from '../../images/ExploreSectionImages/women-using-washing-machine-doing-laundry-young-girls-ready-wash-clothes-interior-washing-process-concept-min.jpg';
import gymImage from '../../images/ExploreSectionImages/equipments-gym-min.jpg';
import roomsImage from '../../images/ExploreSectionImages/indoor-hotel-view-min.jpg';
import studyImage from '../../images/ExploreSectionImages/girl-library-min.jpg';
import singleBedImage from '../../images/ExploreSectionImages/SingleBedImage.jpg';
import doubleBedImage from '../../images/ExploreSectionImages/DoubleBedImage.jpg';
import tripleBedImage from '../../images/ExploreSectionImages/TripleBedImage.jpg';
import GirlsPGimg from '../../images/ExploreSectionImages/GirlsPGImage.png';
import BoysPGimg from "../../images/ExploreSectionImages/BoysPG-Image.jpg";
import colivingImage from "../../images/ExploreSectionImages/CoLivingPGImage.jpg";
import receptionImage from "../../images/ExploreSectionImages/happy-woman-her-husband-standing-reception-desk-while-checking-hotel-min.jpg";

const Explore = () => {
  const { theme } = useTheme();
  const [activeCard, setActiveCard] = useState(null);

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

  // Refresh AOS when theme changes
  useEffect(() => {
    AOS.refresh();
  }, [theme]);

  const pgTypes = [
    {
      id: 'girls',
      title: "Girls PG",
      description: "Exclusive accommodation for female students and working professionals in a safe environment.",
      price: "Starting from ₹8,000/month",
      image: GirlsPGimg,
      color: "bg-pink-600",
      subcards: [
        {
          title: "Single Sharing",
          price: "₹12,000/month",
          image: singleBedImage,
          features: ["Private room", "Attached bathroom", "Study table", "24/7 security"]
        },
        {
          title: "Double Sharing",
          price: "₹10,000/month",
          image: doubleBedImage,
          features: ["Shared room (2 persons)", "Attached bathroom", "Study table", "24/7 security"]
        },
        {
          title: "Triple Sharing",
          price: "₹8,000/month",
          image: tripleBedImage,
          features: ["Shared room (3 persons)", "Common bathroom", "Study table", "24/7 security"]
        }
      ]
    },
    {
      id: 'boys',
      title: "Boys PG",
      description: "Comfortable and affordable accommodation designed for male students and professionals.",
      price: "Starting from ₹7,500/month",
      image: BoysPGimg,
      color: "bg-blue-600",
      subcards: [
        {
          title: "Single Sharing",
          price: "₹11,500/month",
          image: singleBedImage,
          features: ["Private room", "Attached bathroom", "Work desk", "Gaming zone access"]
        },
        {
          title: "Double Sharing",
          price: "₹9,500/month",
          image: doubleBedImage,
          features: ["Shared room (2 persons)", "Attached bathroom", "Work desk", "Gaming zone access"]
        },
        {
          title: "Triple Sharing",
          price: "₹7,500/month",
          image: tripleBedImage,
          features: ["Shared room (3 persons)", "Common bathroom", "Work desk", "Gaming zone access"]
        }
      ]
    },
    {
      id: 'coliving',
      title: "Co-Living PG",
      description: "Modern co-living spaces for professionals with premium amenities and community events.",
      price: "Starting from ₹9,500/month",
      image: colivingImage,
      color: "bg-purple-600",
      subcards: [
        {
          title: "Premium Single",
          price: "₹14,000/month",
          image: singleBedImage,
          features: ["Private room", "Private bathroom", "Workspace", "Community events"]
        },
        {
          title: "Premium Double",
          price: "₹11,500/month",
          image: doubleBedImage,
          features: ["Shared room (2 persons)", "Attached bathroom", "Workspace", "Community events"]
        },
        {
          title: "Standard Double",
          price: "₹9,500/month",
          image: tripleBedImage,
          features: ["Shared room (2 persons)", "Common bathroom", "Workspace", "Community events"]
        }
      ]
    }
  ];

  const exploreItems = [
    {
      title: "Reception & Support",
      description: "Need help? Whether you're a current resident or a prospective guest, our team is here to assist with room bookings, maintenance requests, and any other inquiries. Reach out for a seamless PG experience!",
      image: receptionImage,
      color: "bg-teal-100",
      hoverColor: "bg-teal-600"
    },
     {
      title: "High-Speed Internet",
      description: "Stay connected with our reliable high-speed Wi-Fi, perfect for online classes, remote work, streaming, and gaming—anytime, anywhere in the PG.",
      image: wifiImage,
      color: "bg-purple-100",
      hoverColor: "bg-purple-600"
    },
    {
      title: "Convenient Transport",
      description: "Our PG is close to bus stops, autos, and cab services, so students and working professionals can travel easily to their destinations every day. You can easy access to major city locations and educational institutions.",
      image: transportImage,
      color: "bg-yellow-100",
      hoverColor: "bg-yellow-600"
    },
    {
      title: "Study Zones/Nearby Library",
      description: "Focus and study better with a peaceful library just minutes from our PG. It's a great place for students and book lovers to read, learn, and prepare without distractions.",
      image: studyImage,
      color: "bg-yellow-100",
      hoverColor: "bg-yellow-600"
    },
    {
      title: "Fitness Center",
      description: "Stay fit and active with a fully-equipped gym just a short walk from our PG. Whether you enjoy cardio, weight training, or yoga, it’s easy to keep up with your fitness goals every day.",
      image: gymImage,
      color: "bg-red-100",
      hoverColor: "bg-red-600"
    },
    {
      title: "Laundry Services",
      description: "Modern washing machines and drying facilities available for residents to use at their convenience. We provide laundry facilities at our PG, so you can easily wash your clothes without going outside.",
      image: laundryImage,
      color: "bg-pink-100",
      hoverColor: "bg-pink-600"
    },
    {
      title: "Chill at Trendy Cafes",
      description: "Unwind with friends and family at nearby cafes that offer cozy vibes and great food. Perfect for study breaks, late-night chats, or weekend hangouts—all within walking distance from our PG.",
      image: restaurantImage,
      color: "bg-green-100",
      hoverColor: "bg-green-600"
    },
    {
      title: "Explore Nearby Malls",
      description: "Spend your free time at stunning malls located close to our PG. From top fashion brands to entertainment zones and food courts, everything you need for fun and relaxation is just around the corner.",
      image: roomsImage,
      color: "bg-blue-100",
      hoverColor: "bg-blue-600"
    }
  ];

  const toggleCard = (id) => {
    if (activeCard === id) {
      setActiveCard(null);
    } else {
      setActiveCard(id);
    }
  };

  return (
    <div className={`py-12 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up" data-aos-delay="0">Explore Our PG</h2>
          <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} data-aos="fade-up" data-aos-delay="50">
            Discover the perfect blend of comfort, convenience, and community in our thoughtfully designed PG accommodations.
          </p>
        </div>

        {/* PG Types Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up" data-aos-delay="0">Our Paying Guest Accommodations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pgTypes.map((pgType, idx) => (
              <div key={pgType.id} className="flex flex-col" data-aos="fade-up" data-aos-delay={idx * 50}>
                <div 
                  className={`rounded-t-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} ${activeCard === pgType.id ? 'rounded-b-none' : 'rounded-b-lg'}`}
                  onClick={() => toggleCard(pgType.id)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={pgType.image} 
                      alt={pgType.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 opacity-60 ${pgType.color}`}></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                      <h3 className="text-3xl font-bold mb-2">{pgType.title}</h3>
                      <div className="text-xl font-semibold mb-4">{pgType.price}</div>
                      <div className="bg-white text-gray-800 px-4 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors">
                        {activeCard === pgType.id ? 'Hide Options' : 'View Options'}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{pgType.description}</p>
                  </div>
                </div>
                
                {/* Subcards that appear when main card is clicked */}
                <div className={`transition-all duration-500 overflow-hidden ${activeCard === pgType.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  {pgType.subcards.map((subcard, index) => (
                    <div 
                      key={index} 
                      className={`p-6 border-t border-gray-200 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} ${index === pgType.subcards.length - 1 ? 'rounded-b-lg' : ''} shadow-lg`}
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <img 
                            src={subcard.image} 
                            alt={subcard.title} 
                            className="w-full h-48 object-cover rounded-lg"
                            loading="lazy"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xl font-bold">{subcard.title}</h4>
                            <span className={`font-bold text-lg ${pgType.color.replace('bg-', 'text-')}`}>{subcard.price}</span>
                          </div>
                          <ul className={`list-disc list-inside ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                            {subcard.features.map((feature, i) => (
                              <li key={i} className="mb-1">{feature}</li>
                            ))}
                          </ul>
                          <Link 
                          to = "/contact"
                            className={`text-white font-bold py-2 px-6 rounded-full transition-colors ${pgType.color} hover:bg-opacity-90`}
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exploreItems.map((item, index) => (
            <div 
              key={index}
              className={`rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className={`absolute inset-0 opacity-0 hover:opacity-70 ${item.hoverColor} transition-opacity duration-300 flex items-center justify-center`}>
                  <span className="text-white text-lg font-bold px-4 text-center">{item.title}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="0">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Our PG?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-orange-50'}`} data-aos="zoom-in" data-aos-delay="0">
              <div className="text-orange-500 text-3xl font-bold mb-2">24/7</div>
              <div className="font-semibold">Security & Support</div>
            </div>
            <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'}`} data-aos="zoom-in" data-aos-delay="50">
              <div className="text-blue-500 text-3xl font-bold mb-2">100%</div>
              <div className="font-semibold">Power Backup</div>
            </div>
            <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'}`} data-aos="zoom-in" data-aos-delay="100">
              <div className="text-green-500 text-3xl font-bold mb-2">3</div>
              <div className="font-semibold">Meals Daily</div>
            </div>
            <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-purple-50'}`} data-aos="zoom-in" data-aos-delay="150">
              <div className="text-purple-500 text-3xl font-bold mb-2">5 min</div>
              <div className="font-semibold">To Public Transport</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore; 