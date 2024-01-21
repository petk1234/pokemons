import { shallowEqual } from "react-redux";
import styles from "./main.module.scss";
import { useAppDispatch, useAppSelector } from "../../../store/types";
import { selectPokemonsInfo } from "../selectors";
import { loadMorePokemons } from "../../../store/pokemons/controllers";
import Spinner from "../../../components/Spinner/Spinner";
import AsyncButton from "../../../components/AsyncButton/AsyncButton";
import PokemonsList from "./PokemonsList/PokemonsList";

const Main = () => {
  const dispatch = useAppDispatch();
  const {
    list: pokemons,
    currentType,
    isLoading
  } = useAppSelector(selectPokemonsInfo, shallowEqual);

  const handleLoadMore = () => {
    dispatch(loadMorePokemons());
  };

  return (
    <div className={styles.placeholderMain}>
      {pokemons.length > 0 ? (
        <>
          <PokemonsList pokemons={pokemons} />
          {currentType === "all" && (
            <AsyncButton isLoading={isLoading} handleClick={handleLoadMore} />
          )}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Main;
