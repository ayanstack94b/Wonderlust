import Image from 'next/image';
import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';

const DestinationCard = ({ destination }) => {
    const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = destination;
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">

            <Image
                className="w-full h-64 object-cover"
                height={400}
                width={600}
                alt="destination"
                src={imageUrl}
            />

            <div className="p-5 space-y-4">

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <LuMapPin className="text-lg" />
                    <span>{country}</span>
                </div>

                <div className="flex justify-between items-start gap-4">

                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-gray-800 leading-tight">
                            {destinationName}
                        </h2>

                        <div className="flex items-center gap-2 text-gray-600">
                            <FaRegCalendar className="text-base" />
                            <span>{duration}</span>
                        </div>
                    </div>

                    <div className="bg-black text-white px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap">
                        ${price}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default DestinationCard;