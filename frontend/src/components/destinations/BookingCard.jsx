'use client'
import Image from "next/image";
import Link from "next/link";
import {
    Pencil,
    Trash2,
    MapPin,
    CalendarDays,
    Star,
    Check,
    ArrowRight,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

const BookingCard = ({ destination }) => {

    const destinationName = destination?.destinationName ?? "";
    const country = destination?.country ?? "";
    const price = destination?.price ?? "";
    const duration = destination?.duration ?? "";
    const departure = destination?.departure ?? "";
    const imageUrl = destination?.imageUrl ?? "";
    const description = destination?.description ?? "";

    const nights =
        duration && !Number.isNaN(Number(duration))
            ? Math.max(Number(duration) - 1, 1)
            : "";

    const todayDate = new Date();
    const formattetdDate = todayDate.toLocaleDateString('en-GB');

    const userData = authClient.useSession();
    const user = userData.data?.user;

    const handleBooking = async () => {
        const bookingData = {
            userId: user.id,
            userImage: user.image,
            userName: user.name,
            destinationId: destination._id,
            destinationName,
            price,
            imageUrl,
            country,
            formattetdDate,
        }

        const { data: tokenData } = await authClient.token();

        const res = await fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(bookingData)
        });
        const data = await res.json();
    }

    return (
        <div>
            {/* Hero Image */}
            <section className="relative mb-6 w-full overflow-hidden border border-[#ececec] bg-white">
                <div className="relative block h-[220px] w-full sm:h-[320px] md:h-[420px] lg:h-[460px] xl:h-[600px]">
                    {imageUrl ? (
                        <Image
                            src={imageUrl}
                            alt={destinationName || "Destination image"}
                            fill
                            priority
                            quality={100}
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw"
                        />
                    ) : null}
                </div>
            </section>

            {/* Content */}
            <section className="grid grid-cols-1 gap-6 border-t border-[#e9e9e9] pt-6 lg:grid-cols-[1fr_320px]">
                {/* Left */}
                <div>
                    <div className="inline-flex items-center gap-2 text-[15px] text-[#666]">
                        <MapPin size={15} />
                        <span>{country}</span>
                    </div>

                    <h1 className="mb-2 text-[36px] font-medium leading-tight text-[#222] md:text-[48px]">
                        {destinationName}
                    </h1>

                    <div className="mb-8 flex flex-wrap items-center gap-3 text-[15px] text-[#555]">
                        <span className="inline-flex items-center gap-1">
                            <Star size={15} className="fill-[#1faa4a] text-[#1faa4a]" />
                            <span className="font-semibold text-[#1b1b1b]">4.9</span>
                            <span>(234 reviews)</span>
                        </span>

                        <span className="inline-flex items-center gap-1">
                            <CalendarDays size={14} />
                            <span>
                                {duration}
                                {duration ? " Days" : ""} {nights ? `/ ${nights} Nights` : ""}
                            </span>
                        </span>
                    </div>

                    <h2 className="mb-2 text-[34px] font-medium text-[#212121]">Overview</h2>
                    <p className="mb-8 max-w-[760px] text-[16px] leading-[1.6] text-[#666]">
                        {description}
                    </p>

                    <h2 className="mb-2 text-[34px] font-medium text-[#212121]">Highlights</h2>
                    <p className="mb-5 max-w-[760px] text-[16px] leading-[1.6] text-[#666]">
                        {description}
                    </p>

                    <div className="grid max-w-[760px] grid-cols-1 gap-y-3 text-[15px] text-[#555] sm:grid-cols-2 sm:gap-x-10">
                        <p className="inline-flex items-start gap-2">
                            <Check size={16} className="mt-[2px] text-[#1faa4a]" />
                            <span>Luxury beachfront accommodation</span>
                        </p>
                        <p className="inline-flex items-start gap-2">
                            <Check size={16} className="mt-[2px] text-[#1faa4a]" />
                            <span>Visit Oia village at sunset</span>
                        </p>
                        <p className="inline-flex items-start gap-2">
                            <Check size={16} className="mt-[2px] text-[#1faa4a]" />
                            <span>Traditional Greek cuisine experience</span>
                        </p>
                        <p className="inline-flex items-start gap-2">
                            <Check size={16} className="mt-[2px] text-[#1faa4a]" />
                            <span>Private caldera cruise</span>
                        </p>
                        <p className="inline-flex items-start gap-2">
                            <Check size={16} className="mt-[2px] text-[#1faa4a]" />
                            <span>Cliffside scenic walk</span>
                        </p>
                    </div>
                </div>

                {/* Right Card */}
                <aside className="h-fit border border-[#e0e0e0] bg-white p-4 shadow-sm">
                    <p className="text-[14px] text-[#888]">Starting from</p>
                    <p className="text-[44px] font-semibold leading-none text-[#20a9d4]">
                        {price ? `$${price}` : ""}
                    </p>
                    <p className="mb-5 mt-1 text-[14px] text-[#999]">per person</p>

                    <div className="mb-5 border border-[#efefef] bg-[#f5f6f7] px-3 py-2 text-[15px] text-[#333]">
                        {formattetdDate}
                    </div>

                    <button
                        onClick={handleBooking}
                        className="mb-4 inline-flex h-11 w-full items-center justify-center gap-2 bg-[#18a8d0] text-[16px] font-medium text-white hover:bg-[#1498bd] cursor-pointer"
                    >
                        Book Now
                        <ArrowRight size={16} />
                    </button>

                    <div className="space-y-2 text-[14px] text-[#666]">
                        <p className="inline-flex items-start gap-2">
                            <Check size={15} className="mt-[2px] text-[#1faa4a]" />
                            <span>Free cancellation up to 7 days</span>
                        </p>
                        <p className="inline-flex items-start gap-2">
                            <Check size={15} className="mt-[2px] text-[#1faa4a]" />
                            <span>Travel insurance included</span>
                        </p>
                        <p className="inline-flex items-start gap-2">
                            <Check size={15} className="mt-[2px] text-[#1faa4a]" />
                            <span>24/7 customer support</span>
                        </p>
                    </div>
                </aside>
            </section>
        </div>
    );
};

export default BookingCard;