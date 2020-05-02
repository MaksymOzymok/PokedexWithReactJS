import axios from "axios"

export const GET_POKEMONS_REQUEST = "GET_POKEMONS_REQUEST";
export const GET_POKEMONS_SUCCESS = "GET_POKEMONS_SUCCESS";
export const GET_POKEMON_REQUEST = "GET_POKEMON_REQUEST";
export const GET_POKEMON_SUCCESS = "GET_POKEMON_SUCCESS";
export const GET_TYPES_SUCCESS = "GET_TYPES_SUCCESS";
export const INC_LIMIT = "INC_LIMIT";

export const GET_TYPES_WITH_ID = "GET_TYPES_WITH_ID_SUCCESS";
export const CHANGE_FILTER = "CHANGE_FILTER";


const getPokemonsRequestAction = () => {
    return {
        type: GET_POKEMONS_REQUEST
    }
};
const getPokemonsSuccessAction = (data) => {
    return {
        type: GET_POKEMONS_SUCCESS,
        payload: data
    }
};
export const incLimit = () => {
    return {
        type: INC_LIMIT
    }
};
const getPokemonRequestAction = () => {
    return {
        type: GET_POKEMON_REQUEST
    }
};
const getPokemonSuccessAction = (data) => {
    return {
        type: GET_POKEMON_SUCCESS,
        payload: data
    }
};

export const getPokemons = (limit) => {
    //console.log(limit);
    return dispatch => {
        getTypes().then(res=>dispatch(getTypesAction(res.data.results)));
        dispatch(getPokemonsRequestAction());

        axios({
            method: 'get',
            url: `https://pokeapi.co/api/v1/pokemon/?limit=${limit}`
        }).then(res => {
            dispatch(getPokemonsSuccessAction(res.data.results));
            for (let i = 1; i <= limit; i++) {
                axios({
                    method: 'get',
                    url: `https://pokeapi.co/api/v2/pokemon/${i}`
                }).then(res => dispatch(getTypesWithIdAction(res.data))
                )
            }
        });

    }
};
export const getPokemon = (id = 2) => {
    return dispatch => {
        dispatch(getPokemonRequestAction());
        axios({
            method: 'get',
            url: `https://pokeapi.co/api/v2/pokemon/${id}`
        }).then(res => {
            dispatch(getPokemonSuccessAction(res.data));
        })
    }
};
const getTypesWithIdAction = (data) => {
    return {
        type: GET_TYPES_WITH_ID,
        payload: data
    }
};
const getTypesAction = (data) => {
    return {
        type: GET_TYPES_SUCCESS,
        payload: data
    }
};
const getTypes = ()=>{
   return  axios({
        method: 'get',
        url: `https://pokeapi.co/api/v1/type/?limit=999`
    })
};
export const changeFilter = (newValue)=>{
    return {
        type : CHANGE_FILTER,
        payload : newValue
    }
};
