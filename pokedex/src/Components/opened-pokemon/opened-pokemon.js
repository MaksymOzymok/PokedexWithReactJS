import React from "react";
import "./opened-pokemon.css"

const OpenedPokemon = (props)=>{
    let type = '';
    if(props.data!==null) {
        props.data.types.forEach(value => {
            type += value.type.name;
            type += ', '
        });
    }
    return(
       props.data!==null? <div className={"characterization-table"}>
           <a name={"table"}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.data.id}.png`}  className="table-avatar"/>
            <h2 className="table-name">{props.data.name.slice(0,1).toUpperCase()+props.data.name.slice(1,props.data.name.length)}</h2>

               <div className="table">
                <div className={"row"}>
                    <div className={"cell"}>Type</div>
                    <div className={"cell"}>{type.slice(0,type.length-2)}</div>
                </div>
                   <div className={"row"}>
                       <div className={"cell"}>Attack</div>
                       <div className={"cell"}>{props.data.stats[4].base_stat}</div>
                   </div>
                   <div className={"row"}>
                       <div className={"cell"}>Defense</div>
                       <div className={"cell"}>{props.data.stats[3].base_stat}</div>
                   </div>
                   <div className={"row"}>
                       <div className={"cell"}>HP</div>
                       <div className={"cell"}>{props.data.stats[5].base_stat}</div>
                   </div>

                   <div className={"row"}>
                       <div className={"cell"}>SP Attack</div>
                       <div className={"cell"}>{props.data.stats[2].base_stat}</div>
                   </div>
                   <div className={"row"}>
                       <div className={"cell"}>SP Defense</div>
                       <div className={"cell"}>{props.data.stats[1].base_stat}</div>
                   </div>
                   <div className={"row"}>
                       <div className={"cell"}>Speed</div>
                       <div className={"cell"}>{props.data.stats[0].base_stat}</div>
                   </div>
                   <div className={"row"}>
                       <div className={"cell"}>Weight</div>
                       <div className={"cell"}>{props.data.weight}</div>
                   </div>
                   <div className={"row"}>
                       <div className={"cell"}>Moves</div>
                       <div className={"cell"}>{props.data.moves.length}</div>
                   </div>
            </div>
           </a>
        </div>:null
    )
};
export default OpenedPokemon;