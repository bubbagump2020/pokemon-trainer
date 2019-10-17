import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'
// import { Card } from 'semantic-ui-react'

class PokemonIndex extends React.Component {
    render(){
        return(
            <Card.Group >
                {this.props.pokemon.map(pokemon => (
                    <PokemonCard pokemon={pokemon} key={pokemon.id} addPokemonToTeam={this.props.addPokemonToTeam}/>
                ))}
            </Card.Group>
        )
    }
}

export default PokemonIndex