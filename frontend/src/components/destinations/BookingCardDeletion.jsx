"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button, ModalTrigger } from "@heroui/react";
import { Trash2 } from "lucide-react";

export function BookingCardDeletion({ bookingId }) {

    const handleCancelBooking = async () => {
        try {
            const { data } = await authClient.token();
            const accessToken = data?.token;
            const res = await fetch(`http://localhost:5000/bookings/${bookingId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`
                }
            });
            if (!res.ok) {
                throw new Error('Failed to cancel booking');
            }
            const result = await res.json();
            window.location.reload();
        }

        catch (error) {
            console.error(error);
        }
    };

    return (
        <AlertDialog>

            <ModalTrigger>
                <button className="flex items-center justify-center gap-1.5 border border-red-400 text-red-500 hover:bg-red-50 transition-colors rounded-lg px-4 py-2 text-sm font-semibold w-full sm:w-auto cursor-pointer">
                    <Trash2 className="w-4 h-4" />
                    Cancel
                </button>
            </ModalTrigger>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Cancel project permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently cancel <strong>booking</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button
                                onClick={handleCancelBooking}
                                slot="close"
                                variant="danger"
                            >
                                Cancel Booking
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}