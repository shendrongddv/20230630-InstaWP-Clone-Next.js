import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

import { LogIn, Settings2 } from "lucide-react";
import { SheetClose } from "../ui/sheet";

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
            variant: "gradient",
            size: "sm",
            className: "px-6",
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
      <SheetClose asChild>
        <Link
          href="login"
          aria-label="Login"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "lg",
              className: " col-span-2",
            }),
          )}
        >
          <LogIn className="mr-2 h-4 w-4" />
          Login
        </Link>
      </SheetClose>

      <SheetClose asChild>
        <Link
          href="trials"
          aria-label="Try for Free"
          className={cn(
            buttonVariants({
              variant: "gradient",
              size: "lg",
              className: "col-span-2",
            }),
          )}
        >
          <Settings2 className="mr-2 h-4 w-4" />
          Try for Free
        </Link>
      </SheetClose>
    </>
  );
};
