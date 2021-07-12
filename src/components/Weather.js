import axios from 'axios';
import React, { useEffect, useState } from 'react'
const API_KEY =
    process.env.REACT_APP_API_KEY;

const Weather = () => {
    let [zipcode, setZipcode] = useState('')

    let [temp, setTemp] = useState('')
    let [feelsLike, setFeelsLike] = useState('')
    let [humidity, setHumidity] = useState('')
    let [city, setCity] = useState('')
    let [description, setDescription] = useState('')

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
                const persons = res.data;
                console.log(persons)

                let kelvinTemp = res.data.main.temp
                setTemp(parseInt(((kelvinTemp - 273.15) * 1.8) + 32));

                let kelvinFeelsLike = res.data.main.feels_like
                setFeelsLike(parseInt(((kelvinFeelsLike - 273.15) * 1.8) + 32));
                setHumidity(res.data.main.humidity);
                setCity(res.data.name);
                setDescription(res.data.weather[0].description)
            })
    }

    return (
        <div>
            <h2>Type in your zipcode to get an look at the forcast in your area</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    The temperature is {temp} degrees but it feels like {feelsLike} degrees.
                </p>
                <label>
                    Check this area:
                    <input type="text" onChange={handleChange} value={zipcode} />
                </label>
                <input type="submit" value="Get my forecast!" />
            </form>
        </div>
    )

}

export default Weather