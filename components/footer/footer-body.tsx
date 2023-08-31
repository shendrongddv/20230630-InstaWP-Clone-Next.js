// Components
import Link from "next/link";
import { FooterBrand } from "../site-brand";

// Data
import { dataFooterLinks } from "@/data/site";

export const FooterBody = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:justify-between">
      {/* Col */}
      <div className="flex flex-col gap-4 max-md:items-center md:w-4/12">
        <FooterBrand />
        <p className="text-sm text-white/75">
          Launch WordPress sites within seconds.
        </p>
      </div>

      {dataFooterLinks.slice(0, 3)?.map((item) => (
        <div key={item.id} className="space-y-3 md:w-2/12">
          <h4 className="font-display font-bold text-white">{item.title}</h4>

          <ul className="grid grid-cols-2 gap-2 md:flex md:flex-col">
            {item.links?.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.url}
                  aria-label={item.label}
                  className="text-sm text-white/75 transition-colors hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Col */}
      <div className="space-y-8 md:w-2/12">
        {/* Col */}
        {dataFooterLinks.slice(3, 4)?.map((item) => (
          <div key={item.id} className="space-y-4">
            <h4 className="font-display font-bold text-white">{item.title}</h4>

            <ul className="grid grid-cols-2 gap-2 md:flex md:flex-col">
              {item.links?.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    aria-label={item.label}
                    className="text-sm text-white/75 transition-colors hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Col */}
        {dataFooterLinks.slice(4, 5)?.map((item) => (
          <div key={item.id} className="space-y-4">
            <h4 className="font-display font-bold text-white">{item.title}</h4>

            <ul className="grid gap-2 md:flex md:flex-col">
              {item.links?.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    aria-label={item.label}
                    className="text-sm text-white/75 transition-colors hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
