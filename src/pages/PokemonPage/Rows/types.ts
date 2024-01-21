import { Move, Stat, Type } from "../../../store/pokemons/types";

export interface TypeProps {
  types: Type[];
}

export interface StatsProps {
  stats: Stat[];
}

export interface MovesProps {
  moves: Move[];
}
