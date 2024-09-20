import React from "react";
import { Link } from "react-router-dom";
import TypesStyle from "../../style/TypesStyle";
import PokeInfo from "../../js/PokeInfo";
import getGradient from "../../style/BackgroundPokeCard";

const Pokemon = ({ pokemon, index }) => {
  const infos = PokeInfo(pokemon.data);

  const setColor = () => {
    const type1 = infos.pokemonTypes[0].type.name;
    return getGradient(type1);
  };

  return (
    // Assim, passamos um valor como id para a url, e que podemos usar depois usando o params
    <Link to={`/pokedex/pokeProfile/${infos.pokemonId}`}>
      <section
        className={
          "pokeCard w-48 py-2 pb-3 h-[13.5rem] border-2 border-yellow-400 rounded-lg text-white flex flex-col items-center gap-2 hover:scale-90 " +
          setColor()
        }
        id={infos.pokemonTypes[0].type.name}
      >
        <div className="w-[100%] flex flex-col items-center gap-1">
          <img
            src={infos.pokemonImage}
            alt={infos.pokemonName}
            className="w-[70%] bg-white/20 border-2 border-yellow-400 rounded-xl"
          />
          <h1 className="text-center">
            {infos.pokemonId} - {infos.pokemonName}
          </h1>
        </div>
        <div className="flex gap-2">
          <TypesStyle infos={infos} id={0}></TypesStyle>
          <TypesStyle infos={infos} id={1}></TypesStyle>
        </div>
      </section>
    </Link>
  );
};

export default Pokemon;
