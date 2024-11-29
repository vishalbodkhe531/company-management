import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Structure = lazy(() => import("./layout/Structure"));
const Home = lazy(() => import("./pages/home/Home"));
const Loader = lazy(() => import("./components/loader/Loader"));
const SignInAddmin = lazy(
  () => import("./pages/admin/sign-in /Sign-In-Addmin")
);
const SignInEmp = lazy(() => import("./pages/employee/sign-in/Sign-In-Emp"));
const SignUpAddmin = lazy(() => import("./pages/admin/sign-up/Sign-Up-Addmin"));
const AdminProfile = lazy(() => import("./pages/admin/profile/AdminProfile"));
const Payroll = lazy(() => import("./pages/payroll/Payroll"));
const SignUpEmp = lazy(() => import("./pages/employee/sign-up/Sign-Up-Emp"));

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
              <Route path="profile" element={<AdminProfile />} />
            </Route>

            {/* Employee Routes */}
            <Route path="emp" element={<Structure />}>
              <Route path="sign-in" element={<SignInEmp />} />
              <Route path="sign-up" element={<SignUpEmp />} />
              <Route path="payroll" element={<Payroll />} />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default AppRoutes;
