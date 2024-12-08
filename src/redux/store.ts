import { configureStore } from "@reduxjs/toolkit";
import { adminAPI } from "./api/AdminAPI";
import { adminReducers } from "./reducer/AdminReducer";

export const server = import.meta.env.VITE_SERVER;

export const store = configureStore({
  reducer: {
    [adminAPI.reducerPath]: adminAPI.reducer,
    [adminReducers.reducerPath]: adminReducers.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
