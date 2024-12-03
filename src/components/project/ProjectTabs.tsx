import { Link } from "react-router-dom";
import { cn } from "../../components/lib/utils";
import { Button } from "../ui/button";

function ProjectTabs({
  setTab,
  currentTab,
}: {
  setTab: (value: string) => void;
  currentTab: string;
}) {
  //   const [selectedTab, setSelectedTab] = useState("overview");

  const tabs = [
    { value: "home", label: "Home" },
    { value: "overview", label: "Overview" },
    { value: "team", label: "Team Management" },
    { value: "all-projects", label: "Projects & Milestones" },
    { value: "Activity-Logs", label: "Activity Logs" },
    { value: "reports", label: "Reports" },
    { value: "setting", label: "Settings" },
  ];

  console.log(currentTab);

  return (
    <>
      {tabs.map((tab) =>
        tab.value === "home" ? (
          <Link to={"/"}>
            <Button
              key={tab.value}
              onClick={() => setTab(tab.value)}
              className={cn(
                "w-full text-left px-4 py-2 rounded",
                currentTab === tab.value
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
            onClick={() => setTab(tab.value)}
            className={cn(
              "w-full text-left px-4 py-2 rounded",
              currentTab === tab.value
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-800"
            )}
          >
            {tab.label}
          </Button>
        )
      )}
    </>
  );
}

export default ProjectTabs;
