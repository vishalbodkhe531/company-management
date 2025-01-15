import { configureStore } from "@reduxjs/toolkit";
import { adminAPI } from "./api/admin-API/AdminAPI";
import { adminReducers } from "./reducer/AdminReducer";
import { adminProjectAPI } from "./api/admin-API/ProjectAPI";
import { adminProjectReducers } from "./reducer/ProjectReducer";
import { empReducers } from "./reducer/EmpReducer";
import { empAPI } from "./api/emp-API/EmpAPI";
import { roleReducer } from "./reducer/RoleReducer";
import { getLoggedUser } from "./api/admin-API/GetLoggedUserAPI";

export const server = import.meta.env.VITE_SERVER;

export const store = configureStore({
  reducer: {
    [adminReducers.reducerPath]: adminReducers.reducer,
    [adminProjectReducers.reducerPath]: adminProjectReducers.reducer,
    [empReducers.reducerPath]: empReducers.reducer,
    [roleReducer.reducerPath]: roleReducer.reducer,
    [adminAPI.reducerPath]: adminAPI.reducer,
    [adminProjectAPI.reducerPath]: adminProjectAPI.reducer,
    [empAPI.reducerPath]: empAPI.reducer,
    [getLoggedUser.reducerPath]: getLoggedUser.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      adminAPI.middleware,
      adminProjectAPI.middleware,
      empAPI.middleware,
      getLoggedUser.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
