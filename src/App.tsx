import { useEffect } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import { getPokemonsList, getTypes } from "./store/pokemons/controllers";
import { useAppDispatch } from "./store/types";
import AllPokemonsPage from "./pages/AllPokemonsPage/AllPokemonsPage";
import BlankPage from "./pages/BlankPage/BlankPage";
import PokemonPage from "./pages/PokemonPage/PokemonPage";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemonsList());
    dispatch(getTypes());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/:id" element={<PokemonPage />} />
        <Route path="/" element={<AllPokemonsPage />} />
        <Route path="blank" element={<BlankPage />} />
      </Routes>
    </>
  );
}

export default App;
