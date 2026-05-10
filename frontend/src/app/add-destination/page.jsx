'use client';
import Link from "next/link";

/** Small icons so you don't need extra packages */
function TrashIcon() {
    return (
        <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
        </svg>
    );
}

function SaveIcon() {
    return (
        <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
            />
        </svg>
    );
}

function ChevronIcon() {
    return (
        <svg
            className="h-4 w-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
            />
        </svg>
    );
}

export default function AddDestinationPage() {
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log("Form submitted:", data);
    }

    return (
        <div className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
            <div className="mx-auto max-w-3xl">
                {/* Page title — large, elegant */}
                <h1 className="mb-8 font-serif text-3xl font-normal tracking-tight text-slate-900 sm:text-4xl md:mb-10">
                    Add New Travel Package
                </h1>

                {/* White card */}
                <div className="rounded-xl bg-white p-6 shadow-md sm:p-8 md:p-10">
                    <form
                        onSubmit={onSubmit}
                        className="space-y-6" action="#" method="post"
                    >
                        {/* Destination — full width */}
                        <div>
                            <label
                                htmlFor="destination"
                                className="mb-1.5 block text-sm font-bold text-slate-700"
                            >
                                Destination Name
                            </label>
                            <input
                                id="destination"
                                name="destination"
                                type="text"
                                placeholder="Bali Paradise"
                                className="w-full rounded-md border border-slate-200 bg-slate-100 px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                            />
                        </div>

                        {/* Country + Category — 2 cols on md+, 1 col on small screens */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                            <div>
                                <label
                                    htmlFor="country"
                                    className="mb-1.5 block text-sm font-bold text-slate-700"
                                >
                                    Country
                                </label>
                                <input
                                    id="country"
                                    name="country"
                                    type="text"
                                    placeholder="Indonesia"
                                    className="w-full rounded-md border border-slate-200 bg-slate-100 px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="category"
                                    className="mb-1.5 block text-sm font-bold text-slate-700"
                                >
                                    Category
                                </label>
                                <div className="relative">
                                    <select
                                        id="category"
                                        name="category"
                                        defaultValue=""
                                        className="w-full appearance-none rounded-md border border-slate-200 bg-slate-100 px-3 py-2.5 pr-10 text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                    >
                                        <option value="" disabled>
                                            Beach
                                        </option>
                                        <option value="beach">Beach</option>
                                        <option value="mountain">Mountain</option>
                                        <option value="city">City</option>
                                    </select>
                                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                                        <ChevronIcon />
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Price + Duration */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                            <div>
                                <label
                                    htmlFor="price"
                                    className="mb-1.5 block text-sm font-bold text-slate-700"
                                >
                                    Price (USD)
                                </label>
                                <input
                                    id="price"
                                    name="price"
                                    type="text"
                                    inputMode="decimal"
                                    placeholder="e.g., 1299"
                                    className="w-full rounded-md border border-slate-200 bg-slate-100 px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="duration"
                                    className="mb-1.5 block text-sm font-bold text-slate-700"
                                >
                                    Duration
                                </label>
                                <input
                                    id="duration"
                                    name="duration"
                                    type="text"
                                    placeholder="e.g., 7 Days/6 Nights"
                                    className="w-full rounded-md border border-slate-200 bg-slate-100 px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                />
                            </div>
                        </div>

                        {/* Departure date — full width */}
                        <div>
                            <label
                                htmlFor="departure"
                                className="mb-1.5 block text-sm font-bold text-slate-700"
                            >
                                Departure Date
                            </label>
                            <input
                                id="departure"
                                name="departure"
                                type="text"
                                placeholder="mm/dd/yyyy"
                                className="w-full rounded-md border border-slate-200 bg-slate-100 px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                            />
                        </div>

                        {/* Image URL — full width */}
                        <div>
                            <label
                                htmlFor="imageUrl"
                                className="mb-1.5 block text-sm font-bold text-slate-700"
                            >
                                Image URL
                            </label>
                            <input
                                id="imageUrl"
                                name="imageUrl"
                                type="url"
                                placeholder="https://example.com/image.jpg"
                                className="w-full rounded-md border border-slate-200 bg-slate-100 px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                            />
                        </div>

                        {/* Description — full width */}
                        <div>
                            <label
                                htmlFor="description"
                                className="mb-1.5 block text-sm font-bold text-slate-700"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                rows={5}
                                placeholder="Describe the travel experience..."
                                className="w-full resize-y rounded-md border border-slate-200 bg-slate-100 px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                            />
                        </div>

                        {/* Buttons — bottom right; stack on very small screens */}
                        <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end sm:pt-4">
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center gap-2 rounded-md border border-red-500 bg-white px-4 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50 sm:inline-flex"
                            >
                                <TrashIcon />
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-cyan-600"
                            >
                                <SaveIcon />
                                Add Travel Package
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}