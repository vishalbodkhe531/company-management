import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAllProjectsQuery } from "@/redux/api/admin-API/ProjectAPI";
import { adminProjectType } from "@/types/reducer-types";

function SettingProjectList() {
  const { data } = useAllProjectsQuery();

  const allProjects: adminProjectType[] = data?.allProjects || [];

  return (
    <>
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Existing Projects</h2>
        {allProjects.map((project) => (
          <Card
            key={project.projectName}
            className="bg-contentBg p-4 border-none"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold">{project.projectName}</h3>
                <p>Description: {project.projectDescription}</p>
                <p>Leader: {project.projectManager}</p>
                <p>Start Date: {project.startDate}</p>
                <p>End Date: {project.endDate}</p>
                <p>Budget: ${project.budget}</p>
                <p>Manager: {project.projectManager}</p>
              </div>
            </div>
            <div className="flex justify-end">
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

export default SettingProjectList;
