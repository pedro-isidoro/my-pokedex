import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TypesStyle from "../../style/TypesStyle";
import PokeInfo from "../../js/PokeInfo";
import { addPokemonToCart } from "../../components/redux/pokemonCart/slice";

const PokeProfile = () => {
  //Com isso acesso o id dado no path
  const { id } = useParams();
  let index = id - 1;

  const { allPokemons } = useSelector((rootReducer) => rootReducer.pokeReducer);
  const data = allPokemons[index].data;
  const info = PokeInfo(data);

  const dispatch = useDispatch();
  const handleNameSearch = () => {
      dispatch(addPokemonToCart(data));
      // console.log("Pokemon Adicionado!!")
      console.log("Dados adicionados: ", data)
  };

  return (
    <section className="w-full h-full flex flex-col items-center justify-center">
      <div className="mainPokemon w-[100%] md:w-[80%] lg:w-[60%] max-h-[660px] flex flex-col items-center gap-4 text-white bg-slate-900/80 overflow-y-auto scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-black px-2 rounded-xl">
        <section className="w-full flex flex-col sm:flex-row justify-center items-center">
          <div className="flex flex-col items-center gap-2 sm:gap-8">
            <img
              src={info.pokemonImage2}
              alt={info.pokemonName}
              className="w-[50%] sm:w-[100%]"
            />
            <hr className="w-[50%] h-2 border-white" />
          </div>
          <div className="w-full h-auto flex flex-col gap-4 py-2 items-center">
            <h1 className="text-center text-lg font-semibold">
              -{info.pokemonName}-
            </h1>
            <div className="w-full h-auto flex flex-col items-center justify-center gap-4 px-8">
              <div className="w-full flex flex-col items-center gap-4 p-2">
                <div className="flex gap-2">
                  <TypesStyle infos={info} id={0}></TypesStyle>
                  <TypesStyle infos={info} id={1}></TypesStyle>
                </div>
                <div className="w-[50%] flex justify-center items-center gap-4">
                  <div className="w-[50%] flex flex-col justify-center items-center">
                    <h4>Altura</h4>
                    <p>{info.pokemonHeight} m</p>
                  </div>
                  <div className="w-[50%] flex flex-col justify-center items-center">
                    <h4>Peso</h4>
                    <p>{info.pokemonWeight} kg</p>
                  </div>
                </div>
              </div>
              <div className="w-[100%]">
                <ul className="gap-1 flex flex-col items-center">
                  <li className="w-[60%] sm:w-[80%] bg-amber-600 flex justify-between mb-1 px-2 rounded-md">
                    <p>XP</p> <p>{info.pokemonBaseExperience} ptos</p>
                  </li>
                  {info.pokemonStats.map((stat, key) => (
                    <li
                      key={key}
                      className="w-[60%] sm:w-[80%] bg-amber-600 flex justify-between mb-1 px-2 rounded-md"
                    >
                      <p>{stat.stat.name.toUpperCase()}</p>
                      <p>{stat.base_stat} ptos</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[100%] pt-5 flex flex-col items-center gap-4 bg-black/70 text-white rounded-t-[2rem] pb-4">
          <div>
            <button
              className="w-40 py-1 rounded-xl bg-red-800 hover:cursor-pointer hover:opacity-80"
              onClick={() => handleNameSearch()}
            >
              Adicionar à equipe!
            </button>
          </div>
          {info.pokemonImageShiny == null ? (
            <></>
          ) : (
            <div className="w-full flex flex-col items-center">
              <h2 className="text-base font-semibold mb-4">Variações</h2>
              <img
                src={info.pokemonImageShiny}
                alt={info.pokemonName}
                className="w-[50%] sm:w-[30%] scale-x-[-1] bg-blue-300/20"
              />
              <hr className="w-[50%] sm:w-[30%] h-2 border-white" />
            </div>
          )}
          <div className="w-full flex flex-col items-center gap-8">
            <h2 className="text-base font-semibold">Habilidades</h2>
            <ul className="flex pb-4 gap-4">
              {info.pokemonAbilites.map((moveData, key) => (
                <li
                  key={key}
                  className="w-28 text-center bg-slate-200 text-slate-800 px-2 rounded-md"
                >
                  {moveData.ability.name}
                </li>
              ))}
            </ul>
          </div>
          <hr className="w-[80%] h-2 border-white" />
          <div className="w-full flex flex-col items-center gap-8 px-4">
            <h2 className="text-base font-semibold">Movimentos</h2>
            <ul className="flex justify-center flex-wrap gap-4">
              {info.pokemonMoves.map((moveData, key) => (
                <li
                  key={key}
                  className="w-36 text-center bg-slate-200 text-slate-800 px-2 rounded-md"
                >
                  {moveData.move.name}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
};

export default PokeProfile;
