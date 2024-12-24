import SignInAddmin from "@/components/admin/auth/sign-in /Sign-In-Admin";
import SignUpAddmin from "@/components/admin/auth/sign-up/Sign-Up-Addmin";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useLocation } from "react-router-dom";
import pngLogo1 from "../../../assets/png1.png";
import pngLogo2 from "../../../assets/png2.png";
import { motion } from "framer-motion";

function AuthPage() {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <>
      <div className="flex justify-center items-center min-h-[40vw] px-4 md:px-0 font-system ">
        <Tabs
          defaultValue="account"
          className="w-full max-w-[500px] flex flex-col justify-center items-center h-full md:h-auto shadow-md rounded-lg p-6 "
        >
          <TabsContent value="account" className="w-full mt-4">
            <Card className="p-4 shadow-[0_4px_30px_rgba(255,255,255,1)] border-none  rounded-lg">
              {pathName === "/admin/sign-in" && <SignInAddmin />}
              {pathName === "/admin/sign-up" && <SignUpAddmin />}
            </Card>
          </TabsContent>
        </Tabs>
        <div className="hidden  md:block relative">
          <motion.img
            src={pathName === "/admin/sign-in" ? pngLogo1 : pngLogo2}
            alt="PNG"
            initial={{ x: "-100vw", scale: 0.2 }}
            animate={{ x: 0, scale: 1 }}
            exit={{ x: "100vw", scale: 1 }} // animate to the right when exiting
            transition={{
              duration: 1.5, // adjust the speed here
              type: "spring",
              stiffness: 50,
              damping: 10,
            }}
            className="h-[30vw]"
          />
        </div>
      </div>
    </>
  );
}

export default AuthPage;
