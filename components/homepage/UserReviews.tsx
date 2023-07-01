import Image from "next/image";
import imgBackground from "../../public/backgrounds/1.svg";

import { reviewsA } from "@/dummy";
import UserReviewCard from "./UserReviewCard";

const UserReviews = () => {
  return (
    <section className="section-pt px-6">
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="h2 font-display font-bold">Words of our customers</h2>
          {/* Flex */}
          <div className="relative mt-8 flex w-full items-center justify-center py-8">
            {/* ## */}
            <div className="absolute bottom-0 left-0 right-0 top-0 z-10">
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={imgBackground}
                  alt="Background"
                  className="h-full w-auto object-cover"
                />
              </div>
            </div>

            {/* ## */}
            <div className="z-20 w-full space-y-6">
              {reviewsA?.slice(1).map((item) => (
                <div key={item.id} className="flex w-full even:justify-end">
                  <UserReviewCard
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
        </div>
      </div>
    </section>
  );
};

export default UserReviews;

// {reviewsA?.map((item) => (
//   <div
//     key={item.id}
//     className="flex w-full items-center justify-between gap-10 even:flex-row-reverse"
//   >
//     {/* # */}
//     <div className="w-full rounded bg-slate-100 p-6 md:w-1/2">
//       <h3>{item.name}</h3>
//       <span>{item.position}</span>
//       <p>{item.review}</p>
//     </div>
//     {/* # */}
//     <div className="hidden sm:block md:w-1/2"></div>
//   </div>
// ))}
