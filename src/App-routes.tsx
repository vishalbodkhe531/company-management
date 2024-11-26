import { lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Structure = lazy(() => import("./layout/Structure"));
const Home = lazy(() => import("./pages/home/Home"));

function AppRoutes() {
  return (
    <>
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
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
