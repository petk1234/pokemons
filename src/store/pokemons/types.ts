export type ActionCreate<TP> = (p: TP) => {
  type: string;
  payload: TP;
};

export interface GeneralPokemonsInfo {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
  status: number;
}

export interface ProccessedPokemonsInfo {
  list: Pokemon[];
  nextPage: string | null;
  prevPage: string | null;
  generalQuantity: number;
}

export interface Stat {
  name: string;
  value: number;
}

export interface Move {
  name: string;
}

export interface Type {
  name: string;
  url: string;
  id?: number;
}

export interface Pokemon {
  stats: Stat[];
  types: Type[];
  img: string;
  id: number;
  moves: Move[];
  name: string;
}

export interface FetchedDetailedPokemon {
  value: {
    stats: [
      {
        stat: {
          name: string;
        };
        base_stat: number;
      }
    ];
    types: { type: Type; slot: number }[];
    sprites: {
      front_default: string;
    };
    moves: [
      {
        move: {
          name: string;
        };
      }
    ];
    id: number;
    name: string;
  };
  status?: "fullfiled" | "rejected";
}
