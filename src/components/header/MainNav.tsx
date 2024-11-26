import { Link, useNavigate } from "react-router-dom";
import ToasterComponent from "../toaster/Toaster";
import { Button } from "../ui/button";
import NavBtn from "../nav-Btns/Nav-btn";

function MainNav() {
  const navigate = useNavigate();

  const handleSignIn = (data: string) => {
    console.log("data : ", data);
    if (data === "Admin") {
      navigate("/sign-in-admin");
    }
  };

  const showLoginToast = ToasterComponent({
    message: "You clicked Log In",
    description: "How you wan't to login",
    firstLable: "Admin",
    secLable: "Employee",
    caseHandler: handleSignIn,
  });

  return (
    <div>
      <Link to={"/"}>
        <NavBtn menue={"Home"} />
      </Link>
      <NavBtn menue={"Tasks"} />
      <NavBtn menue={"Projects"} />
      <button onClick={showLoginToast}>
        <NavBtn menue={"Login"} />
      </button>
    </div>
  );
}

export default MainNav;
