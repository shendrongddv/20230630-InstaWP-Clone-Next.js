import Brand from "./Brand";
import ButtonGroup from "./ButtonGroup";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { SheetDemo } from "./SheetDemo";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b bg-[#EBF9F5] md:px-6">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Brand />

          {/* Nav Desktop */}
          <div className="hidden md:flex">
            <NavigationMenuDemo />
          </div>

          {/* Button Groups */}
          <div className="hidden md:flex">
            <ButtonGroup />
          </div>

          {/* Nav Mobile */}
          <div className="flex md:hidden">
            <SheetDemo />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
