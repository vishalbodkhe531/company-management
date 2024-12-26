import { useState } from "react";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Label } from "../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "../../ui/select";
import { Separator } from "../../ui/separator";
import { Input } from "../../ui/input";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema } from "@/components/form-validation /Validation";

const ProjectSettings = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Website Redesign",
      leader: "Shubham",
      description: "Improving the website's design for better user experience.",
      startDate: "2024-12-01",
      endDate: "2025-01-31",
      budget: 50000,
      projectManager: "Rahul",
      status: "Active",
      createdDate: "2024-12-01",
    },
  ]);

  const form = useForm({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      projectName: "",
      projectDescription: "",
      startDate: "",
      endDate: "",
      budget: null,
      projectManager: "Select Manager",
    },
  });

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = form;

  // console.log("errors : ", errors);

  const selectedManager = watch("projectManager");

  const managers = ["Select Manager", "Rahul", "Sumit", "Ajay", "Vikas"];

  const handleCreate = () => {
    // if (
    //   !projectName ||
    //   projectLeader === "Select Leader" ||
    //   !startDate ||
    //   !endDate ||
    //   !budget ||
    //   projectManager === "Select Manager"
    // ) {
    //   alert("Please fill out all fields!");
    //   return;
    // }
    // if (new Date(startDate) >= new Date(endDate)) {
    //   alert("Start date must be before the end date!");
    //   return;
    // }
    // if (Number(budget) <= 0) {
    //   alert("Budget must be a positive number!");
    //   return;
    // }
    // const newProject = {
    //   id: projects.length + 1,
    //   name: projectName,
    //   leader: projectLeader,
    //   description: projectDescription,
    //   startDate,
    //   endDate,
    //   budget: Number(budget),
    //   projectManager,
    //   status: "Planned",
    //   createdDate: new Date().toISOString().split("T")[0],
    // };
    // setProjects([...projects, newProject]);
    // setFormData({
    //   projectName: "",
    //   projectLeader: "Select Leader",
    //   projectDescription: "",
    //   startDate: "",
    //   endDate: "",
    //   budget: "",
    //   projectManager: "Select Manager",
    // });
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects(projects.filter((project) => project.id !== id));
    }
  };

  const handleForm = handleSubmit((data: any) => {
    console.log(data);
  });

  return (
    <div className="p-6 text-white min-h-screen">
      <Card className="border-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Project Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Create/Update Project */}

          <Form {...form}>
            <form onSubmit={handleForm}>
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-6">
                <div>
                  <Label htmlFor="projectName">Project Name</Label>
                  <Input
                    id="projectName"
                    placeholder="Enter project name"
                    className="mt-2 border-2 h-12 !text-inputText"
                    {...register("projectName")}
                  />
                  {errors.projectName && (
                    <span className="text-red-500 font-bold text-sm">
                      {errors.projectName.message}
                    </span>
                  )}
                </div>

                <div>
                  <Label htmlFor="projectDescription">Description</Label>
                  <Input
                    id="projectDescription"
                    placeholder="Enter project description"
                    className="mt-2 border-2 h-12 !text-inputText"
                    {...register("projectDescription")}
                  />
                  {errors.projectDescription && (
                    <span className="text-red-500 font-bold text-sm">
                      {errors.projectDescription.message}
                    </span>
                  )}
                </div>

                <div>
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input
                    id="startDate"
                    type="date"
                    className="mt-2 border-2 h-12"
                    {...register("startDate")}
                  />
                  {errors.startDate && (
                    <span className="text-red-500 font-bold text-sm">
                      {errors.startDate.message}
                    </span>
                  )}
                </div>

                <div>
                  <Label htmlFor="endDate">End Date</Label>
                  <Input
                    id="endDate"
                    type="date"
                    className="mt-2 border-2 h-12"
                    {...register("endDate")}
                  />
                  {errors.endDate && (
                    <span className="text-red-500 font-bold text-sm">
                      {errors.endDate.message}
                    </span>
                  )}
                </div>

                <div>
                  <Label htmlFor="budget">Budget</Label>
                  <Input
                    id="budget"
                    type="number"
                    placeholder="Enter project budget"
                    className="mt-2 border-2 h-12 !text-inputText"
                    {...register("budget")}
                  />
                  {errors.budget && (
                    <span className="text-red-500 font-bold text-sm">
                      {errors.budget.message}
                    </span>
                  )}
                </div>

                <div>
                  <Label htmlFor="projectManager">Project Manager</Label>
                  <Select
                    value={selectedManager}
                    onValueChange={(value) => setValue("projectManager", value)}
                  >
                    <SelectTrigger className="mt-2 border-2 h-12">
                      <span>{selectedManager || "Select Manager"}</span>
                    </SelectTrigger>
                    <SelectContent className="bg-contentBg text-white">
                      {managers.map((manager) => (
                        <SelectItem key={manager} value={manager}>
                          {manager}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.projectManager && (
                    <span className="text-red-500 font-bold text-sm">
                      {errors.projectManager.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-end my-10">
                <Button
                  onClick={handleCreate}
                  className="bg-green-500 hover:bg-green-700 text-white"
                >
                  Create Project
                </Button>
              </div>
            </form>
          </Form>

          <Separator />

          {/* Project List */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Existing Projects</h2>
            {projects.map((project) => (
              <Card key={project.id} className="bg-contentBg p-4 border-none">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">{project.name}</h3>
                    <p>Description: {project.description}</p>
                    <p>Leader: {project.leader}</p>
                    <p>Start Date: {project.startDate}</p>
                    <p>End Date: {project.endDate}</p>
                    <p>Budget: ${project.budget}</p>
                    <p>Manager: {project.projectManager}</p>
                    <p>Status: {project.status}</p>
                    <p>Created Date: {project.createdDate}</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button
                    onClick={() => handleDelete(project.id)}
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    Delete
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectSettings;
