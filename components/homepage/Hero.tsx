"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import CountUp from "react-countup";

import imgAsset from "../../public/instawp-hero-section.png";
import imgPlay from "../../public/icons/play.svg";

const Hero = () => {
  return (
    <section className="bg-[#EBF9F5] px-6 pt-32">
      <div className="container">
        <div className="flex flex-col items-center gap-8">
          <div className="flex w-max items-center justify-center gap-2 rounded-full bg-[#dff1ed] px-4 py-2">
            <span className="font-bold">
              <CountUp start={100000} end={332962} delay={0} suffix="+" />
            </span>
            <span>Sites created</span>
          </div>
          <h1 className="text-center text-4xl font-bold text-[#00231F] md:w-3/4 md:text-6xl md:leading-normal">
            Building With Wordpress Was Never This{" "}
            <span className="text-[#11bf85]">Easy!</span>
          </h1>
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-x-6 gap-y-3 md:inline-flex md:flex-row">
            <Button variant="default" size="lg" className="w-full md:w-max">
              Try for Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full bg-transparent md:w-max"
            >
              Install Extension
            </Button>
          </div>
          <div className="mt-8 md:mt-10">
            <div className="relative isolate flex w-full items-center justify-center">
              {/* Image */}
              <Image
                src={imgAsset}
                loading="eager"
                alt="Image"
                className="h-auto w-full"
              />
              {/* Play Overlay */}
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="heartbeat h-24 w-24 rounded-full bg-slate-200/50 md:h-32 md:w-32"></div>
              </div>
              {/* Play */}
              <Image
                src={imgPlay}
                alt="Play Video"
                className="absolute left-1/2 top-1/2 z-20 h-16 w-full -translate-x-1/2 -translate-y-1/2 md:h-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
