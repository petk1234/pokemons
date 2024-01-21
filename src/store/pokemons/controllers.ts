import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  FetchedDetailedPokemon,
  GeneralPokemonsInfo,
  Pokemon,
  ProccessedPokemonsInfo,
  Type
} from "./types";
import { RootState } from "../types";
import { fetchNestedPokemons, preparePokemonsStructure } from "./utils";

const baseURL = "https://pokeapi.co/api/v2/";
export const NOT_FOUND_POKEMON = "not-found";
export type NOT_FOUND_POKEMON_TYPE = typeof NOT_FOUND_POKEMON;

export const getPokemonsList = createAsyncThunk<
  ProccessedPokemonsInfo,
  undefined,
  { rejectValue: ProccessedPokemonsInfo }
>("pokemons/getPokemonsList", async function (_, { rejectWithValue }) {
  try {
    const pokemonsData: GeneralPokemonsInfo = await axios
      .get(`${baseURL}pokemon`)
      .then((res) => res.data)
      .catch((err) => err);

    const { next: nextPage, previous: prevPage, count: generalQuantity, results } = pokemonsData;
    const fetchedPokemons = await fetchNestedPokemons(results);
    const list = preparePokemonsStructure(fetchedPokemons);
    return {
      list,
      nextPage,
      prevPage,
      generalQuantity
    };
  } catch (error: any) {
    return rejectWithValue(error.response?.data);
  }
});

export const loadMorePokemons = createAsyncThunk<
  ProccessedPokemonsInfo,
  undefined,
  { rejectValue: ProccessedPokemonsInfo; state: RootState }
>("pokemons/nextPokemonsList", async function (_, { rejectWithValue, getState }) {
  try {
    const state = getState();
    if (state.nextPage) {
      const pokemonsData: GeneralPokemonsInfo = await axios
        .get(state.nextPage)
        .then((res) => res.data)
        .catch((err) => err);

      const { next: nextPage, previous: prevPage, count: generalQuantity, results } = pokemonsData;
      const fetchedPokemons = await fetchNestedPokemons(results);
      const list = preparePokemonsStructure(fetchedPokemons);
      return {
        list,
        nextPage,
        prevPage,
        generalQuantity
      };
    }
    return state;
  } catch (error: any) {
    return rejectWithValue(error.response?.data);
  }
});

export const getTypes = createAsyncThunk<Type[], undefined, { rejectValue: Type[] }>(
  "pokemons/getPokemonTypes",
  async function (_, { rejectWithValue }) {
    try {
      const pokemonTypes = await axios
        .get(`${baseURL}type`)
        .then((res) => res.data)
        .catch((err) => err);

      return pokemonTypes.results;
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const getPokemonsByType = createAsyncThunk<
  { list: Pokemon[]; currentType: string },
  string,
  { rejectValue: Pokemon[] }
>("pokemons/getPokemonsByTypeList", async function (type, { rejectWithValue }) {
  try {
    const pokemonsData = await axios
      .get(`${baseURL}type/${type.toLowerCase()}`)
      .then((res) => res.data)
      .catch((err) => err);

    const { pokemon } = pokemonsData;

    const fetchedPokemons = await Promise.allSettled(
      pokemon.map((pokemon: { pokemon: Type }) =>
        axios.get(pokemon.pokemon.url).then((res) => res.data)
      )
    ).then(
      (results) =>
        results.filter(
          (result) => result.status === "fulfilled"
        ) as unknown as FetchedDetailedPokemon[]
    );

    const list = preparePokemonsStructure(fetchedPokemons);
    return { list, currentType: type };
  } catch (error: any) {
    return rejectWithValue(error.response?.data);
  }
});

export const getPokemonByName = createAsyncThunk<
  Pokemon | NOT_FOUND_POKEMON_TYPE,
  string,
  { rejectValue: string }
>("pokemons/getPokemonByName", async function (name, { rejectWithValue }) {
  try {
    const pokemonData: FetchedDetailedPokemon = await axios
      .get(`${baseURL}pokemon/${name}`)
      .then((res) => res.data)
      .catch((err) => err);

    const pokemonDetailed = preparePokemonsStructure([pokemonData])[0];
    return pokemonDetailed;
  } catch (error: any) {
    return rejectWithValue(error.response?.data);
  }
});
