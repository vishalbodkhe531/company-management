import { adminReducerInitialState } from "@/types/reducer-types";
import { Admin } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: adminReducerInitialState = {
  admin: null,
  loading: false,
};

export const adminReducers = createSlice({
  name: "adminReducers",
  initialState,
  reducers: {
    adminExist: (state, action: PayloadAction<Admin>) => {
      state.admin = action.payload;
      state.loading = false;
    },
    adminNotExist: (state) => {
      state.admin = null;
      state.loading = false;
    },

    adminLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { adminExist, adminNotExist, adminLoading } =
  adminReducers.actions;
