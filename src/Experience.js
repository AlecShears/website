import React, { Component } from 'react';
import './Experience.css';
import sharkGame from './img/Shark.png';
import postmanGame from './img/PostMan.png';
import turtleTank from './img/Turtle Tank.jpg';



class Experience extends Component{
    render(){
        return(
            <div id = "Projects" className="Experience">
                <h2>Projects</h2>
                <h2>Game Development</h2>
                <h3>Lying Fish</h3>
                <img src={sharkGame} alt="Logo" />
                <p>This game was developed in Unity using scripts written in C#. 
                    Lying Fish is a game where you try to survive attacks from Lion Fish to help you
                    on your quest to save the Shark Prince.</p>
                <a href="https://www.indiedb.com/groups/unity-devs/downloads/lying-fish" target="_blank">Download and Play</a>
                <h3>Post Officalyptic</h3>
                <img src={postmanGame} alt="Logo" />
                <p>This game was developed in Unity using scripts written in C#. 
                  Post Officalyptic is a short game where you play as a mailman in the zombie apocalypse. You are tasked with being the last source of communication in this dark world, will you still to your code and not interfere in their affairs? Or, decide to become a hero! Just don't let the zombies get you first...</p>
                <a href="https://www.indiedb.com/downloads/post-officalyptic#downloadsform" target="_blank">Download and Play</a>
                <h2>Engineering Projects</h2>
                <h3>Self-Caring Turtle Tank</h3>
                <img src={turtleTank} alt="Logo" />
                <p>I worked in a team to construct a Self-Caring Turtle Tank capable of feeding the turtles and refilling their tank. We used
                    Arduino Microcontrollers to run the system, with scripts on timers to refill the tank. We also had sensors that could 
                    detect when the water level was low and refill it. 
                </p>
            </div>
            

        );
    }
}

export default Experience;