import { useAcceptRequestMutation } from "@/redux/api/emp-API/EmpAPI";
import { requestEmpList } from "@/types/types";
import { IoCheckmarkOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

function RequestList({
  firstName,
  lastName,
  address,
  profilePic,
  id,
}: requestEmpList) {
  const [acceptRequest] = useAcceptRequestMutation();
  const handleAccept = async () => {
    console.log(id);
    const res = await acceptRequest(id);

    console.log(res);
  };

  return (
    <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 flex flex-col sm:flex-row sm:justify-between items-center p-6 rounded-xl gap-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center">
        <img
          src={profilePic}
          alt={`${firstName}'s Profile`}
          className="h-20 w-20 rounded-full border-4 border-gray-600 object-cover shadow-md"
        />
        <div className="ml-5">
          <h1 className="text-xl font-bold text-white">{`${firstName} ${lastName}`}</h1>
          <p className="text-sm text-gray-400 mt-2">{address}</p>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-red-600 border border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition duration-300"
          aria-label="Reject"
        >
          <RxCross1 className="text-lg" />
          Reject
        </button>

        <button
          className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-green-600 border border-green-600 rounded-lg hover:bg-green-600 hover:text-white transition duration-300"
          aria-label="Approve"
          onClick={handleAccept}
        >
          <IoCheckmarkOutline className="text-lg" />
          Approve
        </button>
      </div>
    </div>
  );
}

export default RequestList;
