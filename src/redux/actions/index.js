export const SET_JOBS = "SET_JOBS";
export const setJobs = (jobs) => ({
  type: SET_JOBS,
  payload: jobs,
});

export const SET_DETAIL_JOB = "SET_DETAIL_JOB";
export const setDetailJob = (job) => ({
  type: SET_DETAIL_JOB,
  payload: job,
});

export const SET_QUERY = "SET_QUERY";
export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: query,
});

export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE ";
export const addToFavorite = (job) => ({
  type: ADD_TO_FAVORITE,
  payload: job,
});
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE ";
export const removeFavorite = (job) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: job,
});
// action per operazione asincrona
// export const asyncActionCreator = () =>{
//     return async(dispatch , getState)=>{
//         //fetch....
//         dispatch({
//             type:'GET_MOVIE',
//             payload : data // o comunque il. risultato della fetch
//         })
//     }
// }
