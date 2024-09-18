import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TypesStyle from "../../style/TypesStyle";
import PokeInfo from "../../js/PokeInfo";

const PokeProfile = () => {
  //Com isso acesso o id dado no path
  const { id } = useParams();
  let index = id - 1;

  const { allPokemons } = useSelector((rootReducer) => rootReducer.pokeReducer);
  const data = allPokemons[index].data;
  // console.log(data);
  const info = PokeInfo(data);
  // console.log(info);

  return (
    <section className="w-full h-full flex flex-col items-center justify-center">
      <div className="mainPokemon w-[100%] md:w-[50%] max-h-[600px] flex flex-col items-center gap-4 text-white bg-slate-900/80 overflow-y-auto scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-black px-2 rounded-xl">
        <section className="w-full flex flex-col justify-center items-center gap-2">
          <img
            src={info.pokemonImage2}
            alt={info.pokemonName}
            className="w-[50%]"
          />
          <hr className="w-[50%] h-2 border-white" />
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
              <div className="w-[100%] ">
                <ul className="gap-1 flex flex-col items-center">
                  <li className="w-[60%] bg-amber-600 flex justify-between mb-1 px-2 rounded-md">
                    <p>XP</p> <p>{info.pokemonBaseExperience} ptos</p>
                  </li>
                  {info.pokemonStats.map((stat, key) => (
                    <li
                      key={key}
                      className="w-[60%] bg-amber-600 flex justify-between mb-1 px-2 rounded-md"
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
          {info.pokemonImageShiny == null ? (
            <></>
          ) : (
            <div className="w-full flex flex-col items-center gap-4">
              <h2 className="text-base font-semibold">Variações</h2>
              <img
                src={info.pokemonImageShiny}
                alt={info.pokemonName}
                className="w-[40%] scale-x-[-1]"
              />
              <hr className="w-[50%] h-2 border-white" />
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
