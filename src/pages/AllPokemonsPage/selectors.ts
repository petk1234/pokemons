import { SelectDetailedPokemon, SelectPokemonsInfo, SelectPokemonsTypes } from "./types";

export const selectPokemonsInfo: SelectPokemonsInfo = (state) => ({
  list: state.list,
  currentType: state.currentType,
  isLoading: state.isLoading
});
export const selectPokemonsTypes: SelectPokemonsTypes = (state) =>
  state.types.map((type) => type.name);
export const selectDetailedPokemon: SelectDetailedPokemon = (state) => state.pokemonDetailed;
