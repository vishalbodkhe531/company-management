import { Button } from "../ui/button";

type NavbtnProps = { menue: string };

function NavBtn({ menue }: NavbtnProps) {
  return (
    <>
      <Button
        variant="ghost"
        className="font-bold hover:text-orange-500 text-smallTitle hover:bg-white cursor-pointer"
      >
        {menue}
      </Button>
    </>
  );
}

export default NavBtn;
