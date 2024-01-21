import Main from "./Main/Main";
import Filters from "./Filters/Filters";
import styles from "./allPokemons.module.scss";

const AllPokemonsPage = () => {
  return (
    <div className={styles.pokemonsPage}>
      <Filters />
      <Main />
    </div>
  );
};

export default AllPokemonsPage;
