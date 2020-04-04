import React from "react";
import Repo from "./Repo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Result = props => {
  const { loading, error, result } = props.search;
 
  return (
    <div>
      {loading && <div className="loadingDiv">Loading user data ... </div>}
      {error && <div>Error: {error.message}</div>}
      {result && (
        <div className="resultContainer">
          <div className="resultLeft">
            <img src={
              props.search.result.length === 0 ? 
              `/img/default-user.png` :
              props.search.result.avatar_url
              } 
              alt="Avatar" />
            <h2>{
            props.search.result.length === 0 ? 
            'Enter username in input' :
            props.search.result.name
            }
            </h2>
            <p className="bio">{props.search.result.bio}</p>
            <div className="location">
              <span>
                <FontAwesomeIcon icon="map-marker-alt" />
              </span>
              <span className="locationText">
                {
                props.search.result.length === 0 ? 
                'Somewhere in wonderfull world' :
                props.search.result.location
                }
              </span>
            </div>
          </div>
          <div className="resultRight">
            <Repo theme={props.theme} url={props.search.result.repos_url} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Result;
