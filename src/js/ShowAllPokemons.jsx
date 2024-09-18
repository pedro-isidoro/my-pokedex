import Pokemon from "../components/pokemons/Pokemon";
import filteredPokemonsPerName from "./FilterPerName";
import filteredPokemonsPerType from "./FilterPerType";

export default function showAllPokemons(
  allPokemons,
  typePokemon,
  namePokemon,
  previousPokemon,
  nextPokemon
) {
  // console.log("type: ", typePokemon)
  // console.log("name: ", namePokemon)
  if (namePokemon.trim() !== "" && namePokemon.length > 0) {
    console.log("NameConditional");
    return filteredPokemonsPerName(
      allPokemons,
      namePokemon,
      previousPokemon,
      nextPokemon
    );
  } else if (typePokemon.trim() !== "") {
    return filteredPokemonsPerType(
      allPokemons,
      typePokemon,
      previousPokemon,
      nextPokemon
    );
  } else {
    return allPokemons.map((pokemon, key) => {
      if (key >= previousPokemon && key <= nextPokemon) {
        return (
          <li key={key}>
            <Pokemon pokemon={pokemon} index={key} />
          </li>
        );
      }
    });
  }
}
