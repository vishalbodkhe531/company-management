import ToasterComponent, {
  getErrorMessage,
} from "@/components/toaster/Toaster";
import { Form } from "@/components/ui/form";
import { useCreateProjectMutation } from "@/redux/api/admin-API/ProjectAPI";
import { addProject } from "@/redux/reducer/ProjectReducer";
import { adminProjectType } from "@/types/reducer-types";
import { ProjectFormValue } from "@/types/validation-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "../../ui/select";
import { Separator } from "../../ui/separator";
import SettingProjectList from "./SettingProjectList";
import { Textarea } from "@/components/ui/textarea";
import { projectSchema } from "@/components/form-validation /Validation";

const ProjectSettings = () => {
  const [createProject] = useCreateProjectMutation();
  const dispatch = useDispatch();

  const form = useForm<ProjectFormValue>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      projectName: "",
      startDate: "",
      endDate: "",
      budget: undefined,
      projectManager: "",
      projectDescription: "",
    },
  });

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = form;

  const selectedManager = watch("projectManager");

  const managers = ["Select Manager", "Rahul", "Sumit", "Ajay", "Vikas"];

  const handleForm = handleSubmit(async (data: ProjectFormValue) => {
    console.log(data);
    const res = await createProject(data);
    if (res.data) {
      dispatch(addProject(data as adminProjectType));
      ToasterComponent({
        message: res.data.message,
        description: "Project activated successfully.",
        firstLabel: "Close",
      });

      reset();
    } else if (res.error) {
      const errorMessage = getErrorMessage(res.error);
      ToasterComponent({
        message: errorMessage,
        description: "Create another project...",
        firstLabel: "Close",
      });
    }
  });

  return (
    <div className="p-0 bg-slate700 min-h-screen text-white">
      <Card className="border-none shadow-lg rounded-xl p-6 bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen text-white">
        <CardHeader>
          <CardTitle className="text-3xl font-extrabold text-center text-white">
            Project Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <Form {...form}>
            <form onSubmit={handleForm}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <Label htmlFor="projectName" className="font-medium">
                    Project Name
                  </Label>
                  <Input
                    id="projectName"
                    placeholder="Enter project name"
                    className="mt-2 border-2 border-blue-500 h-12 !text-[1.10rem]"
                    {...register("projectName")}
                  />
                  {errors.projectName && (
                    <p className="text-red-500 font-bold  text-sm mt-1">
                      {errors.projectName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="startDate" className="font-medium">
                    Start Date
                  </Label>
                  <Input
                    id="startDate"
                    type="date"
                    className="mt-2 border-2 border-blue-500 h-12 !text-[1rem]"
                    {...register("startDate")}
                  />
                  {errors.startDate && (
                    <p className="text-red-500 font-bold text-sm mt-1">
                      {errors.startDate.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="endDate" className="font-medium">
                    End Date
                  </Label>
                  <Input
                    id="endDate"
                    type="date"
                    className="mt-2 border-2 border-blue-500 h-12 !text-[1rem]"
                    {...register("endDate")}
                  />
                  {errors.endDate && (
                    <p className="text-red-500 font-bold  text-sm mt-1">
                      {errors.endDate.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="budget" className="font-medium">
                    Budget
                  </Label>
                  <Input
                    id="budget"
                    type="number"
                    placeholder="Enter project budget"
                    className="mt-2 border-2 border-blue-500 h-12 !text-[1rem]"
                    {...register("budget")}
                  />
                  {errors.budget && (
                    <p className="text-red-500 font-bold  text-sm mt-1">
                      {errors.budget.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="projectManager" className="font-medium">
                    Project Manager
                  </Label>
                  <Select
                    value={selectedManager || ""}
                    onValueChange={(value) =>
                      setValue("projectManager", value, {
                        shouldValidate: true,
                      })
                    }
                  >
                    <SelectTrigger className="mt-2 border-2 border-blue-500 h-12 !text-[1rem]">
                      <span>{selectedManager || "Select Manager"}</span>
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 text-white !text-[1.10rem]">
                      {managers.map((manager, index) => (
                        <SelectItem key={index} value={manager}>
                          {manager}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.projectManager && (
                    <p className="text-red-500 font-bold text-sm mt-1">
                      {errors.projectManager.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="projectDescription" className="font-medium">
                    Description
                  </Label>
                  <Textarea
                    id="projectDescription"
                    placeholder="Enter project description"
                    className="mt-2 border-2 border-blue-500 !text-[1.10rem]"
                    {...register("projectDescription")}
                  />
                  {errors.projectDescription && (
                    <p className="text-red-500 font-bold  text-sm mt-1">
                      {errors.projectDescription.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
                  Create Project
                </Button>
              </div>
            </form>
          </Form>
          <Separator className="border-t border-gray-700" />
          <SettingProjectList />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectSettings;
