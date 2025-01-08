import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function SecureRoutes() {
  const { admin } = useSelector((state: RootState) => state.adminReducers);
  const isWaitingEmp = localStorage.getItem("EmpWaiting");
  console.log(isWaitingEmp);

  return admin ? <Outlet /> : <Navigate to="/" replace />;
}

export default SecureRoutes;
