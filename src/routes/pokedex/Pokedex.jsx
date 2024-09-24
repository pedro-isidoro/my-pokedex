import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonsTypes from "../../style/PokemonsTypes";
import showAllPokemons from "./ShowAllPokemons";
import { filteredNamePokemon } from "../../components/redux/pokemonCart/slice";
import TeamPokemon from "../../components/teamPokemon/TeamPokemon";

function Pokedex() {
  const [pokemonsTypes, setPokemonsTypes] = useState(false);

  const { allPokemons, typePokemon, namePokemon, teamPokemon } = useSelector(
    (rootReducer) => rootReducer.pokeReducer
  );

  const dispatch = useDispatch();
  const handleNameSearch = (name) => {
    //Condinal, para que quando não digitar nada, ou apagar tudo, ele irá voltar a estaca zero
    name.length > 0
      ? dispatch(filteredNamePokemon(name))
      : dispatch(filteredNamePokemon(" "));
  };

  return (
    <section className="w-full h-screen flex flex-col items-center pt-2 pb-20 gap-6 mb-36 lg:mb-[-30px]">
      <div className="h-full flex flex-col justify-center items-center gap-4 mt-4">
        <input
          type="search"
          name="pokemon name"
          id="pokemon-name"
          placeholder="Pokemon Name"
          className="h-7 placeholder:text-black dark:placeholder:text-yellow-400 bg-yellow-400 dark:bg-black rounded-lg pb-1 px-2 focus:outline-none text-center dark:text-white"
          onChange={(e) => handleNameSearch(e.target.value.toLowerCase())}
        />
        {pokemonsTypes ? (
          <PokemonsTypes />
        ) : (
          <hr className="h-1 w-[85%] border-black dark:border-white transition-all" />
        )}
        {pokemonsTypes ? (
          <>
            <i
              className="fa-solid fa-arrow-right text-yellow-400 -rotate-90 hover:cursor-pointer"
              onClick={() => {
                setPokemonsTypes(!pokemonsTypes);
              }}
            />
            <hr className="h-1 w-[150%] border-black dark:border-white transition-all" />
          </>
        ) : (
          <i
            className="fa-solid fa-arrow-right text-yellow-400 rotate-90 hover:cursor-pointer"
            onClick={() => {
              setPokemonsTypes(!pokemonsTypes);
            }}
          />
        )}
      </div>
      {allPokemons.length > 0 ? (
        showAllPokemons(allPokemons, typePokemon, namePokemon)
      ) : (
        <p className="pt-14 text-white">Carregando...</p>
      )}
      {teamPokemon.length >= 1 ? (
        <TeamPokemon teamPokemon={teamPokemon}></TeamPokemon>
      ) : (
        <></>
      )}
    </section>
  );
}

export default Pokedex;
