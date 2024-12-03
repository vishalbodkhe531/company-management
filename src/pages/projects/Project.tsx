import { BarChart } from "@/components/charts/Chart";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { cn } from "../../components/lib/utils"; // Utility to conditionally join classes
import { DoughnutChart } from "@/components/charts/DoughnutChart";
import { Link } from "react-router-dom";

const ProjectDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  const tabs = [
    { value: "home", label: "Home" },
    { value: "overview", label: "Overview" },
    { value: "team", label: "Team Management" },
    { value: "all-projects", label: "Projects & Milestones" },
    { value: "Admin-Information", label: "Admin Information" },
    { value: "Activity-Logs", label: "Activity Logs" },
    { value: "reports", label: "Reports" },
    { value: "setting", label: "Settings" },
  ];

  return (
    <div className="flex h-screen bg-black text-mainHeading">
      {/* Sidebar for Large Screens */}
      <aside className="hidden lg:block w-[23rem] bg-gray-900 p-4">
        <h1 className="text-2xl font-bold text-heading mb-6">
          Project Management
        </h1>
        <nav className="space-y-4">
          {tabs.map((tab) =>
            tab.value === "home" ? (
              <Link to={"/"}>
                <Button
                  key={tab.value}
                  onClick={() => setSelectedTab(tab.value)}
                  className={cn(
                    "w-full text-left px-4 py-2 rounded",
                    selectedTab === tab.value
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-800"
                  )}
                >
                  {tab.label}
                </Button>
              </Link>
            ) : (
              <Button
                key={tab.value}
                onClick={() => setSelectedTab(tab.value)}
                className={cn(
                  "w-full text-left px-4 py-2 rounded",
                  selectedTab === tab.value
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-800"
                )}
              >
                {tab.label}
              </Button>
            )
          )}
        </nav>
      </aside>

      {/* Sidebar for Small Screens */}
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden px-4 py-2 bg-gray-800 rounded m-4">
            Open Menu
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-gray-900 p-4">
          <h1 className="text-2xl font-bold text-heading mb-6">
            Project Management
          </h1>
          <nav className="space-y-4">
            {tabs.map((tab) => (
              <Button
                key={tab.value}
                onClick={() => setSelectedTab(tab.value)}
                className={cn(
                  "w-full text-left px-4 py-2 rounded",
                  selectedTab === tab.value
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-800"
                )}
              >
                {tab.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}
          </h2>
        </header>

        {/* Tab Content */}
        <div className="space-y-6">
          {selectedTab === "overview" && (
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
          )}
        </div>
      </main>
    </div>
  );
};

export default ProjectDashboard;
