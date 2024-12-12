import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function SecureRoutes() {
  const { admin } = useSelector((state: RootState) => state.adminReducers);

  return admin ? <Outlet /> : <Navigate to="/admin/sign-in" replace />;
}

export default SecureRoutes;
