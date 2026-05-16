"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Modal, ModalTrigger, Surface } from "@heroui/react";
import { Edit, Pencil } from "lucide-react";
import toast from "react-hot-toast";

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

export function EditDestination({ destination }) {
    const {
        _id,
        imageUrl,
        price,
        destinationName,
        duration,
        country,
        description,
        category,
        departure,
    } = destination;

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const destination = Object.fromEntries(formData.entries());
        console.log("Form submitted:", destination);

        const { data: tokenData } = await authClient.token();

        const res = await fetch(`http://localhost:5000/destination/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${tokenData}`
            },
            body: JSON.stringify(destination)
        });
        const data = await res.json();

        toast.success(`You have successfully edit ${destinationName} details`);
    };

    return (
        <Modal>

            <ModalTrigger>
                <button
                    className="inline-flex h-10 items-center gap-2 border border-[#d8d8d8] bg-white px-5 text-sm text-[#333] hover:bg-[#f3f3f3] cursor-pointer"
                >
                    <Pencil size={14} />
                    Edit
                </button>
            </ModalTrigger>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="mx-auto w-full max-w-[1220px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Edit className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Edit Destination</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">

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
                                            id="destinationName"
                                            name="destinationName"
                                            defaultValue={destinationName}
                                            type="text"
                                            placeholder="Bali Paradise"
                                            className="w-full rounded-md border border-slate-200 bg-slate-100 px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 opacity-70"
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
                                                defaultValue={country}
                                                type="text"
                                                placeholder="Indonesia"
                                                className="w-full rounded-md border border-slate-200 bg-slate-100 px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 opacity-70"
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
                                                    defaultValue={category}
                                                    className="w-full appearance-none rounded-md border border-slate-200 bg-slate-100 px-3 py-2.5 pr-10 text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 opacity-70"
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
                                                defaultValue={price}
                                                type="text"
                                                inputMode="decimal"
                                                placeholder="e.g., 1299"
                                                className="w-full rounded-md border border-slate-200 bg-slate-100 px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 opacity-70"
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
                                                defaultValue={duration}
                                                type="text"
                                                placeholder="e.g., 7 Days/6 Nights"
                                                className="w-full rounded-md border border-slate-200 bg-slate-100 px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 opacity-70"
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
                                            defaultValue={departure}
                                            type="text"
                                            placeholder="mm/dd/yyyy"
                                            className="w-full rounded-md border border-slate-200 bg-slate-100 px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 opacity-70"
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
                                            defaultValue={imageUrl}
                                            type="url"
                                            placeholder="https://example.com/image.jpg"
                                            className="w-full rounded-md border border-slate-200 bg-slate-100 px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 opacity-70"
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
                                            defaultValue={description}
                                            rows={5}
                                            placeholder="Describe the travel experience..."
                                            className="w-full resize-y rounded-md border border-slate-200 bg-slate-100 px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 opacity-70"
                                        />
                                    </div>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close">Save</Button>
                                    </Modal.Footer>
                                </form>

                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}