"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button, ModalTrigger } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export function DeleteDestination({ destination }) {

    const handleDestinationDelete = async () => {
        const { data: tokenData } = await authClient.token();
        console.log(tokenData, 't');

        const res = await fetch(`http://localhost:5000/destination/${destination._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${tokenData.token}`
            }
        });

        const data = await res.json();
        toast.success(`You have successfully delated ${destination.destinationName}`);
        redirect('/destinations');
    }

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