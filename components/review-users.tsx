import Image from "next/image";

import { Button } from "./ui/button";

// Components
import { CardUser } from "./card-user";

// Images
import imgBackground from "../public/backgrounds/1.svg";

// Data
import { dataReviews } from "@/data/content";

export const ReviewUsers = () => {
  return (
    <section className="section px-6 pt-16">
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="h2 font-display font-bold text-primary">
            Words of Our Customers
          </h2>
          {/* Flex */}
          <div className="relative mt-8 flex w-full items-center justify-center pt-8 md:py-8">
            {/* ## */}
            <div className="absolute bottom-0 left-0 right-0 top-0 z-10">
              <div className="flex h-full w-full items-start justify-center md:items-center">
                <Image
                  src={imgBackground}
                  alt="Background"
                  className="h-auto w-full object-cover md:h-full md:w-auto"
                />
              </div>
            </div>

            {/* ## */}
            <div className="z-20 w-full space-y-6">
              {dataReviews?.slice(1).map((item) => (
                <div key={item.id} className="flex w-full even:justify-end">
                  <CardUser
                    name={item.name}
                    position={item.position}
                    company={item.company}
                    imageName={item.imageName}
                    imageCompany={item.imageCompany}
                    review={item.review}
                  />
                </div>
              ))}
            </div>
          </div>

          <Button variant="outline" size="lg" className="mt-10 w-full md:w-max">
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};
