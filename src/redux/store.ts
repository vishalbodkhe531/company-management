import { configureStore } from "@reduxjs/toolkit";
import { adminAPI } from "./api/admin-API/AdminAPI";
import { adminReducers } from "./reducer/AdminReducer";
import { adminProjectAPI } from "./api/admin-API/ProjectAPI";
import { adminProjectReducers } from "./reducer/ProjectReducer";

export const server = import.meta.env.VITE_SERVER;

export const store = configureStore({
  reducer: {
    [adminReducers.reducerPath]: adminReducers.reducer,
    [adminProjectReducers.reducerPath]: adminProjectReducers.reducer,
    [adminAPI.reducerPath]: adminAPI.reducer,
    [adminProjectAPI.reducerPath]: adminProjectAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      adminAPI.middleware,
      adminProjectAPI.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
