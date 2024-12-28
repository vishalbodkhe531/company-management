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
  },
});

export const { adminExist, adminNotExist } = adminReducers.actions;
