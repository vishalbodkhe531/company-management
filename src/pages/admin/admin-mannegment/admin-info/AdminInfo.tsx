import { TabsContent } from "@/components/ui/tabs";
import EditForm from "../edit-form/EditForm";
import { useState } from "react";

function AdminInfo({ isEdit }: { isEdit: boolean }) {
  // Temp user data
  const [adminData, setAdminData] = useState({
    email: "xyz123@gmail.com",
    address: "123 Main Street, City, Country",
    gender: "Male",
    adminID: "ADM12345",
    adminRole: "Super Admin",
    department: "Information Technology",
    accessLevel: "Admin",
  });

  const handleUpdateData = (updateData: typeof adminData) => {
    console.log("updateData : ", updateData);
    setAdminData(updateData);
  };

  return (
    <>
      {isEdit ? (
        <EditForm
          adminData={adminData}
          saveBtn={isEdit}
          onUpdate={handleUpdateData}
        />
      ) : (
        <TabsContent value="admin" className="space-y-4">
          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <div className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600">
              {adminData.email}
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium">Address</label>
            <div className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600">
              {adminData.address}
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium">Gender</label>
            <div className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600">
              {adminData.gender}
            </div>
          </div>

          {/* Admin ID */}
          <div>
            <label className="block text-sm font-medium">Admin ID</label>
            <div className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600">
              {adminData.adminID}
            </div>
          </div>

          {/* Admin Role */}
          <div>
            <label className="block text-sm font-medium">Admin Role</label>
            <div className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600">
              {adminData.adminRole}
            </div>
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium">Department</label>
            <div className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600">
              {adminData.department}
            </div>
          </div>

          {/* Access Level */}
          <div>
            <label className="block text-sm font-medium">Access Level</label>
            <div className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600">
              {adminData.accessLevel}
            </div>
          </div>
        </TabsContent>
      )}
    </>
  );
}

export default AdminInfo;
