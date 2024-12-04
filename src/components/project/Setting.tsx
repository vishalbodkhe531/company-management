import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";

const ProjectSettings = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Website Redesign",
      leader: "Shubham",
      status: "Active",
      createdDate: "2024-12-01",
    },
    {
      id: 2,
      name: "Mobile App Development",
      leader: "Ram",
      status: "On Hold",
      createdDate: "2024-12-02",
    },

    {
      id: 2,
      name: "UX Enhancements",
      leader: "Pavan",
      status: "On Hold",
      createdDate: "2024-12-02",
    },
  ]);

  const [projectName, setProjectName] = useState("");
  const [projectLeader, setProjectLeader] = useState("Select Leader");

  const leader = ["None", "Shubham", "Ram", "Pavan", "Rahul", "Sumit"];

  const handleCreate = () => {
    if (!projectName || projectLeader === "Select Leader") {
      alert("Please fill out all fields!");
      return;
    }

    const newProject = {
      id: projects.length + 1,
      name: projectName,
      leader: projectLeader,
      status: "Active", // Default status for new projects
      createdDate: new Date().toISOString().split("T")[0], // Get current date in YYYY-MM-DD format
    };

    setProjects([...projects, newProject]);
    setProjectName("");
    setProjectLeader("Select Leader");
  };

  const handleDelete = (id: number) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <div className="p-6 text-white min-h-screen">
      <Card className="border-none">
        {/* Header */}
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Project Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Create/Update Project */}
          <div>
            <Label htmlFor="projectName">Project Name</Label>
            <Input
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Enter project name"
              className="mt-2 border-2 h-12"
            />
          </div>

          <div>
            <Label htmlFor="leader">Project Leader</Label>
            <Select
              value={projectLeader}
              onValueChange={(value) => setProjectLeader(value)}
            >
              <SelectTrigger className="mt-2 border-2 h-12">
                <span>{projectLeader}</span>
              </SelectTrigger>
              <SelectContent className="bg-contentBg text-white">
                {leader.map((i) => (
                  <SelectItem key={i} value={i}>
                    {i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end">
            <Button
              onClick={handleCreate}
              className="bg-Btn3 hover:bg-green-700 text-white"
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
                    <p>Leader: {project.leader}</p>
                    <p>Status: {project.status}</p>
                    <p>Created Date: {project.createdDate}</p>
                  </div>
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
