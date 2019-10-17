import React from 'react';
import PokemonIndex from './PokemonIndex';
import { Header } from 'semantic-ui-react';

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
                <Header size='huge'>Pokemon Team Builder</Header>
                <PokemonIndex pokemon={this.state.pokemons}/>
            </div>
        )
    }

    componentDidMount = () => {
        fetch('http://localhost:3001/pokemon')
            .then(response => response.json())
            .then(pokemons => {
                this.setState({
                    pokemons: pokemons
                })
            })
        fetch('http://localhost:3001/pokemonTeams')
            .then(response => response.json())
            .then(teams => {
                this.setState({
                    teams: teams
                })
            })
    }


}

export default TrainerPage