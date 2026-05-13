import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between gap-5  px-10 py-5 sticky top-0 bg-white'>

            {/* navlinks */}
            <ul className='flex justify-center items-center gap-5'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/destinations'}>Destinations</Link></li>
                <li><Link href={'/my-bookings'}>My-Bookings</Link></li>
                <li><Link href={'/add-destinantion'}>Add-Destination</Link></li>
            </ul>

            {/* nav logo */}

            <div className="">
                <Image className="w-32 h-auto" alt='logo' height={150} width={150} src={'/assets/Wanderlast.png'}></Image>
            </div>

            {/* navlinks */}

            <ul className='flex justify-center items-center gap-5'>
                <li><Link href={'/profile'}>Profile</Link></li>
                <li><Link href={'/login'}>Login</Link></li>
                <li><Link href={'/signup'}>Signup</Link></li>
            </ul>

        </nav>
    );
};

export default Navbar;