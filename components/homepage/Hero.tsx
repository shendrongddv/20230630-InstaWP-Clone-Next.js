import { Button } from "../ui/button";

import imgAsset from "../../public/instawp-hero-section.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#EBF9F5] px-6 pt-32">
      <div className="container">
        <div className="flex flex-col items-center gap-8">
          <div className="flex w-max items-center justify-center gap-4 rounded-full bg-[#dff1ed] px-4 py-2">
            <span className="font-bold">332,962+</span>
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
