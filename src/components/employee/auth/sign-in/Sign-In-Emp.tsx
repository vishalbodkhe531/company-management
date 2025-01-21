import { empSchema } from "@/components/form-validation /empValidation";
import ToasterComponent, {
  getErrorMessage,
} from "@/components/toaster/Toaster";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useEmpLoginMutation } from "@/redux/api/emp-API/EmpAPI";
import { empExist } from "@/redux/reducer/EmpReducer";
import { empLoginRequest } from "@/types/api-types";
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
      skill: "",
      gender: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const handleForm = handleSubmit(async (data) => {
    const res = await empLogin(data as empLoginRequest);

    console.log("data : ", data);

    if ("data" in res && res.data) {
      dispatch(empExist(res.data));
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

            {/* Skill */}
            <div className="space-y-2">
              <div className="flex items-center">
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
                  <SelectItem value="nlp">
                    Natural Language Processing
                  </SelectItem>
                  <SelectItem value="computer_vision">
                    Computer Vision
                  </SelectItem>
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
                <SelectContent>
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
            Create account
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
