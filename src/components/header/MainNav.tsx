import { Link, useNavigate } from "react-router-dom";
import { LoginButton } from "../button/Btn";
import NavBtn from "../nav-Btns/NavBtn";
import ToasterComponent from "../toaster/Toaster";

import { User } from "@/types/types";
import adminLogo from "../../assets/admin.jpg";
import empLogo from "../../assets/employee.png";

// Temp get user
const getUserFromLocalStorage = (): User | null => {
  try {
    const userJson =
      localStorage.getItem("User") || localStorage.getItem("Employee");
    if (userJson) {
      const userData = JSON.parse(userJson) as User;
      return userData;
    }
    return null;
  } catch (error) {
    console.error("Error retrieving user from local storage:", error);
    return null;
  }
};

export const localStorageUser = getUserFromLocalStorage();
console.log();
// export const localStorageEmp

function MainNav() {
  const navigate = useNavigate();

  const handleSignIn = (data: string) => {
    console.log("data : ", data);
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
      firstLable: "Admin",
      secLable: "Employee",
      caseHandler: handleSignIn,
    });
  };

  return (
    <div className="flex items-center gap-4">
      <Link to={"/"}>
        <NavBtn menue={"Home"} />
      </Link>

      <Link to={"/employee/payroll"}>
        <NavBtn menue={"Payroll"} />
      </Link>

      <NavBtn menue={"Projects"} />
      {localStorageUser ? (
        localStorageUser.employeeId ? (
          <Link to={"/admin/profile"}>
            <img src={empLogo} alt="" className="h-12" />
          </Link>
        ) : (
          <Link to={"/admin/dashboard"}>
            <img src={adminLogo} alt="" className="h-12" />
          </Link>
        )
      ) : (
        <div onClick={showLoginToast}>
          <LoginButton title={"Login"} />
        </div>
      )}
    </div>
  );
}

export default MainNav;
