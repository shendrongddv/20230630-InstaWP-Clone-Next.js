import Link from "next/link";
import Image from "next/image";

// Images
import Logo from "../public/logo.png";
import LogoWhite from "../public/logo-white.svg";
import { SheetClose } from "./ui/sheet";

export const NavbarBrand = () => {
  return (
    <Link href="/" aria-label="InstaWP" className="relative flex">
      <Image
        src={Logo}
        alt="InstaWP"
        priority
        className="h-7 w-auto -translate-y-[16%] lg:h-8"
      />
    </Link>
  );
};

export const FooterBrand = () => {
  return (
    <Link href="/" aria-label="InstaWP">
      <Image src={LogoWhite} alt="InstaWP" className="h-8 w-auto md:h-10" />
    </Link>
  );
};

export const MobileNavbarBrand = () => {
  return (
    <SheetClose asChild>
      <Link href="/" aria-label="InstaWP">
        <Image
          src={Logo}
          alt="InstaWP"
          priority
          className="h-7 w-auto lg:h-8"
        />
      </Link>
    </SheetClose>
  );
};
