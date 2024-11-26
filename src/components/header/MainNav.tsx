// import { useAuth0 } from "@auth0/auth0-react";s

import { Button } from "../ui/button";

function MainNav() {
  return (
    <Button
      variant={"ghost"}
      className="font-bold  hover:text-orange-500 text-smallTitle hover:bg-white"
    >
      Log In
    </Button>
  );
}

export default MainNav;
