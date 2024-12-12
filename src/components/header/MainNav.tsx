import { Link, useNavigate } from "react-router-dom";
import { LoginButton } from "../button/Btn";
import NavBtn from "../nav-Btns/NavBtn";
import ToasterComponent from "../toaster/Toaster";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import adminLogo from "../../assets/admin.jpg";

function MainNav() {
  const navigate = useNavigate();

  const { admin } = useSelector((state: RootState) => state.adminReducers);

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

      <Link to={"/projects"}>
        <NavBtn menue={"Projects"} />
      </Link>
      {/* {localStorageUser ? (
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
      )} */}
      {admin ? (
        <Link to={"/admin/dashboard"}>
          <img src={adminLogo} alt="" className="h-12" />
        </Link>
      ) : (
        <div onClick={showLoginToast}>
          <LoginButton title={"Login"} />
        </div>
      )}
    </div>
  );
}

export default MainNav;
