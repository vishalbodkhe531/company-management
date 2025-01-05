import SignInAddmin from "@/components/admin/auth/sign-in /Sign-In-Admin";
import SignUpAddmin from "@/components/admin/auth/sign-up/Sign-Up-Addmin";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useLocation } from "react-router-dom";
import pngLogo1 from "../../../assets/png1.png";
import pngLogo2 from "../../../assets/png2.png";
import { motion } from "framer-motion";
import { MdAccessibilityNew, MdOutlineSecurity } from "react-icons/md";

const AuthPage = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const particleAnimation = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: [0.3, 0.7, 1],
      scale: [0.5, 1.2, 1],
      x: ["0vw", "10vw", "-5vw", "0vw"],
      y: ["0vh", "-10vh", "15vh", "0vh"],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror" as "mirror",
      },
    },
  };

  return (
    <div className="relative overflow-hidden h-[150vh] lg:h-[100vh] lg:items-center flex items-start justify-center ">
      {[...Array(100)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-5 h-5 md:h-2 md:w-2  bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 100}%`,
          }}
          initial={particleAnimation.initial}
          animate={particleAnimation.animate}
        />
      ))}

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-white w-full font-bold z-10"
      >
        <div className="flex p-2 text-black w-full flex-wrap gap-10 h-[full] lg:h-[100vh] items-center justify-center px-0 lg:justify-start md:px-0  font-system ">
          <motion.div
            className="bg-gradient-to-r rounded-r-[20rem] h-[40rem] w-full lg:w-[47%] flex flex-col justify-center items-center p-6 from-purple-500 to-blue-500"
            initial={{ x: "-90vw", scale: 0.2 }}
            animate={{ x: 0, scale: 1 }}
            transition={{
              duration: 1.5,
              type: "spring",
              stiffness: 38,
              damping: 11,
            }}
          >
            <div className="text-white grid grid-cols-1 xl:grid-cols-2 gap-6 p-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <MdOutlineSecurity size={"2rem"} />
                  <h2 className="text-xl font-bold">Security Features</h2>
                </div>
                <ul className="list-disc text-sm pl-6 space-y-2">
                  <li>Input Validation: Client-Side & Server-Side</li>
                  <li>Password Security: Strength Indicators & Encryption</li>
                  <li>CAPTCHA Protection & Two-Factor Authentication (2FA)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <MdAccessibilityNew size={"2rem"} />
                  <h2 className="text-xl font-bold">
                    Accessibility Considerations
                  </h2>
                </div>
                <ul className="list-disc text-sm pl-6 space-y-2">
                  <li>ARIA Labels for Screen Readers</li>
                  <li>Keyboard Navigation Support</li>
                  <li>Readable Contrast Ratios</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* </div> */}
          <div className="flex justify-center items-center ">
            <Tabs
              defaultValue="account"
              className="w-full max-w-[500px] flex  flex-col justify-center items-center h-full md:h-auto bg-slate-50 shadow-black shadow-[0_4px_30px_rgba(255,255,255,1)] rounded-2xl p-6  "
            >
              <TabsContent value="account" className="w-full mt-4  ">
                <Card className="p-4 border-white  rounded-lg">
                  {pathName === "/admin/sign-in" && <SignInAddmin />}
                  {pathName === "/admin/sign-up" && <SignUpAddmin />}
                </Card>
              </TabsContent>
            </Tabs>
            <div className="hidden [@media(min-width:1450px)]:block relative">
              <motion.img
                src={pathName === "/admin/sign-in" ? pngLogo1 : pngLogo2}
                alt="PNG"
                initial={{ x: "100vw", scale: 0.2 }}
                animate={{ x: 0, scale: 1 }}
                exit={{ x: "100vw", scale: 1 }}
                transition={{
                  duration: 1.5,
                  type: "spring",
                  stiffness: 50,
                  damping: 10,
                }}
                className="h-[30vw]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
