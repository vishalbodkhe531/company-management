import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";

function AuthEmpPage() {
  // const form = useForm<UserFormValues>({
  //   resolver: zodResolver(userSchema),
  //   defaultValues: {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     projectTitle: "",
  //     phoneNo: "",
  //     department: "",
  //     address: "",
  //     resignationDate: "",
  //     gender: undefined,
  //   },
  // });

  return (
    <>
      <div className=" min-h-screen flex justify-center bg-gradient-to-tr from-teal-400 via-blue-500 to-indigo-700  items-center">
        <div className=" w-[50%] flex justify-center items-center text-white font-semibold">
          <div className="w-[30%] text-center ">
            <h3 className="font-bold text-title block">
              Exit Interview Questionnaire
            </h3>
            <p className="text-smallTitle">
              We would appreciate you taking a few minutes to answer the
              following questions as honestly as possible. Your individual
              responses are treated as confidential
            </p>
          </div>
        </div>
        {/* <Form> */}
        <form className=" w-full p-20 rounded-lg rounded-l-[10rem]  shadow-2xl shadow-black bg-white">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* First Name */}
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="First Name"
                className=" !text-inputText"
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Last Name"
                className=" !text-inputText"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                className="!text-inputText"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Phone Number"
                className=" !text-inputText"
              />
            </div>

            {/* Department */}
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                placeholder="Department"
                className="!text-inputText"
              />
            </div>

            {/* Project Title */}
            <div className="space-y-2">
              <Label htmlFor="ProjectTitle">Project Title</Label>
              <Input
                id="ProjectTitle"
                placeholder="Project Title"
                className=" !text-inputText"
              />
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
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
              <Label htmlFor="resignationDate">Resignation Date</Label>
              <Input
                id="resignationDate"
                type="date"
                placeholder="Resignation Date"
                className=" !text-inputText"
              />
            </div>

            {/* Address */}
            <div className="space-y-2 md:col-span-2 lg:col-span-3">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="Your Address"
                className="h-10 !text-inputText"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
            <Button
              type="submit"
              className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Submit
            </Button>
          </div>
        </form>

        {/* </div> */}
        {/* </Form> */}
      </div>
    </>
  );
}

export default AuthEmpPage;
