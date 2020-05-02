import React from "react";
import "./filter.css"
const Filter = ({props,changeFilter})=>{
    //console.log(props);
    return (
        <select className={"filter"} onChange={(event => changeFilter(event.target.value))}>
            {options(props)}

        </select>
    )
};

const options = (types)=>{
    return types.map(value=>{
        return <option key={value.name} value={value.name}>{value.name}</option>
    })
};

export default Filter;