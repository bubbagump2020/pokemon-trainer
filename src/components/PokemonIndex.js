import React from 'react'
import PokemonCard from './PokemonCard'

class PokemonIndex extends React.Component {
    render(){
        return(
            <div>
                <h2>This is the Pokemon Index Component</h2>
                <div>
                    {this.props.pokemon.map(pokemon => (
                        <PokemonCard pokemon={pokemon} />
                    ))}
                </div>
            </div>
        )
    }
}

export default PokemonIndex