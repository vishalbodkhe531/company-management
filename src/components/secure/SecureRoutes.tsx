// import { useGetLoggedUserQuery } from "@/redux/api/admin-API/GetLoggedUserAPI";
// import { RootState } from "@/redux/store";
// import { useSelector } from "react-redux";
// import { Navigate, Outlet } from "react-router-dom";

// function SecureRoutes() {
//   const { admin } = useSelector((state: RootState) => state.adminReducers);

//   const { data } = useGetLoggedUserQuery();
//   console.log(data);

//   // if (!admin?.email) {
//   //   return (
//   //     <div className="flex items-center justify-center h-screen">
//   //       <div
//   //         className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
//   //         role="status"
//   //       >
//   //         <span className="sr-only">Loading...</span>
//   //       </div>
//   //     </div>
//   //   );`
//   // }

//   return admin ? <Outlet /> : <Navigate to="/" />;
// }

// export default SecureRoutes;
import { useGetLoggedUserQuery } from "@/redux/api/admin-API/GetLoggedUserAPI";
import { adminExist } from "@/redux/reducer/AdminReducer";
import { empExist } from "@/redux/reducer/EmpReducer";
import { Admin, Employee } from "@/types/types";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function SecureRoutes({ allowedRoles }: { allowedRoles: string[] }) {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetLoggedUserQuery();

  // Show a loading spinner until the user data is fetched
  if (isLoading) return <div>Loading...</div>;

  // Check if user data exists and matches allowed roles
  const user = data?.user;
  if (user) {
    const { role } = user;

    console.log(role);

    if (role && allowedRoles.includes(role)) {
      // // Dispatch the appropriate action based on the role
      // if (role === "admin") {
      //   dispatch(adminExist(user as Admin));
      // } else if (role === "employee") {
      //   dispatch(empExist(user as Employee));
      // }

      return <Outlet />; // Render child routes
    }
  }

  // Redirect if user is not authenticated or lacks the proper role
  return <Navigate to="/" />;
}

export default SecureRoutes;
