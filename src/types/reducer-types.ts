import { Admin } from "./types";

export interface adminReducerInitialState {
  admin: Admin | null;
  loading: boolean;
}
