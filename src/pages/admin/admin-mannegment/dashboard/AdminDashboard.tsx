import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import ActivityLogs from "../activity-logs/ActivityLogs";
import AdminInfo from "../admin-info/AdminInfo";
import AdminProfile from "../profile/AdminProfile";
import Setting from "../setting/Setting";

function AdminDashboard() {
  const [edit, setEdit] = useState(false);

  return (
    <div className="min-h-screen  bg-gray-900 text-gray-200 p-4 flex flex-col md:flex-row gap-4">
      {/* Profile Card */}
      <AdminProfile />

      {/* Details Section */}
      <div className="bg-background p-6  rounded-lg shadow-lg w-full md:w-2/3">
        <Tabs defaultValue="admin">
          {/* Tab Triggers */}
          <TabsList className="flex space-x-4 mb-4">
            <TabsTrigger
              value="admin"
              className="px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded"
            >
              Admin Information
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded"
            >
              Settings
            </TabsTrigger>
            <TabsTrigger
              value="logs"
              className="px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded"
            >
              Activity Logs
            </TabsTrigger>
          </TabsList>

          {/* Tab Contents */}
          <TabsContent value="admin">
            <AdminInfo isEdit={edit} />
            {/* Edit Button */}
            <div className="flex flex-col items-center mt-10">
              <Button
                className={` ${
                  edit ? `btn-gradient` : `btn-orange`
                } w-[50%] rounded-full h-10 text-mainHeading font-bold cursor-pointer`}
                onClick={() => setEdit((prev) => !prev)}
              >
                {edit ? "Save" : "Edit"}
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="settings">
            <Setting />
          </TabsContent>
          <TabsContent value="logs">
            <ActivityLogs />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AdminDashboard;
