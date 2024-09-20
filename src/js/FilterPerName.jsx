import { useState } from "react";
import Pokemon from "../components/pokemons/Pokemon";
import { ForwardArrow, PreviousArrow } from "./VisualArrows";

export default function filteredPokemonsPerName(
  allPokemons,
  PokemonName
) {
  const [previousPokemon, setPreviousPokemon] = useState(0);
  const [nextPokemon, setNextPokemon] = useState(5);

  const allPokemonsLength = allPokemons.filter((pokemon) => {
    const name = pokemon.data.name;
    return name.includes(PokemonName);
  }).length;
  console.log(allPokemonsLength.length);
  return (
    <div className="w-full sm:w-[80%] md:w-[60%] xl:w-[50%] flex flex-col items-center gap-8">
      <ul className="w-full pt-4 flex flex-wrap justify-center gap-x-6 gap-y-4">
        {allPokemons
          .filter((pokemon) => {
            const name = pokemon.data.name;
            return name.includes(PokemonName);
          })
          .map((pokemon, key) => {
            if (key >= previousPokemon && key <= nextPokemon) {
              return (
                <li key={key}>
                  <Pokemon pokemon={pokemon} index={key} />
                </li>
              );
            }
          })}
      </ul>
      <div className="flex gap-3">
        <PreviousArrow
          previousPokemon={previousPokemon}
          nextPokemon={nextPokemon}
          click={() => {
            if (previousPokemon !== 0) {
              setPreviousPokemon(previousPokemon - 6);
              setNextPokemon(nextPokemon - 6);
            }
          }}
        />
        <ForwardArrow
          previousPokemon={previousPokemon}
          nextPokemon={nextPokemon}
          allPokemons={allPokemonsLength}
          click={() => {
            if (nextPokemon !== allPokemonsLength - 1) {
              // console.log("previousPokemon: ", previousPokemon);
              // console.log("nextPokemon: ", nextPokemon);
              setNextPokemon(nextPokemon + 6);
              setPreviousPokemon(previousPokemon + 6);
            }
          }}
        />
      </div>
    </div>
  );
}
