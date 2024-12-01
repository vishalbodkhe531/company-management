import { TabsContent } from "@/components/ui/tabs";

function Setting() {
  return (
    <>
      <TabsContent value="settings" className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Change Password</label>
          <input
            type="password"
            placeholder="New Password"
            className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </TabsContent>
    </>
  );
}

export default Setting;
