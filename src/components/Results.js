import React, { useEffect, useState } from 'react'
import { Redirect } from "react-router-dom";
import 'bulma/css/bulma.min.css';
import "../css/Results.css";


const Results = (props) => {

    const { temp, tempMax, tempMin, feelsLike, humidity, city, description, icon } = props;
    const [redirect, setRedirect] =
        useState(false);

    if (redirect)
        return <Redirect to="/" />;

    let thisIcon = `http://openweathermap.org/img/w/${icon}.png`

    return (
        <div className="container">
            <div className="column is-four-fifths-mobile is-half-tablet  is-two-fifths-desktop">
                <div className="card">
                    <div className="card-header-title">
                        <p >
                            {city}
                        </p>
                        <p className="subtitle is-6">
                            {description}
                        </p>
                    </div>

                    <div className="card-image">
                        <img src={thisIcon} />
                    </div>
                    <div class="content">
                        <h2 class="title is-2">{temp}°</h2>
                        <p>feels {feelsLike}°</p>
                    </div>
                    <div>
                        <p>Humidity: {humidity}%</p>
                        <p>H: {tempMax}°</p>
                        <p>L: {tempMin}°</p>
                    </div>
                </div>
            </div>



            <button
                onClick={() => {
                    setRedirect(true)
                }}
            >
                Back to Search
            </button>

        </div>
    )
}

export default Results