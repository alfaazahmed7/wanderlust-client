import { Calendar, CheckCircle, Eye, MapPin } from "lucide-react";
import Image from "next/image";
import { BookingCardDeletion } from "./BookingCardDeletion";

export default function MyBookingCard({ booking }) {
    const bookingId = booking._id;
    // console.log(bookingId, 'booking');

    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 mb-8">
            <div className="flex flex-col sm:flex-row items-stretch">
                {/* Destination Image */}
                <div className="relative w-full sm:w-52 h-44 sm:h-auto flex-shrink-0">
                    <Image
                        src={booking.imageUrl}
                        alt={booking.destinationName}
                        fill
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col sm:flex-row items-start sm:items-center justify-between px-5 py-4 gap-4">
                    {/* Info Section */}
                    <div className="flex flex-col gap-2">
                        {/* Confirmed Badge */}
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-0.5 w-fit">
                            <CheckCircle className="w-3.5 h-3.5" />
                            Confirmed
                        </span>

                        {/* Destination Name */}
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                            {booking.destinationName}
                        </h2>

                        {/* Date */}
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span>Departure: {booking.formattetdDate}</span>
                        </div>

                        {/* Booking ID */}
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span>Booking ID: {booking.destinationId?.slice(-4)}</span>
                        </div>

                        {/* Price */}
                        <p className="text-2xl font-bold text-cyan-500 mt-1">
                            ${booking.price}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex sm:flex-col gap-2 sm:w-auto">
                        <BookingCardDeletion
                            booking={booking}
                            bookingId={bookingId}
                        />
                        <button className="flex items-center justify-center gap-1.5 bg-cyan-500 hover:bg-cyan-600 transition-colors text-white rounded-lg px-4 py-2 text-sm font-semibold w-full sm:w-auto">
                            <Eye className="w-4 h-4" />
                            View
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}