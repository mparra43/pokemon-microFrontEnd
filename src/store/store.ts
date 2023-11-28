import { configureStore } from "@reduxjs/toolkit";
import { pokemonsSlice } from "./pokemons";

export const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
