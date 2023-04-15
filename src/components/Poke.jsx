import React, { useState, useEffect } from 'react';
import '../styles/Poke.css';
import Card from "./Card";

export default function Poke() {

    const [pokeNum, setPokeNum] = useState(6)

    const [pokemonCards, setPokemonCards] = useState(null)

    // getAPIData gets the data from the pokeapi, returns an array of pokemon
    const getAPIData = async () => {
        /* START OF API CALLING. MODIFY AT YOUR OWN RISK */
        const url = "https://pokeapi.co/api/v2/pokemon?limit="+ pokeNum.toString() +"&offset=0"; // URL of the API
        const response = await fetch(url); // Get the data from the PokeAPI
        const responseJSON = await response.json(); // Turn the data into a JSON object that we can use

        // This should seem familiar
        const pokecards = responseJSON.results.map((item) => <Card pokemon={item}/>);

        // TODO: Set pokemonCards to the mapped cards
        setPokemonCards(pokecards)
    }

    useEffect(() => {
        // get api data
        getAPIData()
    }, [pokeNum])

    return (
        <>
        <div class="wrapper">
            { pokemonCards }
        </div>
        <br></br>
        <button type="button" onClick={() => setPokeNum(pokeNum + 6)}>Get More Pokemon</button>
        <br></br>
        </>
  );
}