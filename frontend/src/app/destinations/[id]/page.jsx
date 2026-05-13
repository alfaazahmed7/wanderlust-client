import Link from "next/link";
import { ArrowLeft, } from "lucide-react";
import { EditDestination } from "@/components/destinations/EditDestination";
import { DeleteDestination } from "@/components/destinations/DeleteDestination";
import BookingCard from "@/components/destinations/BookingCard";

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;

    let destination = {};
    try {
        const res = await fetch(`http://localhost:5000/destination/${id}`);

        if (res.ok) {
            destination = await res.json();
        }
    } catch (error) {
        // Keep destination empty if request fails
        destination = {};
    }

    return (
        <main className="min-h-screen bg-[#f8f8f8] px-4 py-5 md:px-8 lg:px-10">
            <div className="mx-auto w-full max-w-[1220px]">
                {/* Top bar */}
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                        href="/destinations"
                        className="inline-flex items-center gap-2 text-sm text-[#6b6b6b] hover:text-black"
                    >
                        <ArrowLeft size={16} />
                        <span>Back to Destinations</span>
                    </Link>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                        <EditDestination destination={destination} />
                        <DeleteDestination destination={destination} />
                    </div>
                </div>

                <BookingCard destination={destination} />
            </div>
        </main>
    );
};

export default DestinationDetailsPage;