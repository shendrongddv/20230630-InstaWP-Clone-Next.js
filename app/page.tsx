import BlogSmall from "@/components/homepage/BlogSmall";
import CallToActionA from "@/components/homepage/CallToActionA";
import CallToActionB from "@/components/homepage/CallToActionB";
import Clients from "@/components/homepage/Clients";
import FaqHome from "@/components/homepage/FaqHome";
import FeaturesA from "@/components/homepage/FeaturesA";
import Hero from "@/components/homepage/Hero";
import Integrations from "@/components/homepage/Integrations";
import MainReview from "@/components/homepage/MainReview";
import Stats from "@/components/homepage/Stats";
import UserReviews from "@/components/homepage/UserReviews";
import WhatWeDo from "@/components/homepage/WhatWeDo";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <FeaturesA />
      <MainReview />
      <WhatWeDo />
      <CallToActionA />
      <UserReviews />
      <Integrations />
      <FaqHome />
      <BlogSmall />
      <Stats />
      <CallToActionB />
    </main>
  );
}
