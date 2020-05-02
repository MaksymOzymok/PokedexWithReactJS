import {createStore,applyMiddleware} from "redux";
import pokedexReducer from "../reducer/pokedex-reducer";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";

const store = createStore(pokedexReducer,applyMiddleware(thunk));

export default store;