import { useDispatch } from "react-redux";
import getGradient from "../../style/BackgroundPokeCard";
import { removePokemonFromCart } from "../redux/pokemonCart/slice";

const TeamPokemonModal = ({ isOpen, teamPokemon, setModalClosed }) => {
  console.log("teamPokemon: ", teamPokemon.teamPokemon);
  const setColor = (index) => {
    const type1 = teamPokemon.teamPokemon[index].types[0].type.name;
    return getGradient(type1);
  };

  const dispatch = useDispatch();
  const handleNameSearch = (id) => {
    dispatch(removePokemonFromCart(id));
    // console.log("Pokemon Removido!!")
    // console.log("Dados removidos: ", id);
  };

  if (isOpen) {
    return (
      <div className="h-full w-full fixed z-10 bg-black/60 left-0 top-0 flex justify-center items-center">
        <div className="h-[80%] w-[90%] bg-slate-400/80 py-4 px-2 flex flex-col items-center gap-3 rounded-3xl">
          <div className="self-end">
            <i
              className="fa-solid fa-x text-black hover:cursor-pointer"
              onClick={() => setModalClosed()}
            ></i>
          </div>
          <ul className="w-full max-h-[92%] flex flex-wrap justify-center items-center gap-x-1 gap-y-1 pr-1 scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-black overflow-auto text-white">
            {teamPokemon.teamPokemon.length >= 1 ? (
              teamPokemon.teamPokemon.map((pokemon, key) => (
                <li
                  key={key}
                  className={
                    "w-full h-24 flex justify-around items-center gap-1 rounded-3xl " +
                    setColor(key)
                  }
                >
                  <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="w-[25%]"
                  />
                  <div className="flex flex-col justify-center items-end">
                    <h2>{pokemon.name.toUpperCase()}</h2>
                    <div className="flex gap-2">
                      {pokemon.base_experience} XP
                    </div>
                  </div>
                  <i
                    className="fa-solid fa-x text-yellow-400 hover:cursor-pointer hover:scale-75"
                    onClick={() => handleNameSearch(pokemon.id)}
                  ></i>
                </li>
              ))
            ) : (
              <h2 className="text-white self-center">
                Não há nenhum Pokemon na sua equipe!
              </h2>
            )}
          </ul>
        </div>
      </div>
    );
  }
};

export default TeamPokemonModal;
