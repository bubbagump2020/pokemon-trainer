This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Mod 4 Solo Project Proposal #
## Pokemon Team Builder ##

The object of this project is to show all of the first gen Pokemon and to be able to build a team of six Pokemon from this list. I should also be able to save teams of pokemon.

### User Stories ###

1. As a user I need to…
2.  Be able to see a list of all the first generation Pokemon
3. Be able to create a team.
4. Be able to add a Pokemon to a team.
5. Be able to remove a Pokemon from a team
6. Save that team.
7. Be able to see a list of all of my teams that I have created
8. Delete a team from that list.

### Tools Needed ###

I am going to need to build a database of both Pokemon and teams. This is going to manifest itself as json server with two key-value pairs, Pokemon and teams. Pokemon will have all of the Pokemon and teams will have all of the teams created. Teams will initially be empty, but will fill as the user saves teams

### Data Structure ###

* App
    * TrainerPage
        * PokemonIndex
            * PokemonCard []
        * TeamBuilder
        * TeamIndex
            * TeamCard []




### UI Element ###

UI elements will be heavily drawn from Semantic-UI. A stretch goal is to be able to have at least one of the child components of TrainerPage be a dropdown menu (probably either TeamBuilder or TeamIndex)
