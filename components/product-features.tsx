import Image from "next/image";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

// Data
import { dataFeatures } from "@/data/content";

export const ProductFeatures = () => {
  return (
    <section className="px-2 py-16 md:px-6">
      <div className="rounded-xl border bg-slate-50 px-4 pb-4 md:rounded-3xl">
        <div className="container flex flex-col">
          <h2
            className={cn(
              buttonVariants({
                variant: "shape",
                size: "sm",
                className: "w-max -translate-y-1/2 bg-white font-semibold",
              }),
            )}
          >
            Must Have for Every WordPress Professional
          </h2>

          <ul className="grid gap-6 py-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            {dataFeatures?.map((item) => (
              <ProductCard
                key={item.id}
                title={item.title}
                desc={item.desc}
                icon={item.icon}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// ProductCard Component
type TProductCard = {
  title: string;
  desc: string;
  icon: string;
};
export const ProductCard = ({ title, desc, icon }: TProductCard) => {
  const items = dataFeatures;

  return (
    <li className="flex flex-col items-start gap-2">
      <Image
        src={`/icons/${icon}`}
        alt={title}
        width={32}
        height={32}
        className="h-8 w-auto"
      />

      <h3 className="text-gradient font-bold">{title}</h3>

      <p>{desc}</p>
    </li>
  );
};
