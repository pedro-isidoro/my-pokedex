import { useState } from "react";
import TeamPokemonModal from "./TeamPokemonModal";

const TeamPokemon = (teamPokemon) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="w-20 h-16 fixed z-30 bottom-0 right-0">
      <img
        src="/src/images/master-ball-without-bg.png"
        alt="Masterball"
        className="w-[100%] hover:opacity-70 hover:cursor-pointer"
        onClick={() => setOpenModal(true)}
      />
      <TeamPokemonModal
        isOpen={openModal}
        teamPokemon={teamPokemon}
        setModalClosed={() => setOpenModal(!openModal)}
      />
    </div>
  );
}

export default TeamPokemon
