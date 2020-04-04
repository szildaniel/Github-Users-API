import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAsync } from "react-async-hook";


const fetchGithubRepos = async url => (await fetch(`${url}`)).json();

const Repo = props => {
  const githubRepos = useAsync(fetchGithubRepos, [props.url]);

  return typeof props.url === "undefined" ? (
    <h3 className="empty__input">
      That is place for user repositories, please enter username to see user
      repos.
    </h3>
  ) : (
    <div>
      <h2>Repositories</h2>
      {githubRepos.loading && <div>Loading</div>}
      {githubRepos.error && <div>Error: {githubRepos.error.message}</div>}
      {githubRepos.result &&
        githubRepos.result.map((repo, i) => (
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
