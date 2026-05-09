import Banner from "@/components/shared/Banner";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (

    <div>
      <div className="relative">
        <div className="absolute inset-x-0 top-0 z-50">
          <Navbar />
        </div>
        <Banner />
      </div>
      <Footer />
    </div>

  );
}
