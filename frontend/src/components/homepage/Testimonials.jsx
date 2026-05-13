"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        quote:
            '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
        name: "Michael Chen",
        location: "Singapore",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face",
    },
    {
        quote:
            '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
        name: "Sarah Johnson",
        location: "New York, USA",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=face",
    },
    {
        quote:
            '"The Santorini package was a dream come true. Seamless booking, stunning views, and the local food tours were absolutely incredible. Will book again!"',
        name: "Priya Nair",
        location: "Mumbai, India",
        image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop&crop=face",
    },
    {
        quote:
            '"Our Tokyo adventure was perfectly curated. Every hotel, every experience felt hand-picked. Wanderlust truly understands what travelers need."',
        name: "James Walker",
        location: "London, UK",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    },
];

export default function Testimonials() {
    const [page, setPage] = useState(0);

    // Show 2 cards at a time
    const total = Math.ceil(testimonials.length / 2);
    const visible = testimonials.slice(page * 2, page * 2 + 2);

    const prev = () => setPage((p) => (p - 1 + total) % total);
    const next = () => setPage((p) => (p + 1) % total);

    return (
        <section className="w-full bg-white py-16 px-4 sm:px-10 mb-14">
            <div className="max-w-5xl mx-auto">
                {/* Header Row */}
                <div className="flex items-start justify-between mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-gray-900 mb-2">
                            What Travelers Say
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Real experiences from our happy travelers
                        </p>
                    </div>

                    {/* Nav Buttons */}
                    <div className="flex items-center gap-2 mt-1 flex-shrink-0">
                        <button
                            onClick={prev}
                            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={next}
                            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {visible.map(({ quote, name, location, image }) => (
                        <div
                            key={name}
                            className="border border-gray-200 rounded-xl overflow-hidden flex flex-col sm:flex-row"
                        >
                            {/* Text */}
                            <div className="flex flex-col justify-between p-6 flex-1 gap-6">
                                <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
                                    {quote}
                                </p>
                                <div>
                                    <p className="text-cyan-500 font-medium text-sm">— {name}</p>
                                    <p className="text-gray-400 text-xs mt-0.5">{location}</p>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="w-full sm:w-36 h-48 sm:h-auto flex-shrink-0">
                                <img
                                    src={image}
                                    alt={name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}