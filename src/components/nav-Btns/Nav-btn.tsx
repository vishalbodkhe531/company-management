// import { Button } from "../ui/button";

type NavbtnProps = { menue: string };

function NavBtn({ menue }: NavbtnProps) {
  return (
    <>
      <span
        // variant="ghost"
        className="font-bold hover:text-orange-500 text-smallTitle hover:bg-white cursor-pointer mx-5"
      >
        {menue}
      </span>
    </>
  );
}

export default NavBtn;
