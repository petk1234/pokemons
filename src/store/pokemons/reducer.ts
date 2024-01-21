import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  NOT_FOUND_POKEMON,
  getPokemonByName,
  getPokemonsByType,
  getPokemonsList,
  getTypes,
  loadMorePokemons
} from "./controllers";
import { Pokemon, Type } from "./types";

export const ALL_TYPE = "all";

interface InitialState {
  list: Pokemon[];
  generalQuantity: number;
  nextPage: string | null;
  prevPage: string | null;
  error: undefined | boolean;
  isLoading: boolean;
  types: Type[];
  currentType: string;
  pokemonDetailed: Pokemon | null | "not-found";
}
export const initialState: InitialState = {
  list: [],
  generalQuantity: 0,
  nextPage: null,
  prevPage: null,
  error: undefined,
  isLoading: false,
  types: [],
  currentType: ALL_TYPE,
  pokemonDetailed: null
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setCurrentType: (state: InitialState, action: PayloadAction<string>) => ({
      ...state,
      currentType: action.payload
    })
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonsList.fulfilled, (state, action) => ({
        ...state,
        ...action.payload
      }))
      .addCase(getPokemonsList.rejected, (state) => ({
        ...state,
        error: true,
        isLoading: false
      }))
      .addCase(loadMorePokemons.pending, (state) => ({
        ...state,
        isLoading: true
      }))
      .addCase(loadMorePokemons.fulfilled, (state, action) => ({
        ...state,
        list: [...state.list, ...action.payload.list],
        nextPage: action.payload.nextPage,
        prevPage: action.payload.prevPage,
        isLoading: false
      }))
      .addCase(loadMorePokemons.rejected, (state) => ({
        ...state,
        error: true,
        isLoading: false
      }))
      .addCase(getTypes.pending, (state) => ({
        ...state,
        isLoading: true
      }))
      .addCase(getTypes.fulfilled, (state, action) => ({
        ...state,
        types: action.payload,
        isLoading: false
      }))
      .addCase(getTypes.rejected, (state) => ({
        ...state,
        error: true,
        isLoading: false
      }))
      .addCase(getPokemonsByType.pending, (state) => ({
        ...state,
        isLoading: true,
        list: []
      }))
      .addCase(getPokemonsByType.fulfilled, (state, action) => ({
        ...state,
        list: action.payload.list,
        currentType: action.payload.currentType,
        nextPage: null,
        prevPage: null,
        isLoading: false
      }))
      .addCase(getPokemonsByType.rejected, (state) => ({
        ...state,
        error: true,
        isLoading: false
      }))
      .addCase(getPokemonByName.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getPokemonByName.fulfilled, (state, action) => ({
        ...state,
        pokemonDetailed: action.payload,
        isLoading: false
      }))
      .addCase(getPokemonByName.rejected, (state) => ({
        ...state,
        pokemonDetailed: NOT_FOUND_POKEMON
      }));
  }
});
export const { setCurrentType } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
