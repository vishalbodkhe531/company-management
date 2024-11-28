import { Link, useNavigate } from "react-router-dom";
import ToasterComponent from "../toaster/Toaster";
import NavBtn from "../nav-Btns/NavBtn";
import { LoginButton } from "../button/Btn";

function MainNav() {
  const navigate = useNavigate();

  const handleSignIn = (data: string) => {
    console.log("data : ", data);
    if (data === "Admin") {
      navigate("/sign-in-admin");
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
      <NavBtn menue={"Tasks"} />
      <NavBtn menue={"Projects"} />
      <div onClick={showLoginToast}>
        <LoginButton title={"Login"} />
      </div>
    </div>
  );
}

export default MainNav;
