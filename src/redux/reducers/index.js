export const SET_JOBS = "SET_JOBS";

export const setJobs = (jobs) => ({
  type: "SET_JOBS",
  payload: jobs,
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
    default:
      return state;
  }
};

export default mainReducer;
