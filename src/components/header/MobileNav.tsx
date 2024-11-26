// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { Menu } from "lucide-react";
// import { Button } from "../ui/button";

// const MobileNav = () => {
//   return (
//     <Sheet>
//       <SheetTrigger>
//         <Menu className="" />
//       </SheetTrigger>
//       <SheetContent className="space-y-3 flex flex-col items-center">
//         <SheetTitle>
//           <span className="text-mainHeading text-center">
//             Welcome to Company.com
//           </span>
//         </SheetTitle>
//         <SheetDescription className="w-full h-[100%] flex items-center">
//           <Button className="flex-1 font-bold bg-btnBackground w-full">
//             Log In
//           </Button>
//         </SheetDescription>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default MobileNav;

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-gray-800 dark:text-gray-200" />
      </SheetTrigger>
      <SheetContent className="space-y-3 flex flex-col items-center dark:bg-gray-900 text-mainHeading dark:text-gray-200">
        <SheetTitle className="">
          <span className="text-mainHeading text-center">
            Welcome to Company.com
          </span>
        </SheetTitle>
        <SheetDescription className="w-full h-[100%] flex items-center">
          <Button className="flex-1 font-bold bg-btnBackground dark:bg-gray-800 dark:text-gray-100 w-full">
            Log In
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
