import React from "react";
import { Link } from "react-router-dom";
import TypesStyle from "../../style/TypesStyle";
import PokeInfo from "../../js/PokeInfo";

const Pokemon = ({ pokemon, index }) => {
  // console.log("Pokemon: ", pokemon);
  const infos = PokeInfo(pokemon.data);
  // console.log("infos: ",infos);

  return (
    // Assim, passamos um valor como id para a url, e que podemos usar depois usando o params
    <Link to={`/pokedex/pokeProfile/${infos.pokemonId}`}>
      <div
        className="w-48 py-1 pb-3 h-48 border-2 border-yellow-700 rounded-lg text-white bg-white bg-opacity-15 flex flex-col items-center gap-1 hover:scale-90"
        id={infos.pokemonTypes[0].type.name}
      >
        <h1 className="text-center">
          {infos.pokemonId} - {infos.pokemonName}
        </h1>
        <img
          src={infos.pokemonImage}
          alt={infos.pokemonName}
          className="w-[60%]"
        />
        <div className="flex gap-2">
          <TypesStyle infos={infos} id={0}></TypesStyle>
          <TypesStyle infos={infos} id={1}></TypesStyle>
        </div>
      </div>
    </Link>
  );
};

export default Pokemon;
