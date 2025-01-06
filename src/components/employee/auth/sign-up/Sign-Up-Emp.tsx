import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { IoTransgenderOutline } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { BsCalendar2Date } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";

function SignUpEmp() {
  return (
    <form className="">
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
          />
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

        {/* Project Title */}
        <div className="space-y-2">
          <div className="flex items-center">
            <Label htmlFor="ProjectTitle" className="font-semibold">
              Highest Qualification
            </Label>
            <CiCircleList className="ml-2" />
          </div>
          <Input
            id="ProjectTitle"
            placeholder="Your Qualification"
            className=" !text-inputText"
          />
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
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-inputText"
          >
            <option value="">Select Department</option>
            <option value="hr">HR</option>
            <option value="engineering">Engineering</option>
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
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
            className="h-10 w-full border rounded-md !text-inputText px-3"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
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
  );
}

export default SignUpEmp;
