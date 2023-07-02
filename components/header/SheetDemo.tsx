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

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="flex h-12 w-12 items-center justify-center rounded-none"
        >
          <MenuIcon className="h-8 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full max-w-md p-6"></SheetContent>
    </Sheet>
  );
}
