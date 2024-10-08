import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filteredPokemon } from "../redux/pokemonCart/slice";
const PokemonLogo = "/images/pokemon-logo.png";
const PokedexImage = "/images/pokedex.png";

function Header() {
  const dispatch = useDispatch();
  const handleTypeClick = (type) => {
    dispatch(filteredPokemon(type));
  };
  return (
    <header className="w-full h-14 flex flex-row justify-between items-center pt-8 pb-10">
      <Link to={"/"}>
        <img className="w-46 h-16" src={PokemonLogo} alt="Pokemon Logo" />
      </Link>
      <Link to={"pokedex"}>
        <img
          className="w-16 h-10"
          src={PokedexImage}
          alt="Pokedex Logo"
          onClick={() => handleTypeClick(" ")}
        />
      </Link>
    </header>
  );
}

export default Header;
