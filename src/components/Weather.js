import axios from 'axios';
import React, { useEffect, useState } from 'react'
const API_KEY =
    process.env.REACT_APP_API_KEY;

const Weather = () => {
    let [zipcode, setZipcode] = useState('')

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
            })
    }

    return (
        <div>
            <h2>Type in your zipcode to get an look at the forcast in your area</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    { /* Display weather information here */}
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