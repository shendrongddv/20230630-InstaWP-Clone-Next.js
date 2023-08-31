import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { LucideIcon } from "lucide-react";

// Data
import { dataSocialLinks } from "@/data/site";

export const FooterBottom = () => {
  return (
    <div className="flex flex-col-reverse gap-2 border-t border-white/25 py-6 text-white md:flex-row md:items-center md:justify-between">
      {/* Col */}
      <span className="text-center text-xs text-white/75 md:text-sm">
        © 2023{" "}
        <Link
          href="/"
          aria-label="InstaWP"
          className="underline decoration-dotted transition-colors hover:text-white"
        >
          InstaWP Inc
        </Link>
        . All Rights Reserved.
      </span>

      {/* Col */}
      <ul className="flex items-center justify-center gap-2">
        {dataSocialLinks?.map((item) => (
          <li key={item.id}>
            <SocialItem label={item.label} url={item.url} icon={item.icon} />
          </li>
        ))}
      </ul>
    </div>
  );
};

type TSocialItem = {
  label: string;
  url: string;
  icon: LucideIcon;
};

const SocialItem = ({ label, url, icon: Icon }: TSocialItem) => {
  return (
    <Link
      href={url}
      aria-label={label}
      className={cn(
        buttonVariants({
          variant: "ghost",
          size: "icon",
          className: "",
        }),
      )}
    >
      <Icon className="h-4 w-4" />
    </Link>
  );
};
