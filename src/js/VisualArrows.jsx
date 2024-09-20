export const PreviousArrow = ({ previousPokemon, nextPokemon, click }) => {
  return (
    <div>
      {previousPokemon === 0 ? (
        <button className="px-4 bg-black text-yellow-400 rounded-lg hover:cursor-not-allowed">
          <i className="fa-solid fa-arrow-right -rotate-180" />
        </button>
      ) : (
        <button
          className="px-4 bg-yellow-400 text-black rounded-lg hover:bg-black hover:text-yellow-400"
          onClick={click}
        >
          <i className="fa-solid fa-arrow-right hover:cursor-pointer -rotate-180" />
        </button>
      )}
    </div>
  );
};

export const ForwardArrow = ({
  nextPokemon,
  allPokemons,
  click
}) => {
    return (
      <div>
        {nextPokemon === allPokemons ? (
          <button
            className="px-4 bg-black text-yellow-400 rounded-lg hover:cursor-not-allowed"
            onClick={click}
          >
            <i className="fa-solid fa-arrow-right" />
          </button>
        ) : (
          <button
            className="px-4 bg-yellow-400 text-black rounded-lg hover:bg-black hover:text-yellow-400"
            onClick={click}
          >
            <i className="fa-solid fa-arrow-right hover:cursor-pointer" />
          </button>
        )}
      </div>
    );
};

export const IconArrow = ({nextPokemon, allPokemons, click}) => {
    return (
      <div>
        {nextPokemon === allPokemons ? (
          <button
            className="px-4 bg-black text-yellow-400 rounded-lg hover:cursor-not-allowed"
          >
            <i className="fa-solid fa-arrow-right" />
          </button>
        ) : (
          <button
            className="px-4 bg-yellow-400 text-black rounded-lg hover:bg-black hover:text-yellow-400"
            onClick={click}
          >
            <i className="fa-solid fa-arrow-right hover:cursor-pointer" />
          </button>
        )}
      </div>
    );
  }

export const ForwardTypeArrow = ({
  nextPokemon,
  click,
  type
}) => {
  if (type === "grass") {
    return (
      <IconArrow nextPokemon={nextPokemon} allPokemons={129} click={click} />
    );
  } else if (type === "fire") {
    return (
      <IconArrow nextPokemon={nextPokemon} allPokemons={84} click={click} />
    );
  } else if (type === "water") {
    return (
      <IconArrow nextPokemon={nextPokemon} allPokemons={154} click={click} />
    );
  } else if (type === "bug") {
    return (
      <IconArrow nextPokemon={nextPokemon} allPokemons={94} click={click} />
    );
  } else if (type === "normal") {
    return (
      <IconArrow nextPokemon={nextPokemon} allPokemons={134} click={click} />
    );
  } else if (type === "dark") {
    return (
      <IconArrow nextPokemon={nextPokemon} allPokemons={69} click={click} />
    );
  } else if (type === "poison") {
    return (
      <IconArrow nextPokemon={nextPokemon} allPokemons={84} click={click} />
    );
  } else if (type === "electric") {
    return (
      <IconArrow nextPokemon={nextPokemon} allPokemons={69} click={click} />
    );
  } else if (type === "ground") {
    return (
      <IconArrow nextPokemon={nextPokemon} allPokemons={74} click={click} />
    );
  } else if (type === "ice") {
    return (
      <IconArrow nextPokemon={nextPokemon} allPokemons={49} click={click} />
    );
  } else if (type === "fairy") {
    return (
      <IconArrow nextPokemon={nextPokemon} allPokemons={64} click={click} />
    );
  } else if (type === "steel") {
    return (
      <IconArrow nextPokemon={nextPokemon} allPokemons={64} click={click} />
    );
  } else if (type === "fighting") {
    return (
      <IconArrow nextPokemon={nextPokemon} allPokemons={74} click={click} />
    );
  } else if (type === "psychic") {
    return (
      <IconArrow nextPokemon={nextPokemon} allPokemons={104} click={click} />
    );
  } else if (type === "rock") {
    return (
      <IconArrow nextPokemon={nextPokemon} allPokemons={74} click={click} />
    );
  } else if (type === "flying") {
    return (
      <IconArrow nextPokemon={nextPokemon} allPokemons={109} click={click} />
    );
  } else if (type === "ghost") {
    return (
      <IconArrow nextPokemon={nextPokemon} allPokemons={64} click={click} />
    );
  } else if (type === "dragon") {
    return (
      <IconArrow nextPokemon={nextPokemon} allPokemons={69} click={click} />
    );
  }
};