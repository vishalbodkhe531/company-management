import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import AuthPage from "./pages/admin/authentication/AuthPage";
import EmployeeDash from "./pages/admin/emp-managment/EmployeeDash";
import AdminHome from "./pages/admin/home/AdminHome";
import AuthEmpPage from "./pages/employee/authentication/AuthPage";
import EmpDash from "./pages/employee/dashboard/EmpDash";
import { useGetLoggedUserQuery } from "./redux/api/admin-API/GetLoggedUserAPI";
import { adminExist, adminLoading } from "./redux/reducer/AdminReducer";
import { empExist, empLoading } from "./redux/reducer/EmpReducer";
import { Admin, Employee } from "./types/types";

const Structure = lazy(() => import("./layout/Structure"));
const Home = lazy(() => import("./pages/home/Home"));
const Loader = lazy(() => import("./components/loader/Loader"));
const SecureRoutes = lazy(() => import("./components/secure/SecureRoutes"));
const AdminDashboard = lazy(
  () => import("./pages/admin/admin-dashboard/AdminDashboard")
);
const ProjectDashboard = lazy(
  () => import("./pages/admin/projects-dashboard/ProjectDashboard")
);

const EmoployeeDash = lazy(
  () => import("./pages/admin/emp-managment/EmployeeDash")
);

function AppRoutes() {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetLoggedUserQuery();

  useEffect(() => {
    if (isLoading) {
      dispatch(empLoading());
      dispatch(adminLoading());
    }

    if (data?.user) {
      if (data.user.role === "admin") {
        dispatch(adminExist(data.user as Admin));
      } else if (data.user.role === "employee") {
        dispatch(empExist(data.user as Employee));
      }
    }
  }, [data, dispatch]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route
              path="/"
              element={
                <Structure>
                  <Home />
                </Structure>
              }
            />

            {/* Admin Routes */}
            <Route path="admin" element={<Structure />}>
              <Route path="sign-in" element={<AuthPage />} />
              <Route path="sign-up" element={<AuthPage />} />
            </Route>
            <Route
              path="admin"
              element={<SecureRoutes allowedRoles={["admin"]} />}
            >
              <Route
                path="dashboard"
                element={
                  <Structure>
                    <AdminDashboard />
                  </Structure>
                }
              />
              <Route path="projects" element={<ProjectDashboard />} />
              <Route path="employee-management" element={<EmployeeDash />} />
              <Route index element={<AdminHome />} />
            </Route>

            {/* Employee Routes */}
            <Route path="emp" element={<Structure />}>
              <Route path="sign-in" element={<AuthEmpPage />} />
              <Route path="sign-up" element={<AuthEmpPage />} />
            </Route>
            <Route
              path="emp"
              element={<SecureRoutes allowedRoles={["employee"]} />}
            >
              <Route path="dashboard" element={<EmpDash />} />
            </Route>

            {/* Catch-All Route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
        <Toaster toastOptions={{ duration: 3000 }} />
      </Suspense>
    </>
  );
}

export default AppRoutes;
