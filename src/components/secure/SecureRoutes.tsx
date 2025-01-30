import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

interface SecureRoutesProps {
  allowedRoles: string[];
}

function SecureRoutes({ allowedRoles }: SecureRoutesProps) {
  const { employee, loading: employeeLoading } = useSelector(
    (state: RootState) => state.empReducers
  );
  const { admin, loading: adminLoading } = useSelector(
    (state: RootState) => state.adminReducers
  );

  const userRole = admin?.role || employee?.role;

  const isAuthorized = allowedRoles.includes(userRole || "");

  if (isAuthorized) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
}

export default SecureRoutes;
