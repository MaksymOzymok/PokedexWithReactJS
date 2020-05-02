import {GET_POKEMONS_SUCCESS,
  GET_POKEMONS_REQUEST,
  INC_LIMIT,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_REQUEST,
  GET_TYPES_SUCCESS,
    CHANGE_FILTER,
GET_TYPES_WITH_ID} from "../actions/pokedexActions";

const initialState = {
  data : [],
  openedPokemon: null,
  limit : 12,
  typesWithId : [],
  filter : 'all',
  types : []
};

const pokedexReducer = (state=initialState,action)=>{
  switch (action.type) {
    case GET_POKEMONS_REQUEST:
      return {...state};
    case GET_POKEMONS_SUCCESS:
      //console.log(action.payload);
     return {...state,data : action.payload,typesWithId: []};
    case INC_LIMIT:
      return {...state,limit: state.limit+=6};
    case GET_POKEMON_REQUEST:
      return {...state};
    case GET_POKEMON_SUCCESS:
      //console.log(action.payload);
      return {...state,openedPokemon: action.payload};
    case GET_TYPES_WITH_ID:
      let obj = {
        id : action.payload.id,
        types : action.payload.types
      };
      return {...state,typesWithId: [...state.typesWithId,obj]};
    case GET_TYPES_SUCCESS:
      return {...state,types: [{name:'all'}, ...action.payload]};
    case CHANGE_FILTER:
      return {...state,filter: action.payload};
    default:
      return {...state}
  }
};

export default pokedexReducer;