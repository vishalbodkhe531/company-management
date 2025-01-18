import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const Tasks = () => {
  const employee = {
    name: "John Doe",
    role: "Software Engineer",
    email: "johndoe@example.com",
    phone: "+123 456 7890",
    department: "Development",
    profileImage: "/profile.jpg",
    performance: {
      projectsHandled: 8,
      averageRating: 4.5,
      feedback: "Consistently meets expectations and delivers quality work.",
    },
    tasks: [
      { id: 1, title: "Fix login bug", status: "In Progress" },
      { id: 2, title: "Prepare Q1 report", status: "Pending" },
    ],
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
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header Section */}
        <Card className="mb-8">
          <CardContent className="flex items-center p-6">
            <Avatar className="w-24 h-24 mr-6">
              <AvatarImage src={employee.profileImage} alt="Profile Picture" />
              <AvatarFallback>{employee.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">{employee.name}</h1>
              <p className="text-gray-500">{employee.role}</p>
              <div className="mt-2">
                <p>
                  <strong>Email:</strong> {employee.email}
                </p>
                <p>
                  <strong>Phone:</strong> {employee.phone}
                </p>
                <p>
                  <strong>Department:</strong> {employee.department}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <Tabs
          defaultValue="Performance"
          className="bg-white shadow-md rounded-lg"
        >
          <TabsList className="flex space-x-4 p-4">
            <TabsTrigger value="Performance">Performance</TabsTrigger>
            <TabsTrigger value="Tasks">Tasks</TabsTrigger>
            <TabsTrigger value="Notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="Performance" className="p-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">
                  Performance Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Projects Handled:</strong>{" "}
                  {employee.performance.projectsHandled}
                </p>
                <p>
                  <strong>Average Rating:</strong>{" "}
                  {employee.performance.averageRating} / 5
                </p>
                <p>
                  <strong>Feedback:</strong> {employee.performance.feedback}
                </p>
              </CardContent>
            </motion.div>
          </TabsContent>
          <TabsContent value="Tasks" className="p-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">
                  Assigned Tasks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  {employee.tasks.map((task) => (
                    <li
                      key={task.id}
                      className="flex justify-between items-center border-b py-2"
                    >
                      <span>{task.title}</span>
                      <span
                        className={`px-3 py-1 text-sm rounded ${
                          task.status === "In Progress"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {task.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </motion.div>
          </TabsContent>
          <TabsContent value="Notifications" className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  {employee.notifications.map((notification) => (
                    <li key={notification.id} className="mb-2">
                      <p>{notification.message}</p>
                      <small className="text-gray-500">
                        {notification.time}
                      </small>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Tasks;
