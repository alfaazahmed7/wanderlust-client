import MyBookingCard from '@/components/destinations/MyBookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { FiMapPin, FiCompass } from "react-icons/fi";

const MyBookingPage = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const user = session?.user;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const bookings = await res.json();

    return (
        <div className='w-10/12 mx-auto py-20'>
            <div className='mb-8'>
                <h2 className='text-5xl font-semibold mb-3'>My booking</h2>
                <p className='opacity-70'>Manage and view your upcoming travel plans</p>
            </div>

            <div>
                {
                    !bookings || bookings.length === 0 ? (
                        <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-12 flex flex-col items-center justify-center text-center shadow-sm">

                            {/* Icon */}
                            <div className="w-16 h-16 rounded-full bg-cyan-50 flex items-center justify-center mb-5">
                                <FiCompass className="text-cyan-600 text-3xl" />
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl font-bold text-gray-900">
                                No Bookings Yet
                            </h2>

                            {/* Description */}
                            <p className="text-sm text-gray-500 mt-2 max-w-md leading-relaxed">
                                You haven’t made any bookings yet. Discover amazing destinations and start planning your next adventure.
                            </p>

                            {/* Sub hint (optional) */}
                            <div className="flex items-center gap-2 mt-4 text-xs text-gray-400">
                                <FiMapPin />
                                <span>Explore destinations to get started</span>
                            </div>

                            {/* Optional CTA button */}
                            <Link href={'/destinations'}>
                                <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 transition text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-sm cursor-pointer">
                                    Explore Destinations
                                </button>
                            </Link>
                        </div>
                    ) : (
                        bookings.map((booking) => (
                            <MyBookingCard
                                key={booking._id}
                                booking={booking}
                            />
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default MyBookingPage;