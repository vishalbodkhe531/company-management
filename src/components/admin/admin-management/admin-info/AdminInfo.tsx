import { TabsContent } from "@/components/ui/tabs";
import EditForm from "../edit-form/EditForm";
import { useState, useEffect } from "react";
import { AdminDataType } from "@/types/types";

function AdminInfo({ isEdit }: { isEdit: boolean }) {
  const [adminData, setAdminData] = useState<AdminDataType>({
    email: "xyz123@gmail.com",
    address: "123 Main Street, City, Country",
    gender: "Male",
    adminID: "ADM12345",
    adminRole: "Super Admin",
    department: "Information Technology",
    accessLevel: "Admin",
  });

  const handleUpdateData = (updateData: AdminDataType) => {
    setAdminData(updateData);
  };

  useEffect(() => {
    const fetchedAdminData = localStorage.getItem("adminData");
    if (fetchedAdminData) {
      setAdminData(JSON.parse(fetchedAdminData));
    }
  }, []);

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
          {Object.entries(adminData).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm font-medium capitalize">
                {key}
              </label>
              <div className="w-full mt-1 px-4 py-2 shadow-lg border-slate-500 rounded border ">
                {value}
              </div>
            </div>
          ))}
        </TabsContent>
      )}
    </>
  );
}

export default AdminInfo;
