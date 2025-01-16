import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function SecureRoutes() {
  const { admin } = useSelector((state: RootState) => state.adminReducers);

  if (!admin?.email) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return admin ? <Outlet /> : <Navigate to="/" />;
}

export default SecureRoutes;
