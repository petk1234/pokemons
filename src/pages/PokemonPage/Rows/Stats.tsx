import { capitalLetter } from "../../AllPokemonsPage/utils";
import styles from "./infoRow.module.scss";
import { StatsProps } from "./types";

const Stats = ({ stats }: StatsProps) => {
  return (
    <>
      {stats.map(({ name, value }) => (
        <li key={name} className={styles.pokemonInfoRow}>
          <p className={styles.title}>{capitalLetter(name.split("-").join(" "))}</p>
          <p className={styles.charachteristics}>{value}</p>
        </li>
      ))}
    </>
  );
};
export default Stats;
