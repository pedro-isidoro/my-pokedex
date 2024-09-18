const TypesStyle = ({ infos, id }) => {
    if (infos.pokemonTypes[id]){
        if (infos.pokemonTypes[id].type.name === "grass") {
          return (
            <span className="bg-green-400 text-white px-2 rounded-md">
              {infos.pokemonTypes[id].type.name.toUpperCase()}
            </span>
          );
        } else if (infos.pokemonTypes[id].type.name === "fire") {
          return (
            <span className="bg-orange-600 text-white px-2 rounded-md">
              {infos.pokemonTypes[id].type.name.toUpperCase()}
            </span>
          );
        } else if (infos.pokemonTypes[id].type.name === "water") {
          return (
            <span className="bg-blue-600 text-white px-2 rounded-md">
              {infos.pokemonTypes[id].type.name.toUpperCase()}
            </span>
          );
        } else if (infos.pokemonTypes[id].type.name === "bug") {
          return (
            <span className="bg-green-600 text-white px-2 rounded-md">
              {infos.pokemonTypes[id].type.name.toUpperCase()}
            </span>
          );
        } else if (infos.pokemonTypes[id].type.name === "normal") {
          return (
            <span className="bg-slate-600 text-white px-2 rounded-md">
              {infos.pokemonTypes[id].type.name.toUpperCase()}
            </span>
          );
        } else if (infos.pokemonTypes[id].type.name === "dark") {
          return (
            <span className="bg-slate-900 text-white px-2 rounded-md">
              {infos.pokemonTypes[id].type.name.toUpperCase()}
            </span>
          );
        } else if (infos.pokemonTypes[id].type.name === "poison") {
          return (
            <span className="bg-purple-400 text-white px-2 rounded-md">
              {infos.pokemonTypes[id].type.name.toUpperCase()}
            </span>
          );
        } else if (infos.pokemonTypes[id].type.name === "electric") {
          return (
            <span className="bg-yellow-500 text-white px-2 rounded-md">
              {infos.pokemonTypes[id].type.name.toUpperCase()}
            </span>
          );
        } else if (infos.pokemonTypes[id].type.name === "ground") {
          return (
            <span className="bg-yellow-700 text-white px-2 rounded-md">
              {infos.pokemonTypes[id].type.name.toUpperCase()}
            </span>
          );
        } else if (infos.pokemonTypes[id].type.name === "ice") {
          return (
            <span className="bg-sky-400 text-white px-2 rounded-md">
              {infos.pokemonTypes[id].type.name.toUpperCase()}
            </span>
          );
        } else if (infos.pokemonTypes[id].type.name === "fairy") {
          return (
            <span className="bg-pink-300 text-white px-2 rounded-md">
              {infos.pokemonTypes[id].type.name.toUpperCase()}
            </span>
          );
        } else if (infos.pokemonTypes[id].type.name === "steel") {
          return (
            <span className="bg-slate-500 text-white px-2 rounded-md">
              {infos.pokemonTypes[id].type.name.toUpperCase()}
            </span>
          );
        } else if (infos.pokemonTypes[id].type.name === "fighting") {
          return (
            <span className="bg-orange-700 text-white px-2 rounded-md">
              {infos.pokemonTypes[id].type.name.toUpperCase()}
            </span>
          );
        } else if (infos.pokemonTypes[id].type.name === "psychic") {
          return (
            <span className="bg-purple-400 text-white px-2 rounded-md">
              {infos.pokemonTypes[id].type.name.toUpperCase()}
            </span>
          );
        } else if (infos.pokemonTypes[id].type.name === "rock") {
          return (
            <span className="bg-amber-800 text-white px-2 rounded-md">
              {infos.pokemonTypes[id].type.name.toUpperCase()}
            </span>
          );
        } else if (infos.pokemonTypes[id].type.name === "flying") {
          return (
            <span className="bg-sky-300 text-white px-2 rounded-md">
              {infos.pokemonTypes[id].type.name.toUpperCase()}
            </span>
          );
        } else if (infos.pokemonTypes[id].type.name === "ghost") {
          return (
            <span className="bg-indigo-700 text-white px-2 rounded-md">
              {infos.pokemonTypes[id].type.name.toUpperCase()}
            </span>
          );
        } else if (infos.pokemonTypes[id].type.name === "dragon") {
          return (
            <span className="bg-cyan-800 text-white px-2 rounded-md">
              {infos.pokemonTypes[id].type.name.toUpperCase()}
            </span>
          );
        } else {
          return;
        }
    } return
};

export default TypesStyle;
