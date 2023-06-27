import { ArrowUpDown, ArrowLeft, ArrowRight, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

export const Topbar = () => {
  return (
    <div className="p-4 no-scrollbar flex items-center gap-4 overflow-y-auto border-b  text-neutral-500">
      <MenuIcon />
      <div className="grow font-medium text-neutral-700">REIC</div>
      <Button variant="outline" size='sm'>Heute</Button> <ArrowLeft />
      <ArrowRight />
      <div>Jun - Jul 2023</div>
      <ArrowUpDown />
    </div>
  );
};
