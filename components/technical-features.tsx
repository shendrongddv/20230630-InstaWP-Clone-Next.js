import Image from "next/image";

import { BookmarkPlus, PlusCircle } from "lucide-react";

// Data
import { dataProductFeatures } from "@/data/content";

export const TechnicalFeatures = () => {
  return (
    <div className="flex flex-col gap-14">
      {dataProductFeatures?.map((item) => (
        <div
          key={item.id}
          className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between md:even:flex-row-reverse"
        >
          <div className="w-full md:w-6/12">
            <h3 className="h3 text-gradient font-display font-extrabold">
              {item.title}
            </h3>
            <p className="mt-2 font-medium text-muted-foreground">
              {item.desc}
            </p>

            <ul className="mt-6 grid gap-2">
              {item.lists?.map((item) => (
                <li key={item.id} className="">
                  <h4 className="flex items-center gap-2 font-display font-bold">
                    <BookmarkPlus className="h-4 w-4 text-destructive" />
                    {item.title}
                  </h4>
                  <p className="pl-6 text-sm">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full overflow-hidden rounded-xl md:w-5/12 md:rounded-3xl">
            <Image
              src={`/${item.media}`}
              alt={item.title}
              width={768}
              height={551}
              className="h-auto w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
