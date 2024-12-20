import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    hour: 0, 
    minute: 0, 
    second: 0
  },
  reducers: {
    incrementHour: (state) => {
      state.hour += 1;
    },
    decrementHour: (state) => {
      if (state.hour > 0) state.hour -= 1;
    },
    incrementMinute: (state) => {
      if (state.minute < 59) state.minute += 1;
    },
    decrementMinute: (state) => {
      if (state.minute > 0) state.minute -= 1;
    },
    incrementSecond: (state) => {
      if (state.second < 59) state.second += 1;
    },
    decrementSecond: (state) => {
      if (state.second > 0) state.second -= 1;
    },
  },
});

export const {
  incrementHour,
  decrementHour,
  incrementMinute,
  decrementMinute,
  incrementSecond,
  decrementSecond,
} = counterSlice.actions;

export default counterSlice.reducer;