import { projectSchema } from "@/components/form-validation /Validation";
import ToasterComponent, {
  getErrorMessage,
} from "@/components/toaster/Toaster";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  useAllProjectsQuery,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} from "@/redux/api/admin-API/ProjectAPI";
import { adminProjectType } from "@/types/reducer-types";
import { UpdateProject } from "@/types/types";
import { ProjectFormValue } from "@/types/validation-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select, SelectTrigger } from "@radix-ui/react-select";
import { useState } from "react";
import { useForm } from "react-hook-form";

function SettingProjectList() {
  const { data } = useAllProjectsQuery();
  const [deleteProject] = useDeleteProjectMutation();
  const [updateProject] = useUpdateProjectMutation();

  const [toggle, setToggle] = useState("");

  const form = useForm<ProjectFormValue>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      projectName: "",
      projectDescription: "",
      startDate: "",
      endDate: "",
      budget: null,
      projectManager: "",
    },
  });

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const allProjects: adminProjectType[] = data?.projects || [];

  const selectedManager = watch("projectManager");

  const managers = ["Rahul", "Sumit", "Ajay", "Vikas"];

  const formattedProjects = allProjects.map((project) => ({
    ...project,
    startDate: project.startDate && project.startDate.split("T")[0],
    endDate: project.endDate && project.endDate.split("T")[0],
  }));

  const handleDelete = async (projectId: string) => {
    const res = await deleteProject(projectId);
    if (res.data) {
      ToasterComponent({
        message: res.data.message,
        description: "Project deactivated.",
        firstLabel: "Close",
      });
    } else if ("error" in res) {
      const errorMessage = getErrorMessage(res.error);
      ToasterComponent({
        message: errorMessage,
        description: "Could not delete the project.",
        firstLabel: "Close",
      });
    }
  };

  const handleUpdate = (project: UpdateProject) => {
    project._id && setToggle(project._id);

    const formattedProject = {
      ...project,
      startDate: project.startDate && project.startDate.split("T")[0],
      endDate: project.endDate && project.endDate.split("T")[0],
    };

    reset({
      projectName: project.projectName,
      projectDescription: project.projectDescription,
      startDate: formattedProject.startDate,
      endDate: formattedProject.endDate,
      budget: project.budget || null, // Ensure budget is set to a number or null
      projectManager: project.projectManager,
    });
  };

  const onSubmit = async (formData: ProjectFormValue) => {
    // const formattedData = {
    //   ...formData,
    //   budget: formData.budget ?? null,
    // };

    // console.log(formattedData);
    console.log(formData);
    console.log(toggle);

    const res = await updateProject({ id: toggle, data: formData });

    console.log(res);

    // if (res.data) {
    //   ToasterComponent({
    //     message: res.data.message,
    //     description: "Project updated successfully.",
    //     firstLabel: "Close",
    //   });
    //   setToggle("");
    // } else if ("error" in res) {
    //   const errorMessage = getErrorMessage(res.error);
    //   ToasterComponent({
    //     message: errorMessage,
    //     description: "Could not update the project.",
    //     firstLabel: "Close",
    //   });
    // }
  };

  return (
    <div className="p-6 space-y-6 select-none">
      <h2 className="text-2xl font-bold text-white">Existing Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {formattedProjects.map((project) =>
          toggle === project._id ? (
            <Card
              key={project._id}
              className="font-semibold text-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105 h-auto hover:shadow-2xl border border-gray-800 bg-gradient-to-r from-blue-600 to-purple-600"
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-4"
              >
                <div>
                  <label className="block text-white">Project Name</label>
                  <Input
                    {...register("projectName")}
                    className="!text-inputText"
                  />
                  {errors.projectName && (
                    <p className="text-red-500">{errors.projectName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-white">Description</label>
                  <Textarea
                    {...register("projectDescription")}
                    className="!text-inputText border-none"
                  />
                  {errors.projectDescription && (
                    <p className="text-red-500 font-bold">
                      {errors.projectDescription.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-white">Start Date</label>
                  <Input
                    type="date"
                    {...register("startDate")}
                    className="!text-inputText"
                  />
                  {errors.startDate && (
                    <p className="text-red-500">{errors.startDate.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-white">End Date</label>
                  <Input
                    type="date"
                    {...register("endDate")}
                    className="!text-inputText"
                  />
                  {errors.endDate && (
                    <p className="text-red-500">{errors.endDate.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-white">Budget</label>
                  <Input
                    type="number"
                    {...register("budget", {
                      setValueAs: (value) => (value ? parseFloat(value) : 0),
                    })}
                    className="!text-inputText"
                  />
                  {errors.budget && (
                    <p className="text-red-500">{errors.budget.message}</p>
                  )}
                </div>

                {/* <div>
                  <label className="block text-white">Project Manager</label>
                  <Input
                    {...register("projectManager")}
                    className="!text-inputText"
                  />
                  {errors.projectManager && (
                    <p className="text-red-500">
                      {errors.projectManager.message}
                    </p>
                  )}
                </div> */}
                <div className="w-full py-1">
                  <label className="block text-white">projectManager</label>
                  <Select
                    value={selectedManager || ""}
                    onValueChange={(value) =>
                      setValue("projectManager", value, {
                        shouldValidate: true,
                      })
                    }
                  >
                    <SelectTrigger className=" h-10 !text-[1rem] w-full">
                      <div className="border rounded-md px-4 p-1 text-start">
                        {selectedManager || "Select Manager"}
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 text-white !text-[1.10rem]">
                      {managers.map((manager, index) => (
                        <SelectItem key={index} value={manager}>
                          {manager}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-between">
                  <Button type="submit" className="bg-green-500 text-white">
                    Save
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setToggle("")}
                    className="bg-gray-500 text-white"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Card>
          ) : (
            <Card
              key={project._id}
              className="shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl h-[30rem] border border-gray-800 bg-gradient-to-r from-blue-800 to-purple-600"
            >
              <div className="flex flex-col justify-between h-full text-md">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.projectName}
                </h3>
                <div className="flex flex-col space-y-5">
                  <div>
                    <span className="font-bold uppercase">Description: </span>
                    {project.projectDescription}
                  </div>
                  <div>
                    <span className="font-bold uppercase">Leader: </span>
                    {project.projectManager}
                  </div>
                  <div>
                    <span className="font-bold uppercase">Budget: </span>$
                    {project.budget}
                  </div>
                  <div>
                    <span className="font-bold uppercase">Start Date: </span>
                    {project.startDate}
                  </div>
                  <div>
                    <span className="font-bold uppercase">End Date: </span>
                    {project.endDate}
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
                    onClick={() => handleUpdate(project)}
                  >
                    Update
                  </Button>
                  <Button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
                    onClick={() => handleDelete(project._id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          )
        )}
      </div>
    </div>
  );
}

export default SettingProjectList;
