import mainImage from "../../assets/hero.png";

function Home() {
  return (
    <>
      <div className="flex  h-[40rem] md:h-screen justify-center items-center flex-wrap ">
        <div className="text-[2rem] md:text-[4vw] w-full px-10 m-2  md:w-[60%] text-center">
          <h2 className="font-system ">
            Empower Your Business with Smart Management Tools
          </h2>
        </div>
        <div className="px-10 group">
          <img
            src={mainImage}
            alt="Main Image"
            className="h-full  transform home-img transition-all duration-700 ease-in-out"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
