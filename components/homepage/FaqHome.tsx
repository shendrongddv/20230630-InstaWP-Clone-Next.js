import Link from "next/link";

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
          <div className="mt-8 rounded-lg border bg-slate-200 p-6">
            render FAQ
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqHome;
