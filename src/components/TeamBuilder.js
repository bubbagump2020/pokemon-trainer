import React from 'react'
import PokemonCard from './PokemonCard'
import { Card, Form, Button } from 'semantic-ui-react'



class TeamBuilder extends React.Component {


    handleSubmit = (e) => {
        fetch('http://localhost:3001/pokemonTeams', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pokemons: this.props.pokemon
            })
        })
            .then(response => response.json())
    }


    render() {
        return(
            <Form  align="center" onSubmit={(e) => this.handleSubmit(e)}>
                <Card.Group>
                    {this.props.pokemon.map(pokemon => (
                        <PokemonCard pokemon={pokemon} key={pokemon.id} addPokemonToTeam={this.props.addPokemonToTeam}/>
                    ))}
                    
                </Card.Group>
                <br></br>
                <Button type='submit'>Create Team!</Button>
                <br></br>
            </Form>
        )
    }

}

export default TeamBuilder