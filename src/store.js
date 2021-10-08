import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from './cards/counterSlice'

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { pokemonApi } from "./services/pokeApi";

export const store = configureStore({
  reducer: { 
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonApi.middleware)
})

setupListeners(store.dispatch)