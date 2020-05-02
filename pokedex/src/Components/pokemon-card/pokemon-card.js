import React from "react";
import "./pokemon-card.css"
import typeColors from "../../colors/type-colors";
export default class PokemonCard extends React.Component{

    render() {
      let {id,name,getPokemon,types} = this.props;
         name = name.split('')[0].toUpperCase() + name.slice(1,name.length);
        return(
            <a href="#table" style={{textDecoration:'none',color:'black'}}>
            <div className={"pokemon-card"} onClick={()=>getPokemon(id)}>
                <img className="pokemon-img"
                     src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt=""/>
                <h3 className="pokemon-name">{name}</h3>
                <div className={"types"}>
                    {elements(types)}
                </div>
            </div>
            </a>
        )
    }
}
const elements = (types)=>{
    if(types[0]!== undefined) {

        return types[0].types.map(type => {
           let bgColor= typeColors.filter(value => value.name === type.type.name);
            return <div key={type.type.url} className={"type"} style={{backgroundColor: bgColor[0].value }}>{type.type.name}</div>
        })
    }
};
