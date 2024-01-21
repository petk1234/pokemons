import styles from "./infoRow.module.scss";
import { MovesProps } from "./types";

const Moves = ({ moves }: MovesProps) => {
  return (
    <li className={styles.pokemonInfoRow}>
      <p className={styles.title}>Moves</p>
      <p className={styles.charachteristics}>{moves.map((move) => move).join(", ")}</p>
    </li>
  );
};
export default Moves;
