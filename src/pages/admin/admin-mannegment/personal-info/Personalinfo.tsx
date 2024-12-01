import { TabsContent } from "@/components/ui/tabs";

function Personalinfo() {
  return (
    <>
      <TabsContent value="info" className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            placeholder="Vishal Bodkhe"
            className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email Address</label>
          <input
            type="email"
            placeholder="vishalbodkhe531@gmail.com"
            className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Address</label>
          <input
            type="text"
            placeholder="Enter your address"
            className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Date of Birth</label>
          <input
            type="date"
            placeholder="Select Date"
            className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </TabsContent>
    </>
  );
}

export default Personalinfo;
