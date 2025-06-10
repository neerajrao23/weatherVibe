import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "",
        feelsLike: null,
        humidity: null,
        temp: null,
        tempMax: null,
        tempMin: null,
        weather: "",
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/><br />
            <InfoBox info={weatherInfo}/>
        </div>
    );
}