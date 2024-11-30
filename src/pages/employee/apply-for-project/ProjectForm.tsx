import {
  UserFormValues,
  userSchema,
} from "@/components/form-validation /Validation";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function ProjectForm() {
  const form = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      projectTitle: "",
      phoneNo: "",
      department: "",
      address: "",
      resignationDate: "",
      gender: undefined,
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  const handleForm = handleSubmit((data: UserFormValues) => {
    console.log("Form data submitted: ", data);
  });

  return (
    <>
      <div className="mb-10">
        <div className="font-system w-full flex justify-center">
          <div className="w-[50%] text-center text-mainHeading mt-[2rem]">
            <h3 className="font-bold text-title block">
              Exit Interview Questionnaire
            </h3>
            <p className="text-smallTitle">
              We would appreciate you taking a few minutes to answer the
              following questions as honestly as possible. Your individual
              responses are treated as confidential and will not become part of
              your personnel file. We believe that the information is of vital
              importance and will assist in analyzing our employee retention and
              turnover. Thank you for your cooperation!
            </p>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={handleForm}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 m-5">
              {/* First Name and Last Name */}
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="First Name"
                  className="h-14 !text-inputText"
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <span className="text-errorText font-bold text-sm">
                    {errors.firstName.message as string}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Last Name"
                  className="h-14 !text-inputText"
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <span className="text-errorText font-bold text-sm">
                    {errors.lastName.message as string}
                  </span>
                )}
              </div>

              {/* Email and Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="h-14 !text-inputText"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-errorText font-bold text-sm">
                    {errors.email.message as string}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="h-14 !text-inputText"
                  {...register("phoneNo")}
                />
                {errors.phoneNo && (
                  <span className="text-errorText font-bold text-sm">
                    {errors.phoneNo.message as string}
                  </span>
                )}
              </div>

              {/* Department and Job Title */}
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input
                  id="department"
                  placeholder="Department"
                  className="h-14 !text-inputText"
                  {...register("department")}
                />
                {errors.department && (
                  <span className="text-errorText font-bold text-sm">
                    {errors.department.message as string}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="Project Title">Project Title</Label>
                <Input
                  id="Project Title"
                  placeholder="Project Title"
                  className="h-14 !text-inputText"
                  {...register("projectTitle")}
                />
                {errors.projectTitle && (
                  <span className="text-errorText font-bold text-sm">
                    {errors.projectTitle.message as string}
                  </span>
                )}
              </div>

              <div className="space-y-2 ">
                <Label htmlFor="gender">Gender</Label>
                <select
                  id="gender"
                  className="h-14 w-full bg-background border rounded-md !text-inputText px-3"
                  {...register("gender")}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && (
                  <span className="text-errorText font-bold text-sm">
                    {errors.gender.message as string}
                  </span>
                )}
              </div>

              {/* Resignation Date and Feedback */}
              <div className="space-y-2">
                <Label htmlFor="resignationDate">Resignation Date</Label>
                <Input
                  id="resignationDate"
                  type="date"
                  placeholder="Resignation Date"
                  className="h-14 !text-inputText "
                  {...register("resignationDate")}
                />
                {errors.resignationDate && (
                  <span className="text-errorText font-bold text-sm">
                    {errors.resignationDate.message as string}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  placeholder="Your Address"
                  className="h-14 !text-inputText"
                  {...register("address")}
                />
                {errors.address && (
                  <span className="text-errorText font-bold text-sm">
                    {errors.address.message as string}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Button
                type="submit"
                className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}

export default ProjectForm;
