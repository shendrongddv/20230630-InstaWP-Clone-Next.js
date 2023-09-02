import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Components
import { CounterStats } from "@/components/site-counter";
import { TryNow } from "@/components/try-now";
import { ProductFeatures } from "@/components/product-features";
import { CardAwwards } from "@/components/card-awwards";

// Images
import iconA from "../../public/icons/icon-1.svg";
import iconB from "../../public/icons/icon-2.svg";
import iconC from "../../public/icons/icon-3.svg";
import imgClients from "../../public/clients.png";
import ImgTryToday from "../../public/try-today.svg";
import ImgIntegrations from "../../public/integration.png";
import { CardFeatures } from "@/components/card-features";
import { ReviewHighlight } from "@/components/review-highlight";
import { HomepageHero } from "@/components/homepage-hero";
import { ReviewUsers } from "@/components/review-users";
import { HomepageBlogs } from "@/components/homepage-blogs";
import { HomepageFAQs } from "@/components/homepage-faqs";

export default function Homepage() {
  return (
    <>
      {/* Hero */}
      <HomepageHero />
      {/* ./ Hero */}

      {/* Awward */}
      <section className="max-md:p-1 md:px-4 md:pt-16">
        <div className="container">
          {/* CardAwwards */}
          <CardAwwards />
        </div>
      </section>
      {/* ./ Awward */}

      {/* Clients */}
      <section className="px-4 py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-center font-display font-semibold text-muted-foreground">
              Already helping these companies build even faster
            </h4>

            <div className="w-full md:w-4/5">
              <Image src={imgClients} alt="Clients" className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>
      {/* ./ Clients */}

      {/* Features */}
      <section className="px-1 py-16 md:px-4">
        <div className="mx-auto w-auto rounded-xl border bg-slate-50 px-2 pb-2 sm:w-auto md:w-auto md:rounded-3xl md:px-8 md:pb-8">
          <div className="container flex flex-col">
            <h2
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "sm",
                  className:
                    "w-max -translate-y-1/2 font-display font-semibold max-md:mx-2",
                }),
              )}
            >
              Must Have for Every WordPress Professional
            </h2>

            {/* CardFeatures */}
            <CardFeatures />
          </div>
        </div>
      </section>
      {/* ./ Features */}

      {/* Highlight Review */}
      <ReviewHighlight />
      {/* ./ Highlight Review */}

      {/* Product Features */}
      <section className="px-4 py-16">
        <div className="container">
          <ProductFeatures />
        </div>
      </section>
      {/* ./ Product Features */}

      {/* Try Now */}
      <section className="bg-slate-50 px-4">
        <div className="container">
          <div className="flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between">
            {/* Col */}
            <div className="w-full max-md:pb-16 md:w-5/12 md:py-16">
              <h2 className="h2 text-gradient font-display font-extrabold">
                Try InstaWP Today!
              </h2>

              <p className="mt-2 font-medium">
                Without even creating an account - so you can get a feel for how
                it works and whether it&apos;s the right fit for you
              </p>

              <Separator className="my-6" />

              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <Image src={iconA} alt="Image" className="h-5 w-5" />
                  Free Forever Account
                </li>
                <li className="flex items-center gap-2">
                  <Image src={iconB} alt="Image" className="h-5 w-5" />
                  No credit cards required
                </li>
                <li className="flex items-center gap-2">
                  <Image src={iconC} alt="Image" className="h-5 w-5" />
                  No setup or servers required
                </li>
              </ul>

              <Link
                href="/"
                aria-label="Get started for free"
                className={cn(
                  buttonVariants({
                    variant: "link",
                    size: "lg",
                    className:
                      "mt-8 w-full bg-gradient-to-br from-[#18B287] to-[#005E54] px-6 font-semibold text-white hover:no-underline md:w-max",
                  }),
                )}
              >
                Get Started for Free
              </Link>
            </div>

            {/* Col */}
            <div className="w-full md:w-5/12">
              <Image
                src={ImgTryToday}
                alt="Try InstaWP Today!"
                className="mx-auto h-auto w-3/4 md:w-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ./ Try Now */}

      {/* Reviews */}
      <ReviewUsers />
      {/* ./ Reviews */}

      {/* Integrations */}
      <section className="px-4 py-16">
        <div className="container">
          <div className="flex flex-col md:relative">
            {/* Col */}
            <div className="flex flex-col gap-2 md:absolute md:top-0 md:z-10">
              <h2 className="h2 text-gradient font-display font-extrabold">
                Integrations
              </h2>
              <p>
                We have covered the well known and most popular integrations out
                there
              </p>
            </div>

            {/* Col */}
            <div>
              <Image
                src={ImgIntegrations}
                alt="Integrations"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ./ Integrations */}

      {/* FAQ */}
      <HomepageFAQs />
      {/* ./ FAQ */}

      {/* Blogs */}
      <HomepageBlogs />
      {/* ./ Blogs */}

      {/* Counter Stats */}
      <section className="px-4 py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-8">
            {/* Col */}
            <div className="flex flex-col items-center gap-2 text-center">
              <h2 className="h2 text-gradient font-display font-extrabold">
                Join WordPressers from 100+ countries
              </h2>
              <p>We are growing by leaps and bounds every single day.</p>
            </div>

            {/* Col */}
            <CounterStats />
          </div>
        </div>
      </section>
      {/* ./ Counter Stats */}

      {/* TryNow */}
      <TryNow />
      {/* ./TryNow */}
    </>
  );
}
