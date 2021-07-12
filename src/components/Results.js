import React, { useEffect, useState } from 'react'
import { Redirect } from "react-router-dom";


const Results = (props) => {

    const { temp, feelsLike, humidity, city, description, goBack } = props;
    const [redirect, setRedirect] =
        useState(false);

    if (redirect)
        return <Redirect to="/" />;

    return (
        <>
            <p>
                It is {temp} degrees in {city} but it feels like {feelsLike} degrees.
            </p>
            <p>Humidity: {humidity}</p>
            <p>Description: {description}</p>
            <button
                onClick={() => {
                    setRedirect(true)
                }}
            >
                Back to Seaarch
            </button>
        </>
    )
}

export default Results