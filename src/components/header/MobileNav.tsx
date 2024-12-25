import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import NavBtn from "./NavBtn";
import { Button } from "../ui/button";

import ToasterComponent from "../toaster/Toaster";

const MobileNav = () => {
  const navigate = useNavigate();

  const handleSignIn = (data: string) => {
    if (data === "Admin") {
      navigate("/admin/sign-in");
    }

    if (data === "Employee") {
      navigate("/employee/sign-in");
    }
  };

  const showLoginToast = () => {
    ToasterComponent({
      message: "You clicked Log In",
      description: "How you wan't to login",
      firstLabel: "Admin",
      secLabel: "Employee",
      caseHandler: handleSignIn,
    });
  };

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
                <NavBtn menu={"Home"} />
              </SheetTrigger>
            </Link>

            {/* Payroll Navigation */}
            <Link to={"/employee/payroll"}>
              <SheetTrigger>
                <NavBtn menu={"Payroll"} />
              </SheetTrigger>
            </Link>

            {/* Projects Navigation */}
            <Link to={"/admin/projects"}>
              <SheetTrigger>
                <NavBtn menu={"Projects"} />
              </SheetTrigger>
            </Link>

            {/* Conditional Admin Profile or Log In */}
            {/* {localStorageUser ? (
              localStorageUser.employeeId ? (
                <Link to={"/admin/profile"}>
                  <SheetTrigger>
                    <img src={empLogo} alt="" className="h-12" />
                  </SheetTrigger>
                </Link>
              ) : (
                <Link to={"/admin/dashboard"}>
                  <SheetTrigger>
                    <img src={adminLogo} alt="" className="h-12" />
                  </SheetTrigger>
                </Link>
              )
            ) : (
              <div className="w-full">
                <SheetTrigger className="w-full">
                  <Button
                    className="w-full bg-Btn1 dark:bg-gray-800 dark:text-gray-100"
                    onClick={showLoginToast}
                  >
                    Log In
                  </Button>
                </SheetTrigger>
              </div>
            )} */}
            <div className="w-full">
              <SheetTrigger className="w-full">
                <Button
                  className="w-full bg-Btn1 dark:bg-gray-800 dark:text-gray-100"
                  onClick={showLoginToast}
                >
                  Log In
                </Button>
              </SheetTrigger>
            </div>
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
