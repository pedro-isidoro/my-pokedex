import { useDispatch } from "react-redux";
import { filteredPokemon } from "../components/redux/pokemonCart/slice";

const PokemonsTypes = () => {
  const dispatch = useDispatch();
  const handleTypeClick = (type) => {
    // console.log("Dispatching type:", type);
    dispatch(filteredPokemon(type));
  };

  return (
    <div className="h-full w-full flex justify-center items-start fixed top-48 left-0 transition-all z-10">
      <ul className="h-54 w-[80%] py-4 flex justify-center flex-wrap gap-3 bg-slate-950 sm:bg-opacity-90 rounded-xl">
        <li
          className="w-24 text-center border-[1px] border-green-400 text-green-400 px-2 rounded-md hover:cursor-pointer hover:scale-90"
          onClick={() => handleTypeClick("grass")}
        >
          Grass
        </li>
        <li
          className="w-24 text-center border-[1px] border-orange-600 text-orange-600 px-2 rounded-md hover:cursor-pointer hover:scale-90"
          onClick={() => handleTypeClick("fire")}
        >
          Fire
        </li>
        <li
          className="w-24 text-center border-[1px] border-blue-600 text-blue-600 px-2 rounded-md hover:cursor-pointer hover:scale-90"
          onClick={() => handleTypeClick("water")}
        >
          Water
        </li>
        <li
          className="w-24 text-center border-[1px] border-green-600 text-green-600 px-2 rounded-md hover:cursor-pointer hover:scale-90"
          onClick={() => handleTypeClick("bug")}
        >
          Bug
        </li>
        <li
          className="w-24 text-center border-[1px] border-gray-400 text-gray-400 px-2 rounded-md hover:cursor-pointer hover:scale-90"
          onClick={() => handleTypeClick("normal")}
        >
          Normal
        </li>
        <li
          className="w-24 text-center border-[1px] border-slate-500 text-slate-500 px-2 rounded-md hover:cursor-pointer hover:scale-90"
          onClick={() => handleTypeClick("dark")}
        >
          Dark
        </li>
        <li
          className="w-24 text-center border-[1px] border-purple-400 text-purple-400 px-2 rounded-md hover:cursor-pointer hover:scale-90"
          onClick={() => handleTypeClick("poison")}
        >
          Poison
        </li>
        <li
          className="w-24 text-center border-[1px] border-yellow-500 text-yellow-500 px-2 rounded-md hover:cursor-pointer hover:scale-90"
          onClick={() => handleTypeClick("electric")}
        >
          Electric
        </li>
        <li
          className="w-24 text-center border-[1px] border-yellow-700 text-yellow-700 px-2 rounded-md hover:cursor-pointer hover:scale-90"
          onClick={() => handleTypeClick("ground")}
        >
          Ground
        </li>
        <li
          className="w-24 text-center border-[1px] border-sky-400 text-sky-400 px-2 rounded-md hover:cursor-pointer hover:scale-90"
          onClick={() => handleTypeClick("ice")}
        >
          Ice
        </li>
        <li
          className="w-24 text-center border-[1px] border-pink-300 text-pink-300 px-2 rounded-md hover:cursor-pointer hover:scale-90"
          onClick={() => handleTypeClick("fairy")}
        >
          Fairy
        </li>
        <li
          className="w-24 text-center border-[1px] border-slate-500 text-slate-500 px-2 rounded-md hover:cursor-pointer hover:scale-90"
          onClick={() => handleTypeClick("steel")}
        >
          Steel
        </li>
        <li
          className="w-24 text-center border-[1px] border-orange-700 text-orange-700 px-2 rounded-md hover:cursor-pointer hover:scale-90"
          onClick={() => handleTypeClick("fighting")}
        >
          Fighting
        </li>
        <li
          className="w-24 text-center border-[1px] border-purple-400 text-purple-400 px-2 rounded-md hover:cursor-pointer hover:scale-90"
          onClick={() => handleTypeClick("psychic")}
        >
          Psychic
        </li>
        <li
          className="w-24 text-center border-[1px] border-amber-800 text-amber-800 px-2 rounded-md hover:cursor-pointer hover:scale-90"
          onClick={() => handleTypeClick("rock")}
        >
          Rock
        </li>
        <li
          className="w-24 text-center border-[1px] border-sky-300 text-sky-300 px-2 rounded-md hover:cursor-pointer hover:scale-90"
          onClick={() => handleTypeClick("flying")}
        >
          Flying
        </li>
        <li
          className="w-24 text-center border-[1px] border-indigo-700 text-indigo-700 px-2 rounded-md hover:cursor-pointer hover:scale-90"
          onClick={() => handleTypeClick("ghost")}
        >
          Ghost
        </li>
        <li
          className="w-24 text-center border-[1px] border-cyan-800 text-cyan-800 px-2 rounded-md hover:cursor-pointer hover:scale-90"
          onClick={() => handleTypeClick("dragon")}
        >
          Dragon
        </li>
        <li
          className="w-24 text-center hover:border-solid text-white px-2 rounded-md hover:cursor-pointer hover:scale-90"
          onClick={() => handleTypeClick(" ")}
        >
          Clean
        </li>
      </ul>
    </div>
  );
};

export default PokemonsTypes;
