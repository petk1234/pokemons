import { NOT_FOUND_POKEMON_TYPE } from "../../store/pokemons/controllers";
import { Pokemon } from "../../store/pokemons/types";
import { RootState } from "../../store/types";

export type SelectPokemonsInfo = (state: RootState) => {
  list: Pokemon[];
  currentType: string;
  isLoading: boolean;
};
export type SelectPokemonsTypes = (state: RootState) => string[];
export type SelectDetailedPokemon = (state: RootState) => Pokemon | null | NOT_FOUND_POKEMON_TYPE;
