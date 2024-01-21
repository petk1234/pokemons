import { Props } from "./types";
import cx from "classnames";
import styles from "./pokemonCard.module.scss";
import { capitalLetter } from "../utils";
import notFoundImg from "/src/assets/not-found.png";

const PokemonCard = ({ types, name, img }: Props) => {
  return (
    <li className={styles.pokemonCard}>
      <img className={styles.pokemonImage} src={img || notFoundImg}></img>
      <div className={styles.hider}>
        <h6 className={styles.cardTitle}>{capitalLetter(name)}</h6>
      </div>
      <ul className={styles.typesList}>
        {types.map((type) => (
          <li key={type.id} className={cx(styles.pokemonType, styles[type.name])}>
            {capitalLetter(type.name)}
          </li>
        ))}
      </ul>
    </li>
  );
};
export default PokemonCard;
