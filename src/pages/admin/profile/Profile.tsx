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

import { userSchema } from "@/components/form-validation /Validation";
import { localStorageUser } from "@/components/header/MainNav";
import ToasterComponent from "@/components/toaster/Toaster";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

export type UserFormValues = z.infer<typeof userSchema>;

function Profile() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data: UserFormValues) => {
    console.log("Sign Up data : ", data);

    ToasterComponent({
      message: "Admin Registade Successfully !!",
      description: "Thanks for Authentication",
      firstLable: "Close",
    });

    navigate("/sign-in-admin");
  });

  const handleLogout = () => {
    localStorage.removeItem("User");
  };
  const name = localStorageUser?.name || "";
  const email = localStorageUser?.email || "";
  const password = localStorageUser?.password || "";

  return (
    <>
      <div className="flex justify-center items-center h-[80%]">
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
                        value={name}
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
                        value={email}
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
                          value={password}
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
                  <CardFooter className="mt-7 flex flex-col items-end">
                    <Button
                      type="submit"
                      className="cursor-pointer bg-btnBackground w-full"
                    >
                      Update changes
                    </Button>
                    <Button className="cursor-pointer bg-blue-500 w-full mt-4">
                      Sign With Google
                    </Button>
                    <div className="text-start mt-9 font-bold cursor-pointer">
                      <Link to={"/sign-in-admin"}>
                        <Button onClick={handleLogout}>Logout</Button>
                      </Link>
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

export default Profile;
