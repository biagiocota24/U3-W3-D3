import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import detailsReducer from "../reducers/detailsReducer";
import favoriteReducer from "../reducers/favoriteReducer";
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/es/storage";

const persistConfig = {
  storage: localStorage,
  key: "root",
};

const bigReducer = combineReducers({
  main: mainReducer,
  job: detailsReducer,
  favorite: favoriteReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistedStore = persistStore(store);

export { store, persistedStore };
