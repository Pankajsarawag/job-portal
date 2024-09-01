import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    jobDetail: null,
  },
  reducers: {
    //actions
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setjobDetail: (state, action) => {
      state.jobDetail = action.payload;
    },
  },
});

export const { setAllJobs, setjobDetail } = jobSlice.actions;

export default jobSlice.reducer;
