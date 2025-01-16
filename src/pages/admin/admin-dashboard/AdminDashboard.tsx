import ActivityLogs from "@/components/admin/admin-management/activity-logs/ActivityLogs";
import AdminInfo from "@/components/admin/admin-management/admin-info/AdminInfo";
import AdminProfile from "@/components/admin/admin-management/profile/AdminProfile";
import Setting from "@/components/admin/admin-management/setting/Setting";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

function AdminDashboard() {
  const [edit, setEdit] = useState(false);

  return (
    <div className="min-h-screen  p-4 flex flex-col md:flex-row gap-4">
      {/* Profile Card */}
      <AdminProfile />

      {/* Details Section */}
      <div className=" p-6  rounded-lg shadow-lg w-full md:w-2/3">
        <Tabs defaultValue="admin" className="rounded-lg shadow-lg p-4">
          <TabsList className="flex space-x-4 mb-4 rounded-lg">
            <TabsTrigger
              value="admin"
              className="px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              Admin Information
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              Settings
            </TabsTrigger>
            <TabsTrigger
              value="logs"
              className="px-4 py-2 rounded hover:bg-gray-100 transition"
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
                className={`${
                  edit ? `btn-gradient` : `btn-orange`
                } w-[50%] rounded-full h-10 font-bold cursor-pointer`}
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
