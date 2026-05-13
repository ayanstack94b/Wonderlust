import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationPage = async () => {

    const res = await fetch('http://localhost:5000/destination')
    const destinations = await res.json()
    console.log('All destinantions data', destinations);


    return (
        <div className='container mx-auto'>
            <h1 className="text-4xl font-bold">All Destinations</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
                {
                    destinations.map((destination) => <DestinationCard key={destination._id} destination={destination}></DestinationCard>)
                }
            </div>

        </div>
    );
};

export default DestinationPage;