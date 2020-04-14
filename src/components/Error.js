import React from 'react';


const Error = props => {
    return <div className="errorWrapper">
        <h3>{props.error.message}</h3>
        <div className="errorContainer">
            <img src="/Github-Users-API/img/default-user.png" alt="unknown user"/>
            <p className="errorMsg">User with this name dosen't exist. Please search again.</p>
        </div>
    </div>
}


export default Error;