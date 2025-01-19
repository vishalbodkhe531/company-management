import { empSchema } from "@/components/form-validation /empValidation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import { useEmpUpdateMutation } from "@/redux/api/emp-API/EmpAPI";
import { RootState } from "@/redux/store";
import { EmpFormValue } from "@/types/validation-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const Profile = () => {
  // const employee = {
  //   firstName: "Ram",
  //   lastName: "Patil",
  //   email: "ram@gmail.com",
  //   phoneNumber: "9128371232",
  //   resignationDate: "01-01-2003",
  //   qualification: "BTech",
  //   skill: "Java",
  //   gender: "male",
  //   address: "pune xyz colleny",
  // };

  const { employee } = useSelector((state: RootState) => state.empReducers);

  const [empUpdate] = useEmpUpdateMutation();

  const form = useForm<EmpFormValue>({
    resolver: zodResolver(empSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      resignationDate: "",
      qualification: "",
      skill: "",
      gender: "Other",
      address: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  useEffect(() => {
    if (employee) {
      reset({
        firstName: employee.firstName,
        email: employee.email,
        phoneNumber: employee.phoneNumber,
        resignationDate: employee.resignationDate,
        qualification: employee.qualification,
        skill: employee.skill,
        gender: employee.gender,
        address: employee.address,
      });
    }
  }, [employee, reset]);

  const handleForm = handleSubmit(async (data) => {
    console.log(data);
    const res = await empUpdate({ data, id: employee!._id });
    console.log(res);
    // reset({
    //   firstName: data.firstName,
    //   lastName: data.lastName,
    //   email: data.email,
    //   phoneNumber: data.phoneNumber,
    //   resignationDate: data.resignationDate,
    //   qualification: data.qualification,
    //   skill: data.skill,
    //   gender: data.gender,
    //   address: data.address,
    // });
  });

  return (
    <div className="min-h-screen bg-gray-500 p-8">
      <motion.div
        className="max-w-full mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Header Section */}
        <Card className="mb-8">
          <CardContent className="flex items-center p-6 bg-white rounded-xl shadow-xl bottom-2">
            <Avatar className="w-24 h-24 mr-6">
              <AvatarImage src={"profileImage"} alt="Profile Picture" />
              <AvatarFallback>{"employee.name[0]"}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">{"employee"}</h1>
              <p className="text-gray-500">{"employee.role"}</p>
              <div className="mt-2">
                <p>
                  <strong>Email:</strong> {"employee.email"}
                </p>
                <p>
                  <strong>Phone:</strong> {"employee.phone"}
                </p>
                <p>
                  <strong>Department:</strong> {"employee.department"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <div className="max-w-full mx-auto p-6 bg-white shadow-xl border-2 rounded-lg">
          <h1 className="text-2xl font-bold mb-6">Update Profile</h1>
          <Form {...form}>
            <form
              onSubmit={handleForm}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
            >
              {/* First Name */}
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  {...register("firstName")}
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  {...register("lastName")}
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  {...register("email")}
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  type="tel"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  {...register("phoneNumber")}
                />
              </div>

              {/* Resignation Date */}
              <div className="space-y-2">
                <Label htmlFor="resignationDate">Resignation Date</Label>
                <Input
                  type="date"
                  id="resignationDate"
                  {...register("resignationDate")}
                />
              </div>

              {/* Qualification */}
              <div className="space-y-2">
                <Label htmlFor="qualification">Qualification</Label>
                <Select {...register("qualification")}>
                  <SelectTrigger id="skill">
                    <SelectValue placeholder="Select qualification" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-100">
                    <SelectItem value="high_school">High School</SelectItem>
                    <SelectItem value="bachelor">Bachelor’s Degree</SelectItem>
                    <SelectItem value="master">Master’s Degree</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Skill */}
              <div className="space-y-2">
                <Label htmlFor="skill">Skill</Label>
                <Select {...register("skill")} name="skill">
                  <SelectTrigger id="skill">
                    <SelectValue placeholder="Select skill" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-100">
                    <SelectItem value="frontend">
                      Frontend Development
                    </SelectItem>
                    <SelectItem value="backend">Backend Development</SelectItem>
                    <SelectItem value="database">
                      Database Management
                    </SelectItem>
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
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select {...register("gender")}>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-100">
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Address (Full Width) */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  type="text"
                  id="address"
                  placeholder="Enter your address"
                  {...register("address")}
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 flex justify-end">
                <Button type="submit" className="btn-orange">
                  Update Profile
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
