import DestinationCard from "@/components/destinations/DestinationCard";


const DestinationPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
    const destinations = await res.json()

    return (
        <div className="w-10/12 xl:w-9/12 mx-auto mt-28 mb-20">
            <div>
                <h1 className="text-5xl font-semibold mb-2">Explore All Destinations</h1>
                <p className="text-xl text-[#6C696D] mb-5">Find your perfect travel experience from our curated collection</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    destinations.map((destination) => (
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

export default DestinationPage;