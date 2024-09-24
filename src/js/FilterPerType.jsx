import { useState } from "react";
import Pokemon from "../components/pokemons/Pokemon";
import { ForwardTypeArrow, PreviousArrow } from "./VisualArrows";

export default function filteredPokemonsPerType(
  allPokemons,
  Pokemontype,
) {
  const [previousPokemon, setPreviousPokemon] = useState(0);
  const [nextPokemon, setNextPokemon] = useState(4);

  return (
    <div className="w-full sm:w-[80%] md:w-[60%] xl:w-[50%] flex flex-col items-center gap-8">
      <ul className="w-full pt-4 flex flex-wrap justify-center gap-x-6 gap-y-4">
        {allPokemons
          .filter((pokemon) => {
            const types = pokemon.data.types.map((t) => t.type.name);
            return types.includes(Pokemontype);
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
              setPreviousPokemon(previousPokemon - 5);
              setNextPokemon(nextPokemon - 5);
            }
          }}
        />
        <ForwardTypeArrow
          nextPokemon={nextPokemon}
          type={Pokemontype}
          click={() => {
              setNextPokemon(nextPokemon + 5);
              setPreviousPokemon(previousPokemon + 5);
              console.log("nextPokemon: ", nextPokemon)
          }}
          Resetclick={() => {
              setNextPokemon(5);
              setPreviousPokemon(0);
          }}
        />
      </div>
    </div>
  );
}
