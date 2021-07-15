// CSS
import 'bulma/css/bulma.min.css';
import "../css/Weather.css";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
const API_KEY =
    process.env.REACT_APP_API_KEY;



const Weather = (props) => {
    const { setTemp, setTempMax, setTempMin, setHumidity, setCity, setDescription, setIcon } = props;
    const [zipcode, setZipcode] = useState('')
    const [redirect, setRedirect] =
        useState(false);

    const handleChange = (event) => {
        setZipcode(event.target.value)
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${API_KEY}`
        axios.get(url)
            .then(res => {

                let kelvinTemp = res.data.main.temp
                setTemp(parseInt(((kelvinTemp - 273.15) * 1.8) + 32));

                let kelvinTempMax = res.data.main.temp_max
                setTempMax(parseInt(((kelvinTempMax - 273.15) * 1.8) + 32));

                let kelvinTempMin = res.data.main.temp_min
                setTempMin(parseInt(((kelvinTempMin - 273.15) * 1.8) + 32));

                setHumidity(res.data.main.humidity);
                setCity(res.data.name);
                setDescription(res.data.weather[0].description);
                setIcon(res.data.weather[0].icon);
                setRedirect(true);
            })
    }

    if (redirect)
        return <Redirect to="/results" />;

    return (
        <div className="column is-four-fifths CTA">
            <h2 className="title is-4">Type in your zipcode to get a look at the forcast in your area</h2>
            <form onSubmit={handleSubmit}>
                <div className="formContent ">
                    <input className="zipBox" type="text" onChange={handleChange} value={zipcode} />
                </div>
                <div className="formContent content-btn">
                    <input class="button" type="submit" value="Get my forecast!" />
                </div>
            </form>
        </div>
    )

}

export default Weather