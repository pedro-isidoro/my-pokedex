import { createSlice } from "@reduxjs/toolkit";

//nosso ajudante a criar o cartReducer
const initialState = {
  allPokemons: [],
  typePokemon: " ",
  namePokemon: "",
  teamPokemon: [1],
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
        // console.log(action.payload)
      } else {
        console.error("Invalid action payload:", action.payload);
      }
    },
    addPokemonToCart: (state, action) => {
      state.teamPokemon = [...state.teamPokemon, { ...action.payload }];
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