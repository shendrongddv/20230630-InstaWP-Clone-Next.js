import Image from "next/image";
import Link from "next/link";

import imgBrand from "../../public/logo.png";

const Brand = () => {
  return (
    <Link href="/">
      <Image src={imgBrand} alt="InstaWP" className="h-8 w-auto" />
    </Link>
  );
};

export default Brand;
