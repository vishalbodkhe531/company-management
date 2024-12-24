import { RootState } from "@/redux/store";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { useGetLoggedAdminQuery } from "./redux/api/AdminAPI";
import { adminExist } from "./redux/reducer/AdminReducer";
import { Admin } from "./types/types";

const Structure = lazy(() => import("./layout/Structure"));
const Home = lazy(() => import("./pages/home/Home"));
const AdminHome = lazy(() => import("./pages/admin/home/AdminHome"));
const Loader = lazy(() => import("./components/loader/Loader"));

const SignInAddmin = lazy(() => import("./pages/admin/sign-in /Sign-In-Admin"));
const SignUpAddmin = lazy(() => import("./pages/admin/sign-up/Sign-Up-Addmin"));

const SecureRoutes = lazy(() => import("./components/secure/SecureRoutes"));

const AdminDashboard = lazy(
  () => import("./pages/admin/admin-mannegment/dashboard/AdminDashboard")
);

const ProjectDashboard = lazy(
  () => import("./pages/projects-management/ProjectDashboard")
);

const EmployeeSignUp = lazy(
  () => import("./pages/employee/sign-up/Sign-Up-Emp")
);

const Payroll = lazy(
  () => import("./components/admin/emp-management/EmpPayroll")
);
const EmployeeSignIn = lazy(
  () => import("./pages/employee/sign-in/Sign-In-Emp")
);

const EmoployeeDash = lazy(
  () => import("./pages/admin/emp-managment/EmoployeeDash")
);

function AppRoutes() {
  const dispatch = useDispatch();

  const { admin } = useSelector((state: RootState) => state.adminReducers);

  const { data } = useGetLoggedAdminQuery();

  useEffect(() => {
    const { name, email, profilePic, gender, _id, role } = data?.admin || {};
    if (data?.admin) {
      dispatch(
        adminExist({ name, email, profilePic, gender, _id, role } as Admin)
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
                  {admin?.role === undefined ? (
                    <Home />
                  ) : admin?.role === "admin" ? (
                    <AdminHome />
                  ) : (
                    <Home />
                  )}
                </Structure>
              }
            />

            {/* Admin Routes  */}
            <Route path="admin" element={<Structure />}>
              <Route path="sign-in" element={<SignInAddmin />} />
              <Route path="sign-up" element={<SignUpAddmin />} />
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
            </Route>
            {/* dashboards */}
            <Route path="projects" element={<ProjectDashboard />} />
            <Route path="employee-management" element={<EmoployeeDash />} />

            {/* Employee Routes */}
            <Route path="employee" element={<Structure />}>
              <Route path="sign-in" element={<EmployeeSignIn />} />
              <Route path="sign-up" element={<EmployeeSignUp />} />
              <Route path="payroll" element={<Payroll />} />
            </Route>
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default AppRoutes;
