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

import { updateAdminSchema } from "@/components/form-validation /Validation";
import ToasterComponent from "@/components/toaster/Toaster";
import {
  useLogoutAdminMutation,
  useUpdateAdminMutation,
} from "@/redux/api/admin-API/AdminAPI";
import { adminExist, adminNotExist } from "@/redux/reducer/AdminReducer";
import { RootState } from "@/redux/store";
import { Admin } from "@/types/types";
import {
  AdminFormValues,
  UpdateAdminFormValues,
} from "@/types/validation-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function AdminProfileForm({ switer }: { switer: (value: boolean) => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [updateAdmin] = useUpdateAdminMutation();
  const [logoutAdmin] = useLogoutAdminMutation();

  const { admin } = useSelector((state: RootState) => state.adminReducers);

  const form = useForm<UpdateAdminFormValues>({
    resolver: zodResolver(updateAdminSchema),
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
    reset,
    formState: { errors },
  } = form;

  useEffect(() => {
    if (admin) {
      reset({
        name: admin.name,
        email: admin.email,
        password: "",
        gender: (["male", "female", "other"].includes(admin.gender)
          ? admin.gender
          : "other") as "male" | "female" | "other",
      });
    }
  }, [admin, reset]);

  const onSubmit = handleSubmit(async (data: AdminFormValues) => {
    setIsLoading(true);

    try {
      if (admin?._id) {
        await updateAdmin({
          id: admin._id,
          admin: data as Admin,
        }).unwrap();
        ToasterComponent({
          message: "Profile Updated Successfully!",
          description: "Your changes have been saved.",
          firstLabel: "Close",
        });

        const { name, email, gender } = data;
        switer(false);
        dispatch(
          adminExist({
            name,
            email,
            gender,
            _id: admin._id,
            profilePic: admin.profilePic,
          } as Admin)
        );
      } else {
        ToasterComponent({
          message: "Profile Update Failed!",
          description: "Your changes could not be saved.",
          firstLabel: "Close",
        });
      }
    } catch (error) {
      ToasterComponent({
        message: "Error Updating Profile",
        description: "Something went wrong. Please try again.",
        firstLabel: "Close",
      });
    } finally {
      setIsLoading(false);
    }
  });

  const handleLogout = async () => {
    try {
      const res = await logoutAdmin();
      if (res) {
        ToasterComponent({
          message: res.data?.message!,
          description: "Thanks for visit....",
          firstLabel: "Close",
        });
        dispatch(adminNotExist());
        navigate("/");
        switer(false);
      }
    } catch (error) {
      console.log(`error : `, error);
    }
  };

  return (
    <div className="flex justify-center items-center h-[78vh]">
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
                  {/* Name Input */}
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
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  {/* Email Input */}
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
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  {/* Password Input */}
                  <div className="space-y-2 relative">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        className="border-none bg-inputBg  p-5 pr-10  text-inputTitle !text-inputText"
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
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  {/* Gender Selection */}
                  <div className="flex flex-col space-y-4 mt-1 items-center">
                    <Label className=" font-bold mt-4">Gender</Label>
                    <div className="flex justify-around w-full items-center">
                      {["male", "female", "other"].map((gender) => (
                        <div
                          key={gender}
                          className="flex items-center space-x-2"
                        >
                          <input
                            id={gender}
                            type="radio"
                            value={gender}
                            className="h-5 w-5 border-gray-300 rounded-full"
                            {...register("gender")}
                          />
                          <label
                            htmlFor={gender}
                            className=" font-medium cursor-pointer"
                          >
                            {gender.charAt(0).toUpperCase() + gender.slice(1)}
                          </label>
                        </div>
                      ))}
                    </div>
                    {errors.gender && (
                      <span className="text-errorText font-bold text-sm">
                        {errors.gender.message}
                      </span>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="mt-7 flex flex-col items-end">
                  <Button
                    type="submit"
                    className={`cursor-pointer btn-orange w-full ${
                      isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={isLoading}
                  >
                    {isLoading ? "Saving..." : "Save changes"}
                  </Button>
                </CardFooter>
              </form>
            </Form>
            <div className="flex justify-end h-18">
              <Button
                className="cursor-pointer m-3 font-bold"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default AdminProfileForm;
