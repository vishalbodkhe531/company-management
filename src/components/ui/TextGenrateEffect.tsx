import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`text-center text-3xl  md:text-[50px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-white to-[#CBACF9] text-transparent bg-clip-text opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold flex  items-center", className)}>
      <div className="my-10 ">
        <div className="md:text-[1vw] w-full px-3  md:w-[90%] text-center text-2xl  leading-snug tracking-wide ">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
