import { SET_JOBS, SET_QUERY } from "../actions";

const initialState = {
  jobs: [],
  query: "",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };

    default:
      return state;
  }
};

export default mainReducer;
