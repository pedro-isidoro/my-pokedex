import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonsTypes from "../../style/PokemonsTypes";
import showAllPokemons from "../../js/ShowAllPokemons";
import { filteredNamePokemon } from "../../components/redux/pokemonCart/slice";
import TeamPokemon from "../../components/teamPokemon/TeamPokemon";

function Pokedex() {
  const [pokemonsTypes, setPokemonsTypes] = useState(false);
  
  const [previousPokemon, setPreviousPokemon] = useState(0);
  const [nextPokemon, setNextPokemon] = useState(5);

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
    <section className="w-full h-screen flex flex-col items-center pt-2 pb-20 gap-6 mb-36 sm:mb-[-30px]">
      <div className="h-full flex flex-col justify-center items-center gap-4 mt-4">
        <input
          type="search"
          name="pokemon name"
          id="pokemon-name"
          placeholder="Pokemon Name"
          className="h-7 placeholder:text-black bg-yellow-400 rounded-lg pb-1 px-2 focus:outline-none text-center"
          onChange={(e) => handleNameSearch(e.target.value)}
        />
        {pokemonsTypes ? (
          <PokemonsTypes />
        ) : (
          <hr className="h-1 w-[85%] border-white transition-all" />
        )}
        {pokemonsTypes ? (
          <>
            <i
              className="fa-solid fa-arrow-right text-yellow-400 -rotate-90 hover:cursor-pointer"
              onClick={() => {
                setPokemonsTypes(!pokemonsTypes);
              }}
            />
            <hr className="h-1 w-[150%] border-white transition-all" />
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
          showAllPokemons(
            allPokemons,
            typePokemon,
            namePokemon,
            previousPokemon,
            nextPokemon
          )
        ) : (
          <p className="pt-14 text-white">Carregando...</p>
        )}
      <div className="flex gap-3">
        {/* {previousPokemon === 0 ? (
          <button className="px-4 bg-black text-yellow-400 rounded-lg hover:cursor-not-allowed">
            <i className="fa-solid fa-arrow-right -rotate-180" />
          </button>
        ) : (
          <button
            className="px-4 bg-yellow-400 text-black rounded-lg hover:bg-black hover:text-yellow-400"
            onClick={() => {
              setPreviousPokemon(previousPokemon - 6),
                setNextPokemon(nextPokemon - 6);
            }}
          >
            <i className="fa-solid fa-arrow-right hover:cursor-pointer -rotate-180" />
          </button>
        )}
        {nextPokemon !== allPokemons.length - 1 ? (
          <button
            className="px-4 bg-yellow-400 text-black rounded-lg hover:bg-black hover:text-yellow-400"
            onClick={() => {
              setPreviousPokemon(previousPokemon + 6),
                setNextPokemon(nextPokemon + 6);
            }}
          >
            <i className="fa-solid fa-arrow-right hover:cursor-pointer" />
          </button>
        ) : (
          <button className="px-4 bg-black text-yellow-400 rounded-lg hover:cursor-not-allowed">
            <i className="fa-solid fa-arrow-right" />
          </button>
        )} */}
      </div>
      {teamPokemon.length >= 1 ? (
        <TeamPokemon teamPokemon={teamPokemon}></TeamPokemon>
      ) : (
        <></>
      )}
    </section>
  );
}

export default Pokedex;
