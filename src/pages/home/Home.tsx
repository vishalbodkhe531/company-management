import { TextGenerateEffect } from "@/components/ui/TextGenrateEffect";
import mainImage from "../../assets/hero.png";
import { motion } from "framer-motion";
function Home() {
  return (
    <>
      <div className="flex items-center bg-background h-[35rem] md:h-[44rem] flex-wrap  justify-center ">
        <TextGenerateEffect
          words="Empower Your Business with Smart Management Tools ..."
          className="text-3xl  w-[50rem]"
        />
        <motion.p
          initial={{ x: "-8vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeIn" }}
        >
          <img
            src={mainImage}
            alt="Main Image"
            className="h-[14rem] md:h-[24rem]"
          />
        </motion.p>
      </div>
    </>
  );
}

export default Home;
