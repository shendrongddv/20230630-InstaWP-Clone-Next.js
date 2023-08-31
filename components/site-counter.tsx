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
