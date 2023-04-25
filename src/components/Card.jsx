import React, { useState, useEffect } from 'react';
import '../styles/Card.css';
import { database } from '../database.js';
import { set, remove, ref, onValue } from 'firebase/database';

function Card(props) {

    const [pokemonCard, setPokemonCard] = useState(null)

    // getAPIData gets the data from the pokeapi, returns an array of pokemon
    const getAPIData = async () => {
        /* START OF API CALLING. MODIFY AT YOUR OWN RISK */
        const url = props.url; // URL of the API
        const response = await fetch(url); // Get the data from the PokeAPI
        const responseJSON = await response.json(); // Turn the data into a JSON object that we can use

        const types = responseJSON.types.map((item) => <div className="type">Type: {item.type.name}</div>);

        // This should seem familiar
        const pokeCard = (
            <>
            <div id="images">
                <img src={responseJSON.sprites.front_default} alt="front_default"></img>
                <img src={responseJSON.sprites.front_shiny} alt="front_default"></img>
            </div>
            <h4>{responseJSON.species.name}</h4>
            <p>Height: {responseJSON.height}</p>
            <p>Weight: {responseJSON.weight}</p>
            <p>Base XP: {responseJSON.base_experience}</p>
            {types}
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

  return (<>{pokemonCard}</>);
}

function Teamcard(props) {
  
  const deleteData = () => {
    const dataRef = ref(database, props.keyPoke);
    remove(dataRef)
    .then(() => {
        console.log("Remove was successful");
    })
    .catch((error) => {
        console.log("Remove failed");
        console.log(error);
    });
}
  
  return (
    <div className="Card">
      <Card url={props.url}/>
      <p>Added at:</p>
      <p>{props.timestamp}</p>
      <button onClick={deleteData}>Remove from My Team</button>
      <p></p>
    </div>
  );
}

function Catalogcard(props) {

  let teamSize = 0;

  const createData= () => {
    const dataRef = ref(database, '/');
    onValue(dataRef, (snap) => {
      // This is just a complicated iterative process
       //     to read all the data from the database and
      //     print it to the console. Your data reads
      //     will use a similar loop, but probably
      //     not two of them

      if (snap.val() == null) {
        teamSize = 0
      } else {
        teamSize = Object.keys(snap.val()).length
      }})

      console.log(teamSize)

    if (teamSize < 6) {

      let data = {
        url: props.url,
        timestamp: (new Date()).toISOString(),
      }
      const randNum = Math.round(Math.random() * 1000000)
      const dataRef = ref(database, randNum.toString());
      set(dataRef, data)
      .then(() => {
          console.log("Set was successful");
      })
      .catch((error) => {
          console.log("Set failed");
          console.log(error);
      });

    }
  }

  return (
    <div className="Card">
      <Card url={props.url}/>
      <button onClick={createData}>Add to My Team</button>
      <p></p>
    </div>
  );
}

export default Card;
export { Teamcard, Catalogcard };