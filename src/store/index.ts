import { combineReducers, configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducer = combineReducers({
  //reducers go here
} as const);

const persistConfig: Omit<PersistConfig<State>, "blacklist" | "whitelist"> &
  Partial<Record<"blacklist" | "whitelist", (keyof State)[]>> = {
  key: "root",
  storage,
  whitelist: [
    /* whiltelisted reducers go here */
  ],
};

const persistedReducer = persistReducer(persistConfig as any, reducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const useDispatch = () => store.dispatch;

const persistor = persistStore(store);

const API_URL = "https://jsonplaceholder.typicode.com";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: API_URL,
});

// types below
export type Dispatch = typeof store.dispatch;
export type State = ReturnType<typeof reducer>;

declare global {
  export type State = ReturnType<typeof reducer>;
}

export { store, useDispatch, persistor, api };
