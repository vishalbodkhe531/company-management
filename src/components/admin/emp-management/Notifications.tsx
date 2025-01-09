import { useAllEmpRequestsQuery } from "@/redux/api/emp-API/EmpAPI";
import RequestList from "./RequestList";

function Notifications() {
  const { data } = useAllEmpRequestsQuery();

  return (
    <div className="bg-black min-h-screen">
      <div className="space-y-6 w-full">
        {data?.allRequests.map((item) => (
          <>
            {!item.isVerified && (
              <RequestList
                key={item._id}
                firstName={item.firstName}
                lastName={item.lastName}
                address={item.address}
                profilePic={item.profilePic}
                id={item._id}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
