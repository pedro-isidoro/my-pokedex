# Pokédex

    - O objetivo desse projeto é realizar o desafio técnico final do módulo de React do curso do DevQuest

## Tecnologias
    - HTML
    - CSS
    - JS
    - React
    - React-Rounter-Dom
    - Tailwind
    - Axios
    - API do Pokémon
    - Biome - /*É uma ferramenta de formatação. Arruma o código*/

## Desafios
<div>
Meu primeiro pensamento para a lógica
  return allPokemons.map((pokemon, key) => {
    if (pokemon.data.types.length == 1) {
      // console.log("Type 1: ", pokemon.data.types[0].type.name);
      if (pokemon.data.types[0].type.name === type) {
        // ? console.log("É tipo grama: ", pokemon.data.name)
        // : console.log("Não é: ", pokemon.data.name);
        <li key={key}>
          <Pokemon pokemon={pokemon} index={key} />
        </li>;
      } else {
        console.log(pokemon.data.name, "Não é do tipo ", type);
      }
    } else {
      // console.log("Type 1: ", pokemon.data.types[0].type.name);
      // console.log("Type 2: ", pokemon.data.types[1].type.name);
      if (
        pokemon.data.types[0].type.name === type ||
        pokemon.data.types[1].type.name === type
      ) {
        // console.log("É tipo grama: ", pokemon.data.name);
        return (
          <li key={key}>
            <Pokemon pokemon={pokemon} index={key} />
          </li>
        );
      } else {
        console.log(pokemon.data.name, "Não é do tipo ", type);
      }
    }
  });
  </div>

## Imagens do Projeto Final