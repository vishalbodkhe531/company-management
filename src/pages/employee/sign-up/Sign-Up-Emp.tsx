import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";

function SignUpEmp() {
  return (
    <form className="max-w-3xl mx-auto space-y-8 p-6 rounded-md shadow-lg text-gray-100 mb-10 ">
      {/* Personal Information */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <Label htmlFor="firstName" className="block mb-2 text-sm">
              First Name
            </Label>
            <Input
              id="firstName"
              placeholder="Enter first name"
              className="text-inputTitle"
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="block mb-2 text-sm">
              Last Name
            </Label>
            <Input
              id="lastName"
              placeholder="Enter last name"
              className="bg-gray-700 text-gray-100"
            />
          </div>
          <div>
            <Label htmlFor="email" className="block mb-2 text-sm">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email"
              className="bg-gray-700 text-gray-100"
            />
          </div>
          <div>
            <Label htmlFor="dob" className="block mb-2 text-sm">
              Date of Birth
            </Label>
            <Input id="dob" type="date" className="bg-gray-700 text-gray-100" />
          </div>
          <div>
            <Label htmlFor="gender" className="block mb-2 text-sm">
              Gender
            </Label>
            <Select>
              <SelectTrigger className="bg-gray-700 text-gray-100">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 text-gray-100">
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="nonbinary">Non-Binary</SelectItem>
                <SelectItem value="preferNotToSay">
                  Prefer not to say
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="phone" className="block mb-2 text-sm">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter phone number"
              className="bg-gray-700 text-gray-100"
            />
          </div>
        </div>
      </div>

      {/* Job Details */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Job Details</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <Label htmlFor="jobTitle" className="block mb-2 text-sm">
              Job Title
            </Label>
            <Input
              id="jobTitle"
              placeholder="Enter job title"
              className="bg-gray-700 text-gray-100"
            />
          </div>
          <div>
            <Label htmlFor="department" className="block mb-2 text-sm">
              Department
            </Label>
            <Select>
              <SelectTrigger className="bg-gray-700 text-gray-100">
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 text-gray-100">
                <SelectItem value="hr">HR</SelectItem>
                <SelectItem value="it">IT</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="salary" className="block mb-2 text-sm">
              Salary
            </Label>
            <Input
              id="salary"
              type="number"
              placeholder="Enter salary"
              className="bg-gray-700 text-gray-100"
            />
          </div>
          <div>
            <Label htmlFor="dateOfJoining" className="block mb-2 text-sm">
              Date of Joining
            </Label>
            <Input
              id="dateOfJoining"
              type="date"
              className="bg-gray-700 text-gray-100"
            />
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Emergency Contact</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <Label htmlFor="emergencyName" className="block mb-2 text-sm">
              Name
            </Label>
            <Input
              id="emergencyName"
              placeholder="Enter name"
              className="bg-gray-700 text-gray-100"
            />
          </div>
          <div>
            <Label htmlFor="emergencyPhone" className="block mb-2 text-sm">
              Phone
            </Label>
            <Input
              id="emergencyPhone"
              type="tel"
              placeholder="Enter phone number"
              className="bg-gray-700 text-gray-100"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button type="submit" className="bg-blue-600 hover:bg-blue-500">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default SignUpEmp;
