import Image from "next/image";
import {
    MapPin,
    CalendarDays,
    Star,
    ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const DestinationCard = ({ destination }) => {
    // Calculate nights from total days
    const nights = Number(destination.duration) - 1;

    return (
        <div className="w-full bg-white">
            {/* Image Section */}
            <div className="relative w-full h-[250px] xl:h-[300px]">
                <Image
                    src={destination.imageUrl}
                    alt={destination.destinationName}
                    fill
                    className="w-full object-cover"
                />

                {/* Rating Badge */}
                <div className="absolute top-5 right-5 flex items-center gap-2 bg-white/90 px-5 py-3 shadow-md">
                    <span className="text-2xl font-semibold">4.5</span>

                    <Star className="w-5 h-5 fill-black text-black" />
                </div>
            </div>

            {/* Content */}
            <div className="pt-5">
                {/* Country */}
                <div className="flex items-center gap-1 text-gray-500">
                    <MapPin className="w-4 h-4" />

                    <p className="text-xl">{destination.country}</p>
                </div>

                {/* Destination + Price */}
                <div className="flex justify-between items-end mb-2">
                    <h2 className="text-3xl font-semibold text-black">
                        {destination.destinationName}
                    </h2>

                    <div>
                        <span className="text-2xl font-medium text-black">
                            ${destination.price}
                        </span>

                        <span className="text-xl text-gray-500">
                            /Person
                        </span>
                    </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-gray-500 mb-3">
                    <CalendarDays className="w-5 h-5" />

                    <p className="text-xl">
                        {destination.duration} Days/{nights} Nights
                    </p>
                </div>

                {/* Button */}
                <Link href={`/destinations/${destination._id}`}>
                    <button className="flex items-center gap-3 text-sky-500 uppercase text-2xl font-medium hover:text-sky-600 transition cursor-pointer">
                        <span className="border-b border-sky-500 leading-none">
                            Book Now
                        </span>

                        <ArrowUpRight className="w-5 h-5" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default DestinationCard;