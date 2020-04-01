import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Result from './Result';

import { useAsync } from 'react-async-hook';
import useConstant from "use-constant";
import  AwesomeDebouncePromise  from 'awesome-debounce-promise';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faMoon, faMapMarkerAlt, faLink } from '@fortawesome/free-solid-svg-icons';

library.add(faSun, faMoon, faMapMarkerAlt, faLink);

const searchGithubUser = async userName =>
  (await fetch(`https://api.github.com/users/${userName}`)).json();

const useSearchGithubUser = () => {
  // Handle the input text state
  const [inputText, setInputText] = useState("");

  // Debounce the original search async function
  const debouncedSearchGithubUser = useConstant( () =>
    AwesomeDebouncePromise(searchGithubUser, 300)
  );

  const search = useAsync(
    async () => {
      if (inputText.length === 0) {
        return [];
      } else {
        return debouncedSearchGithubUser(inputText);
      }
    },
    // Ensure a new request is made everytime the text changes (even if it's debounced)
    [inputText]
  );

  // Return everything needed for the hook consumer
  return {
    inputText,
    setInputText,
    search
  };
};





function App() {
  const [theme, setTheme] = useState('dark');
  const {inputText, setInputText, search} = useSearchGithubUser();
 

  return (
      <div className= { theme==='dark' ? "App" : "App light" }>
        <Header theme={theme} setTheme={setTheme} />
        <Form  setInputText={setInputText}/>
        <Result 
        useSearchGithubUser={useSearchGithubUser} search={search}
        theme={theme}/>
      </div>
  );
}

export default App;
