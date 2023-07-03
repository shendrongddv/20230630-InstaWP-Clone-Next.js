"use client";

import CountUp from "react-countup";

const Stats = () => {
  return (
    <section id="stats-counter" className="section-pb px-6">
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="h2 text-center font-display font-bold text-primary">
            Join Wordpressers from 100+ Countries
          </h2>
          <p className="mt-3 text-center">
            We are growing by leaps and bounds every. single. day.
          </p>

          {/* # */}
          <div className="mt-8 w-full md:w-4/5">
            <div className="grid gap-4 sm:grid-cols-3">
              {/* Col */}
              <div className="flex flex-col items-center rounded-lg bg-slate-100 p-6 text-center">
                <h3 className="font-display text-3xl font-bold">
                  <CountUp end={99} suffix="%" enableScrollSpy />
                </h3>
                <span className="font-semibold opacity-75">Uptime</span>
              </div>
              {/* Col */}
              <div className="flex flex-col items-center rounded-lg bg-slate-100 p-6 text-center">
                <h3 className="font-display text-3xl font-bold">
                  <CountUp end={2000} suffix="+" enableScrollSpy />
                </h3>
                <span className="font-semibold opacity-75">Sites / day</span>
              </div>
              {/* Col */}
              <div className="flex flex-col items-center rounded-lg bg-slate-100 p-6 text-center">
                <h3 className="font-display text-3xl font-bold">
                  <CountUp end={15000} suffix="+" enableScrollSpy />
                </h3>
                <span className="font-semibold opacity-75">Users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
