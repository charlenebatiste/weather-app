import React, { useEffect, useState } from 'react'

const Weather = () => {
    // useState definitions here
    let [zipcode, setZipcode] = useState('')

    const handleChange = (event) => {
        setZipcode(event.target.value)
        console.log('Your zip code is ' + zipcode)
    }

    useEffect((event) => {
        // Your fetch call here
    }, [])

    const handleSubmit = (e) => {
        console.log('you want to check this zipcode: ' + zipcode);
        e.preventDefault();
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