import Link from "next/link";
import { FaqAccordion } from "../FaqAccordion";

const FaqHome = () => {
  return (
    <section className="section-py bg-gray-100 px-6">
      <div className="container">
        <div className="flex flex-col">
          <h2 className="h2 font-display font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-4">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our{" "}
            <Link href="/" className="font-semibold text-primary underline">
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
