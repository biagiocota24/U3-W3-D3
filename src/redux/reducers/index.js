export const SET_JOBS = "SET_JOBS";

export const setJobs = (jobs) => ({
  type: "SET_JOBS",
  payload: jobs,
});

export const SET_DETAIL_JOB = "SET_DETAIL_JOB";

export const setDetailJob = (job) => ({
  type: "SET_DETAIL_JOB",
  payload: job,
});

export const SET_QUERY = "SET_QUERY";

export const setQuery = (query) => ({
  type: "SET_QUERY",
  payload: query,
});

const initialState = {
  main: {
    jobs: [],
    query: "",
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        main: {
          ...state.main,
          jobs: action.payload,
        },
      };
    case SET_QUERY:
      return {
        ...state,
        main: {
          ...state.main,
          query: action.payload,
        },
      };
    case SET_DETAIL_JOB:
      return {
        ...state,
        main: {
          ...state.main,
          job: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
