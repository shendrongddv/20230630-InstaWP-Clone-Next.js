import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

import { LogIn, Settings2 } from "lucide-react";

export const NavbarButtons = () => {
  return (
    <>
      <Link
        href="login"
        aria-label="Login"
        className={cn(
          buttonVariants({
            variant: "outline",
            size: "sm",
            className: "hidden px-6 font-semibold lg:flex",
          }),
        )}
      >
        <LogIn className="mr-2 h-4 w-4" />
        Login
      </Link>

      <Link
        href="trials"
        aria-label="Try for Free"
        className={cn(
          buttonVariants({
            variant: "link",
            size: "sm",
            className:
              "bg-gradient-to-br from-[#18B287] to-[#005E54] px-6 font-semibold text-white hover:no-underline",
          }),
        )}
      >
        <Settings2 className="mr-2 h-4 w-4" />
        Try for Free
      </Link>
    </>
  );
};

export const MobileNavbarButtons = () => {
  return (
    <>
      <Link
        href="login"
        aria-label="Login"
        className={cn(
          buttonVariants({
            variant: "outline",
            size: "lg",
            className: "font-semibold",
          }),
        )}
      >
        <LogIn className="mr-2 h-4 w-4" />
        Login
      </Link>

      <Link
        href="trials"
        aria-label="Try for Free"
        className={cn(
          buttonVariants({
            variant: "link",
            size: "lg",
            className:
              "bg-gradient-to-br from-[#18B287] to-[#005E54] font-semibold text-white hover:no-underline",
          }),
        )}
      >
        <Settings2 className="mr-2 h-4 w-4" />
        Try for Free
      </Link>
    </>
  );
};
