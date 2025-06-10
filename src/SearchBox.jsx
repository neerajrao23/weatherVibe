import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './SearchBox.css';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_WEATHER_API;

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            let jsonResponse = await response.json();
             
            return {
                city : city,
                temp : jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description,
            };
        } catch (err) {
            console.error(err.message);
            if (err.message.includes("404")) {
                setError("City not found");
            } else {
                setError("Something went wrong. Please try again.");
            }
            throw err;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
        if(error) setError(false);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
       try {
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity('');
            setError(false);
       } catch(err) {
        setError(true);
       } finally {
        setLoading(false);
       }
    };

    return (
        <>
        <div className="searchBox">
            <form onSubmit={handleSubmit}>
                <TextField style={{backgroundColor:"white", borderRadius:"0.5rem"}} id="city" label="City" variant="filled" onChange={handleChange} value={city} required/><br /><br />
                <Button variant="contained" type='submit' disabled={loading}>{loading ? "Loading..." : "Search"}</Button>
                {error && <p style={{color: 'red'}}>Cannot get data of this location </p>}  
            </form>
        </div>
        </>
    );
}