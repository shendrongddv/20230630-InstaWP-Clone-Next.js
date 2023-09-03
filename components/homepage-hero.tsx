"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

// Components
import { CounterSiteCreated } from "./site-counter";

// Images
import imgAsset from "../public/instawp-hero-section.jpg";
import imgPlay from "../public/icons/play.svg";

export const HomepageHero = () => {
  return (
    <section className="overflow-hidden bg-slate-50 px-6 pt-16">
      <div className="container">
        <div className="flex flex-col items-center">
          {/* Counter */}
          <CounterSiteCreated />

          {/* Heading */}
          <h1 className="h1 text-gradient mt-6 w-full text-center font-extrabold md:w-4/5">
            Building With&nbsp;
            <span className="inline-flex text-secondary-foreground">
              WordPress
            </span>
            &nbsp;Was Never This&nbsp;
            <span className="inline-flex text-secondary-foreground">Easy!</span>
          </h1>

          {/* Buttons */}
          <div className="mt-10 flex w-full flex-col gap-2 sm:w-max sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/"
              aria-label="Try for Free"
              className={cn(
                buttonVariants({
                  variant: "gradient",
                  size: "lg",
                  className: "w-full font-semibold sm:w-max",
                }),
              )}
            >
              Try for Free
            </Link>
            <Link
              href="/"
              aria-label="Install Extension"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "w-full font-semibold sm:w-max",
                }),
              )}
            >
              Install Extension
            </Link>
          </div>

          {/* Assets */}
          <div className="mt-12 w-full overflow-hidden rounded-tl-xl rounded-tr-xl shadow-lg md:rounded-tl-3xl md:rounded-tr-3xl">
            <Image
              src={imgAsset}
              alt="InstaWP Dashboard"
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
