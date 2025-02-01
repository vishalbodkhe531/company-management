import { empReducerInitialState } from "@/types/reducer-types";
import { Employee } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: empReducerInitialState = {
  employee: null,
  loading: false,
};

export const empReducers = createSlice({
  name: "empReducers",
  initialState,
  reducers: {
    empExist: (state, action: PayloadAction<Employee>) => {
      state.employee = action.payload;
    },
    empNotExist: (state) => {
      state.employee = null;
    },
    empLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { empExist, empNotExist, empLoading } = empReducers.actions;
