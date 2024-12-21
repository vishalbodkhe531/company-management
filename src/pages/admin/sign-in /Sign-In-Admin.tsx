import ToasterComponent from "@/components/toaster/Toaster";
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
import {
  useGoogleSignInMutation,
  useLoginMutation,
} from "@/redux/api/AdminAPI";
import { adminExist } from "@/redux/reducer/AdminReducer";
import { messageResponce } from "@/types/api-types";
import { AdminFormValues } from "@/types/validation-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { adminSchema } from "@/components/form-validation /Validation";
import { auth } from "@/firebase";
import { Admin } from "@/types/types";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function SignInAddmin() {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const [googleSignIn] = useGoogleSignInMutation();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<AdminFormValues>({
    resolver: zodResolver(adminSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  const handleForm = handleSubmit(async (data: AdminFormValues) => {
    setLoading(true);
    const { email, password } = data;

    const res = await login({ email: email!, password: password! });

    setLoading(false);

    if (res.data) {
      const { name, email, password, gender, profilePic } = res.data?.admin;
      dispatch(adminExist({ name, email, password, profilePic, gender }));
      ToasterComponent({
        message: "Admin Login Successfully !!",
        description: "Thanks for Authentication",
        firstLable: "Close",
      });
      navigate("/");
    }

    if (res.error) {
      const error = res.error as FetchBaseQueryError;
      const message = error?.data
        ? (error.data as messageResponce).message
        : "An unknown error occurred";

      ToasterComponent({
        message: "Admin Not Logged  !!",
        description: message,
        firstLable: "Close",
      });
    }
  });

  const handleSignWithGoogle = async () => {
    setLoading(true);
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
        ToasterComponent({
          message: "Admin Login Failed  !!",
          description: "An error occurred during login.",
          firstLable: "Close",
        });
      }
    } catch (error) {
      ToasterComponent({
        message: "Google Sign-In Failed",
        description: "Unable to authenticate with Google.",
        firstLable: "Close",
      });
    }
    setLoading(false);
  };

  return (
    <>
      <div className="flex justify-center items-center h-[80vh]">
        <Tabs defaultValue="account" className="w-[500px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="px-[3rem] w-full">
            <Form {...form}>
              <form onSubmit={handleForm}>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-bold">Account</CardTitle>
                    <CardDescription>
                      Make changes to your account here. Click save when you're
                      done.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email"
                        className="border-none bg-inputBg text-inputTitle p-5 !text-inputText"
                        {...register("email")}
                      />
                      {errors.email && (
                        <span className="text-errorText font-bold text-sm">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                    <div className="space-y-2 relative">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="password"
                          className="border-none bg-inputBg text-inputTitle p-5 !text-inputText"
                          {...register("password")}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-2 flex items-center text-inputText cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <span>👁️</span> : <span>🔒</span>}
                        </button>
                      </div>
                      {errors.password && (
                        <span className="text-errorText font-bold text-sm">
                          {errors.password.message}
                        </span>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="mt-7 flex flex-col items-end">
                    <Button
                      type="submit"
                      className="cursor-pointer btn-orange w-full"
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Sign In"}
                    </Button>
                    <Button
                      className="cursor-pointer btn-gradient w-full mt-4"
                      type="button"
                      onClick={handleSignWithGoogle}
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Sign With Google"}
                    </Button>
                    <div className="text-start mt-9 font-bold cursor-pointer">
                      <Link to={"/admin/sign-up"}>Sign-Up</Link>
                    </div>
                  </CardFooter>
                </Card>
              </form>
            </Form>
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
                    placeholder="password"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input
                    id="new"
                    type="password"
                    className="bg-inputBg"
                    placeholder="password"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>;
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default SignInAddmin;
