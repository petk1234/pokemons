import { shallowEqual } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../store/types";
import { selectPokemonsInfo, selectPokemonsTypes } from "../selectors";
import Select from "../../../components/Select/Select";
import { ALL_TYPE, setCurrentType } from "../../../store/pokemons/reducer";
import {
  getPokemonByName,
  getPokemonsByType,
  getPokemonsList
} from "../../../store/pokemons/controllers";
import { useNavigate } from "react-router";
import SearchBar from "../../../components/SearchBar/SearchBar";

const Filters = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const typesOptions = useAppSelector(selectPokemonsTypes, shallowEqual);
  const { currentType } = useAppSelector(selectPokemonsInfo, shallowEqual);

  const handleSearchByType = (value: string) => () => {
    const restrictedValue = value || ALL_TYPE;
    dispatch(setCurrentType(restrictedValue));
    restrictedValue === ALL_TYPE ? dispatch(getPokemonsList()) : dispatch(getPokemonsByType(value));
  };

  const handleSearch = (value: string) => (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(getPokemonByName(value.toLowerCase()));
      navigate("/" + value);
    }
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <Select options={typesOptions} handleSearch={handleSearchByType} value={currentType} />
    </>
  );
};

export default Filters;
