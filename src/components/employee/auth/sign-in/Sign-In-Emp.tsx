import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { MdOutlineAttachEmail } from "react-icons/md";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { FaTransgenderAlt } from "react-icons/fa";

function SignInEmp() {
  return (
    <>
      <form className="">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {/* Email */}
          <div className="space-y-2">
            <div className="flex">
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
            <div className="flex">
              <Label htmlFor="gender" className="font-semibold">
                Gender
              </Label>
              <FaTransgenderAlt className="ml-2" />
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
          create accout
          <span className="font-semibold text-blue-600 cursor-pointer underline">
            <Link to={"/emp/sign-up"}>Sign Up</Link>
          </span>
        </div>
      </form>
    </>
  );
}

export default SignInEmp;
