import styles from "./infoRow.module.scss";
import stylesTypes from "../../AllPokemonsPage/PokemonCard/pokemonCard.module.scss";
import cx from "classnames";
import { getPokemonsByType } from "../../../store/pokemons/controllers";
import { useAppDispatch } from "../../../store/types";
import { Link } from "react-router-dom";
import { TypeProps } from "./types";

const Types = ({ types }: TypeProps) => {
  const dispatch = useAppDispatch();
  const handleTypeSearch = (value: string) => {
    dispatch(getPokemonsByType(value));
  };

  return (
    <li className={styles.pokemonInfoRow}>
      <p className={styles.title}>Types</p>
      <div className={styles.charachteristics}>
        {types.map(({ name }) => (
          <Link
            key={name}
            to={"/"}
            onClick={() => handleTypeSearch(name)}
            className={cx(styles.hoveredTab, stylesTypes.pokemonType, stylesTypes[name])}>
            {name}
          </Link>
        ))}
      </div>
    </li>
  );
};
export default Types;
