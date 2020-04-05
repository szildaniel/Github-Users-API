import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAsync } from "react-async-hook";
import randomInt from '../helper';


const fetchGithubRepos = async url => (await fetch(`${url}`)).json();

function useRandomUserRepos(url, options) {
  const [allRepos, setAllRepos] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [reducedRepos, setReducedRepos] = useState();

  useEffect( () => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setAllRepos(json);
        setIsLoading(false);
      } 
      catch (error) {
        setError(error);
     }
    }; fetchData();
  }, [url])

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
    reduceAllRepos(allRepos);
  }, [allRepos])
   

  return { allRepos, error, isLoading, reducedRepos }
}

const Repo = props => {
const githubRepos = useRandomUserRepos(props.url, {})
  
  return typeof githubRepos.allRepos === 'undefined' ? (
    <h3 className="empty__input">
      That is place for user repositories, please enter username to see user
      repos.
    </h3>
  ) : (
    <div>
      <h2>Repositories</h2>
      {githubRepos.isLoading && <div>Loading</div>}
      {githubRepos.error && <div>Error: {githubRepos.error.message}</div>}
      {githubRepos.reducedRepos &&
        githubRepos.reducedRepos.map((repo, i) => (
          <div className={props.theme === "dark"
                ? "repoContainer"
                : "repoContainer lightTheme"}
              key={i}
          >
            <h3>{repo.name}</h3>
            <p>
              {" "}
              language - {repo.language}
              <a
                className="repoLink"
                target="_blank"
                rel="noopener noreferrer"
                disabled={!props.url}
                href={repo.html_url}
              >
                <FontAwesomeIcon
                  color={props.theme === "dark" ? "white" : "black"}
                  icon="link"
                />
              </a>
            </p>
          </div>
        ))}
    </div>
  );
};

export default Repo;
