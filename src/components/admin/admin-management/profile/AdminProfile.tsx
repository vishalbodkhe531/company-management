import { useState } from "react";
import AdminProfileForm from "./AdminProfileForm";
import PNG from "../../../../assets/png2.png";
import "../../../../index.css";

function AdminProfile() {
  const [edit, setEdit] = useState(false);

  const handleEditToggle = () => {
    setEdit((prev) => !prev); // Toggle edit mode
  };

  return (
    <>
      {edit ? (
        <div className=" p-6 rounded-lg shadow-lg w-full md:w-1/3 flex flex-col items-center ">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold">
            V
          </div>
          <h2 className="text-xl font-semibold mt-4">Vishal Bodkhe</h2>
          <p className="text-gray-400">vishalbodkhe531@gmail.com</p>
          <div className="mt-10">
            <AdminProfileForm switer={setEdit} />
          </div>
        </div>
      ) : (
        <div className="p-6 rounded-lg shadow-lg w-full md:w-1/3 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold">
            V
          </div>
          <h2 className="text-xl font-semibold mt-4">Vishal Bodkhe</h2>
          <p className="text-gray-400">vishalbodkhe531@gmail.com</p>
          <button
            className="mt-4 px-4 py-2 btn-gradient rounded text-white font-medium"
            onClick={handleEditToggle} // Use function to toggle
          >
            Edit Profile
          </button>

          <div className="relative h-[80%] w-full bg-gradient-to-br  overflow-hidden">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-700 to-blue-700 opacity-60 animate-expandWave1"></div>
              <div className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-pink-600 to-orange-600 opacity-50 animate-expandWave2 delay-100"></div>
              <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-green-400 to-green-400 opacity-40 animate-expandWave3 delay-200"></div>
            </div>

            <div className="flex justify-center items-center h-full z-10">
              <img
                src={PNG}
                alt="Admin Cartoon"
                className="relative w-48 h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminProfile;
