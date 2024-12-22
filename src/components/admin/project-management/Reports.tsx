import { useState } from "react";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Progress } from "../../ui/progress";
import { Separator } from "../../ui/separator";

const ProjectReportTab = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Website Redesign",
      totalTasks: 50,
      completedTasks: 35,
      deadline: "2024-12-15",
      teamMembers: ["Shubham", "Pavan", "Rahul"],
    },
    {
      id: 2,
      name: "Mobile App Development",
      totalTasks: 40,
      completedTasks: 20,
      deadline: "2024-12-20",
      teamMembers: ["Ram", "Sumit"],
    },
  ]);

  const calculateProgress = (completed: number, total: number) =>
    Math.round((completed / total) * 100);

  return (
    <div className="p-6 text-white min-h-screen">
      <Card className="border-none">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Project Reports</CardTitle>{" "}
          {/* Increased font size */}
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Project Overview</h2>{" "}
            {/* Increased font size */}
            {projects.map((project) => (
              <Card key={project.id} className="bg-secondary p-6 border-none">
                {" "}
                {/* Increased padding */}
                <div className="space-y-6">
                  {" "}
                  {/* Increased spacing */}
                  {/* Project Name */}
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-xl">{project.name}</h3>{" "}
                    {/* Increased font size */}
                    <p className="text-gray-400 text-lg">
                      {" "}
                      {/* Increased font size */}
                      Deadline: {project.deadline}
                    </p>
                  </div>
                  {/* Progress */}
                  <div>
                    <p className="text-base font-medium">
                      {" "}
                      {/* Slightly increased font size */}
                      Progress:{" "}
                      {calculateProgress(
                        project.completedTasks,
                        project.totalTasks
                      )}
                      %
                    </p>
                    <Progress
                      value={calculateProgress(
                        project.completedTasks,
                        project.totalTasks
                      )}
                      className="mt-2"
                    />
                  </div>
                  {/* Task Stats */}
                  <div className="flex justify-between text-base">
                    {" "}
                    {/* Slightly increased font size */}
                    <p>
                      Completed Tasks:{" "}
                      <span className="font-bold text-lg">
                        {project.completedTasks}
                      </span>
                    </p>
                    <p>
                      Total Tasks:{" "}
                      <span className="font-bold text-lg">
                        {project.totalTasks}
                      </span>
                    </p>
                  </div>
                  {/* Team Members */}
                  <div>
                    <p className="font-medium text-lg">Team Members:</p>{" "}
                    {/* Increased font size */}
                    <ul className="list-disc list-inside text-gray-400">
                      {project.teamMembers.map((member, index) => (
                        <li key={index} className="text-base">
                          {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Separator />

          {/* Add More Projects Button */}
          <div className="flex justify-end">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white text-lg">
              {" "}
              {/* Increased font size */}
              Add New Project
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectReportTab;
