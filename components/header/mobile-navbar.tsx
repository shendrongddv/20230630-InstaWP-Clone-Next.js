import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { MobileNavbarBrand } from "../site-brand";
import { MobileNavbarButtons } from "./navbar-buttons";
import { MobileNavbarLinks } from "./navbar-links";

export const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="aspect-1">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex h-full flex-col p-0 max-md:w-4/5"
      >
        {/* NavbarBrand */}
        <div className="flex h-[70px] items-center border-b px-4 py-4">
          <MobileNavbarBrand />
        </div>

        {/* NavbarLinks */}
        <MobileNavbarLinks />

        {/* NavbarButtons */}
        <div
          className="mt-auto grid
        grid-cols-2 gap-2 border-t px-4 py-4"
        >
          <MobileNavbarButtons />
          <span className="col-span-2 pt-4 text-xs text-muted-foreground">
            © 2023 InstaWP Inc. All Rights Reserved.
          </span>
        </div>
      </SheetContent>
    </Sheet>
  );
};
