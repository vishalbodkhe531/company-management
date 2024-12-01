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

function AdminProfileForm({ switer }: { switer: (value: boolean) => void }) {
  const [localStorageUser, setLocalStorageUser] = useState<{
    name?: string;
    email?: string;
    password?: string;
  } | null>(null);

  const [showPassword, setShowPassword] = useState(false);

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
    formState: { errors },
    reset,
  } = form;

  useEffect(() => {
    const user = localStorage.getItem("User");
    if (user) {
      const parsedUser = JSON.parse(user);
      setLocalStorageUser(parsedUser);
      reset(parsedUser);
    }
  }, [reset]);

  const onSubmit = handleSubmit((data: AdminFormValues) => {
    console.log("Sign Up data : ", data);

    // Temp save User
    const jsonUser = JSON.stringify(data);
    localStorage.setItem("User", jsonUser);
    console.log("User successfully saved in local storage");

    ToasterComponent({
      message: "Profile Updated Successfully !!",
      description: "Thanks for visite it",
      firstLable: "Close",
    });

    switer(false);
  });

  const handleLogout = () => {
    localStorage.removeItem("User");
    switer(false);
    ToasterComponent({
      message: "Logout Successfully !!",
      description: "Thanks for visite it",
      firstLable: "Close",
    });
  };

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
