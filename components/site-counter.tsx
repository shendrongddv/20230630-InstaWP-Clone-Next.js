"use client";

import CountUp from "react-countup";

export const CounterSiteCreated = () => {
  return (
    <div className="flex w-max items-center justify-center gap-2 rounded-full bg-[#dff1ed] px-4 py-2">
      <span className="font-bold">
        <CountUp start={100000} end={332962} delay={0} suffix="+" />
      </span>
      <span>Sites created</span>
    </div>
  );
};

export const CounterStats = () => {
  const easingFn = function (t: number, b: number, c: number, d: number) {
    var ts = (t /= d) * t;
    var tc = ts * t;
    return b + c * (tc * ts + -5 * ts * ts + 10 * tc + -10 * ts + 5 * t);
  };

  return (
    <ul className="grid w-full gap-4 sm:grid-cols-3 md:w-4/5">
      {/* Col */}
      <li className="flex flex-col items-center rounded-xl bg-slate-100 p-6 text-center md:rounded-3xl">
        <h3>
          <CountUp
            end={99.99}
            decimals={2}
            duration={3}
            separator="."
            decimal=","
            suffix=" %"
            easingFn={easingFn}
            enableScrollSpy
            scrollSpyOnce
            className="h2 text-gradient font-display font-extrabold"
          />
        </h3>
        <span className="font-medium">Uptime</span>
      </li>
      {/* Col */}
      <li className="flex flex-col items-center rounded-xl bg-slate-100 p-6 text-center md:rounded-3xl">
        <h3>
          <CountUp
            end={2000}
            duration={6}
            separator="."
            decimal=","
            suffix=" +"
            easingFn={easingFn}
            enableScrollSpy
            scrollSpyOnce
            className="h2 text-gradient font-display font-extrabold"
          />
        </h3>
        <span className="font-medium">Sites / day</span>
      </li>
      {/* Col */}
      <li className="flex flex-col items-center rounded-xl bg-slate-100 p-6 text-center md:rounded-3xl">
        <h3>
          <CountUp
            end={15000}
            duration={6}
            separator="."
            decimal=","
            suffix=" +"
            easingFn={easingFn}
            enableScrollSpy
            scrollSpyOnce
            className="h2 text-gradient font-display font-extrabold"
          />
        </h3>
        <span className="font-medium">Users</span>
      </li>
    </ul>
  );
};
