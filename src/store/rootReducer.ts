import numberReducer from "@/features/number/store/numberSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  number: numberReducer,
})
