import Finances from "@/components/employee/emp-management/Finances";
import Meetings from "@/components/employee/emp-management/Meetings";
import Notifications from "@/components/employee/emp-management/Notifications";
import Performance from "@/components/employee/emp-management/Performance";
import Profile from "@/components/employee/emp-management/Profile";
import Tasks from "@/components/employee/emp-management/Tasks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { motion } from "framer-motion";

const EmpDash = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const employee = {
    name: "John Doe",
    role: "Software Engineer",
    email: "johndoe@example.com",
    phone: "+123 456 7890",
    department: "Development",
    leaveBalance: 12,
    tasksCompleted: 24,
    tasksPending: 3,
    notifications: [
      {
        id: 1,
        message: "Your leave request has been approved.",
        time: "2 hours ago",
      },
      {
        id: 2,
        message: "New task assigned: Build API integration.",
        time: "1 day ago",
      },
    ],
    tasks: [
      { id: 1, title: "Fix login bug", status: "In Progress" },
      { id: 2, title: "Prepare Q1 report", status: "Pending" },
    ],
    performance: {
      projectsHandled: 8,
      averageRating: 4.5,
      feedback: "Consistently meets expectations and delivers quality work.",
    },
  };

  return (
    // <div className="flex min-h-screen bg-gray-100">
    <div className="flex min-h-screen bg-yellow-500">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Employee Dashboard</h1>
        </div>
        <nav className="mt-8">
          {["Profile", "Performance", "Notifications"].map((tab) => (
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

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold">Welcome, {employee.name}!</h2>
            <p className="text-gray-600">{employee.role}</p>
          </div>
          <Avatar className="flex items-center">
            <AvatarImage src="/profile.jpg" alt="John Doe" />
            <AvatarFallback>{employee.name[0]}</AvatarFallback>
          </Avatar>
        </header>

        {/* Content */}
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Card>
            <CardHeader>
              <Tabs defaultValue="Profile">
                <TabsList className="flex space-x-4">
                  {[
                    "Profile",
                    "Tasks",
                    "Performance",
                    "Notifications",
                    "Payroll and Finances",
                    "Schedules and Meetings",
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
              {activeTab === "Schedules and Meetings" && <Meetings />}
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default EmpDash;
