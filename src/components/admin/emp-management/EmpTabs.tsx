import { cn } from "@/components/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function EmpTabs({
  setTab,
  currentTab,
}: {
  setTab: (value: string) => void;
  currentTab: string;
}) {
  const tabs = [
    { value: "home", label: "Home" },
    { value: "overview", label: "Overview" },
    { value: "employee-directory", label: "Employee Directory" },
    { value: "notifications", label: "Notifications" },
    { value: "setting", label: "Settings" },
  ];

  return (
    <>
      {tabs.map((tab) =>
        tab.value === "home" ? (
          <Link to={"/"} key={tab.value}>
            <Button
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

export default EmpTabs;
