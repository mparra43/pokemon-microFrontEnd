import { createSlice } from "@reduxjs/toolkit";

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    page: 0,
    pokemons: null,
    pokemonsSlider: null,
    types: null,
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state /* action */) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
    setTypes: (state, action) => {
      state.isLoading = false;
      state.types = action.payload.types;
    },
    setPokemonsSlider: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemonsSlider = action.payload.pokemons;
    },
  },
});

export const {
  startLoadingPokemons,
  setPokemons,
  setPokemonsSlider,
  setTypes,
} = pokemonsSlice.actions;
