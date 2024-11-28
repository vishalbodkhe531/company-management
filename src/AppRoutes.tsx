import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Structure = lazy(() => import("./layout/Structure"));
const Home = lazy(() => import("./pages/home/Home"));
const Loader = lazy(() => import("./components/loader/Loader"));
const SignInAddmin = lazy(() => import("./pages/sign-in /Sign-In-Addmin"));
const SignInEmp = lazy(() => import("./pages/sign-in /Sign-In-Emp"));
const SignUpAddmin = lazy(() => import("./pages/sign-up/Sign-Up-Addmin"));

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
