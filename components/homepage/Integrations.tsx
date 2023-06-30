import Image from "next/image";
import imgAsset from "../../public/integrations.png";

const Integrations = () => {
  return (
    <section className="section-py px-6">
      <div className="container isolate">
        <div className="relative ">
          <div className="z-20 w-full sm:absolute sm:left-0 sm:top-0 sm:w-1/2 md:w-1/3">
            <h2 className="h2 font-display font-bold">Integrations</h2>
            <p className="mt-3 opacity-75">
              We have covered the well known and most popular integrations out
              there
            </p>
          </div>
          <div className="z-10 mt-8">
            <Image
              src={imgAsset}
              alt="Integrations"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
