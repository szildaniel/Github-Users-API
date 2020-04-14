import React from "react";
import Repo from "./Repo";
import Error from "./Error";
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
              result.length === 0 ? 
              `/Github-Users-API/img/default-user.png` :
              result.avatar_url
              } 
              alt="Avatar" />
            <h2>{
            result.length === 0 ? 
            'Enter username in input' :
            result.name
            }
            </h2>
            <p className="bio">{result.bio}</p>
            <div className="location">
              <span>
                <FontAwesomeIcon icon="map-marker-alt" />
              </span>
              <span className="locationText">
                {
                result.length === 0 ? 
                'Somewhere in wonderfull world' :
                result.location
                }
              </span>
            </div>
          </div>
          <div className="resultRight">
            <Repo theme={props.theme} url={result.repos_url} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Result;
