import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const RoomCard = ({ image, heading, twinPrice, soloPrice, description,gender,link}) => {

  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      {/* <img
        className="w-full h-48 object-cover"
        src={image}
        alt="Room"
      /> */}
       <div className="relative">
        <img
          loading='lazy'
          className="w-full h-48 object-cover"
          src={image}
          alt="Room"
        />
        {/* Tag */}
        <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded">
          {gender}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{heading}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex items-center gap-2 mt-4">
          <FaMapMarkerAlt className="text-orange-500" />
          <span className="text-gray-700 text-sm">Gurgaon</span>
        </div>

        {/* Pricing Section */}
        <div className="mt-4 space-y-2">
          {/* Twin Sharing Price */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Twin Sharing Starting @</p>
            <p className="text-lg font-bold text-orange-500">₹{twinPrice}</p>
          </div>
          {/* Solo Room Price */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Solo Room Starting @</p>
            <p className="text-lg font-bold text-orange-500">₹{soloPrice}</p>
          </div>
        </div>

        {/* Action Button */}
        {/* <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-all duration-200">
          Explore
        </button> */}
        <a
          href={link}
          className="block mt-4 w-full bg-orange-500 text-white py-2 text-center rounded-md hover:bg-orange-600 transition-all duration-200"
        >
          Explore
        </a>
      </div>
    </div>
  );
};

export default RoomCard;
