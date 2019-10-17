import React from 'react';
import PokemonIndex from './PokemonIndex'

class TrainerPage extends React.Component {

    constructor(){
        super()
        this.state ={
            pokemons: [],
            teams: []
        }
    }

    render() {
        return(
            <div>
                <h1>This is the Trainer Page</h1>
                <h3>This is the parent and grand-parent component</h3>
                <h4>Fetch requests go here</h4>
                <div>
                    <PokemonIndex />
                </div>
            </div>
        )
    }

    componentDidMount = () => {
        fetch('http://localhost:3001/pokemon')
            .then(response => response.json())
            .then(pokemons => {
                console.log(pokemons)
            })
        fetch('http://localhost:3001/pokemonTeams')
            .then(response => response.json())
            .then(teams => {
                console.log(teams)
            })
    }


}

export default TrainerPage