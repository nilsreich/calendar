import { ArrowUpDown, ArrowLeft, ArrowRight, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

export const Topbar = () => {
  return (
    <div className="px-4 py-2 no-scrollbar flex items-center gap-4 overflow-y-auto border-b  text-neutral-500">
      <MenuIcon  size="14" />
      <div className="grow font-medium text-neutral-700">REIC</div>
      <Button variant="outline" size="sm" className="py-1 h-min">
        Heute
      </Button>
      <ArrowLeft  size="14"/>
      <ArrowRight size="14" />
      <div className="text-sm whitespace-nowrap">Jun - Jul</div>
      <ArrowUpDown  size="14"/>
    </div>
  );
};
