import PokemonCard from "../../PokemonCard/PokemonCard";
import styles from "../main.module.scss";
import { Props } from "./types";

const PokemonsList = ({ pokemons }: Props) => {
  return (
    <div className={styles.list}>
      {pokemons.map(({ name, types, img, id }) => (
        <PokemonCard key={id} img={img} name={name} types={types} />
      ))}
    </div>
  );
};
export default PokemonsList;
