import { createSlice, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";

const initialState = { staff: [], department: [] };

const StaffSlice = createSlice({
  name: "Staffs",
  initialState,
  reducers: {
    inputStaff(state, action) {
      state.staff = action.payload;
    },
    inputDepartment(state, action) {
      state.department = action.payload;
    },
    addStaff(state, action) {
      state.staff.push(action.payload);
    },
    deleteStaff(state, action) {
      state.staff = state.staff.filter((a) => a.id !== Number(action.payload));
    },
  },
});

const store = configureStore({
  reducer: StaffSlice.reducer,
  middleware: [thunk, logger],
});

export const StaffSliceActions = StaffSlice.actions;
export default store;
