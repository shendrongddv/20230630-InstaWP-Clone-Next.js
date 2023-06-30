import CTA from "@/components/homepage/CTA";
import Clients from "@/components/homepage/Clients";
import FeaturesA from "@/components/homepage/FeaturesA";
import Hero from "@/components/homepage/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <FeaturesA />
      <CTA />
    </main>
  );
}
