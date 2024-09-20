import { useState } from "react";
import Pokemon from "../components/pokemons/Pokemon";
import filteredPokemonsPerName from "./FilterPerName";
import filteredPokemonsPerType from "./FilterPerType";
import { ForwardArrow, PreviousArrow } from "./VisualArrows";

export default function showAllPokemons(allPokemons, typePokemon, namePokemon) {
  if (namePokemon.trim() !== "" && namePokemon.length > 0) {
    return filteredPokemonsPerName(
      allPokemons,
      namePokemon,
    );
  } else if (typePokemon.trim() !== "") {
    return filteredPokemonsPerType(
      allPokemons,
      typePokemon,
    );
  } else {
    const [previousPokemon, setPreviousPokemon] = useState(0);
    const [nextPokemon, setNextPokemon] = useState(5);
    return (
      <div className="w-full sm:w-[80%] md:w-[60%] xl:w-[50%] flex flex-col items-center gap-8">
        <ul className="w-full pt-4 flex flex-wrap justify-center gap-x-6 gap-y-4">
          {allPokemons.map((pokemon, key) => {
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
            allPokemons={allPokemons.length}
            click={() => {
              if (nextPokemon !== allPokemons.length - 1) {
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
}
