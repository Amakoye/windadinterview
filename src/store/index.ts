import { combineReducers, configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import type { TypedUseSelectorHook } from "react-redux";
import { useSelector as useAppSelector } from "react-redux";
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
import commentReducer from "./slices/comments/comments";
import postsReducer from "./slices/posts/posts";

const reducer = combineReducers({
  postsReducer: postsReducer,
  commentsReducer: commentReducer,
} as const);

const persistConfig: Omit<PersistConfig<State>, "blacklist" | "whitelist"> &
  Partial<Record<"blacklist" | "whitelist", (keyof State)[]>> = {
  key: "root",
  storage,
  whitelist: [],
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
const useSelector: TypedUseSelectorHook<State> = useAppSelector;

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

export { store, useDispatch, persistor, api, useSelector };
