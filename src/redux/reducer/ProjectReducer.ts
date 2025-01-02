import {
  adminProjectInitialState,
  adminProjectType,
} from "@/types/reducer-types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: adminProjectInitialState = {
  projects: [],
  loading: false,
};

export const adminProjectReducers = createSlice({
  name: "adminProjectReducers",
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<adminProjectType>) => {
      state.projects.push(action.payload);
    },
  },
});

export const { addProject } = adminProjectReducers.actions;
export default adminProjectReducers.reducer;
