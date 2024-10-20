import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather/weatherReducer";
import locationReducer from "./location/locationReducer";
import Storage from "@react-native-async-storage/async-storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export interface PersistConfig {
  key: string;
  storage: typeof Storage;
  version: number;
}

const persistConfig: PersistConfig = {
  key: "root",
  storage: Storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, locationReducer);

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    location: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
