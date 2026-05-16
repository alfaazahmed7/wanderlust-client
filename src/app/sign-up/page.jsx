"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FaRegUser, FaRegEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";

const SignUpPage = () => {
    const [passwordError, setPasswordError] = useState("");
    const handlePasswordChange = (e) => {
        const value = e.target.value;

        if (value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else if (!/[A-Z]/.test(value)) {
            setPasswordError("Password must contain at least one uppercase letter");
        } else if (!/[0-9]/.test(value)) {
            setPasswordError("Password must contain at least one number");
        } else {
            setPasswordError("");
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        console.log(user, 'user');

        const { data, error } = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image,
        });

        console.log(data, error, "data and error");

        if (data) {
            redirect('/');
        }

        if (error) {
            alert('Error signing up: ' + error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google"
        });
    };

    return (
        <div className="min-h-screen bg-[#f3f3f3] flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-serif text-black">
                        Create Account
                    </h1>

                    <p className="text-gray-500 mt-2 text-sm sm:text-base">
                        Start your adventure with Wanderlust
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={onSubmit}
                    className="space-y-5"
                >

                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">
                            Full Name
                        </label>

                        <div className="flex items-center border border-gray-200 bg-[#f7f7f7] px-3 h-11">
                            <FaRegUser className="text-gray-500 text-sm" />

                            <input
                                required
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full bg-transparent outline-none text-sm px-3"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">
                            Email Address
                        </label>

                        <div className="flex items-center border border-gray-200 bg-[#f7f7f7] px-3 h-11">
                            <FaRegEnvelope className="text-gray-500 text-sm" />

                            <input
                                required
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-transparent outline-none text-sm px-3"
                            />
                        </div>
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">
                            Image URL
                        </label>

                        <div className="flex items-center border border-gray-200 bg-[#f7f7f7] px-3 h-11">
                            <FaImage className="text-gray-500 text-sm" />

                            <input
                                required
                                name="image"
                                type="text"
                                placeholder="Enter image URL"
                                className="w-full bg-transparent outline-none text-sm px-3"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">
                            Password
                        </label>

                        <div className="flex items-center border border-gray-200 bg-[#f7f7f7] px-3 h-11">
                            <FaLock className="text-gray-500 text-sm" />

                            <input
                                required
                                name="password"
                                type="password"
                                placeholder="Create a password"
                                onChange={handlePasswordChange}
                                className="w-full bg-transparent outline-none text-sm px-3"
                            />

                            {passwordError && (
                                <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                            )}
                        </div>
                    </div>

                    {/* Create Account Button */}
                    <button
                        type="submit"
                        className="w-full h-11 bg-[#11a9cf] hover:bg-[#0d9bbd] text-white text-sm font-medium transition-all duration-300 cursor-pointer"
                    >
                        Create Account
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-3 my-6">
                    <div className="flex-1 h-[1px] bg-[#e5e5e5]" />

                    <p className="text-sm text-[#7a7a7a]">
                        Or sign up with
                    </p>

                    <div className="flex-1 h-[1px] bg-[#e5e5e5]" />
                </div>

                {/* Google Button */}
                <button
                    onClick={handleGoogleSignIn}
                    className="w-full h-11 border border-gray-200 flex items-center justify-center gap-3 text-sm font-medium hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                >
                    <FaGoogle className="text-[#DB4437]" />
                    Sign Up With Google
                </button>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account?{" "}
                    <span className="text-[#11a9cf] font-medium cursor-pointer hover:underline">
                        Sign In
                    </span>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;