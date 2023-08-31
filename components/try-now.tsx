import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

// Images
import Asset from "../public/try-wordpress-sandbox.png";
import Decoration from "../public/decoration.webp";
import { CheckCircle } from "lucide-react";

export const TryNow = () => {
  return (
    <section className="bg-gradient-to-b from-transparent from-50% to-[#00231F] to-50% px-4 py-16">
      <div className="container grid overflow-hidden rounded-xl bg-[#005E54] md:grid-cols-2">
        {/* Col */}
        <div className="flex flex-col justify-center gap-4 px-4 py-8 md:px-16 md:py-16">
          {/* # */}
          <span className="text-2xl font-semibold text-[#F3E98D] md:text-[28px]">
            Ready to dive in?
          </span>

          {/* # */}
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            Spin up a test WordPress site
          </h2>

          {/* # */}
          <p className="text-white">
            Try InstaWP without even creating an account!
          </p>

          {/* # */}
          <Link
            href="/"
            aria-label="Try WordPress Sandbox"
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "default",
                className: "my-4 font-semibold md:w-max",
              }),
            )}
          >
            Try WordPress Sandbox
          </Link>

          {/* # */}
          <ul className="grid gap-2 sm:grid-cols-2">
            <li className="flex items-center gap-2 text-sm text-white">
              <CheckCircle className="h-4 w-4 text-[#F3E98D]" />
              Free Forever Account
            </li>
            <li className="flex items-center gap-2 text-sm text-white">
              <CheckCircle className="h-4 w-4 text-[#F3E98D]" />
              No credit card required
            </li>
          </ul>
        </div>

        {/* Col */}
        <div className="space-y-4 max-md:pl-4 md:pt-16">
          <Image
            src={Decoration}
            alt="Decoration"
            className="h-6 w-auto md:h-10"
          />
          <Image
            src={Asset}
            alt="Try WordPress Sandbox"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};
