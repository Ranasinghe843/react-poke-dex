import React, { useState, useEffect } from 'react';
import '../styles/Card.css';

export default function Card(props) {

    const [pokemonCard, setPokemonCard] = useState(null)

    // getAPIData gets the data from the pokeapi, returns an array of pokemon
    const getAPIData = async () => {
        /* START OF API CALLING. MODIFY AT YOUR OWN RISK */
        const url = props.pokemon.url; // URL of the API
        const response = await fetch(url); // Get the data from the PokeAPI
        const responseJSON = await response.json(); // Turn the data into a JSON object that we can use

        const types = responseJSON.types.map((item) => <div poke-type="{{item.type.name}}" class="type">Type: {item.type.name}</div>);

        // This should seem familiar
        const pokeCard = (
            <>
            <div id="images">
                <img src={responseJSON.sprites.front_default} alt="front_default"></img>
                <img src={responseJSON.sprites.front_shiny} alt="front_default"></img>
            </div>
            <h4>{props.pokemon.name}</h4>
            <p>Height: {responseJSON.height}</p>
            <p>Weight: {responseJSON.weight}</p>
            <p>Base XP: {responseJSON.base_experience}</p>
            {types}
            <button>Add to my Team</button>
            <p> </p>
            </>
        )

        // TODO: Set pokemonCards to the mapped cards
        setPokemonCard(pokeCard)
    }

    useEffect(() => {
        // get api data
        getAPIData()
    }, [])

  return (
    <div class="card">
      {/* For checkpoint 1: You need to add props.pokemon to this card*/}
      {pokemonCard}
    </div>
  );
}