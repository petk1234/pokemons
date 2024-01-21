import axios from "axios";
import { FetchedDetailedPokemon, Pokemon, Type } from "./types";

export const fetchNestedPokemons = async (pokemonsData: Type[]) =>
  await Promise.allSettled(
    pokemonsData.map<Promise<FetchedDetailedPokemon>>(({ url }) =>
      axios.get(url).then((res) => res.data)
    )
  ).then(
    (results) =>
      results.filter(
        (result) => result.status === "fulfilled"
      ) as unknown as FetchedDetailedPokemon[]
  );

export const preparePokemonsStructure = (pokemons: FetchedDetailedPokemon[]) => {
  return pokemons.map((pokemon) => {
    const { moves, stats, id, types, sprites, name } = pokemon.value || pokemon;
    return {
      stats: stats.map((stat) => ({
        name: stat.stat.name,
        value: stat.base_stat
      })),
      types: types.map((type) => ({ name: type.type.name, url: type.type.url, id: type.slot })),
      img: sprites.front_default,
      id,
      moves: moves.map((move) => move.move.name),
      name
    } as unknown as Pokemon;
  });
};
