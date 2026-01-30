import {createSlice} from "@reduxjs/toolkit";

type NumberState = {
  value: number;
}

const initialState: NumberState = {
  value: 0,
};

const numberSlice = createSlice({
  name: 'number',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    setValue(state, action) {
      state.value = action.payload;
    },
  },
})

export const {increment, decrement, setValue} = numberSlice.actions;
export default numberSlice.reducer;
