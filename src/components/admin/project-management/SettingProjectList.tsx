import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAllProjectsQuery } from "@/redux/api/admin-API/ProjectAPI";
import { adminProjectType } from "@/types/reducer-types";

function SettingProjectList() {
  const { data } = useAllProjectsQuery();

  const allProjects: adminProjectType[] = data?.projects || [];

  // set time in this formate mm//dd//yyyy
  const updateProducts = allProjects.map((project) => ({
    ...project,
    startDate: project.startDate.split("T")[0],
    endDate: project.endDate.split("T")[0],
  }));

  return (
    <div className="p-6 space-y-6 ">
      <h2 className="text-2xl font-bold text-white">Existing Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {updateProducts.map((project) => (
          <Card
            key={project.projectName}
            className=" shadow-lg shadow-white rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl  border-none bg-slate-700 "
          >
            <div className="flex flex-col justify-between h-full  ">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">
                  {project.projectName}
                </h3>
                <p className="text-sm text-gray-200">
                  <span className="font-medium">Description : </span>
                  {project.projectDescription}
                </p>
                <p className="text-sm text-white">
                  <span className="font-medium">Leader : </span>
                  {project.projectManager}
                </p>
                <p className="text-sm ">
                  <span className="font-medium">Start Date : </span>
                  {project.startDate}
                </p>
                <p className="text-sm ">
                  <span className="font-medium">End Date : </span>
                  {project.endDate}
                </p>
                <p className="text-sm ">
                  <span className="font-medium">Budget : </span> $
                  {project.budget}
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <Button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition">
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default SettingProjectList;
