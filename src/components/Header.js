import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = props => {
  return (
    <header>
      <h1><span className="highlight">Github Users</span></h1>
      {props.theme === "dark" ? 
        <FontAwesomeIcon icon="sun" size="2x" color="#dcba31"  onClick={ () => props.setTheme('light') }/>
        :  <FontAwesomeIcon icon="moon" size="2x" color="#1c132d" onClick={ () => props.setTheme('dark') }/>}
    </header>
  );
}
export default Header;
