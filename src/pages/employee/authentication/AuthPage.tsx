import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

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
      <div className="min-h-[190vh] sm:min-h-[140vh] lg:min-h-[100vh] flex justify-center  bg-gradient-to-tr flex-wrap-reverse lg:flex-nowrap items-center  lg:item-start from-teal-400 via-blue-500 to-indigo-700">
        <div className="w-[90%] lg:w-[52%] text-white flex justify-center h-[20rem] font-semibold">
          <div className="flex w-[100%] justify-center gap-10 items-center flex-col lg:w-[90%]">
            <div className="hidden md:block">
              <h3 className="font-bold text-title block">
                Exit Interview Questionnaire
              </h3>
              When designing an Employee Form, implementing security features is
              crucial to protect sensitive employee data. Below are some key
              security features and practices to include:
            </div>
            <div className="">
              <h3 className="font-bold text-title block">Data Encryption</h3>
              In Transit:Use HTTPS (SSL/TLS) for secure data transmission
              between the client and server. At Rest: Encrypt sensitive data
              like passwords, addresses, and identification numbers in the
              database using encryption algorithms such as AES-256.
            </div>
          </div>
        </div>

        {/* <Form> */}
        <div className="w-full p-3 sm:p-10 lg:p-20  lg:rounded-l-[10rem]  shadow-2xl shadow-black bg-white">
          <h1 className="h-32  md:h-16 lg:h-16 m-2 font-semibold text-2xl sm:text-3xl lg:text-3xl">
            Employee Information Hub*
          </h1>
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
                <Label htmlFor="email" className="font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="!text-inputText"
                />
              </div>
              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-semibold">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className=" !text-inputText"
                />
              </div>
              {/* Department */}
              <div className="space-y-2">
                <Label htmlFor="department" className="font-semibold">
                  Department
                </Label>
                <Input
                  id="department"
                  placeholder="Department"
                  className="!text-inputText "
                />
              </div>
              {/* Project Title */}
              <div className="space-y-2">
                <Label htmlFor="ProjectTitle" className="font-semibold">
                  {/*ex.... Degree, diploma, or certification. */}
                  Highest Qualification
                </Label>
                <Input
                  id="ProjectTitle"
                  placeholder="Your Qualification"
                  className=" !text-inputText"
                />
              </div>
              {/* Gender */}
              <div className="space-y-2">
                <Label htmlFor="gender" className="font-semibold">
                  Gender
                </Label>
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
                <Label htmlFor="resignationDate" className="font-semibold">
                  Resignation Date
                </Label>
                <Input
                  id="resignationDate"
                  type="date"
                  placeholder="Resignation Date"
                  className=" !text-inputText"
                />
              </div>
              {/* Address */}
              <div className="space-y-2 md:col-span-2  lg:col-span-3">
                <Label htmlFor="address" className="font-semibold">
                  Address
                </Label>
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
                Sign In
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AuthEmpPage;
