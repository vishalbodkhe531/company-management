import { RootState } from "@/redux/store";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import AuthPage from "./pages/admin/authentication/AuthPage";
import AuthEmpPage from "./pages/employee/authentication/AuthPage";
import { useGetLoggedUserQuery } from "./redux/api/admin-API/GetLoggedUserAPI";
import { adminExist } from "./redux/reducer/AdminReducer";
import { empExist } from "./redux/reducer/EmpReducer";
import { Admin, Employee } from "./types/types";

const Structure = lazy(() => import("./layout/Structure"));
const Home = lazy(() => import("./pages/home/Home"));
const AdminHome = lazy(() => import("./pages/admin/home/AdminHome"));
const Loader = lazy(() => import("./components/loader/Loader"));
const SecureRoutes = lazy(() => import("./components/secure/SecureRoutes"));
const AdminDashboard = lazy(
  () => import("./pages/admin/admin-dashboard/AdminDashboard")
);
const ProjectDashboard = lazy(
  () => import("./pages/admin/projects-dashboard/ProjectDashboard")
);

const Payroll = lazy(
  () => import("./components/admin/emp-management/EmpPayroll")
);

const EmoployeeDash = lazy(
  () => import("./pages/admin/emp-managment/EmoployeeDash")
);

function AppRoutes() {
  const dispatch = useDispatch();

  const { employee } = useSelector((state: RootState) => state.empReducers);

  const { data } = useGetLoggedUserQuery();

  useEffect(() => {
    if (data?.user && "role" in data.user && data.user.role === "admin") {
      const { name, email, profilePic, gender, _id, role } =
        (data?.user as Admin) || {};
      dispatch(
        adminExist({ name, email, profilePic, gender, _id, role } as Admin)
      );
    }

    if (data?.user && "role" in data.user && data.user.role === "employee") {
      const {
        _id,
        firstName,
        lastName,
        email,
        phoneNumber,
        resignationDate,
        qualification,
        skill,
        gender,
        address,
        isVerified,
        profilePic,
      } = data.user as Employee;

      dispatch(
        empExist(
          ({
            _id,
            firstName,
            lastName,
            email,
            phoneNumber,
            resignationDate,
            qualification,
            skill,
            gender,
            address,
            isVerified,
            profilePic,
          } as Employee) || {}
        )
      );
    }
  }, [data, dispatch]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Structure>
                  {/* {admin?.role === undefined ? (
                    <Home />
                  ) : admin?.role === "admin" ? (
                    <AdminHome />
                  ) : (
                    <Home />
                  )} */}
                  <Home />
                </Structure>
              }
            />

            {/* Admin Routes  */}
            <Route path="admin" element={<Structure />}>
              <Route path="sign-in" element={<AuthPage />} />
              <Route path="sign-up" element={<AuthPage />} />
            </Route>
            <Route path="/admin" element={<SecureRoutes />}>
              <Route
                path="dashboard"
                element={
                  <Structure>
                    <AdminDashboard />
                  </Structure>
                }
              />
              <Route path="projects" element={<ProjectDashboard />} />
              <Route path="employee-management" element={<EmoployeeDash />} />
            </Route>
            {/* dashboards */}

            {/* Employee Radminoutes */}
            <Route path="emp" element={<Structure />}>
              <Route path="sign-in" element={<AuthEmpPage />} />
              <Route path="sign-up" element={<AuthEmpPage />} />
              <Route path="payroll" element={<Payroll />} />
            </Route>
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </Router>
        <Toaster toastOptions={{ duration: 3000 }} />
      </Suspense>
    </>
  );
}

export default AppRoutes;
