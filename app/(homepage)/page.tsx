// Components
import { CounterSiteCreated, CounterStats } from "@/components/site-counter";
import { TryNow } from "@/components/try-now";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
      <section className="px-4 py-16">
        <div className="container">
          <div className="flex">
            <h2 className="h2">Awward</h2>
          </div>
        </div>
      </section>
      {/* ./ Awward */}

      {/* Clients */}
      <section className="px-4 py-16">
        <div className="container">
          <div className="flex">
            <h2 className="h2">Clients</h2>
          </div>
        </div>
      </section>
      {/* ./ Clients */}

      {/* Features */}
      <section className="px-4 py-16">
        <div className="container">
          <div className="flex">
            <h2 className="h2">Features</h2>
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
          <div className="flex">
            <h2 className="h2">Product Features</h2>
          </div>
        </div>
      </section>
      {/* ./ Product Features */}

      {/* Try Now */}
      <section className="bg-slate-50 px-4 py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-4">
            <h2 className="h2 text-gradient font-display font-extrabold">
              Tyr Now
            </h2>
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
      {/* ./ Try Now */}

      {/* Reviews */}
      <section className="px-4 py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-8">
            {/* Col */}
            <div className="flex flex-col items-center gap-2 text-center">
              <h2 className="h2 text-gradient font-display font-extrabold">
                Words of Our Customers
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
      {/* ./ Reviews */}

      {/* Integrations */}
      <section className="px-4 py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-8">
            {/* Col */}
            <div className="flex flex-col items-center gap-2 text-center">
              <h2 className="h2 text-gradient font-display font-extrabold">
                Integrations
              </h2>
              <p>
                We have covered the well known and most popular integrations out
                there
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
      {/* ./ Integrations */}

      {/* FAQ */}
      <section className="bg-slate-50 px-4 py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-8">
            {/* Col */}
            <div className="flex flex-col items-center gap-2 text-center">
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
