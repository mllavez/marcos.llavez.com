import * as React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export function Drawer() {
    return(
          <Sheet>
          <SheetTrigger> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" >
          <line x1="3" x2="21" y1="12" y2="12" />
          <line x1="3" x2="21" y1="6" y2="6" />
          <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
          </SheetTrigger>
          <SheetContent side={"right"}>
          <SheetTitle>Menu</SheetTitle>
          </SheetContent>
          </Sheet>
    );
}
