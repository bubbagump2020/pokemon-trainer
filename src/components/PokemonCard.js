import React from 'react';
import { Card, Image } from 'semantic-ui-react';


const PokemonCard = props => {
    const { pokemon } = props

    const pokemonHealth = () => {
        return pokemon.stats.map(stat => {
          if(stat.name === "hp") {
            return stat.value
          }
        })
    }
    
    return(
        
        <Card>
            <Image src={pokemon.sprites.front} wrapped ui={false} />
            <Card.Content>
                <Card.Header align="center" size="big">{pokemon.name}</Card.Header>
            </Card.Content>
            <Card.Content extra align="center" >
                <span>
                    <i className="icon heartbeat red" />
                    {pokemonHealth()}
                </span>
            </Card.Content>
        </Card>
        
    )
    

}


export default PokemonCard