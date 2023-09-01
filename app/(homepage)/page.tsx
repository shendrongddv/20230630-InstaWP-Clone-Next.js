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

export default function Homepage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 px-4 py-16">
        <div className="container">
          <div className="flex">
            <h2 className="h2">Hero</h2>
          </div>
        </div>
      </section>
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
        <div className="mx-auto w-full rounded-xl border bg-slate-50 px-2 pb-2 md:w-auto md:rounded-3xl md:px-8 md:pb-8">
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
      <section className="bg-slate-50 px-4 py-16">
        <div className="container">
          <div className="flex">
            <h2 className="h2">Highlight Review</h2>
          </div>
        </div>
      </section>
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

              <p className="mt-2">
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
                Get started for free
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
      <section className="py-16 md:px-4">
        <div className="container">
          <div className="flex flex-col items-center gap-8">
            {/* Col */}
            <div className="flex flex-col items-center gap-2 text-center max-md:px-4">
              <h2 className="h2 text-gradient font-display font-extrabold">
                Words of Our Customers
              </h2>
            </div>

            {/* Col */}
            <div className="w-full border bg-[url(/background-circle.svg)] bg-contain bg-center bg-no-repeat max-md:p-4"></div>

            {/* Col */}
            <div className="max-md:w-full max-md:px-4">
              <Link
                href="/"
                aria-label="View More"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className:
                      "w-full font-semibold hover:no-underline md:w-max md:px-6",
                  }),
                )}
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>
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
      <section className="bg-slate-50 px-4 py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-8">
            {/* Col */}
            <div className="flex flex-col gap-2 md:text-center">
              <h2 className="h2 text-gradient font-display font-extrabold">
                Frequently Asked Questions
              </h2>
              <p>
                Can&apos;t find the answer you&apos;re looking for? Reach out to
                our&nbsp;
                <Link
                  href="/"
                  aria-label="Customer Support"
                  className="font-semibold underline decoration-dotted underline-offset-4"
                >
                  customer support
                </Link>{" "}
                &nbsp;team.
              </p>
            </div>

            {/* Col */}
            <div className="border bg-slate-50 p-4">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptas facere quae vel, quisquam quis aperiam incidunt fuga
                suscipit veritatis neque iusto doloribus eos culpa?
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ./ FAQ */}

      {/* Blogs */}
      <section className="px-4 py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-8">
            {/* Col */}
            <div className="flex flex-col items-center gap-2 text-center">
              <h2 className="h2 text-gradient font-display font-extrabold">
                Blogs
              </h2>
            </div>

            {/* Col */}
            <div className="border bg-slate-50 p-4">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptas facere quae vel, quisquam quis aperiam incidunt fuga
                suscipit veritatis neque iusto doloribus eos culpa?
              </p>
            </div>
          </div>
        </div>
      </section>
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
