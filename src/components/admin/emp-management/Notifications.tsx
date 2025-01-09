import { useAllEmpRequestsQuery } from "@/redux/api/emp-API/EmpAPI";
import RequestList from "./RequestList";

function Notifications() {
  const { data } = useAllEmpRequestsQuery();

  console.log(data);

  data?.allRequests.map((item) => console.log(item));

  return (
    <div className="bg-black min-h-screen">
      <div className="space-y-6 w-full">
        {data?.allRequests.map((item) => (
          <RequestList
            firstName={item.firstName}
            lastName={item.lastName}
            address={item.address}
            profilePic={item.profilePic}
            // photo={item}
          />
        ))}
      </div>
    </div>
  );
}

export default Notifications;
