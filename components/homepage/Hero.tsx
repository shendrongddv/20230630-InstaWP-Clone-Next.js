import { Button } from "../ui/button";

import imgAsset from "../../public/instawp-hero-section.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#EBF9F5] px-6 pt-16">
      <div className="container">
        <div className="flex flex-col items-center gap-8">
          <div className="flex w-max items-center justify-center gap-4 rounded-full bg-[#dff1ed] px-4 py-2">
            <span className="font-bold">332,962+</span>
            <span>Sites created</span>
          </div>
          <h1 className="text-center text-5xl font-semibold md:w-3/4 md:text-7xl">
            Building with WordPress was never this{" "}
            <span className="text-[#11bf85]">easy!</span>
          </h1>
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-x-6 gap-y-3 md:inline-flex md:flex-row">
            <Button
              variant="default"
              size="lg"
              className="w-full font-semibold md:w-max"
            >
              Try for free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full bg-transparent font-semibold md:w-max"
            >
              Try for free
            </Button>
          </div>
          <div className="mt-8 md:mt-10">
            <Image
              src={imgAsset}
              loading="eager"
              alt="Image"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
