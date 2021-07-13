import React, { useEffect, useState } from 'react'
import { Redirect } from "react-router-dom";
import axios from 'axios';


const Results = (props) => {

    const { temp, feelsLike, humidity, city, description, icon } = props;
    const [redirect, setRedirect] =
        useState(false);

    if (redirect)
        return <Redirect to="/" />;

    let thisIcon = `http://openweathermap.org/img/w/${icon}.png`

    return (
        <>
            <p>
                It is {temp} degrees in {city} but it feels like {feelsLike} degrees.
            </p>
            <p>Humidity: {humidity}%</p>
            <p>Description: {description}</p>
            <img src={thisIcon} />
            <button
                onClick={() => {
                    setRedirect(true)
                }}
            >
                Back to Search
            </button>
        </>
    )
}

export default Results