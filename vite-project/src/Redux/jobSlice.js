
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
  job: null,
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    createJobSuccess(state, action) {
      state.job = action.payload;
    },
  },
});

export const { createJobSuccess } = jobSlice.actions;
export default jobSlice.reducer;
