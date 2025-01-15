import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  role: string | null;
}

const initialState: AuthState = {
  role: null,
};

export const roleReducer = createSlice({
  name: "roleReducer",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<{ role: string }>) => {
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.role = null;
    },
  },
});

export const { setRole, logout } = roleReducer.actions;
