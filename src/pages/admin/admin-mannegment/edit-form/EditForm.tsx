import { TabsContent } from "@/components/ui/tabs";
import { adminDataType } from "@/types/types";
import { useEffect, useState } from "react";

function EditForm({
  adminData,
  onUpdate,
  saveBtn,
}: {
  adminData: adminDataType;
  onUpdate: (updateData: adminDataType) => void;
  saveBtn: boolean;
}) {
  const [formData, setFormData] = useState(adminData);

  useEffect(() => {
    setFormData(adminData);
  }, [adminData]);

  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  saveBtn && onUpdate(formData);

  return (
    <TabsContent value="admin" className="space-y-4">
      {/* Email Address */}
      <div>
        <label className="block text-sm font-medium">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email address"
          className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-medium">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter address"
          className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {/* Gender */}
      <div>
        <label className="block text-sm font-medium">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Admin ID */}
      <div>
        <label className="block text-sm font-medium">Admin ID</label>
        <input
          type="text"
          name="adminID"
          value={formData.adminID}
          onChange={handleChange}
          placeholder="Enter Admin ID"
          className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {/* Admin Role */}
      <div>
        <label className="block text-sm font-medium">Admin Role</label>
        <select
          name="adminRole"
          value={formData.adminRole}
          onChange={handleChange}
          className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Select Admin Role</option>
          <option value="Super Admin">Super Admin</option>
          <option value="Admin">Admin</option>
          <option value="Moderator">Moderator</option>
        </select>
      </div>

      {/* Department */}
      <div>
        <label className="block text-sm font-medium">Department</label>
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Select Department</option>
          <option value="Information Technology">Information Technology</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
        </select>
      </div>

      {/* Access Level */}
      <div>
        <label className="block text-sm font-medium">Access Level</label>
        <select
          name="accessLevel"
          value={formData.accessLevel}
          onChange={handleChange}
          className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Select Access Level</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
      </div>
    </TabsContent>
  );
}

export default EditForm;
