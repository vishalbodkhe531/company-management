// import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { RootState } from "@/redux/store"; // Adjust the import based on your project structure
// import { useGetLoggedUserQuery } from "@/redux/api/admin-API/GetLoggedUserAPI";
// import { useEffect } from "react";

// interface SecureRoutesProps {
//   allowedRoles: string[]; // Roles that are allowed to access the route
// }

// function SecureRoutes({ allowedRoles }: SecureRoutesProps) {
//   const { employee } = useSelector((state: RootState) => state.empReducers);
//   const { admin } = useSelector((state: RootState) => state.adminReducers);

//   const { data, isLoading } = useGetLoggedUserQuery();

//   console.log(data?.user.role);

//   // const {user} = data;
//   // const {role} = user;
//   // console.log(role);

//   const role = data?.user.role;
//   console.log(role);
//   console.log(isLoading);

//   // const user = admin || employee;
//   // let user;

//   // useEffect(() => {
//   //   if (role === "admin") {
//   //     user = true;
//   //   } else if (role === "employee") {
//   //     user = true;
//   //   }
//   // }, []);

//   if (isLoading) {
//     // <div className="">Locding..</div>;
//     setTimeout(async () => {
//       console.log(`Hello!`);
//     }, 2000);
//   }

//   if (!role) {
//     // Redirect to the home page if the user is not logged in
//     return <Navigate to="/" />;
//   }

//   // Check if the user's role is included in the allowed roles
//   if (allowedRoles.includes(role!)) {
//     return <Outlet />;
//   }

//   // If the user's role is not allowed, redirect to a "Not Authorized" page
//   return <Navigate to="/not-authorized" />;
// }

// export default SecureRoutes;

import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store"; // Adjust the import based on your project structure
import { useGetLoggedUserQuery } from "@/redux/api/admin-API/GetLoggedUserAPI";
import React from "react";

interface SecureRoutesProps {
  allowedRoles: string[]; // Roles that are allowed to access the route
}

function SecureRoutes({ allowedRoles }: SecureRoutesProps) {
  const { isLoading, data, isError } = useGetLoggedUserQuery(); // Fetch user data
  const role = data?.user.role;

  if (isLoading) {
    // Show a loading indicator while waiting for the data
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (isError || !role) {
    // Redirect to home page if there's an error or no role
    return <Navigate to="/" />;
  }

  // Check if the user's role is included in the allowed roles
  console.log(role);
  if (allowedRoles.includes(role)) {
    return <Outlet />;
  }

  // Redirect to a "Not Authorized" page if the user's role is not allowed
  return <Navigate to="/not-authorized" />;
}

export default SecureRoutes;
