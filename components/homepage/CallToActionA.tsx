import Image from "next/image";
import imgAsset from "../../public/try-today-img.svg";
import iconA from "../../public/icons/icon-1.svg";
import iconB from "../../public/icons/icon-2.svg";
import iconC from "../../public/icons/icon-3.svg";
import { Button } from "../ui/button";

const CallToActionA = () => {
  return (
    <section className="section-pb bg-gray-100 px-6">
      <div className="container">
        <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="w-full md:w-6/12 md:pt-20">
            <h2 className="h2 font-display font-bold text-primary">
              Try InstaWP Today!
            </h2>
            <p className="mt-4">
              Without even creating an account - so you can get a feel for how
              it works and whether it&apos;s the right fit for you.
            </p>

            {/* ## */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2 text-lg text-primary md:text-xl">
                <Image src={iconA} alt="Image" className="h-6 w-6" />
                Free Forever Account
              </div>
              <div className="flex items-center gap-2 text-lg text-primary md:text-xl">
                <Image src={iconB} alt="Image" className="h-6 w-6" />
                No credit cards required
              </div>
              <div className="flex items-center gap-2 text-lg text-primary md:text-xl">
                <Image src={iconC} alt="Image" className="h-6 w-6" />
                No setup or servers required
              </div>
            </div>

            {/* ## */}
            <Button
              variant="default"
              size="lg"
              className="mt-10 w-full md:w-max"
            >
              Get Started for Free
            </Button>
          </div>
          {/* Col */}
          <div className="w-full md:w-5/12">
            <Image src={imgAsset} alt="Image" className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionA;
