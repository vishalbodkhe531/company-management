// import { adminProjectInitialState } from "@/types/reducer-types";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const initialState: adminProjectInitialState = {
//   projects: [],
//   loading: false,
// };

// export const adminProjectReducers = createSlice({
//   name: "adminProjectReducers",
//   initialState,
//   reducers: {
//     addProject: (state, action: PayloadAction<adminProjectInitialState>) => {
//       state.projects.push(action.payload);
//     },
//   },
// });

// export const { addProject } = adminProjectReducers.actions;

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
      // Push a single project into the projects array
      state.projects.push(action.payload);
    },
  },
});

export const { addProject } = adminProjectReducers.actions;
export default adminProjectReducers.reducer;
