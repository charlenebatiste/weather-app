import React, { useEffect, useState } from 'react'
import { Redirect } from "react-router-dom";
import 'bulma/css/bulma.min.css';
import "../css/Results.css";



const Results = (props) => {

    const { temp, tempMax, tempMin, humidity, city, description, icon } = props;
    const [redirect, setRedirect] =
        useState(false);

    if (redirect)
        return <Redirect to="/" />;

    let thisIcon = `http://openweathermap.org/img/w/${icon}.png`

    return (
        <div className="container">
            <div className="column is-four-fifths-mobile is-half-tablet  is-two-fifths-desktop cardWrapper">
                <div className="card weatherCard">
                    <div className="card-header-title">
                        <p class="title is-4">
                            {city}
                        </p>
                        <p className="subtitle is-5">
                            {description}
                        </p>
                    </div>
                    <div className="card-image">
                        <img src={thisIcon} />
                    </div>
                    <div class="content">
                        <h2 class="title is-2">{temp}°</h2>
                    </div>
                    <div className="addtInfo">
                        <div>
                            <p>Humidity: {humidity}%</p>
                        </div>
                        <div className="info__temps">
                            <div>H: {tempMax}°</div>
                            <div>L: {tempMin}°</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="buttonContainer">
                <button className="button goBack"
                    onClick={() => {
                        setRedirect(true)
                    }}
                >
                    Back to Search
                </button>
            </div>
        </div>
    )
}

export default Results