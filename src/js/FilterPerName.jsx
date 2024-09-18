import Pokemon from "../components/pokemons/Pokemon";

export default function filteredPokemonsPerName(
  allPokemons,
  PokemonName,
  previousPokemon,
  nextPokemon
) {
  console.log("name: ", PokemonName);
  return allPokemons
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
    });
}
