import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import NavBtn from "../nav-Btns/NavBtn";
import { Button } from "../ui/button";
import { localStorageUser } from "./MainNav";

import adminLogo from "../../assets/admin.jpg";
import empLogo from "../../assets/employee.png";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-heading" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center   text-mainHeading gap-12">
        <SheetTitle>
          <span className="text-center">Welcome to Company.com</span>
        </SheetTitle>
        <SheetDescription className="w-full">
          <div className="flex flex-col gap-14 mt-8 w-full items-center">
            {/* Home Navigation */}
            <Link to={"/"}>
              <SheetTrigger>
                <NavBtn menue={"Home"} />
              </SheetTrigger>
            </Link>

            {/* Payroll Navigation */}
            <Link to={"/payroll"}>
              <SheetTrigger>
                <NavBtn menue={"Payroll"} />
              </SheetTrigger>
            </Link>

            {/* Projects Navigation */}
            <SheetTrigger>
              <NavBtn menue={"Projects"} />
            </SheetTrigger>

            {/* Conditional Admin Profile or Log In */}
            {localStorageUser ? (
              localStorageUser.employeeId ? (
                <Link to={"/admin/profile"}>
                  <img src={empLogo} alt="" className="h-12" />
                </Link>
              ) : (
                <Link to={"/admin/profile"}>
                  <img src={adminLogo} alt="" className="h-12" />
                </Link>
              )
            ) : (
              <div className="w-full">
                <SheetTrigger className="w-full">
                  <Button className="w-full bg-btnBackground dark:bg-gray-800 dark:text-gray-100">
                    Log In
                  </Button>
                </SheetTrigger>
              </div>
            )}
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
