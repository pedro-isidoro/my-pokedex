import { combineReducers } from "redux";
import pokeReducer from "./pokemonCart/slice";

const rootReducer = combineReducers({ pokeReducer });

export default rootReducer;
