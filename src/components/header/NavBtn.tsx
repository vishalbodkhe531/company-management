type NavbtnProps = { menu: string };

function NavBtn({ menu }: NavbtnProps) {
  return (
    <>
      <span className="font-bold  text-smallTitle  hover:text-heading cursor-pointer mx-2">
        {menu}
      </span>
    </>
  );
}

export default NavBtn;
