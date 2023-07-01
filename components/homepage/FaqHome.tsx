import Link from "next/link";
import { FaqAccordion } from "../FaqAccordion";

const FaqHome = () => {
  return (
    <section className="section-py bg-slate-100 px-6">
      <div className="container">
        <div className="flex flex-col">
          <h2 className="h2 font-display font-bold">
            Frequently asked questions
          </h2>
          <p className="mt-3">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our{" "}
            <Link href="/" className="font-semibold underline">
              customer support
            </Link>{" "}
            team.
          </p>

          {/* FAQ */}
          <div className="mt-10">
            <FaqAccordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqHome;
