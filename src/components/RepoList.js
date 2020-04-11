import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";

const RepoList = (props) => {
    const parentRef = useRef(null);
    const [noRepos, setNoRepos] = useState(true);

    useEffect( () => {
        const showRepos = () => {
            props.repos.length > 0 ? setNoRepos(false) : setNoRepos(true);
        }
        showRepos();
    }, [props.repos])
    

    useEffect( () => {
      gsap.to(parentRef.current.children,
        
        {autoAlpha: 1, stagger: 0.25})
      },[props.repos])

  return (
    <>
      {noRepos &&  <p className="noRepos">That's place for user repositories search for username and see user repos.</p>}
      {props.repos && (
        <div className="allRepos" ref={parentRef}>
          {props.repos.map((repo, i) => (
            <div
              className={
                props.theme === "dark"
                  ? "repoContainer"
                  : "repoContainer lightTheme"
              }
              key={i}
            >
              <h3>{repo.name}</h3>
              <p>
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
      )}
    </>
  );
};


export default RepoList;