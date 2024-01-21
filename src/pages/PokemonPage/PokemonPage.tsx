import { useEffect } from "react";
import { useAppSelector } from "../../store/types";
import { selectDetailedPokemon, selectPokemonsInfo } from "../AllPokemonsPage/selectors";
import styles from "./pokemonPage.module.scss";
import { shallowEqual } from "react-redux";
import { useNavigate } from "react-router";
import { capitalLetter } from "../AllPokemonsPage/utils";
import Types from "./Rows/Types";
import Stats from "./Rows/Stats";
import Moves from "./Rows/Moves";
import notFoundImg from "/src/assets/not-found.png";
import { NOT_FOUND_POKEMON } from "../../store/pokemons/controllers";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import Spinner from "../../components/Spinner/Spinner";

const PokemonPage = () => {
  const pokemonInfo = useAppSelector(selectDetailedPokemon, shallowEqual);
  const { isLoading } = useAppSelector(selectPokemonsInfo, shallowEqual);
  const navigate = useNavigate();
  useEffect(() => {
    if (pokemonInfo === NOT_FOUND_POKEMON) {
      navigate("/blank");
    }
  }, [pokemonInfo]);
  return (
    <div className={styles.pokemonPage}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ReturnButton />
          {pokemonInfo && pokemonInfo !== NOT_FOUND_POKEMON && (
            <div>
              <li className={styles.pokemonInfoContainer}>
                <img className={styles.pokemonInfoImage} src={pokemonInfo.img || notFoundImg}></img>
                <h4 className={styles.pokemonInfoTitle}>{capitalLetter(pokemonInfo.name)}</h4>
                <ul className={styles.pokemonInfoCharachteristics}>
                  <Types types={pokemonInfo.types} />
                  <Stats stats={pokemonInfo.stats} />
                  <Moves moves={pokemonInfo.moves} />
                </ul>
              </li>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PokemonPage;
