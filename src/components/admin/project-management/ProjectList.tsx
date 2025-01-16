import { useAllProjectsQuery } from "@/redux/api/admin-API/ProjectAPI";
import { format } from "date-fns";
import { Badge } from "../../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";

const ProjectList = () => {
  const { data: projects } = useAllProjectsQuery();

  const statusColorMap: Record<string, string> = {
    Active: "bg-green-500 text-white",
    "On Hold": "bg-yellow-500 text-black",
    Planned: "bg-red-500 text-white",
  };

  return (
    <Card className="bg-gray-800 text-white p-6 shadow-white flex justify-center items-center flex-col border-none w-full">
      <CardHeader>
        <CardTitle className="text-[2rem] font-bold">Project List</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <div className="overflow-x-auto ">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-400  text-[1.20rem]">
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
            <TableBody className="space-y-4 ">
              {projects?.projects.map((project, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-gray-700 border-b border-gray-600 last:border-none"
                >
                  <TableCell className="text-[1rem] py-4">
                    {project.projectName}
                  </TableCell>
                  <TableCell className="text-[1rem] pr-10 py-10  w-[30rem]">
                    {project.projectDescription}
                  </TableCell>
                  <TableCell className="text-[1rem] py-4">
                    {format(new Date(project.startDate), "MMM dd, yyyy")}
                  </TableCell>
                  <TableCell className="py-4">
                    <Badge
                      className={`capitalize text-sm ${
                        statusColorMap[project.projectStatus] ||
                        "bg-gray-500 text-white"
                      }`}
                    >
                      {project.projectStatus}
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
