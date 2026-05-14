import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import detailsReducer from "../reducers/detailsReducer";
import favoriteReducer from "../reducers/favoriteReducer";

const bigReducer = combineReducers({
  main: mainReducer,
  job: detailsReducer,
  favorite: favoriteReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
