import { TextGenerateEffect } from "@/components/ui/TextGenrateEffect";
import mainImage from "../../assets/hero.png";

function Home() {
  return (
    <>
      <div className="flex items-center h-[40rem] flex-wrap  justify-center ">
        <TextGenerateEffect
          words="Empower Your Business with Smart Management Tools ..."
          className="text-3xl  w-[50rem]"
        />
        <img
          src={mainImage}
          alt="Main Image"
          className="h-[22vw]  transform home-img transition-all duration-700 ease-in-out"
        />
      </div>
    </>
  );
}

export default Home;
