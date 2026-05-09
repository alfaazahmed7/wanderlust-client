import { Separator } from "@heroui/react";

const Banner = () => {
    return (
        <section className="bg-[url('@/assets/Banner.png')] bg-cover bg-center text-white">
            {/* Overlay for better text readability */}
            <div className="bg-black/35">
                <div className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col justify-between gap-6 px-4 py-8 sm:px-6 sm:py-10 lg:min-h-[85vh] lg:px-10">
                    {/* Top content */}
                    <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center sm:gap-5">
                        <h1 className="text-3xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
                            Discover Your <br className="hidden sm:block" /> Next Adventure
                        </h1>

                        <p className="max-w-3xl text-sm sm:text-lg lg:text-2xl">
                            Explore breathtaking destinations and create unforgettable memories
                            with our curated travel experiences.
                        </p>

                        <div className="mt-2 flex w-full max-w-md flex-col gap-3 sm:mt-4 sm:max-w-none sm:flex-row sm:justify-center sm:gap-5">
                            <button className="w-full cursor-pointer bg-cyan-500 px-5 py-3 text-sm font-medium uppercase transition hover:bg-cyan-600 sm:w-auto">
                                Explore Now
                            </button>

                            <button className="w-full cursor-pointer bg-white/50 px-5 py-3 text-sm font-medium uppercase transition hover:bg-white/60 sm:w-auto">
                                View Destination
                            </button>
                        </div>
                    </div>

                    {/* Bottom search/filter bar */}
                    <div className="w-full rounded-md bg-white/25 p-3 backdrop-blur-sm sm:p-4">
                        {/* Mobile: stacked cards */}
                        <div className="grid grid-cols-1 gap-3 sm:hidden">
                            <div className="rounded bg-white/10 px-3 py-2">
                                <h3 className="text-sm font-medium">Location</h3>
                                <p className="text-xs">Address, City or Zip</p>
                            </div>

                            <div className="rounded bg-white/10 px-3 py-2">
                                <h3 className="text-sm font-medium">Date/Duration</h3>
                                <p className="text-xs">Anytime/3 Days</p>
                            </div>

                            <div className="rounded bg-white/10 px-3 py-2">
                                <h3 className="text-sm font-medium">Budget</h3>
                                <p className="text-xs">$0-$3000</p>
                            </div>

                            <div className="rounded bg-white/10 px-3 py-2">
                                <h3 className="text-sm font-medium">People</h3>
                                <p className="text-xs">5-10</p>
                            </div>

                            <button className="w-full bg-cyan-500 px-4 py-2 text-sm font-medium transition hover:bg-cyan-600">
                                Search
                            </button>
                        </div>

                        {/* Tablet/Desktop: row layout */}
                        <div className="hidden items-center justify-between gap-3 sm:flex lg:gap-5">
                            <div className="min-w-0 px-1 lg:px-3">
                                <h3 className="text-sm font-medium">Location</h3>
                                <p className="truncate text-xs">Address, City or Zip</p>
                            </div>

                            <Separator variant="tertiary" orientation="vertical" className="h-10" />

                            <div className="min-w-0 px-1 lg:px-3">
                                <h3 className="text-sm font-medium">Date/Duration</h3>
                                <p className="truncate text-xs">Anytime/3 Days</p>
                            </div>

                            <Separator variant="tertiary" orientation="vertical" className="h-10" />

                            <div className="min-w-0 px-1 lg:px-3">
                                <h3 className="text-sm font-medium">Budget</h3>
                                <p className="truncate text-xs">$0-$3000</p>
                            </div>

                            <Separator variant="tertiary" orientation="vertical" className="h-10" />

                            <div className="min-w-0 px-1 lg:px-3">
                                <h3 className="text-sm font-medium">People</h3>
                                <p className="truncate text-xs">5-10</p>
                            </div>

                            <button className="shrink-0 bg-cyan-500 px-4 py-2 text-sm font-medium transition hover:bg-cyan-600">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;