export const PreviousArrow = ({ previousPokemon, nextPokemon, click }) => {
  // console.log("previousPokemon: ", previousPokemon);
  // console.log("nextPokemon: ", nextPokemon);
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
  previousPokemon,
  nextPokemon,
  allPokemons,
  click,
}) => {
  // console.log("allPokemons: ", allPokemons)
  return (
    <div>
      {nextPokemon === allPokemons ? (
        <button className="px-4 bg-black text-yellow-400 rounded-lg hover:cursor-not-allowed">
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
