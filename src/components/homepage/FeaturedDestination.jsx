import DestinationCard from "@/components/destinations/DestinationCard";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";


const FeaturedDestination = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
    const data = await res.json()
    const featuredDestinations = data.slice(0, 3);

    return (
        <div className="w-10/12 xl:w-9/12 mx-auto mt-28 mb-20">
            <div className="md:flex mb-4 md:mb-0 justify-between items-center ">
                <div>
                    <h1 className="text-4xl lg:text-5xl font-semibold mb-2">Featured Destinations</h1>
                    <p className="text-base text-[#6C696D] mb-5">Handpicked travel experiences for the adventure seekers</p>
                </div>
                <div className="bg-transparent px-3 py-2 border border-[#15A1BF] text-[#15A1BF] max-w-[200px]">
                    <Link href={'/destinations'}>
                        <button className="flex items-center gap-1 cursor-pointer justify-center">
                            All Destinations
                            <FaLongArrowAltRight />
                        </button>
                    </Link>
                </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    featuredDestinations.map((destination) => (
                        <DestinationCard
                            key={destination._id}
                            destination={destination}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default FeaturedDestination;