import { employeeSchema } from "@/components/form-validation /Validation";
import ToasterComponent from "@/components/toaster/Toaster";
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import { EmployeeFormValues } from "@/types/validation-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const EmployeeSignUp = () => {
  const navigate = useNavigate();

  const form = useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeSchema),
  });

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const handleForm = handleSubmit((data: EmployeeFormValues) => {
    console.log("EmployeeFormValues", data);

    const jsonUser = JSON.stringify(data);
    localStorage.setItem("Employee", jsonUser);
    console.log("Employee successfully saved in local storage");

    ToasterComponent({
      message: "Employee Registered Successfully !!",
      description: "Thanks for Authentication",
      firstLable: "Close",
    });

    navigate("/admin/sign-in");
  });

  return (
    <Form {...form}>
      <form
        onSubmit={handleForm}
        className="max-w-full mx-auto p-6 bg-gray-800 rounded-lg shadow-lg h-[100vh]"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Employee Sign-Up
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="John Doe"
              {...form.register("fullName")}
              className="mt-1 !text-inputText h-12"
            />
            {errors.fullName && (
              <p className="text-errorText font-bold text-sm">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Input
              id="dateOfBirth"
              type="date"
              {...form.register("dateOfBirth")}
              className="mt-1 !text-inputText h-12"
            />
          </div>

          {/* Gender */}
          <div>
            <Label htmlFor="gender">Gender</Label>
            <Select
              onValueChange={(value) =>
                setValue("gender", value as EmployeeFormValues["gender"])
              }
              value={watch("gender")}
            >
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black">
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.gender && (
              <p className="text-errorText font-bold text-sm">
                {errors.gender.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              {...form.register("email")}
              className="mt-1 !text-inputText h-12"
            />
            {errors.email && (
              <p className="text-errorText font-bold text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="1234567890"
              {...form.register("phoneNumber")}
              className="mt-1 !text-inputText h-12"
            />
            {errors.phoneNumber && (
              <p className="text-errorText font-bold text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* Address */}
          <div>
            <Label htmlFor="address">Address</Label>
            <Textarea
              id="address"
              placeholder="123 Main Street"
              {...form.register("address")}
              className="mt-1 !text-inputText h-12"
            />
            {errors.address && (
              <p className="text-errorText font-bold text-sm">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Employee ID */}
          <div>
            <Label htmlFor="employeeId">Employee ID</Label>
            <Input
              id="employeeId"
              placeholder="EMP1234"
              {...form.register("employeeId")}
              className="mt-1 !text-inputText h-12"
            />
            {errors.employeeId && (
              <p className="text-errorText font-bold text-sm">
                {errors.employeeId.message}
              </p>
            )}
          </div>

          {/* Job Title */}
          <div>
            <Label htmlFor="jobTitle">Job Title</Label>
            <Input
              id="jobTitle"
              placeholder="Software Engineer"
              {...form.register("jobTitle")}
              className="mt-1 !text-inputText h-12"
            />
            {errors.jobTitle && (
              <p className="text-errorText font-bold text-sm">
                {errors.jobTitle.message}
              </p>
            )}
          </div>

          {/* Department */}
          <div>
            <Label htmlFor="department">Department</Label>
            <Select
              onValueChange={(value) =>
                setValue(
                  "department",
                  value as EmployeeFormValues["department"]
                )
              }
              value={watch("department")}
            >
              <SelectTrigger id="department">
                <SelectValue placeholder="Select Department" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black">
                <SelectItem value="HR">HR</SelectItem>
                <SelectItem value="IT">IT</SelectItem>
                <SelectItem value="Sales">Sales</SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
              </SelectContent>
            </Select>
            {errors.department && (
              <p className="text-errorText font-bold text-sm">
                {errors.department.message}
              </p>
            )}
          </div>

          {/* Employment Type */}
          <div>
            <Label htmlFor="employmentType">Employment Type</Label>
            <Select
              onValueChange={(value) =>
                setValue(
                  "employmentType",
                  value as EmployeeFormValues["employmentType"]
                )
              }
              value={watch("employmentType")}
            >
              <SelectTrigger id="employmentType">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black">
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
              </SelectContent>
            </Select>
            {errors.employmentType && (
              <p className="text-errorText font-bold text-sm">
                {errors.employmentType.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <Button type="submit" className="bg-Btn1">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EmployeeSignUp;
