import { LoginButton } from "@/components/button/Btn";
import { empSchema } from "@/components/form-validation /empValidation";
import ToasterComponent, {
  getErrorMessage,
} from "@/components/toaster/Toaster";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useEmpUpdateMutation,
  useLogoutEmpMutation,
} from "@/redux/api/emp-API/EmpAPI";
import { empExist, empNotExist } from "@/redux/reducer/EmpReducer";
import { RootState } from "@/redux/store";
import { Employee } from "@/types/types";
import { EmpFormValue } from "@/types/validation-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoTransgenderOutline } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { employee } = useSelector((state: RootState) => state.empReducers);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [empUpdate] = useEmpUpdateMutation();

  const [logoutEmp] = useLogoutEmpMutation();

  const form = useForm<EmpFormValue>({
    resolver: zodResolver(empSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      resignationDate: "",
      qualification: "",
      skill: "",
      gender: "",
      address: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  useEffect(() => {
    if (employee) {
      reset({
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        phoneNumber: employee.phoneNumber.toString(),
        // phoneNumber: employee.phoneNumber,
        qualification: employee.qualification,
        skill: employee.skill,
        gender: employee.gender,
        address: employee.address,
      });
    }
  }, [employee, reset]);

  const handleForm = handleSubmit(async (data) => {
    // check between employee and data and give only changable field;
    const updatedData = Object.keys(data).reduce((acc, key) => {
      const employeeValue = employee?.[key as keyof typeof employee];
      const dataValue = data[key as keyof EmpFormValue];

      if (employeeValue !== undefined) {
        if (
          (key === "phoneNumber" && dataValue !== employeeValue.toString()) ||
          (key !== "phoneNumber" && dataValue !== employeeValue)
        ) {
          acc[key as keyof EmpFormValue] = dataValue;
        }
      }

      return acc;
    }, {} as EmpFormValue);

    const res = await empUpdate({ data: updatedData, id: employee!._id });
    console.log(res);
    if ("data" in res && res.data) {
      ToasterComponent({
        message: "Successfully Updated You Profile!!",
        description: "Thanks for updating your profile",
        firstLabel: "Close",
      });

      dispatch(empExist(res.data as Employee));
    } else if ("error" in res) {
      const errorMessage = getErrorMessage(res.error);
      ToasterComponent({
        message: errorMessage,
        description: "Profile update failed!!",
        firstLabel: "Close",
      });
    }
  });

  const handleLogout = () => {
    logoutEmp();
    dispatch(empNotExist());
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-500 p-8">
      <motion.div
        className="max-w-full mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Header Section */}
        <Card className="mb-8">
          <CardContent className="flex items-center p-6 bg-white rounded-t-xl shadow-xl bottom-2">
            <Avatar className="w-24 h-24 mr-6">
              <AvatarImage src={employee?.profilePic} alt="Profile Picture" />
              <AvatarFallback>{employee?.firstName}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">
                {employee?.firstName} {employee?.lastName}
              </h1>
              <div className="mt-2">
                <p>
                  <strong>Email:</strong> {employee?.email}
                </p>
                <p>
                  <strong>Phone:</strong> {employee?.phoneNumber}
                </p>
                <p>
                  <strong>Skill:</strong> {employee?.skill}
                </p>
              </div>
            </div>
          </CardContent>
          <div className="bg-white rounded-b-xl text-end px-4 py-2">
            <div onClick={handleLogout}>
              <LoginButton title={"Logout"} />
            </div>
          </div>
        </Card>

        {/* Tabs Section */}
        <div className="max-w-full mx-auto p-6 bg-white shadow-xl border-2 rounded-lg">
          <h1 className="text-2xl font-bold mb-6">Update Profile</h1>
          <Form {...form}>
            <form onSubmit={handleForm}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {/* First Name */}
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    type="text"
                    id="firstName"
                    placeholder="Enter your first name"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <span className="text-errorText font-bold text-sm">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
                {/* Last Name */}
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    type="text"
                    id="lastName"
                    placeholder="Enter your last name"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <span className="text-errorText font-bold text-sm">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Label htmlFor="email" className="font-semibold">
                      Email
                    </Label>
                    <MdOutlineAttachEmail className="ml-2" />
                  </div>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-errorText font-bold text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                {/* Phone Number */}
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Label htmlFor="phone" className="font-semibold">
                      Phone Number
                    </Label>
                    <FiPhoneCall className="ml-2" />
                  </div>
                  <Input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    {...register("phoneNumber")}
                  />
                  {errors.phoneNumber && (
                    <span className="text-errorText font-bold text-sm">
                      {errors.phoneNumber.message}
                    </span>
                  )}
                </div>
                {/* Qualification */}
                <div className="space-y-2">
                  <Label
                    htmlFor="qualification"
                    className="font-semibold text-gray-700"
                  >
                    Highest Qualification
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      form.setValue("qualification", value)
                    }
                    value={form.watch("qualification")}
                  >
                    <SelectTrigger id="qualification">
                      <SelectValue placeholder="Select Qualification" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-50">
                      <SelectItem value="high_school">High School</SelectItem>
                      <SelectItem value="bachelor">
                        Bachelor’s Degree
                      </SelectItem>
                      <SelectItem value="master">Master’s Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.qualification && (
                    <span className="text-errorText font-bold text-sm">
                      {errors.qualification.message as string}
                    </span>
                  )}
                </div>
                {/* Skill */}
                <div className="space-y-2">
                  <div className="flex">
                    <Label htmlFor="skill" className="font-semibold">
                      Skill
                    </Label>
                    <AiOutlineUsergroupDelete className="ml-1" />
                  </div>
                  <Select
                    value={form.watch("skill")}
                    onValueChange={(value) => form.setValue("skill", value)}
                    name="skill"
                  >
                    <SelectTrigger id="skill">
                      <SelectValue placeholder="Select skill" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-100">
                      <SelectItem value="frontend">
                        Frontend Development
                      </SelectItem>
                      <SelectItem value="backend">
                        Backend Development
                      </SelectItem>
                      <SelectItem value="database">
                        Database Management
                      </SelectItem>
                      <SelectItem value="devops">DevOps</SelectItem>
                      <SelectItem value="docker">Docker</SelectItem>
                      <SelectItem value="kubernetes">Kubernetes</SelectItem>
                      <SelectItem value="aws">AWS</SelectItem>
                      <SelectItem value="azure">Azure</SelectItem>
                      <SelectItem value="gcp">Google Cloud Platform</SelectItem>
                      <SelectItem value="mobile">Mobile Development</SelectItem>
                      <SelectItem value="android">Android</SelectItem>
                      <SelectItem value="flutter">Flutter</SelectItem>
                      <SelectItem value="react_native">React Native</SelectItem>
                      <SelectItem value="ai_ml">
                        AI & Machine Learning
                      </SelectItem>
                      <SelectItem value="nlp">
                        Natural Language Processing
                      </SelectItem>
                      <SelectItem value="computer_vision">
                        Computer Vision
                      </SelectItem>
                      <SelectItem value="cybersecurity">
                        Cybersecurity
                      </SelectItem>
                      <SelectItem value="game_dev">Game Development</SelectItem>
                      <SelectItem value="data_analysis">
                        Data Analysis
                      </SelectItem>
                      <SelectItem value="data_engineering">
                        Data Engineering
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.skill && (
                    <span className="text-errorText font-bold text-sm">
                      {errors.skill.message}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Label htmlFor="gender" className="font-semibold">
                      Gender
                    </Label>
                    <IoTransgenderOutline className="ml-2" />
                  </div>
                  <Select
                    onValueChange={(value) => form.setValue("gender", value)}
                    value={form.watch("gender")}
                  >
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-100">
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gender && (
                    <span className="text-errorText font-bold text-sm">
                      {errors.gender.message}
                    </span>
                  )}
                </div>
                {/* Address (Full Width) */}
                <div className="space-y-2 md:col-span-2">
                  <div className="flex items-center">
                    <Label htmlFor="address" className="font-semibold">
                      Address
                    </Label>
                    <FaRegAddressCard className="ml-2" />
                  </div>
                  <Input
                    type="text"
                    id="address"
                    placeholder="Enter your address"
                    {...register("address")}
                  />
                  {errors.address && (
                    <span className="text-errorText font-bold text-sm">
                      {errors.address.message}
                    </span>
                  )}
                </div>
              </div>
              {/* Submit Button */}
              <div className="w-full flex justify-center mt-12">
                <Button type="submit" className="btn-orange w-[40%]">
                  Update Profile
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
