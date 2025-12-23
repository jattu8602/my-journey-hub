import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import TableOfContents from "./TableOfContents";
import { useState } from "react";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface MobileTableOfContentsProps {
  items: TOCItem[];
}

const MobileTableOfContents = ({ items }: MobileTableOfContentsProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="gap-2">
            <Menu className="w-4 h-4" />
            <span className="hidden sm:inline text-sm font-medium">Table of Contents</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[80vw] sm:w-[350px] overflow-y-auto">
          <SheetHeader className="mb-6">
            <SheetTitle>Contents</SheetTitle>
          </SheetHeader>
          <TableOfContents
            items={items}
            onItemClick={() => setOpen(false)}
          />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileTableOfContents;
