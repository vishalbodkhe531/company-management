import mainImage from "../../assets/hero.png";

function Home() {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="text-[4vw] px-10 m-5 w-[60%] text-center">
          <h2 className="font-system">
            Empower Your Business with Smart Management Tools
          </h2>
        </div>
        <div className="px-10 ">
          <img src={mainImage} className="h-full" />
        </div>
      </div>
    </>
  );
}

export default Home;
