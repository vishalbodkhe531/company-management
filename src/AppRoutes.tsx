import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Structure = lazy(() => import("./layout/Structure"));
const Home = lazy(() => import("./pages/home/Home"));
const Loader = lazy(() => import("./components/loader/Loader"));
const SignInAddmin = lazy(() => import("./pages/sign-in /Sign-In-Addmin"));
const SignInEmp = lazy(() => import("./pages/sign-in /Sign-In-Emp"));
const SignUpAddmin = lazy(() => import("./pages/sign-up/Sign-Up-Addmin"));
const Profile = lazy(() => import("./pages/admin/profile/Profile"));
const Payroll = lazy(() => import("./pages/payroll/Payroll"));

function AppRoutes() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          {/* Admin Routes */}
          <Routes>
            <Route
              path="/"
              element={
                <Structure>
                  <Home />
                </Structure>
              }
            />

            <Route
              path="/sign-in-admin"
              element={
                <Structure>
                  <SignInAddmin />
                </Structure>
              }
            />

            <Route
              path="/sign-up-admin"
              element={
                <Structure>
                  <SignUpAddmin />
                </Structure>
              }
            />

            <Route
              path="/admin-profile"
              element={
                <Structure>
                  <Profile />
                </Structure>
              }
            />

            <Route
              path="/payroll"
              element={
                <Structure>
                  <Payroll />
                </Structure>
              }
            />

            {/* Employee Routes    */}
            <Route
              path="/sign-in-employee"
              element={
                <Structure>
                  <SignInEmp />
                </Structure>
              }
            />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default AppRoutes;
