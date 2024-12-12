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
import { Tabs, TabsContent } from "@/components/ui/tabs";

import { adminSchema } from "@/components/form-validation /Validation";
import ToasterComponent from "@/components/toaster/Toaster";
import { AdminFormValues } from "@/types/validation-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function AdminProfileForm({ switer }: { switer: (value: boolean) => void }) {
  const [showPassword, setShowPassword] = useState(false);

  const { admin } = useSelector((state: RootState) => state.adminReducers);
  console.log(admin);

  const [inputValue, setInputValue] = useState<{
    name?: string;
    email?: string;
    password?: string;
  } | null>(null);

  const form = useForm<AdminFormValues>({
    resolver: zodResolver(adminSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = form;

  useEffect(() => {
    if (admin) {
      setInputValue(admin);
    }
  }, [reset]);

  const onSubmit = handleSubmit((data: AdminFormValues) => {
    console.log("Sign Up data : ", data);

    ToasterComponent({
      message: "Profile Updated Successfully !!",
      description: "Thanks for visite it",
      firstLable: "Close",
    });

    switer(false);
  });

  const handleLogout = () => {};

  return (
    <div className="flex justify-center items-center h-[70vh]">
      <Tabs defaultValue="account" className="w-[500px]">
        <TabsContent value="account" className="px-[3rem] w-full">
          <Card>
            <CardHeader>
              <CardTitle className="font-bold">Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
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
                        value="Male"
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
                        value="Female"
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
                        value="Other"
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
                    className="cursor-pointer bg-Btn1 w-full"
                  >
                    Save changes
                  </Button>
                  <Button className="cursor-pointer bg-Btn2 w-full mt-4">
                    Sign With Google
                  </Button>
                </CardFooter>
              </form>
            </Form>
            <div className="flex justify-end h-18">
              <Button
                className="cursor-pointer m-3 font-bold"
                onClick={handleLogout}
              >
                Logout..
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default AdminProfileForm;
