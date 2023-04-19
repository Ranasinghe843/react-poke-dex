import React, { useEffect, useState } from 'react';
import '../styles/Team.css';
import { database } from '../database.js';
import { onValue, ref, off } from 'firebase/database';
import { Teamcard } from "./Card";

export default function Team() {

    const [pokemonCards, setPokemonCards] = useState(null)

    useEffect(() => {
        const dataRef = ref(database, '/');
        onValue(dataRef, (snap) => {
            // This is just a complicated iterative process
             //     to read all the data from the database and
            //     print it to the console. Your data reads
            //     will use a similar loop, but probably
            //     not two of them
            const pokecards = [];

            for(let key in snap.val()) {
                console.log(key, ':');
                for(let sub_key in snap.val()[key]) {
                    console.log('   ',sub_key, ':', snap.val()[key][sub_key]);
                }
                console.log('-----------------')
                pokecards.push(<Teamcard url={snap.val()[key]["url"]} keyPoke={key} timestamp={snap.val()[key]["timestamp"]}/>);
            }

            setPokemonCards(pokecards);
        });

        return () => {
            const dataRef = ref(database, '/');
            off(dataRef);
            console.log("Removed listener");
        }
    }, [])

    const Poke = (
        <div className="wrapper">
            { pokemonCards }
        </div>
    )

    return (
        <>
        <hr className="line"></hr>
        <h2 id='title'>My Team:</h2>
        {Poke}
        <hr className="line"></hr>
        </>
  );
}