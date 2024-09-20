import React from "react";
const pokemonImage = "/images/pokemon-image.jpg";

function MainContainer() {
  return (
    <main className="w-full h-auto md:h-[530px] xl:h-[540px] flex justify-center text-justify items-center pt-4 px-2">
      <section className="w-full sm:w-[80%] md:w-[90%] xl:w-[50%] bg-slate-700 bg-opacity-60 sm:bg-opacity-70 px-6 py-6 gap-6 flex flex-col md:flex-row items-center">
        <img
          src={pokemonImage}
          alt="Imagem Pokemon"
          className="w-[80%] sm:w-[70%] md:w-[40%] xl:hidden"
        />
        <p className="w-full text-slate-200 py-2 lg:py-4">
          Pokémon é uma franquia de mídia que pertence a The Pokémon Company,
          tendo sido criada por Satoshi Tajiri em 1995. Ela é centrada em
          criaturas ficcionais chamadas "Pokémon", que os seres humanos capturam
          e os treinam para lutarem entre si com seus ataques de diversos tipos.{" "}
          <br />
          <br />A franquia começou com um par de jogos lançados para o Game Boy
          original, desenvolvidos pela Game Freak e publicados pela Nintendo.
          Atualmente, a franquia se estende em jogos, cartas colecionáveis,
          série de televisão, além de filmes, mangás e brinquedos. Pokémon é a
          segunda franquia de mídia de jogos mais bem sucedida e lucrativa do
          mundo, atrás da franquia Mario que também pertence a Nintendo.
        </p>
      </section>
    </main>
  );
}

export default MainContainer;
