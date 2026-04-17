import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applications: [],
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setApplications(state, action) {
      state.applications = action.payload;
    },
    addApplication(state, action) {
      state.applications.push(action.payload);
    },
    clearApplications(state) {
      state.applications = [];
    },
  },
});

export const { setApplications, addApplication, clearApplications } = applicationSlice.actions;
export default applicationSlice.reducer;
