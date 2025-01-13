import { useAllEmpRequestsQuery } from "@/redux/api/emp-API/EmpAPI";
import RequestList from "./RequestList";
import { useEffect } from "react";

function Notifications() {
  const { data, refetch, isLoading } = useAllEmpRequestsQuery();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <div className="space-y-6 w-full">
        {isLoading ? (
          "Loading"
        ) : data?.allRequests.length !== 0 ? (
          data?.allRequests.map(
            (item) =>
              item.isVerified === "pendding" && (
                <RequestList
                  key={item._id}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  address={item.address}
                  profilePic={item.profilePic}
                  id={item._id}
                />
              )
          )
        ) : (
          <p className="text-white text-center text-lg">No any requests*</p>
        )}
      </div>
    </div>
  );
}

export default Notifications;
