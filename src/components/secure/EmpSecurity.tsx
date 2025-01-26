import { useGetLoggedUserQuery } from "@/redux/api/admin-API/GetLoggedUserAPI";
import { adminExist } from "@/redux/reducer/AdminReducer";
import { empExist } from "@/redux/reducer/EmpReducer";
import { Admin, Employee } from "@/types/types";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function EmpSecurity(emp: string) {
  console.log(emp);
  const dispatch = useDispatch();

  const { data } = useGetLoggedUserQuery();

  let user;

  if (data?.user && "role" in data.user && data.user.role === "admin") {
    user = "admin";
    const { name, email, profilePic, gender, _id, role } =
      (data?.user as Admin) || {};
    dispatch(
      adminExist({ name, email, profilePic, gender, _id, role } as Admin)
    );
  }

  if (data?.user && "role" in data.user && data.user.role === "employee") {
    user = "employee";
    dispatch(empExist(data.user as Employee));
  }

  return user ? <Outlet /> : <Navigate to="/" />;
}

export default EmpSecurity;
