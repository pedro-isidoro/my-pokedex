import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full h-14 flex flex-row justify-between items-center pt-8 pb-10">
      <Link to={"/"}>
        <img
          className="w-46 h-16"
          src="src/images/pokemon-logo.png"
          alt="Pokemon Logo"
        />
      </Link>
      <Link to={"pokedex"}>
        <img
          className="w-16 h-10"
          src="src/images/pokedex.png"
          alt="Pokedex Logo"
        />
      </Link>
    </header>
  );
}

export default Header;
