import React from 'react';
import PokemonIndex from './PokemonIndex';
import TeamBuilder from './TeamBuilder';
import { Header } from 'semantic-ui-react';

class TrainerPage extends React.Component {

    constructor(){
        super()
        this.state = {
            pokemons: [],
            teams: [],
            myPokemon: []
        }
    }

    addPokemonToTeam = (pokemon) => {
        this.setState({
            myPokemon:  [...this.state.myPokemon, pokemon ]
        })
    }

    render() {
        return(
            <div>
                <Header size='huge' align="center" >Pokemon Team Builder</Header>
                <TeamBuilder pokemon={this.state.myPokemon} />
                <PokemonIndex pokemon={this.state.pokemons} addPokemonToTeam={this.addPokemonToTeam}/>
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