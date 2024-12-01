import { useState } from "react";
import AdminProfileForm from "./AdminProfileForm";

function AdminProfile() {
  const [edit, setEdit] = useState(false);

  return (
    <>
      {edit ? (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/3 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-600 flex items-center justify-center text-2xl font-bold">
            V
          </div>
          <h2 className="text-xl font-semibold mt-4">Vishal Bodkhe</h2>
          <p className="text-gray-400">vishalbodkhe531@gmail.com</p>

          <AdminProfileForm switer={setEdit} />
        </div>
      ) : (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/3 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-600 flex items-center justify-center text-2xl font-bold">
            V
          </div>
          <h2 className="text-xl font-semibold mt-4">Vishal Bodkhe</h2>
          <p className="text-gray-400">vishalbodkhe531@gmail.com</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium"
            onClick={() => setEdit(true)} // Enables edit mode
          >
            Edit Profile
          </button>
        </div>
      )}
    </>
  );
}

export default AdminProfile;
