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
      state.loading = false;
    },
    empNotExist: (state) => {
      state.employee = null;
      state.loading = false;
    },
  },
});

export const { empExist, empNotExist } = empReducers.actions;
