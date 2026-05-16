import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="relative w-full min-h-[280px] sm:min-h-[320px] flex items-center justify-center px-4 py-16"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/d4XwnWbp/CTA.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white leading-tight">
          Ready To Start Your Journey?
        </h2>
        <p className="text-white/80 text-sm sm:text-base max-w-md">
          Join thousands of travelers who have discovered the world with us
        </p>
        <button className="mt-2 flex items-center gap-3 bg-white text-gray-900 text-xs sm:text-sm font-semibold tracking-widest uppercase px-7 py-3.5 hover:bg-gray-100 transition-colors">
          Book Your Trip Today
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}