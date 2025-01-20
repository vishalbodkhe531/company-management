import { Link, useNavigate } from "react-router-dom";
import { LoginButton } from "../button/Btn";
import NavBtn from "./NavBtn";
import ToasterComponent from "../toaster/Toaster";
import { IoHomeOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { LiaProjectDiagramSolid } from "react-icons/lia";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import adminLogo from "../../assets/admin.jpg";
import empLogo from "../../assets/emp.PNG2.png";

function MainNav() {
  const navigate = useNavigate();

  const { admin } = useSelector((state: RootState) => state.adminReducers);
  const { employee } = useSelector((state: RootState) => state.empReducers);

  const handleSignIn = (data: string) => {
    if (data === "Admin") {
      navigate("/admin/sign-in");
    }

    if (data === "Employee") {
      navigate("/emp/sign-up");
    }
  };

  const showLoginToast = () => {
    ToasterComponent({
      message: "Click Here To Log In With",
      description: "How you want to log in",
      firstLabel: "Admin",
      secLabel: "Employee",
      caseHandler: handleSignIn,
    });
  };

  return (
    <div className="flex items-center gap-4">
      <Link to={"/"}>
        <div className="flex items-center mx-4">
          <IoHomeOutline />
          <NavBtn menu={"Home"} />
        </div>
      </Link>

      <Link to={"/admin/employee-management"}>
        <div className="flex items-center mx-4">
          <FiUsers />
          <NavBtn menu={"Employee"} />
        </div>
      </Link>

      <Link to={"/admin/projects"}>
        <div className="flex items-center mx-4 ">
          <LiaProjectDiagramSolid />
          <NavBtn menu={"Projects"} />
        </div>
      </Link>

      {admin || employee ? (
        admin ? (
          <Link to={"/admin/dashboard"}>
            <img src={adminLogo} alt="Admin Logo" className="h-12" />
          </Link>
        ) : (
          employee && (
            <Link to={"/emp/dashboard"}>
              <img src={empLogo} alt="Admin Logo" className="h-12" />
            </Link>
          )
        )
      ) : (
        <div
          onClick={showLoginToast}
          className="shadow-md rounded-md shadow-black "
        >
          <LoginButton title={"Login"} />
        </div>
      )}
    </div>
  );
}

export default MainNav;
