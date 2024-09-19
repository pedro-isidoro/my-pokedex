const TeamPokemonModal = ({ isOpen, teamPokemon, setModalClosed }) => {
  if (isOpen) {
    return (
      <div className="h-full w-full fixed z-10 bg-black/50 left-0 top-0">
        <p className="text-white">EURECA!!</p>
        <p
          className="text-white hover:cursor-pointer"
          onClick={() => setModalClosed()}
        >
          Fechar
        </p>
        {/* {teamPokemon.map((pokemon, key) => {
            if (key >= previousPokemon && key <= nextPokemon) {
              return (
                <li key={key}>
                  <Pokemon pokemon={pokemon} index={key} />
                </li>
              );
            }
          })} */}
      </div>
    );
  }
};

export default TeamPokemonModal
