import React from "react";

function Footer() {
  return (
    <footer className="w-full h-28 flex flex-col justify-center items-center gap-4 pt-5">
      <ul className="flex items-center gap-4 text-slate-200">
        <li className="hover:cursor-pointer hover:opacity-60">
          <a href="https://www.pokemon.com/br" target="_blank">
            <img src="/images/favicon-16x16.png" alt="Pokeball" />
          </a>
        </li>
        <li className="hover:cursor-pointer hover:opacity-60">
          <i className="text-cyan-500 fa-brands fa-linkedin"></i>
        </li>
        <li className="hover:cursor-pointer hover:opacity-60">
          <i className="text-pink-400 fa-brands fa-instagram"></i>
        </li>
      </ul>
      <p className=" text-slate-100">
        Site desenvolvido por {""}
        <span className="text-green-600">
          <a href="https://pedro-isidoros-portfolio.vercel.app" target="_blank">
            Pedro Isidoro
          </a>
        </span>
      </p>
    </footer>
  );
}

export default Footer;
