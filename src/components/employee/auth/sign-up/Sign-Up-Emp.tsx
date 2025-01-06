import { empSchema } from "@/components/form-validation /empValidation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EmpFormValue } from "@/types/validation-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { Form, useForm } from "react-hook-form";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { BsCalendar2Date } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoTransgenderOutline } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function SignUpEmp() {
  const form = useForm<EmpFormValue>({
    resolver: zodResolver(empSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      birthDay: "",
      highestQualification: "",
      department: "",
      gender: "other",
      address: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const handleForm = handleSubmit((data) => {
    console.log(data);
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
          </div>
          {errors.firstName && (
            <span className="text-errorText font-bold text-sm">
              {errors.firstName.message as string}
            </span>
          )}
          {/* Last Name */}
          <div className="space-y-2">
            <Label htmlFor="lastName" className="font-semibold">
              Last Name
            </Label>
            <Input
              id="lastName"
              placeholder="Last Name"
              className=" !text-inputText"
            />
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
            />
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
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="qualification"
              className="font-semibold text-gray-700"
            >
              Highest Qualification
            </label>
            <select
              id="qualification"
              className="h-10 w-full border border-gray-300 rounded-md bg-white text-gray-800 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled selected>
                Select Qualification
              </option>
              <option value="high_school">High School</option>
              <option value="bachelor">Bachelor’s Degree</option>
              <option value="master">Master’s Degree</option>
              <option value="phd">PhD</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Department */}
          <div className="space-y-2">
            <div className="flex">
              <Label htmlFor="department" className="font-semibold">
                Department
              </Label>
              <AiOutlineUsergroupDelete className="ml-1" />
            </div>
            <select
              id="department"
              className="w-full border bg-white border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled selected>
                Select Department
              </option>
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>

              <option value="database">Database Management</option>

              <option value="devops">DevOps</option>
              <option value="docker">Docker</option>
              <option value="kubernetes">Kubernetes</option>
              <option value="aws">AWS</option>
              <option value="azure">Azure</option>
              <option value="gcp">Google Cloud Platform</option>
              <option value="mobile">Mobile Development</option>
              <option value="android">Android</option>
              <option value="flutter">Flutter</option>
              <option value="react_native">React Native</option>

              <option value="ai_ml">AI & Machine Learning</option>
              <option value="nlp">Natural Language Processing</option>
              <option value="computer_vision">Computer Vision</option>

              <option value="cybersecurity">Cybersecurity</option>
              <option value="game_dev">Game Development</option>
              <option value="data_analysis">Data Analysis</option>
              <option value="data_engineering">Data Engineering</option>
            </select>
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="gender" className="font-semibold">
                Gender
              </Label>
              <IoTransgenderOutline className="ml-2" />
            </div>
            <select
              id="gender"
              className="h-10 w-full border bg-white rounded-md !text-inputText px-3"
            >
              <option value="" disabled selected>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {/* Resignation Date */}
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="resignationDate" className="font-semibold">
                Birth Date
              </Label>
              <BsCalendar2Date className="ml-2" size={"14px"} />
            </div>
            <Input
              id="resignationDate"
              type="date"
              placeholder="Resignation Date"
              className=" !text-inputText"
            />
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
            />
          </div>
          {/* <div className="">alredy login Sign In</div> */}
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
