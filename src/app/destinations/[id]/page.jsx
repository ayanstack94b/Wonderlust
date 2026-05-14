
import { EditModal } from '@/components/EditModal';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { FaRegCalendar } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params
    console.log(id);
    const res = await fetch(`http://localhost:5000/destination/${id}`)
    const destination = await res.json()
    const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = destination;

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
           <EditModal destination= {destination}></EditModal>
            <div className="grid md:grid-cols-2 gap-10 items-start">

                {/* Left Side Image */}
                <div className="overflow-hidden rounded-3xl shadow-xl border border-gray-200">
                    <Image
                        src={imageUrl}
                        alt={destinationName}
                        width={1200}
                        height={800}
                        className="w-full h-125 object-cover"
                    />
                </div>

                {/* Right Side Content */}
                <div className="space-y-3">

                    {/* Category */}
                    <div className="inline-block bg-cyan-100 text-cyan-700 text-sm font-semibold px-4 py-2 rounded-full">
                        {category}
                    </div>

                    {/* Title */}
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                            {destinationName}
                        </h1>

                        <div className="flex items-center gap-2 mt-3 text-gray-500">
                            <LuMapPin className="text-lg" />
                            <span>{country}</span>
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-2 gap-4">

                        <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                            <p className="text-sm text-gray-500 mb-1">Duration</p>

                            <div className="flex items-center gap-2 text-gray-800 font-semibold">
                                <FaRegCalendar />
                                <span>{duration}</span>
                            </div>
                        </div>

                        <div className="bg-black text-white rounded-2xl p-4 shadow-sm">
                            <p className="text-sm text-gray-300 mb-1">Price</p>

                            <h2 className="text-2xl font-bold">
                                ${price}
                            </h2>
                        </div>

                    </div>

                    {/* Departure */}
                    <div className="bg-gray-100 rounded-2xl p-5">
                        <p className="text-sm text-gray-500 mb-2">
                            Departure Date
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800">
                            {departureDate}
                        </h3>
                    </div>

                    {/* Description */}
                    <div className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900">
                            About This Trip
                        </h2>

                        <p className="text-gray-600 leading-8">
                            {description}
                        </p>
                    </div>

                    {/* Button */}
                    <div className="pt-4">
                        <button className="bg-black hover:bg-gray-800 transition-all duration-300 text-white w-full p-1 rounded-2xl font-semibold text-lg">
                            Book Now
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default DestinationDetailsPage;