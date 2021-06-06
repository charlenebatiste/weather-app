import React, { useEffect, useState } from 'react'

const Weather = (props) => {
    // Your useState definitions here
    let [zipcode, setZipcode] = useState('')

    const handleChange = (event) => {
        setZipcode(event.target.value)
        console.log('Your zip code is' + zipcode)
    }

    useEffect((event) => {
        // Your fetch call here
    }, [])

    return (
        <div>
            <form >
                <p>
                    { /* Display weather information here */}
                </p>
                <label>
                    Please enter your zip code for the weather:
        <input type="text" onChange={handleChange} value={zipcode} />
                </label>
                <input type="submit" value="Get my forecast!" />
            </form>
        </div>
    )
}


export default Weather