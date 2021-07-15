import 'bulma/css/bulma.min.css';
import Weather from './components/Weather';
import Results from './components/Results';
import React, { useEffect, useState } from 'react'



import {
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

// CSS
import "./App.css";



const App = () => {

    const [temp, setTemp] = useState('');
    const [tempMax, setTempMax] = useState('');
    const [tempMin, setTempMin] = useState('');
    const [humidity, setHumidity] = useState('');
    const [city, setCity] = useState('');
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');

    return (
        <section className="appWrapper">
            <h1 className="appHeader title">Weather Watch</h1>
            <Switch>
                <Route
                    exact path="/"
                    render={(props) => (
                        <Weather
                            {...props}
                            setTemp={
                                setTemp
                            }
                            setTempMax={
                                setTempMax
                            }
                            setTempMin={
                                setTempMin
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
                            setIcon={setIcon}
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
                            tempMax={tempMax}
                            tempMin={tempMin}
                            humidity={
                                humidity
                            }
                            city={
                                city
                            }
                            description={
                                description
                            }
                            icon={
                                icon
                            }

                        />
                    )}
                />
            </Switch>
        </section>
    )

}

export default App;