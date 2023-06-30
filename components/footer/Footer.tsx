import Image from "next/image";
import Link from "next/link";

import imgBrand from "../../public/logo-white.svg";

import { dummyFooterLinks } from "@/dummy";

const Footer = () => {
  return (
    <footer className="bg-[#00231F] px-6 pt-16 text-white/80">
      <div className="container">
        <div className="flex flex-col gap-y-8">
          {/* Col */}
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            {/* Col */}
            <div className="w-full md:w-1/4">
              <Link href="/">
                <Image src={imgBrand} alt="InstaWP" className="h-10 w-auto" />
              </Link>
              <p className="mt-4">Launch WordPress sites within seconds.</p>
            </div>

            {dummyFooterLinks?.map((item) => (
              <div key={item.id} className="w-full md:flex-1">
                <h4 className="font-display text-lg font-bold text-white">
                  {item.heading}
                </h4>
                <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-1">
                  {item.links?.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="block text-white/80 hover:text-white hover:underline"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Col */}
          <div className="border-t border-white/25 py-6">
            <div className="flex flex-col-reverse items-center gap-4 text-sm md:flex-row md:items-center md:justify-between">
              <span>© 2023 InstaWP Inc. All Rights Reserved.</span>
              <span>Lorem ipsum dolor sit.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
