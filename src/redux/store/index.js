import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import detailsReducer from "../reducers/detailsReducer";
import { encryptTransform } from "redux-persist-transform-encrypt";
import favoriteReducer from "../reducers/favoriteReducer";
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/es/storage";

const encryptor = encryptTransform({
  secretKey: import.meta.env.VITE_ENCRYPT_KEY,
  onError: (error) => {
    console.log("Errore cifratura:", error);
  },
});

const persistConfig = {
  storage: localStorage,
  key: "root",
  transforms: [encryptor],
};

const bigReducer = combineReducers({
  main: mainReducer,
  job: detailsReducer,
  favorite: favoriteReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

const persistedStore = persistStore(store);

export { store, persistedStore };


