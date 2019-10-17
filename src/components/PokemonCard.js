import React from 'react';

class PokemonCard extends React.Component {
    render(){
        return(
            <div>
                <h3>This is the Pokemon Card Component</h3>
                <h4>A child component of PokemonIndex and grandchild of TrainerPage</h4>
            </div>
        )
    }
}

export default PokemonCard