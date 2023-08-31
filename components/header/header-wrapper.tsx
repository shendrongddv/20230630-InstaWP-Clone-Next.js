// Components
import { NavbarLinks } from "./navbar-links";
import { NavbarBrand } from "../site-brand";
import { NavbarButtons } from "./navbar-buttons";
import { MobileNavbar } from "./mobile-navbar";

const HeaderWrapper = () => {
  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b bg-white px-4">
      <div className="container py-4">
        <div className="flex items-center justify-between gap-4">
          {/* NavbarBrand */}
          <NavbarBrand />

          <nav className="hidden lg:flex">
            {/* NavbarLinks */}
            <NavbarLinks />
          </nav>

          {/* NavbarButtons */}
          <div className="flex items-center justify-center gap-2">
            <NavbarButtons />

            {/* MobileNavbar */}
            <MobileNavbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderWrapper;
