import React from "react";
import store from "./store/ConfigureStore";
import {connect} from "react-redux";
import PokemonsList from "./Components/pokemons-list/pokemons-list";
import Title from "./Components/title/title";
import Filter from "./Components/filter/filter";
import OpenedPokemon from "./Components/opened-pokemon/opened-pokemon";
import {getPokemons,incLimit,getPokemon,changeFilter} from "./actions/pokedexActions";
import "./App.css"


class App extends React.Component{
    componentDidMount() {
        this.props.getPokemons(this.props.data.limit);
        this.props.getPokemon(1);
    }

    render() {

    return(
        <div className="pokedex">
            <Title/>
            <Filter  props= {this.props.data.types} changeFilter = {this.props.changeFilter}/>
            <div className={"main"}>

            <OpenedPokemon data = {this.props.data.openedPokemon}/>

            <PokemonsList data = {this.props.data}
                          incLimit={this.props.incLimit}
                          getPokemons={this.props.getPokemons}
                          getPokemon = {this.props.getPokemon}
                          filter = {this.props.data.filter}
                          limit = {this.props.data.limit}/>
            </div>

        </div>
    )
  }
}

const mapStateToProps = ()=>{
    return{
        data : store.getState()
    }
};
const mapDispatchToProps = dispatch => {
    return{
     getPokemons : (limit)=>dispatch(getPokemons(limit)),
        getPokemon : (id)=>dispatch(getPokemon(id)),
        changeFilter: (newValue) =>dispatch(changeFilter(newValue)),
        incLimit: ()=>dispatch(incLimit())

    }
};
export default connect(mapStateToProps,mapDispatchToProps)(App);