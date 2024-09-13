import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    jobDetail: null,
    adminJobs: null,
    searchJobs: "",
    appliedJobs: [],
    searchQuery: "",
  },
  reducers: {
    //actions
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setjobDetail: (state, action) => {
      state.jobDetail = action.payload;
    },

    setAdminJobs: (state, action) => {
      state.adminJobs = action.payload;
    },

    setSearchJobs: (state, action) => {
      state.searchJobs = action.payload;
    },

    setAppliedJobs: (state, action) => {
      state.appliedJobs = action.payload;
    },

    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  setAllJobs,
  setjobDetail,
  setAdminJobs,
  setSearchJobs,
  setAppliedJobs,
  setSearchQuery,
} = jobSlice.actions;

export default jobSlice.reducer;
