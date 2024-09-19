import Pokemon from "../components/pokemons/Pokemon";

export default function filteredPokemonsPerType(
  allPokemons,
  Pokemontype,
  previousPokemon,
  nextPokemon
) {
  return allPokemons
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
    });
}