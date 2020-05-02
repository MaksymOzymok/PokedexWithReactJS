import React from "react";
import "./load-btn.css"

const LoadBtn = (props)=>{
    return(
        <button  className={"load-btn"} type={"button"} onClick={()=>{props.incLimit();props.getPokemons(props.limit);}}>Load More</button>
    )
};

export default LoadBtn;