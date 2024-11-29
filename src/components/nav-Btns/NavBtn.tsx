// import { Button } from "../ui/button";

type NavbtnProps = { menue: string };

function NavBtn({ menue }: NavbtnProps) {
  return (
    <>
      <span className="font-bold  text-smallTitle  hover:text-heading cursor-pointer mx-5">
        {menue}
      </span>
    </>
  );
}

export default NavBtn;
