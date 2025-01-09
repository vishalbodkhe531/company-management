import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function SecureRoutes() {
  const { admin } = useSelector((state: RootState) => state.adminReducers);

  return admin ? <Outlet /> : <Navigate to="/" replace />;
}

export default SecureRoutes;
