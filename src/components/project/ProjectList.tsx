import { format } from "date-fns";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const ProjectList = () => {
  const projects = [
    {
      name: "Website Redesign",
      description: "Redesign the company website to improve UX.",
      startDate: "2024-12-01",
      status: "Active",
    },
    {
      name: "Mobile App Development",
      description: "Build a cross-platform mobile app for customers.",
      startDate: "2024-11-20",
      status: "On Hold",
    },
    {
      name: "UX Enhancements",
      description: "Improve the usability and visual appeal of the UI.",
      startDate: "2024-10-15",
      status: "Completed",
    },
    {
      name: "SEO Projects",
      description: "Optimize website for better search rankings.",
      startDate: "2024-10-15",
      status: "Active",
    },
    {
      name: "E-Commerce Platform",
      description: "Develop a robust online shopping platform.",
      startDate: "2024-10-15",
      status: "On Hold",
    },
  ];

  const statusColorMap: Record<string, string> = {
    Active: "bg-green-500 text-white",
    "On Hold": "bg-yellow-500 text-black",
    Completed: "bg-red-500 text-white",
  };

  return (
    <Card className="bg-gray-800 text-white p-6 shadow-white border-none">
      <CardHeader>
        <CardTitle className="text-[2rem] font-bold">Project List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-400 text-[1.20rem]">
                  Project Name
                </TableHead>
                <TableHead className="text-gray-400 text-[1.20rem]">
                  Description
                </TableHead>
                <TableHead className="text-gray-400 text-[1.20rem]">
                  Start Date
                </TableHead>
                <TableHead className="text-gray-400 text-[1.20rem]">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="space-y-4">
              {projects.map((project, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-gray-700 border-b border-gray-600 last:border-none"
                >
                  <TableCell className="text-[1rem] py-4">
                    {project.name}
                  </TableCell>
                  <TableCell className="text-[1rem] py-4">
                    {project.description}
                  </TableCell>
                  <TableCell className="text-[1rem] py-4">
                    {format(new Date(project.startDate), "MMM dd, yyyy")}
                  </TableCell>
                  <TableCell className="py-4">
                    <Badge
                      className={`capitalize text-sm ${
                        statusColorMap[project.status] ||
                        "bg-gray-500 text-white"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectList;
