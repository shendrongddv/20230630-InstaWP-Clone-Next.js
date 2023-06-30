import Image from "next/image";

import imgAssetsA from "../../public/top-post-badge.svg";
import imgAssetsB from "../../public/Group-1000000983.svg";
import imgAssetsC from "../../public/Group-1000000984.svg";
import imgAssetsD from "../../public/c-logo.png";

const Clients = () => {
  return (
    <section className="section-py bg-white px-6">
      <div className="container">
        <div className="flex flex-col items-center">
          {/* # */}
          <div className="w-full md:w-4/5">
            <div className="grid gap-4 md:grid-cols-3">
              <Image src={imgAssetsA} alt="Image" className="h-auto w-full" />
              <Image src={imgAssetsB} alt="Image" className="h-auto w-full" />
              <Image src={imgAssetsC} alt="Image" className="h-auto w-full" />
            </div>
          </div>

          {/* # */}
          <h4 className="mt-16 text-center text-lg font-bold">
            Already helping these companies build even faster
          </h4>

          {/* # */}
          <div className="mt-8">
            <Image src={imgAssetsD} alt="Image" className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
