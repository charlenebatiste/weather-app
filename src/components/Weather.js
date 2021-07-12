// CSS
import "../css/Weather.css";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
const API_KEY =
    process.env.REACT_APP_API_KEY;



const Weather = (props) => {
    const { setTemp, setFeelsLike, setHumidity, setCity, setDescription } = props;
    const [zipcode, setZipcode] = useState('')
    const [redirect, setRedirect] =
        useState(false);

    const handleChange = (event) => {
        setZipcode(event.target.value)
    }

    useEffect((event) => {
        // Your fetch call here
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${API_KEY}`
        axios.get(url)
            .then(res => {
                const weatherRes = res.data;
                console.log(weatherRes)

                let kelvinTemp = res.data.main.temp
                setTemp(parseInt(((kelvinTemp - 273.15) * 1.8) + 32));

                let kelvinFeelsLike = res.data.main.feels_like
                setFeelsLike(parseInt(((kelvinFeelsLike - 273.15) * 1.8) + 32));

                setHumidity(res.data.main.humidity);
                setCity(res.data.name);
                setDescription(res.data.weather[0].description);
                setRedirect(true);
            })
    }

    if (redirect)
        return <Redirect to="/results" />;

    return (
        <div>
            <h2>Type in your zipcode to get an look at the forcast in your area</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={zipcode} />
                <input type="submit" value="Get my forecast!" />
            </form>
        </div>
    )

}

export default Weather