import Image from "next/image";
import React from "react";

import { featuresB } from "@/dummy";

const FeaturesA = () => {
  return (
    <section className="section-py border px-4 md:px-6">
      <div className="container">
        <div className="isolate flex flex-col">
          {/* Col */}
          <div className="z-10 mx-auto -mb-6 flex h-12 w-10/12 items-center justify-center rounded-lg border-2 bg-white md:ml-8 md:w-max md:p-4">
            <h2 className="text-center text-sm font-bold md:text-base">
              Must Have For Every WordPress Professional
            </h2>
          </div>
          {/* Col */}
          <div className="rounded-lg border-2 bg-slate-50 px-4 pb-6 pt-12 md:px-8 md:pb-8 md:pt-14">
            <div className="grid gap-8 md:grid-cols-3 md:gap-9">
              {featuresB?.map((item) => (
                <div key={item.id} className="flex w-full flex-col gap-3">
                  <div className="w-max">
                    <Image
                      src={`/icons/${item.icon}`}
                      alt={item.title}
                      width={40}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </div>
                  <h3 className="font-display text-base font-semibold md:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesA;
