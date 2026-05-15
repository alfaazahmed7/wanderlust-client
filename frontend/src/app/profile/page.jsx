"use client";

import { authClient } from "@/lib/auth-client";
import {
    MapPin,
    Pencil,
    Plane,
    Globe,
    TrendingUp,
    DollarSign,
} from "lucide-react";

const stats = [
    {
        label: "Total Bookings",
        value: 12,
        icon: Plane,
        iconBg: "bg-cyan-100",
        iconColor: "text-cyan-500",
    },
    {
        label: "Countries Visited",
        value: 18,
        icon: Globe,
        iconBg: "bg-green-100",
        iconColor: "text-green-500",
    },
    {
        label: "Upcoming Trips",
        value: 2,
        icon: TrendingUp,
        iconBg: "bg-orange-100",
        iconColor: "text-orange-500",
    },
    {
        label: "Total Spent",
        value: "$15,750",
        icon: DollarSign,
        iconBg: "bg-pink-100",
        iconColor: "text-pink-500",
    },
];

export default function MyProfile() {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    return (
        <div className="bg-[#f5f5f5] py-10 px-4">
            <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-5xl font-semibold text-black">
                        My Profile
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage your account settings and travel preferences
                    </p>
                </div>

                {/* Main Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">

                    {/* LEFT CARD */}
                    <div className="bg-white border border-gray-200 shadow-sm p-5 h-fit">

                        {/* Avatar */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <img
                                    src={user?.image}
                                    alt="profile"
                                    className="w-28 h-28 rounded-full object-cover"
                                />

                                <div className="absolute bottom-0 right-0 w-9 h-9 rounded-full bg-cyan-500 border-4 border-white flex items-center justify-center">
                                    <Pencil className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Name */}
                        <div className="text-center mt-5">
                            <h2 className="text-2xl font-medium text-black">
                                {user?.name}
                            </h2>

                            <div className="flex items-center justify-center gap-1 text-gray-500 text-sm mt-2">
                                <MapPin className="w-4 h-4" />
                                <span>San Francisco, CA</span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-200 my-6" />

                        {/* Info */}
                        <div className="space-y-5">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Member since</span>
                                <span className="font-semibold">Mar 2024</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">Nationality</span>
                                <span className="font-semibold">United States</span>
                            </div>
                        </div>

                        {/* Button */}
                        <button className="mt-8 w-full h-11 bg-cyan-500 hover:bg-cyan-600 text-white font-medium flex items-center justify-center gap-2 cursor-pointer">
                            <Pencil className="w-4 h-4" />
                            Edit Profile
                        </button>
                    </div>

                    {/* RIGHT SIDE */}
                    <div>
                        <h3 className="text-2xl font-medium mb-5">
                            Travel Statistics
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {stats.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.label}
                                        className="bg-white border border-gray-200 p-6 flex items-center justify-between"
                                    >
                                        <div>
                                            <p className="text-gray-500 mb-2">
                                                {item.label}
                                            </p>

                                            <h4 className="text-4xl font-light">
                                                {item.value}
                                            </h4>
                                        </div>

                                        <div
                                            className={`w-14 h-14 rounded-full flex items-center justify-center ${item.iconBg}`}
                                        >
                                            <Icon className={`w-6 h-6 ${item.iconColor}`} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}