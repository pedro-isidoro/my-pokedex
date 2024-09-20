import { createSlice } from "@reduxjs/toolkit";

//nosso ajudante a criar o cartReducer
const initialState = {
  allPokemons: [],
  typePokemon: " ",
  namePokemon: "",
  teamPokemon: [],
};

const cartSlice = createSlice({
  name: "pokeCart",
  initialState,
  //aqui colocamos as actions
  reducers: {
    //Como tenho que passar 1 vez apenas, seto o valor diretamente
    addPokemons: (state, action) => {
      state.allPokemons = [...action.payload];
    },
    filteredPokemon: (state, action) => {
      if (action.payload && typeof action.payload === "string") {
        state.typePokemon = action.payload;
      } else {
        console.error("Invalid action payload:", action.payload);
      }
    },
    filteredNamePokemon: (state, action) => {
      if (action.payload && typeof action.payload === "string") {
        state.namePokemon = action.payload;
      } else {
        console.error("Invalid action payload:", action.payload);
      }
    },
    addPokemonToCart: (state, action) => {
      console.log("Action: ", action.payload)
      const pokemonIsAlreadyInTeam = state.teamPokemon.some(pokemon => pokemon.id === action.payload.id)
      if (state.teamPokemon.length >= 6) {
        alert("Time Pokemon Lotado! Caso queira adicionar outro Pokemon, remova um da sua equipe!!!");
      } else if (pokemonIsAlreadyInTeam) {
        alert("Você já tem esse Pokemon na equipe!! Escolha outro, por gentileza!")
      } else {
        state.teamPokemon = [...state.teamPokemon, { ...action.payload }];
      }
    },
    removePokemonFromCart: (state, action) => {
      state.teamPokemon = state.teamPokemon.filter(
        (pokemon) => pokemon.id !== action.payload
      );
    },
  },
});
export const {
  addPokemons,
  filteredPokemon,
  filteredNamePokemon,
  addPokemonToCart,
  removePokemonFromCart,
} = cartSlice.actions;

export default cartSlice.reducer