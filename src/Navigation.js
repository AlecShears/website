import React from 'react';
import './Navigation.css';
import { Component } from 'react';
import ScrollIntoView from 'react-scroll-into-view';


class Navigation extends Component{
  render() {
    const sections = ['Home', 'About', 'Projects', 'Contact'];
    const navLinks = sections.map( (section) => {
        return (
        // <li><a href={'#' + section }>{section}</a></li>
        <li>
          <ScrollIntoView selector={'#' + section }>
           <a href>
             {section}
           </a>
          </ScrollIntoView>
        </li>
        )
    });
    
    return (
      <nav>
        <h2 className="logo">{this.props.logoTitle}</h2>
        
        {navLinks}
        
      </nav>
    
     
    );
  }
}

export default Navigation;
