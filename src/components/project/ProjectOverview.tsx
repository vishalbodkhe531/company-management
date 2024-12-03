import { BarChart } from "../charts/Chart";
import { DoughnutChart } from "../charts/DoughnutChart";

function ProjectOverview() {
  return (
    <section>
      <h3 className="text-lg font-bold mb-4">Project Overview</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="p-4 bg-gray-800 rounded h-[10rem] flex flex-row justify-between">
          <div className="">
            <h4 className="text-lg font-semibold">Active Projects</h4>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div className="">
            <DoughnutChart
              activeProjects={35}
              budgetUsed={65}
              cutout="80%"
              showLabels={false}
              containerStyle={{
                marginTop: "0",
                justifyContent: "center",
                width: "100%",
                height: "7rem",
              }}
            />
          </div>
        </div>
        <div className="p-4 bg-gray-800 rounded h-[10rem] flex flex-row justify-between">
          <div className="">
            <h4 className="text-lg font-semibold">Completed Tasks</h4>
            <p className="text-2xl font-bold">243</p>
          </div>
          <div className="">
            <DoughnutChart
              activeProjects={35}
              cutout="80%"
              showLabels={false}
              containerStyle={{
                marginTop: "0",
                justifyContent: "center",
                width: "100%",
                height: "7rem",
              }}
            />
          </div>
        </div>
        <div className="p-4 bg-gray-800 rounded h-[10rem] flex flex-row justify-between">
          <div className="">
            <h4 className="text-lg font-semibold">Budget Used</h4>
            <p className="text-2xl font-bold">$45,000</p>
          </div>
          <div className="">
            <DoughnutChart
              activeProjects={35}
              budgetUsed={15}
              cutout="80%"
              showLabels={false}
              containerStyle={{
                marginTop: "0",
                justifyContent: "center",
                width: "100%",
                height: "7rem",
              }}
            />
          </div>
        </div>
        <div className="p-4 bg-gray-800 rounded h-[10rem] flex flex-row justify-between">
          <div className="">
            <h4 className="text-lg font-semibold">Total Projects</h4>
            <p className="text-2xl font-bold">5</p>
          </div>
          <div className="">
            <DoughnutChart
              // activeProjects={32}
              budgetUsed={15}
              cutout="80%"
              showLabels={false}
              containerStyle={{
                marginTop: "0",
                justifyContent: "center",
                width: "100%",
                height: "7rem",
              }}
            />
          </div>
        </div>
      </div>
      <BarChart
        totalProjects={[50, 60, 70, 80, 90, 100, 110]}
        completedProjects={[30, 40, 50, 60, 70, 80, 90]}
      />
      <DoughnutChart
        activeProjects={35}
        budgetUsed={65}
        cutout="0%"
        showLabels={true}
        containerStyle={{
          marginTop: "15rem",
          justifyContent: "center",
        }}
      />
    </section>
  );
}

export default ProjectOverview;
