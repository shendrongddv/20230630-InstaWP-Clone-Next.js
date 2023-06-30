import Image from "next/image";
import React from "react";

const FeaturesA = () => {
  return (
    <section className="section-py bg-white px-6">
      <div className="container">
        <div>
          <div className="relative rounded-2xl border-2 border-[#dff1ed] bg-[#fcfcfc] p-2 md:pt-12">
            <div className="absolute -top-6 flex max-h-12 items-center justify-center rounded-xl border-2 bg-[#fcfcfc] p-1 text-sm max-md:left-6 max-md:right-6 max-md:max-h-14 max-md:text-center md:w-max md:px-4 md:py-2 md:text-base">
              Must Have For Every WordPress Professional
            </div>
            <div className="mt-8 grid gap-4 md:mt-2 md:grid-cols-3">
              {/* Col */}
              <div className="rounded-xl p-4 transition-colors hover:bg-slate-100">
                <Image
                  src="/client-new-arrow-up.svg"
                  alt="Image"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <h3 className="mt-4 text-lg font-bold">
                  Build & Migrate WordPress Sites
                </h3>
                <p className="mt-3">
                  Create highly optimized sites from templates, Share with
                  clients and Migrate to any hosting provider.
                </p>
              </div>
              {/* Col */}
              <div className="rounded-xl p-4 transition-colors hover:bg-slate-100">
                <Image
                  src="/client-new-arrow-up.svg"
                  alt="Image"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <h3 className="mt-4 text-lg font-bold">
                  Build & Migrate WordPress Sites
                </h3>
                <p className="mt-3">
                  Create highly optimized sites from templates, Share with
                  clients and Migrate to any hosting provider.
                </p>
              </div>
              {/* Col */}
              <div className="rounded-xl p-4 transition-colors hover:bg-slate-100">
                <Image
                  src="/client-new-arrow-up.svg"
                  alt="Image"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <h3 className="mt-4 text-lg font-bold">
                  Build & Migrate WordPress Sites
                </h3>
                <p className="mt-3">
                  Create highly optimized sites from templates, Share with
                  clients and Migrate to any hosting provider.
                </p>
              </div>
              {/* Col */}
              <div className="rounded-xl p-4 transition-colors hover:bg-slate-100">
                <Image
                  src="/client-new-arrow-up.svg"
                  alt="Image"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <h3 className="mt-4 text-lg font-bold">
                  Build & Migrate WordPress Sites
                </h3>
                <p className="mt-3">
                  Create highly optimized sites from templates, Share with
                  clients and Migrate to any hosting provider.
                </p>
              </div>
              {/* Col */}
              <div className="rounded-xl p-4 transition-colors hover:bg-slate-100">
                <Image
                  src="/client-new-arrow-up.svg"
                  alt="Image"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <h3 className="mt-4 text-lg font-bold">
                  Build & Migrate WordPress Sites
                </h3>
                <p className="mt-3">
                  Create highly optimized sites from templates, Share with
                  clients and Migrate to any hosting provider.
                </p>
              </div>
              {/* Col */}
              <div className="rounded-xl p-4 transition-colors hover:bg-slate-100">
                <Image
                  src="/client-new-arrow-up.svg"
                  alt="Image"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <h3 className="mt-4 text-lg font-bold">
                  Build & Migrate WordPress Sites
                </h3>
                <p className="mt-3">
                  Create highly optimized sites from templates, Share with
                  clients and Migrate to any hosting provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesA;
