import Finances from "@/components/employee/emp-management/Finances";
import Notifications from "@/components/employee/emp-management/Notifications";
import Performance from "@/components/employee/emp-management/Performance";
import Profile from "@/components/employee/emp-management/Profile";
import Tasks from "@/components/employee/emp-management/Tasks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useState } from "react";

const EmpDash = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-blue-600 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Employee Dashboard</h1>
        </div>
        <nav className="mt-8">
          {["Profile", "Performance", "Setting"].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-8 bg-gray-400">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold">Welcome, {"employee.name"}!</h2>
            <p className="text-gray-600">{"employee.role"}</p>
          </div>
        </header>

        {/* Content */}
        <motion.div
          className="max-w-full mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Card className="bg-gray-600 w-[100%]">
            <CardHeader>
              <Tabs defaultValue="Profile">
                <TabsList className="flex space-x-4">
                  {[
                    "Profile",
                    "Tasks",
                    "Notifications",
                    "Payroll and Finances",
                  ].map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent className="mt-4">
              {activeTab === "Profile" && <Profile />}
              {activeTab === "Tasks" && <Tasks />}
              {activeTab === "Performance" && <Performance />}
              {activeTab === "Notifications" && <Notifications />}
              {activeTab === "Payroll and Finances" && <Finances />}
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default EmpDash;
