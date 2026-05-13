import Banner from "@/components/homepage/Banner";
import CTA from "@/components/homepage/CTA";
import FeaturedDestination from "@/components/homepage/FeaturedDestination";
import Testimonials from "@/components/homepage/Testimonials";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedDestination />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </div>
  );
}
