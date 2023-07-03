import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import {
  Sheet,
  // SheetClose,
  SheetContent,
  // SheetDescription,
  // SheetFooter,
  // SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import MobileNav from "./MobileNav";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default" size="icon">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full max-w-md p-6">
        <MobileNav />
      </SheetContent>
    </Sheet>
  );
}
