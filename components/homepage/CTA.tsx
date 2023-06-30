import Image from "next/image";
import imgAsset from "../../public/App-screenshot.png";
import imgAssetB from "../../public/newsletter-before.webp";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="my-bg-split section-pb px-6">
      <div className="container">
        <div className="grid overflow-hidden rounded-lg bg-[#005E54] md:grid-cols-2 md:rounded-3xl">
          <div className="flex flex-col justify-center gap-4 px-6 py-10 md:p-16">
            <span className="text-2xl font-bold text-[#F3E98D] md:text-[28px]">
              Ready to dive in ?
            </span>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Spin up a test WordPress site
            </h2>
            <p className="text-white md:text-lg">
              Try InstaWP without even creating an account!
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="mt-4 w-full font-semibold md:w-max"
            >
              Try WordPress Sandbox
            </Button>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              <div className="flex w-max items-center justify-start gap-2 text-white">
                <CheckCircle size={16} className="text-[#F3E98D]" />
                Free Forever Account
              </div>
              <div className="flex w-max items-center justify-start gap-2 text-white">
                <CheckCircle size={16} className="text-[#F3E98D]" />
                No credit card required
              </div>
            </div>
          </div>
          <div className="relative max-md:pl-6 md:pt-16">
            <div className="">
              <Image
                src={imgAssetB}
                alt="Image"
                className="mb-2 h-6 w-auto md:h-10"
              />
            </div>
            <div className="">
              <Image src={imgAsset} alt="Image" className="h-auto w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
