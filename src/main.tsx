import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./App-routes.tsx";
import "./index.css";
// import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRoutes />
    {/* <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    /> */}
  </StrictMode>
);
