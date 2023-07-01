import { featuresC } from "@/dummy";
import { CheckCheck } from "lucide-react";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <section className="section-py px-6">
      <div className="container">
        <div className="flex flex-col items-center gap-16">
          {featuresC?.map((item) => (
            <div
              key={item.id}
              className="flex w-full flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between even:md:flex-row-reverse"
            >
              {/* ## Col */}
              <div className="w-full md:w-6/12">
                <h3 className="h3 font-display font-bold">{item.title}</h3>
                <p className="mt-4 text-base font-medium opacity-75 md:text-lg">
                  {item.subtitle}
                </p>
                <ul className="mt-6 space-y-2">
                  {item.sublist?.map((item) => (
                    <li key={item.id} className="flex gap-2">
                      <CheckCheck className="mt-[2px] h-4 text-[#11bf85] md:mt-[3px] md:h-5" />
                      <h3 className="text-sm md:text-base">
                        <span className="font-display font-bold">
                          {item.title}
                        </span>{" "}
                        : {item.subtitle}
                      </h3>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ## Col */}
              <div className="w-full md:w-5/12">
                <div className="overflow-hidden rounded-lg border">
                  <Image
                    src={`/${item.image}`}
                    alt={item.title}
                    width={600}
                    height={300}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
