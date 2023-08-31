import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { LucideIcon } from "lucide-react";

// Data
import { dataNavbarLinks } from "@/data/site";

export const NavbarLinks = () => {
  return (
    <ul className="flex items-center justify-center gap-2">
      {dataNavbarLinks?.map((item) => (
        <li key={item.id}>
          <Link
            href={item.url}
            aria-label={item.label}
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "sm",
                className: "",
              }),
            )}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const MobileNavbarLinks = () => {
  return (
    <ul className="grid grid-cols-2 gap-2 px-2">
      {dataNavbarLinks?.map((item) =>
        item.links ? (
          <li key={item.id} className="col-span-2">
            <span className="px-2 text-sm font-medium text-muted-foreground">
              {item.label}
            </span>

            <ul className="my-2 grid gap-2 border-b pb-4">
              {item.links?.map((item) => (
                <li key={item.id}>
                  <LinkItemIcon
                    label={item.label}
                    url={item.url}
                    icon={item.icon}
                  />
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <li key={item.id}>
            <LinkItem label={item.label} url={item.url} />
          </li>
        ),
      )}
    </ul>
  );
};

type TItemLink = {
  label: string;
  desc?: null;
  url: string;
  icon?: LucideIcon;
  media?: null;
};

const LinkItem = ({ label, url }: TItemLink) => {
  return (
    <Link
      href={url}
      aria-label={label}
      className={cn(
        buttonVariants({
          variant: "ghost",
          size: "sm",
          className:
            "h-max w-full justify-start px-2 py-2 text-base font-semibold",
        }),
      )}
    >
      {label}
    </Link>
  );
};

type TItemLinkIcon = {
  label: string;
  desc?: null;
  url: string;
  icon: LucideIcon;
  media?: null;
};

const LinkItemIcon = ({ label, url, icon: Icon }: TItemLinkIcon) => {
  return (
    <Link
      href={url}
      aria-label={label}
      className={cn(
        buttonVariants({
          variant: "ghost",
          size: "sm",
          className:
            "h-max w-full justify-start px-2 py-2 text-base font-semibold",
        }),
      )}
    >
      <Icon className="mr-2 h-5 w-5" />
      {label}
    </Link>
  );
};
