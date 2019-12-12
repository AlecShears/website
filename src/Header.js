import React, {Component} from 'react';
import './Header.css';
import Background from './img/banyas.jpg';
import Headshot from './img/Headshot.jpg';

const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: '100vh',
    backgroundSize: 'cover'
}

class Header extends Component{
    
    render(){
        return(

            <header className="Header" id = "Home" style={myStyles}>
                <h2>Hello, My Name Is</h2>
                <h1>{this.props.title}</h1>
                <img src={Headshot} alt="Avatar" />
                <p>I am a Gainesville Based Computer Science Student Pursuing a Career in Software Development</p>
              <a  href="https://docs.google.com/document/d/1oPXyVUTc2seeY-YpFahqDwXsy75FuehEYPRVL5h5u3A/edit?usp=sharing" target="_blank">{this.props.button}</a>
            </header>



        );


    }




};

export default Header;