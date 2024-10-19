import getHeaderData from "@/app/lib/api/getHeaderData";
import Image from "next/image";
// import { NavigationMenuDemo } from "@/app/components/layout/Navigation";
// import { Button } from "../ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Truck } from "lucide-react";

async function SiteNavbar() {
  const { navbar } = await getHeaderData();

  return (
    <header className="min-h20 sticky top-0 z-50 py-2 px-4 flex items-center border-b md:mx-auto  md:max-w-[1750px] md:justify-between md:px-0">
      <div className="flex-1">
        <Image
          src={navbar.logo.image.url}
          width={100}
          height={100}
          alt={navbar.logo.company}
        />
      </div>

      <div className="flex flex-1 justify-end ">
        <div className="flex">
          <Truck />
        </div>
      </div>
    </header>
  );
}

export default SiteNavbar;
