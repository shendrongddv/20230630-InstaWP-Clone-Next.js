import Image from "next/image";

// Data
import { dataReviews } from "@/data/content";

export const ReviewHighlight = () => {
  const data = dataReviews[0];

  return (
    <section className="section bg-[#00231f] bg-[url(/backgrounds/2.svg)] bg-cover bg-center bg-no-repeat px-6 py-16">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="w-full shadow-2xl drop-shadow-2xl md:w-4/5">
            <div className="z-10 mx-auto -mb-14 w-max md:-mb-28">
              <Image
                src={`/persons/${data.imageName}`}
                alt={data.name}
                width={300}
                height={300}
                className="h-28 w-auto md:h-56"
              />
            </div>
            <div className="rounded-xl bg-[#00231f]/80 pt-8 md:rounded-3xl md:pt-16">
              <div className="px-6 py-8 md:px-20 md:pb-14">
                <p className="text-lg text-white md:text-2xl">{data.review}</p>
                <div className="mt-10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-white md:text-xl">
                      {data.name}
                    </span>
                    <span className="text-sm text-[#f3e98d] md:text-base">
                      {data.position} at {data.company}
                    </span>
                  </div>
                  <div>
                    <Image
                      src={`/logos/${data.imageCompany}`}
                      alt={data.company}
                      width={50}
                      height={50}
                      className="h-12 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
