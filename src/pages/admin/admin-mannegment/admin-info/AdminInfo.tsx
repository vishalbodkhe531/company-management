import { TabsContent } from "@/components/ui/tabs";

function AdminInfo() {
  return (
    <>
      <TabsContent value="admin" className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Gender</label>
          <input
            type="text"
            placeholder="Super Admin"
            className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Admin ID</label>
          <input
            type="text"
            placeholder="ADM12345"
            className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Admin Role: The admin's specific role (e.g., Super Admin, Manager). */}
        <div>
          <label className="block text-sm font-medium"> Admin Role</label>
          <input
            type="email"
            placeholder="vishalbodkhe531@gmail.com"
            className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Admin ID</label>
          <input
            type="email"
            placeholder="vishalbodkhe531@gmail.com"
            className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Department</label>
          <input
            type="email"
            placeholder="vishalbodkhe531@gmail.com"
            className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Access Level: Defines what permissions the admin has (e.g., Read/Write). */}
        <div>
          <label className="block text-sm font-medium">Access Level</label>
          <input
            type="email"
            placeholder="vishalbodkhe531@gmail.com"
            className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Access Level</label>
          <input
            type="email"
            placeholder="vishalbodkhe531@gmail.com"
            className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </TabsContent>
    </>
  );
}

export default AdminInfo;
