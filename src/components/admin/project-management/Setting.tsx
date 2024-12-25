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

  const [formData, setFormData] = useState({
    projectName: "",
    projectLeader: "Select Leader",
    projectDescription: "",
    startDate: "",
    endDate: "",
    budget: "",
    projectManager: "Select Manager",
  });

  const leaders = ["None", "Shubham", "Ram", "Pavan", "Rahul", "Sumit"];
  const managers = ["None", "Rahul", "Sumit", "Ajay", "Vikas"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSelectChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleCreate = () => {
    const {
      projectName,
      projectLeader,
      projectDescription,
      startDate,
      endDate,
      budget,
      projectManager,
    } = formData;

    if (
      !projectName ||
      projectLeader === "Select Leader" ||
      !startDate ||
      !endDate ||
      !budget ||
      projectManager === "Select Manager"
    ) {
      alert("Please fill out all fields!");
      return;
    }

    if (new Date(startDate) >= new Date(endDate)) {
      alert("Start date must be before the end date!");
      return;
    }

    if (Number(budget) <= 0) {
      alert("Budget must be a positive number!");
      return;
    }

    const newProject = {
      id: projects.length + 1,
      name: projectName,
      leader: projectLeader,
      description: projectDescription,
      startDate,
      endDate,
      budget: Number(budget),
      projectManager,
      status: "Planned",
      createdDate: new Date().toISOString().split("T")[0],
    };

    setProjects([...projects, newProject]);
    setFormData({
      projectName: "",
      projectLeader: "Select Leader",
      projectDescription: "",
      startDate: "",
      endDate: "",
      budget: "",
      projectManager: "Select Manager",
    });
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects(projects.filter((project) => project.id !== id));
    }
  };

  return (
    <div className="p-6 text-white min-h-screen">
      <Card className="border-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Project Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Create/Update Project */}
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 gap-6">
            <div>
              <Label htmlFor="projectName">Project Name</Label>
              <Input
                id="projectName"
                value={formData.projectName}
                onChange={handleInputChange}
                placeholder="Enter project name"
                className="mt-2 border-2 h-12 !text-inputText"
              />
            </div>

            <div>
              <Label htmlFor="projectDescription">Description</Label>
              <Input
                id="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                placeholder="Enter project description"
                className="mt-2 border-2 h-12 !text-inputText"
              />
            </div>

            <div>
              <Label htmlFor="leader">Project Leader</Label>
              <Select
                value={formData.projectLeader}
                onValueChange={(value) =>
                  handleSelectChange("projectLeader", value)
                }
              >
                <SelectTrigger className="mt-2 border-2 h-12">
                  <span>{formData.projectLeader}</span>
                </SelectTrigger>
                <SelectContent className="bg-contentBg text-white">
                  {leaders.map((leader) => (
                    <SelectItem key={leader} value={leader}>
                      {leader}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleInputChange}
                className="mt-2 border-2 h-12"
              />
            </div>

            <div>
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleInputChange}
                className="mt-2 border-2 h-12"
              />
            </div>

            <div>
              <Label htmlFor="budget">Budget</Label>
              <Input
                id="budget"
                type="number"
                value={formData.budget}
                onChange={handleInputChange}
                placeholder="Enter project budget"
                className="mt-2 border-2 h-12 !text-inputText"
              />
            </div>

            <div>
              <Label htmlFor="projectManager">Project Manager</Label>
              <Select
                value={formData.projectManager}
                onValueChange={(value) =>
                  handleSelectChange("projectManager", value)
                }
              >
                <SelectTrigger className="mt-2 border-2 h-12">
                  <span>{formData.projectManager}</span>
                </SelectTrigger>
                <SelectContent className="bg-contentBg text-white">
                  {managers.map((manager) => (
                    <SelectItem key={manager} value={manager}>
                      {manager}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              onClick={handleCreate}
              className="bg-green-500 hover:bg-green-700 text-white"
            >
              Create Project
            </Button>
          </div>

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
