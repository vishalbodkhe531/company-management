import { empSchema } from "@/components/form-validation /empValidation";
import ToasterComponent, {
  getErrorMessage,
} from "@/components/toaster/Toaster";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEmpLoginMutation } from "@/redux/api/emp-API/EmpAPI";
import { empExist } from "@/redux/reducer/EmpReducer";
import { EmpFormValue } from "@/types/validation-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { IoTransgenderOutline } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function SignInEmp() {
  const [empLogin] = useEmpLoginMutation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const form = useForm<EmpFormValue>({
    resolver: zodResolver(empSchema),
    defaultValues: {
      email: "",
      department: "",
      gender: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const handleForm = handleSubmit(async (data) => {
    const res = await empLogin(data);

    if ("data" in res && res.data) {
      const {
        _id,
        firstName,
        lastName,
        email,
        phoneNumber,
        resignationDate,
        qualification,
        department,
        gender,
        address,
        isVerified,
        profilePic,
      } = res.data;

      dispatch(
        empExist({
          _id,
          firstName,
          lastName,
          email,
          phoneNumber,
          resignationDate,
          qualification,
          department,
          gender,
          address,
          isVerified,
          profilePic,
        })
      );

      ToasterComponent({
        message: "Login successfully !!",
        description: "Thanks for Login",
        firstLabel: "Close",
      });
      navigate("/");
    } else if ("error" in res) {
      const errorMessage = getErrorMessage(res.error);
      ToasterComponent({
        message: errorMessage,
        description: "You are not logged in",
        firstLabel: "Close",
      });
    }
  });

  return (
    <>
      <Form {...form}>
        <form onSubmit={handleForm}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
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
                {...register("department")}
                defaultValue=""
              >
                <option value="" disabled>
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
              {errors.department && (
                <span className="text-errorText font-bold text-sm">
                  {errors.department.message as string}
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
              <select
                id="gender"
                className="h-10 w-full border bg-white rounded-md text-gray-800 px-3"
                {...register("gender")}
                defaultValue=""
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <span className="text-errorText font-bold text-sm">
                  {errors.gender.message as string}
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
            create accout
            <span className="font-semibold text-blue-600 cursor-pointer underline">
              <Link to={"/emp/sign-up"}>Sign Up</Link>
            </span>
          </div>
        </form>
      </Form>
    </>
  );
}

export default SignInEmp;
