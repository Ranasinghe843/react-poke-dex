import React from 'react';
import '../styles/Intro.css';

export default function Intro() {

    const Header = (

        <div>
            <h1>Pokemon PokeDex Viewer - Intermediate</h1>
            <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' alt='React Logo' id='logo' height='100' width='100'></img>
            <p>Developed as the Final Project for Software Saturdays Spring 2023</p>
        </div>
    )

    const Instructions = (
        <div id="instructions">
            <h3>Instructions</h3>
            <p>
                Scoll Down to Load Pokemon from the Poke API Database where you will be shown facts about each Pokemon.
                You can add upto 6 pokemon to your team which will be stored in a FireBase database and can be retrieved.
                <br></br>
                <br></br>
                Create the Ultimate Pokemon Team!
            </p>
        </div>
    )

    return (
        <>
        {Header}
        {Instructions}
        </>
  );
}