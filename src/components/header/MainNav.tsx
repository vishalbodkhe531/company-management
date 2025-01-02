import { Link, useNavigate } from "react-router-dom";
import { LoginButton } from "../button/Btn";
import NavBtn from "./NavBtn";
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
      message: "Click Here To Log In With",
      description: "How you want to log in",
      firstLabel: "Admin", // Fixed spelling
      secLabel: "Employee", // Fixed spelling
      caseHandler: handleSignIn,
    });
  };

  return (
    <div className="flex items-center gap-4">
      <Link to={"/"}>
        <NavBtn menu={"Home"} /> {/* Fixed spelling */}
      </Link>

      <Link to={"/employee/payroll"}>
        <NavBtn menu={"Payroll"} /> {/* Fixed spelling */}
      </Link>

      <Link to={"/admin/employee-management"}>
        <NavBtn menu={"Employee"} /> {/* Fixed spelling */}
      </Link>

      <Link to={"/admin/projects"}>
        <NavBtn menu={"Projects"} /> {/* Fixed spelling */}
      </Link>

      {admin ? (
        <Link to={"/admin/dashboard"}>
          <img src={adminLogo} alt="Admin Logo" className="h-12" />
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
