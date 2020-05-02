import React from "react";
import PokemonCard from "../pokemon-card/pokemon-card";
import "./pokemon-list.css"
import LoadBtn from "../load-btn/load-btn";

let getPokemonCopy, dataCopy, filterCopy;
const PokemonsList = ({data, incLimit, getPokemons, getPokemon, limit, filter}) => {
    getPokemonCopy = getPokemon;
    dataCopy = data;
    filterCopy = filter;
    return (
        <div className="pokemons-list">
            {elements(data.data)}
            <LoadBtn limit={limit}
                     incLimit={incLimit}
                     getPokemons={getPokemons}/>
        </div>

    )
};
export default PokemonsList;


const elements = (pokemons) => {

    return pokemons.map(pokemon => {
        let arr = pokemon.url.split('/');
        let id = arr[arr.length - 2];
        let types = dataCopy.typesWithId.filter(value => value.id == id);
        if (filterCopy == 'all') {
            return <PokemonCard key={id} getPokemon={getPokemonCopy} types={types} id={id}{...pokemon}/>
        } else {
            let types = dataCopy.typesWithId.filter(value => value.id == id);

           if (types.length>0) {
                const filteredArr = types[0].types.filter(value => value.type.name === filterCopy);
                if (filteredArr.length > 0) {
                    return <PokemonCard key={id} getPokemon={getPokemonCopy} types={types} id={id}{...pokemon}/>
                } else return null
            }
        }
    })
};
