import React, {useState, useEffect} from "react";
import RepoList from './RepoList';

import { useAsync } from 'react-async-hook';
import useConstant from "use-constant";
import AwesomeDebouncePromise  from 'awesome-debounce-promise';

import randomInt from '../helper';

const fetchGithubRepos = async url => (await fetch(`${url}`)).json();
  
function useRandomUserRepos(url, options) {
 
    const [reducedRepos, setReducedRepos] = useState();
    const debouncedFetchGithubUser = useConstant( () => 
      AwesomeDebouncePromise(fetchGithubRepos, 300)
    );

    const allRepos = useAsync(
      async () => {
        if(!url){
          return [];
        }
        else {
          return debouncedFetchGithubUser(url);
        }
      },
      [url]
    );

  useEffect( () => {
    const reduceAllRepos = arr => {
     const fourRepos = [];
      if(arr && arr.length > 3){
        const arrLength = arr.length;

        for(let i=0; i<=3; i++){
          const randomIndex = randomInt(0, arrLength);
          fourRepos.push(arr[randomIndex]);
        }
      };
      setReducedRepos(fourRepos);
    }; 
    reduceAllRepos(allRepos.result);

  }, [allRepos.result])
   
  return { allRepos, reducedRepos };
};

const Repo = props => {
const [url, setUrl] = useState(props.url);
const githubRepos = useRandomUserRepos(url, {})
const {loading, error, result} = githubRepos.allRepos;


  return  (
    <div>
      <h2>Repositories</h2>
      {loading && <div>Loading</div>}
      {error && <div>Error: {error.message}</div>}
      {result && (<RepoList theme={props.theme} repos={githubRepos.reducedRepos}/>)
       }
    </div>
  );
};

export default Repo;
