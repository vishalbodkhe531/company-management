import { requestEmpList } from "@/types/types";
import { IoCheckmarkOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

function RequestList({
  firstName,
  lastName,
  address,
  profilePic,
}: requestEmpList) {
  console.log(firstName, lastName, address);
  return (
    <div className="bg-gray-800 flex flex-col sm:flex-row sm:justify-between items-center p-4 rounded-lg gap-4">
      {/* Employee Info */}
      <div className="flex items-center">
        <img
          src={profilePic}
          alt="Employee"
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="ml-4">
          <h1 className="text-lg font-semibold text-white">{firstName}</h1>
          <p className="text-sm text-gray-400 mt-1">{address}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 ">
        <button className="px-4 py-2  bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition">
          <RxCross1 />
        </button>
        <button className="px-4 py-2 bg-green-600  text-white text-sm font-medium rounded-lg hover:bg-green-700 transition">
          <IoCheckmarkOutline />
        </button>
      </div>
    </div>
  );
}

export default RequestList;
