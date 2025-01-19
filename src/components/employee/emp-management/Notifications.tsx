import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Bell, Trash2 } from "lucide-react";
import { useState } from "react";

interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  read: boolean;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Task Assigned",
      description:
        "You have been assigned a new task: 'Prepare Quarterly Report'.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      title: "Meeting Reminder",
      description: "Don't forget the team meeting scheduled at 3 PM today.",
      time: "4 hours ago",
      read: false,
    },
    {
      id: 3,
      title: "Profile Update",
      description: "Your profile information was successfully updated.",
      time: "1 day ago",
      read: true,
    },
  ]);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })));
  };

  return (
    <motion.div
      className="max-w-full mx-auto"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-full mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Notifications</h1>
          <div className="space-x-2">
            <Button onClick={markAllAsRead} variant="secondary">
              Mark All as Read
            </Button>
            <Badge>
              {notifications.filter((notif) => !notif.read).length} Unread
            </Badge>
          </div>
        </div>

        {/* Notification List */}
        <ScrollArea className="h-96 p-2">
          {notifications.length > 0 ? (
            notifications.map((notif) => (
              <Alert
                key={notif.id}
                className={`flex items-start justify-between p-4 rounded-lg mb-4 ${
                  notif.read ? "bg-gray-200" : "bg-white"
                }`}
              >
                <div>
                  <AlertTitle
                    className={`font-semibold ${
                      notif.read ? "text-gray-500" : "text-black"
                    }`}
                  >
                    {notif.title}
                  </AlertTitle>
                  <AlertDescription className="text-sm text-gray-600">
                    {notif.description}
                  </AlertDescription>
                  <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {!notif.read && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-red-200"
                      onClick={() => markAsRead(notif.id)}
                    >
                      Mark as Read
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => deleteNotification(notif.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </Alert>
            ))
          ) : (
            <div className="text-center text-gray-500">
              <Bell className="w-8 h-8 mx-auto mb-2" />
              <p>No notifications available.</p>
            </div>
          )}
        </ScrollArea>
      </div>
    </motion.div>
  );
};

export default Notifications;
