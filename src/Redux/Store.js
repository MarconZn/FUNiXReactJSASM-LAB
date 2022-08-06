import { createSlice, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";

// THONG TIN STORE CUA ASSIGNMENT
// const initialState = { staff: [], department: [] };

// const StaffSlice = createSlice({
//   name: "Staffs",
//   initialState,
//   reducers: {
//     inputStaff(state, action) {
//       state.staff = action.payload;
//     },
//     inputDepartment(state, action) {
//       state.department = action.payload;
//     },
//     addStaff(state, action) {
//       state.staff.push(action.payload);
//     },
//     deleteStaff(state, action) {
//       state.staff = state.staff.filter((a) => a.id !== Number(action.payload));
//     },
//   },
// });

// const store = configureStore({
//   reducer: StaffSlice.reducer,
//   middleware: [thunk, logger],
// });

// export const StaffSliceActions = StaffSlice.actions;

// THONG TIN STORE CUA LAB
const initialState = {
  dishes: [],
  comments: [],
  promotions: [],
  leaders: [],
  feedback: [],
};

const DishesSlice = createSlice({
  name: "Dishes",
  initialState,
  reducers: {
    inputDishes(state, action) {
      state.dishes = action.payload;
    },

    inputComments(state, action) {
      state.comments = action.payload;
    },

    inputPromotions(state, action) {
      state.promotions = action.payload;
    },

    inputLeaders(state, action) {
      state.leaders = action.payload;
    },

    inputFeedback(state, action) {
      state.feedback = action.payload;
    },

    addFeedback(state, action) {
      state.feedback.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: DishesSlice.reducer,
  middleware: [thunk, logger],
});

export const DishSliceActions = DishesSlice.actions;

export default store;
