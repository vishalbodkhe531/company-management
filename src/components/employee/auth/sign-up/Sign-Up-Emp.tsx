// import { socket } from "@/components/admin/emp-management/Notifications";
import { empSchema } from "@/components/form-validation /empValidation";
import ToasterComponent, {
  getErrorMessage,
} from "@/components/toaster/Toaster";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEmpRegisterMutation } from "@/redux/api/emp-API/EmpAPI";
import { Employee } from "@/types/types";
import { EmpFormValue } from "@/types/validation-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { BsCalendar2Date } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoTransgenderOutline } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function SignUpEmp() {
  const [empRegister] = useEmpRegisterMutation();

  const navigate = useNavigate();

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
  } = form;

  const handleForm = handleSubmit(async (data) => {
    const res = await empRegister(data as Employee);
    console.log(res);

    if ("data" in res && res.data) {
      ToasterComponent({
        message: "Admin Registered Successfully !!",
        description: "Thanks for Authentication",
        firstLabel: "Close",
      });
      navigate("/emp/sign-in");
    } else if ("error" in res) {
      const errorMessage = getErrorMessage(res.error);
      ToasterComponent({
        message: errorMessage,
        description: "You are not registered !!",
        firstLabel: "Close",
      });
    }
  });
  return (
    <Form {...form}>
      <form onSubmit={handleForm}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* First Name */}
          <div className="space-y-2">
            <Label htmlFor="firstName" className="font-semibold">
              First Name
            </Label>
            <Input
              id="firstName"
              placeholder="First Name"
              className="!text-inputText"
              {...register("firstName")}
            />
            {errors.firstName && (
              <span className="text-errorText font-bold text-sm">
                {errors.firstName.message as string}
              </span>
            )}
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <Label htmlFor="lastName" className="font-semibold">
              Last Name
            </Label>
            <Input
              id="lastName"
              placeholder="Last Name"
              className=" !text-inputText"
              {...register("lastName")}
            />
            {errors.lastName && (
              <span className="text-errorText font-bold text-sm">
                {errors.lastName.message as string}
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
              id="email"
              type="email"
              placeholder="Email"
              className="!text-inputText"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-errorText font-bold text-sm">
                {errors.email.message as string}
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
              id="phone"
              type="tel"
              placeholder="Phone Number"
              className=" !text-inputText"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <span className="text-errorText font-bold text-sm">
                {errors.phoneNumber.message as string}
              </span>
            )}
          </div>

          {/* Highest Qualification */}

          <div className="space-y-2">
            <Label
              htmlFor="qualification"
              className="font-semibold text-gray-700"
            >
              Highest Qualification
            </Label>
            <Select
              onValueChange={(value) => form.setValue("qualification", value)}
              defaultValue=""
            >
              <SelectTrigger id="qualification">
                <SelectValue placeholder="Select Qualification" />
              </SelectTrigger>
              <SelectContent className="bg-gray-50">
                <SelectItem value="high_school">High School</SelectItem>
                <SelectItem value="bachelor">Bachelor’s Degree</SelectItem>
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
              onValueChange={(value) => form.setValue("skill", value)}
              defaultValue=""
            >
              <SelectTrigger id="skill">
                <SelectValue placeholder="Select Skill" />
              </SelectTrigger>
              <SelectContent className="bg-gray-50">
                <SelectItem value="frontend">Frontend Development</SelectItem>
                <SelectItem value="backend">Backend Development</SelectItem>
                <SelectItem value="database">Database Management</SelectItem>
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
                <SelectItem value="ai_ml">AI & Machine Learning</SelectItem>
                <SelectItem value="nlp">Natural Language Processing</SelectItem>
                <SelectItem value="computer_vision">Computer Vision</SelectItem>
                <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                <SelectItem value="game_dev">Game Development</SelectItem>
                <SelectItem value="data_analysis">Data Analysis</SelectItem>
                <SelectItem value="data_engineering">
                  Data Engineering
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.skill && (
              <span className="text-errorText font-bold text-sm">
                {errors.skill.message as string}
              </span>
            )}
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="gender" className="font-semibold">
                Gender
              </Label>
              <IoTransgenderOutline className="ml-2" />
            </div>
            <Select
              onValueChange={(value) => form.setValue("gender", value)}
              defaultValue=""
            >
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent className="bg-gray-50">
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.gender && (
              <span className="text-errorText font-bold text-sm">
                {errors.gender.message as string}
              </span>
            )}
          </div>

          {/* Resignation Date */}
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="resignationDate" className="font-semibold">
                Resignation Date
              </Label>
              <BsCalendar2Date className="ml-2" size={"14px"} />
            </div>
            <Input
              id="resignationDate"
              type="date"
              placeholder="Resignation Date"
              className=" !text-inputText"
              {...register("resignationDate")}
            />
            {errors.resignationDate && (
              <span className="text-errorText font-bold text-sm">
                {errors.resignationDate.message as string}
              </span>
            )}
          </div>

          {/* Address */}
          <div className="space-y-2 md:col-span-2  lg:col-span-3">
            <div className="flex items-center">
              <Label htmlFor="address" className="font-semibold">
                Address
              </Label>
              <FaRegAddressCard className="ml-2" />
            </div>

            <Input
              id="address"
              placeholder="Your Address"
              className="h-10 !text-inputText border-2"
              {...register("address")}
            />
            {errors.address && (
              <span className="text-errorText font-bold text-sm">
                {errors.address.message as string}
              </span>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <Button
            type="submit"
            className="px-6 py-3 text-white w-[50%] btn-orange  hover:bg-orange-600"
          >
            Submit
          </Button>
        </div>
        <div className="text-end font-semibold rounded-md mt-5">
          Already logged in?
          <span className="font-semibold text-blue-600 cursor-pointer underline">
            <Link to={"/emp/sign-in"}>Sign In</Link>
          </span>
        </div>
      </form>
    </Form>
  );
}

export default SignUpEmp;
