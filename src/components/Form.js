import React from 'react';

const Form = props => {

  
  return (
    <form>
        <input 
          type="text" 
          onChange={ e => props.setInputText(e.target.value) } 
          value={props.search}
          placeholder="username" 
          name="input"/>
    </form>
  );
}
export default Form;
