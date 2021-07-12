import Weather from './components/Weather';
import Results from './components/Results';
import React, { useEffect, useState } from 'react'

import {
    Route,
    Switch,
    Redirect,
} from "react-router-dom";



const App = () => {

    const [temp, setTemp] = useState('');
    const [feelsLike, setFeelsLike] = useState('');
    const [humidity, setHumidity] = useState('');
    const [city, setCity] = useState('');
    const [description, setDescription] = useState('');

    return (
        <section className="appWrapper">
            <h1>Weather Watch</h1>
            <Switch>
                <Route
                    exact path="/"
                    render={(props) => (
                        <Weather
                            {...props}
                            setTemp={
                                setTemp
                            }
                            setFeelsLike={
                                setFeelsLike
                            }
                            setHumidity={
                                setHumidity
                            }
                            setCity={
                                setCity
                            }
                            setDescription={
                                setDescription
                            }
                        />
                    )}
                />
                <Route
                    path="/results"
                    render={(props) => (
                        <Results
                            {...props}
                            temp={
                                temp
                            }
                            feelsLike={
                                feelsLike
                            }
                            humidity={
                                humidity
                            }
                            city={
                                city
                            }
                            description={
                                description
                            }
                        />
                    )}
                />
            </Switch>
        </section>
    )

}

export default App;