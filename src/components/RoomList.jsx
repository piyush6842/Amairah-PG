import React from 'react';
import RoomCard from './RoomCard'; // Adjust the path as per your project
import roomImage1 from "../images/RoomImage2.webp";
import roomImage2 from "../images/RoomImage2.webp";

const RoomList = () => {
  const rooms = [
    {
      id: 1,
      image: roomImage1,
      heading: 'The Safehouse PG',
      twinPrice: 14000,
      soloPrice: 29000,
      description: 'Located near DLF Phase 1 Metro Station, offering amenities for a comfort stay.',
      gender: 'GIRLS PG',
      link: '/explore-girls-pg'
    },
    {
      id: 2,
      image: roomImage2,
      heading: 'Amairah PG',
      twinPrice: 12000,
      soloPrice: 25000,
      description: 'Stylish PG in Gurgaon with excellent connectivity and spacious rooms.',
      gender: 'GIRLS PG',
      link: '/explore-girls-pg'
    },
    {
      id: 3,
      image: roomImage1,
      heading: 'Urban Stay PG',
      twinPrice: 15000,
      soloPrice: 30000,
      description: 'A premium PG option with twin and solo sharing rooms in a prime Gurgaon location.',
      gender: 'GIRLS PG',
      link: '/explore-girls-pg'
    },
    {
      id: 4,
      image: roomImage2,
      heading: 'Luxury Nest PG',
      twinPrice: 13000,
      soloPrice: 27000,
      description: 'Experience luxurious living with fully furnished rooms and top-notch facilities.',
      gender: 'CO-LIVING PG',
      link: '/explore-coliving-pg'
    },
  ];

  return (
    <div className='mt-12'>
        <div className=''>
            <h2 className='text-center text-xl text-orange-500 font-sans tracking-wide my-2'>
              Across the Street From the Ordinary
            </h2>
            <h1 className='text-black font-serif text-5xl text-center tracking-wide my-2'>
              Our Living Rooms
            </h1>
          </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          image={room.image}
          heading={room.heading} // Pass the unique heading
          twinPrice={room.twinPrice}
          soloPrice={room.soloPrice}
          description={room.description}
          gender={room.gender}
          link = {room.link}
        />
      ))}
    </div>
    </div>
  );
};

export default RoomList;
