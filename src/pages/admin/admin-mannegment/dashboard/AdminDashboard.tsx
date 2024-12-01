import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AdminProfile from "../profile/AdminProfile";
import Personalinfo from "../personal-info/Personalinfo";
import AdminInfo from "../admin-info/AdminInfo";
import Setting from "../setting/Setting";
import ActivityLogs from "../activity-logs/ActivityLogs";

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-4 flex flex-col md:flex-row gap-4">
      {/* Profile Card */}
      <AdminProfile />

      {/* Details Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-2/3">
        <Tabs defaultValue="info">
          <TabsList className="flex space-x-4 mb-4">
            <TabsTrigger
              value="info"
              className="px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded"
            >
              Personal Information
            </TabsTrigger>
            <TabsTrigger
              value="admin"
              className="px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded"
            >
              Admin Information
            </TabsTrigger>
            <TabsTrigger
              value="additional"
              className="px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded"
            >
              Additional Information
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

          {/* Personal Information */}
          <Personalinfo />

          {/* Admin Information */}
          <AdminInfo />

          {/* Additional Information */}
          <TabsContent value="additional" className="space-y-4">
            <div>
              <label className="block text-sm font-medium">
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="+91 9876543210"
                className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Address</label>
              <textarea
                placeholder="123 Street, City, State, Country"
                className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
          </TabsContent>

          {/* Settings */}
          <Setting />

          <div className="flex flex-col items-center mt-10">
            <button className="bg-btnBackground w-[50%] rounded-full h-10 text-mainHeading font-bold cursor-pointer">
              Edit
            </button>
          </div>

          {/* Activity Logs */}
          <ActivityLogs />
        </Tabs>
      </div>
    </div>
  );
}

export default AdminDashboard;
