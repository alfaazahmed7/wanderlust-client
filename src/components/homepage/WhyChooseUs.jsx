import { ShieldCheck, Map, Headphones } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Safe & Secure",
        description:
            "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
    },
    {
        icon: Map,
        title: "Expert Guides",
        description:
            "Local experts who bring destinations to life with authentic cultural insights.",
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description:
            "Round-the-clock customer service to assist you wherever your journey takes you.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="w-full bg-cyan-50 py-16 px-4 sm:px-8 mb-14">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-gray-900 mb-3">
                    Why Choose Wanderlust
                </h2>
                <p className="text-gray-500 text-sm sm:text-base">
                    Your trusted partner for exceptional travel experiences
                </p>
            </div>

            {/* Cards Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {features.map(({ icon: Icon, title, description }) => (
                    <div
                        key={title}
                        className="bg-white rounded-xl border border-gray-100 shadow-sm px-7 py-8 flex flex-col gap-4"
                    >
                        <div className="w-10 h-10 text-cyan-500">
                            <Icon className="w-full h-full" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}