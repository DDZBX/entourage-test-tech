import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { tmdbApi } from "../services/tmdb"
import { setupListeners } from "@reduxjs/toolkit/query"
import moviesReducer from "./movies/moviesSlice"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1"

// Configuration de la persistance avec redux-persist-state
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel1,
}

const rootReducer = combineReducers({
  movies: moviesReducer,
  [tmdbApi.reducerPath]: tmdbApi.reducer,
})

const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(
  persistConfig,
  rootReducer,
)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      tmdbApi.middleware,
    ),
})

export const persistor = persistStore(store)

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
