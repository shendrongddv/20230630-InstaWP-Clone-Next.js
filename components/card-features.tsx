// Data
import { dataFeatures } from "@/data/content";
import Image from "next/image";

export const CardFeatures = () => {
  const items = dataFeatures;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 md:gap-4">
      {items?.map((item) => (
        <div
          key={item.id}
          className="flex w-full flex-col items-start gap-2 rounded-xl px-2 py-4 transition-colors duration-300 hover:bg-white md:rounded-3xl md:px-4"
        >
          <Image
            src={`/icons/${item.icon}`}
            alt={item.title}
            width={32}
            height={32}
            className="h-8 w-auto"
          />

          <h3 className="text-gradient mt-2 font-display text-xl font-extrabold md:text-xl">
            {item.title}
          </h3>

          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};
