import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useNavigate } from "react-router-dom";

import { adminSchema } from "@/components/form-validation /Validation";
import ToasterComponent from "@/components/toaster/Toaster";
import {
  useAdminRegisterMutation,
  useGoogleSignInMutation,
} from "@/redux/api/AdminAPI";
import { AdminFormValues } from "@/types/validation-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase";
import { useDispatch } from "react-redux";
import { adminExist } from "@/redux/reducer/AdminReducer";
import { Admin } from "@/types/types";

function SignUpAddmin() {
  const [showPassword, setShowPassword] = useState(false);

  const [adminRegister] = useAdminRegisterMutation();

  const [googleSignIn] = useGoogleSignInMutation();

  const dispatch = useDispatch();

  const form = useForm<AdminFormValues>({
    resolver: zodResolver(adminSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      gender: "other",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data: AdminFormValues) => {
    const { name, email, password, gender } = data;

    await adminRegister({
      name: name!,
      email: email!,
      password: password!,
      gender: gender!,
    });

    ToasterComponent({
      message: "Admin Registered Successfully !!",
      description: "Thanks for Authentication",
      firstLable: "Close",
    });

    navigate("/admin/sign-in");
  });

  const handleSignWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);

      const { displayName, email, photoURL, uid } = user;

      const adminData: Admin = {
        name: displayName || "Anonymous",
        email: email || "",
        password: "",
        profilePic: photoURL || "",
        gender: "other",
        _id: uid,
      };

      const res = await googleSignIn(adminData);

      if ("data" in res && res.data) {
        const { email, gender, name, profilePic, _id } = res.data;
        ToasterComponent({
          message: "Admin Login Successfully  !!",
          description: "Thank's for Login",
          firstLable: "Close",
        });
        dispatch(adminExist({ email, gender, name, profilePic, _id }));
        navigate("/");
      } else if ("error" in res) {
        console.error("Google Sign-In Error:", res.error);
        ToasterComponent({
          message: "Admin Login Failed  !!",
          description: "An error occurred during login.",
          firstLable: "Close",
        });
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
      ToasterComponent({
        message: "Google Sign-In Failed",
        description: "Unable to authenticate with Google.",
        firstLable: "Close",
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-[90vh] font-system">
        <Tabs defaultValue="account" className="w-[500px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="px-[3rem] w-full">
            <Card>
              <CardHeader>
                <CardTitle className="font-bold">Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
              <Form {...form}>
                <form onSubmit={onSubmit}>
                  <CardContent className="space-y-1">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Name"
                        className="border-none bg-inputBg text-inputTitle p-5 !text-inputText"
                        {...register("name")}
                      />
                      {errors.name && (
                        <span className="text-errorText font-bold text-sm">
                          {errors.name.message as string}
                        </span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        placeholder="Email"
                        type="email"
                        className="border-none bg-inputBg text-inputTitle p-5 !text-inputText"
                        {...register("email")}
                      />
                      {errors.email && (
                        <span className="text-errorText font-bold text-sm">
                          {errors.email.message as string}
                        </span>
                      )}
                    </div>
                    <div className="space-y-2 relative">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          placeholder="Password"
                          type={showPassword ? "text" : "password"}
                          className="border-none bg-inputBg text-inputTitle p-5 pr-10 !text-inputText"
                          {...register("password")}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-3 flex items-center text-inputText cursor-pointer hover:text-blue-500 focus:outline-none"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <span>👁️</span> : <span>🔒</span>}
                        </button>
                      </div>
                      {errors.password && (
                        <span className="text-errorText font-bold text-sm">
                          {errors.password.message as string}
                        </span>
                      )}
                    </div>
                  </CardContent>
                  <div className="flex flex-col space-y-4 mt-1 items-center">
                    <Label className="text-mainHeading font-bold">Gender</Label>
                    <div className="flex justify-around w-full items-center">
                      <div className="flex items-center space-x-2">
                        <input
                          id="male"
                          type="radio"
                          value="male"
                          className="h-5 w-5 border-gray-300 rounded-full"
                          {...register("gender")}
                        />
                        <label
                          htmlFor="male"
                          className="text-mainHeading font-medium cursor-pointer"
                        >
                          Male
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          id="female"
                          type="radio"
                          value="female"
                          className="h-5 w-5 border-gray-300 rounded-full"
                          {...register("gender")}
                        />
                        <label
                          htmlFor="female"
                          className="text-mainHeading font-medium cursor-pointer"
                        >
                          Female
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          id="other"
                          type="radio"
                          value="other"
                          className="h-5 w-5 border-gray-300 rounded-full"
                          {...register("gender")}
                          defaultChecked
                        />
                        <label
                          htmlFor="other"
                          className="text-mainHeading font-medium cursor-pointer"
                        >
                          Other
                        </label>
                      </div>
                    </div>
                    {errors.gender && (
                      <span className="text-errorText font-bold text-sm">
                        {errors.gender.message}
                      </span>
                    )}
                  </div>
                  <CardFooter className="mt-7 flex flex-col items-end">
                    <Button
                      type="submit"
                      className="cursor-pointer btn-orange  w-full"
                    >
                      Save changes
                    </Button>
                    <Button
                      className="cursor-pointer btn-gradient w-full mt-4"
                      onClick={handleSignWithGoogle}
                      type="button"
                    >
                      Sign With Google
                    </Button>
                    <div className="text-start mt-9 font-bold cursor-pointer">
                      <Link to={"/admin/sign-in"}>Sign-In</Link>
                    </div>
                  </CardFooter>
                </form>
              </Form>
            </Card>
          </TabsContent>
          <TabsContent value="password" className="px-[3rem]">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input
                    id="current"
                    type="password"
                    className="bg-inputBg text-inputTitle"
                    placeholder="Current password"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input
                    id="new"
                    type="password"
                    className="bg-inputBg"
                    placeholder="New password"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default SignUpAddmin;
