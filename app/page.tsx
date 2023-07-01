import BlogSmall from "@/components/homepage/BlogSmall";
import CTA from "@/components/homepage/CTA";
import Clients from "@/components/homepage/Clients";
import FaqHome from "@/components/homepage/FaqHome";
import FeaturesA from "@/components/homepage/FeaturesA";
import Hero from "@/components/homepage/Hero";
import Integrations from "@/components/homepage/Integrations";
import Stats from "@/components/homepage/Stats";
import UserReviews from "@/components/homepage/UserReviews";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <FeaturesA />
      <UserReviews />
      <Integrations />
      <FaqHome />
      <BlogSmall />
      <Stats />
      <CTA />
    </main>
  );
}
