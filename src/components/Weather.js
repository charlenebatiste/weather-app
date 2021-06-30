import axios from 'axios';
import React, { useEffect, useState } from 'react'
const API_KEY =
    process.env.REACT_APP_API_KEY;

const Weather = () => {
    // useState definitions here
    let [zipcode, setZipcode] = useState('')

    const handleChange = (event) => {
        setZipcode(event.target.value)
        // console.log('Your zip code is ' + zipcode)
    }

    useEffect((event) => {
        // Your fetch call here
    }, [])

    const handleSubmit = (e) => {
        // console.log('you want to check this zipcode: ' + zipcode);
        e.preventDefault();
        const data = {
            key: API_KEY,
            zipcode: zipcode,
            base: `api.openweathermap.org/data/2.5/weather?`
        }
        // console.log(data)
        fetch(`${data.base}zip=${data.zipcode}&appid=${data.key}`)
            .then(res => res.json())
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