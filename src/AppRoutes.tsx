import { Suspense, lazy } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

const Structure = lazy(() => import("./layout/Structure"));
const Home = lazy(() => import("./pages/home/Home"));
const Loader = lazy(() => import("./components/loader/Loader"));

const SignInAddmin = lazy(
  () => import("./pages/admin/sign-in /Sign-In-Addmin")
);
const SignUpAddmin = lazy(() => import("./pages/admin/sign-up/Sign-Up-Addmin"));
const AdminProfile = lazy(
  () => import("./pages/admin/admin-mannegment/profile/AdminProfile")
);

const AdminDashboard = lazy(
  () => import("./pages/admin/admin-mannegment/dashboard/AdminDashboard")
);

const ProjectDashboard = lazy(() => import("./pages/projects/Project"));

const EmployeeSignUp = lazy(
  () => import("./pages/employee/sign-up/Sign-Up-Emp")
);

const Payroll = lazy(() => import("./pages/payroll/Payroll"));
const EmployeeSignIn = lazy(
  () => import("./pages/employee/sign-in/Sign-In-Emp")
);

function AppRoutes() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Structure>
                  <Home />
                </Structure>
              }
            />

            {/* Admin Routes  */}
            <Route path="admin" element={<Structure />}>
              <Route path="sign-in" element={<SignInAddmin />} />
              <Route path="sign-up" element={<SignUpAddmin />} />
              <Route path="dashboard" element={<AdminDashboard />} />
            </Route>
            <Route path="projects" element={<ProjectDashboard />} />

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
