import { LucideIcon } from "lucide-react";

// Data
import { dataAwwards } from "@/data/content";
import { Label } from "@radix-ui/react-label";

export const CardAwwards = () => {
  const items = dataAwwards;

  return (
    <ul className="grid gap-1 md:grid-cols-3">
      {items?.map((item) => (
        <li
          key={item.id}
          className="flex items-center gap-4 rounded-xl px-3 py-2 transition-colors duration-300 hover:bg-slate-100 md:rounded-3xl md:px-8"
        >
          <CardAwward
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
          />
        </li>
      ))}
    </ul>
  );
};

type TCardAwward = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
};

const CardAwward = ({ title, subtitle, icon: Icon }: TCardAwward) => {
  return (
    <>
      <div className="bg-gradient flex aspect-1 h-8 items-center justify-center rounded-full ring-1 ring-offset-4">
        <Icon className="h-4 w-4 text-white" />
      </div>
      <div>
        <span className="text-sm font-semibold text-muted-foreground">
          {subtitle}
        </span>
        <h3 className="text-gradient font-display font-extrabold leading-snug md:text-xl">
          {title}
        </h3>
      </div>
    </>
  );
};
