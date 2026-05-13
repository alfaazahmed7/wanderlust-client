import MyBookingCard from '@/components/destinations/MyBookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const user = session?.user;

    const res = await fetch(`http://localhost:5000/bookings/${user?.id}`);
    const bookings = await res.json();

    return (
        <div className='w-10/12 mx-auto py-20'>
            <div className='mb-8'>
                <h2 className='text-5xl font-semibold mb-3'>My booking</h2>
                <p className='opacity-70'>Manage and view your upcoming travel plans</p>
            </div>

            <div>
                {
                    bookings.map((booking) => (
                        <MyBookingCard
                            key={booking._id}
                            booking={booking}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default MyBookingPage;