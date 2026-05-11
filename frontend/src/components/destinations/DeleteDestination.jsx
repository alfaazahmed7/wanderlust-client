"use client";

import { AlertDialog, Button, ModalTrigger } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { redirect } from "next/navigation";

export function DeleteDestination({ destination }) {

    const handleDestinationDelete = async () => {
        const res = await fetch(`http://localhost:5000/destination/${destination._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();
        redirect('/destinations');
        console.log(data, 'data');
    }

//     {
//     "destinationName": "Bali",
//     "country": "Indonesia",
//     "category": "Beach",
//     "price": "1099",
//     "duration": "6",
//     "departure": "12/08/2026",
//     "imageUrl": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&h=800",
//     "description": "Experience tropical beaches, lush rice terraces, and vibrant Balinese culture in this island paradise."
//   },

    return (
        <AlertDialog>

            <ModalTrigger>
                <button
                    className="inline-flex h-10 items-center gap-2 border border-[#ff7d7d] bg-white px-5 text-sm text-[#ff3f3f] hover:bg-[#fff5f5]  cursor-pointer"
                >
                    <Trash2 size={14} />
                    Delete
                </button>
            </ModalTrigger>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete destination permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{destination.destinationName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button
                                slot="close"
                                variant="danger"
                                onClick={handleDestinationDelete}
                            >
                                Delete Destination
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}