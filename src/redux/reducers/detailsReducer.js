import { SET_DETAIL_JOB } from "../actions";

const initialState = {
  job: null,
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAIL_JOB:
      return {
        ...state,
        job: action.payload,
      };

    default:
      return state;
  }
};

export default detailsReducer;
