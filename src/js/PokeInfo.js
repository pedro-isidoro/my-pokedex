function PokeInfo(pokemon) {
  const pokemonName = pokemon.name.toUpperCase();
  const pokemonId = pokemon.id;
  const pokemonBaseExperience = pokemon.base_experience;
  const pokemonImage = pokemon.sprites.front_default;
  const pokemonImageShiny = pokemon.sprites.front_shiny;
  const pokemonImage2 = pokemon.sprites.other.home.front_default;
  const pokemonStats = pokemon.stats;
  const pokemonTypes = pokemon.types;
  const pokemonAbilites = pokemon.abilities;
  const pokemonMoves = pokemon.moves;
  const pokemonForms = pokemon.forms;
  const pokemonHeight = pokemon.height;
  const pokemonWeight = pokemon.weight;
  return {
    pokemonName,
    pokemonId,
    pokemonBaseExperience,
    pokemonImage,
    pokemonImageShiny,
    pokemonImage2,
    pokemonStats,
    pokemonTypes,
    pokemonAbilites,
    pokemonMoves,
    pokemonForms,
    pokemonHeight,
    pokemonWeight,
  };
}

export default PokeInfo;
