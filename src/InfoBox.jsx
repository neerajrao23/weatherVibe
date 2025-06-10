import './InfoBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    const INIT_URL = ""
    let COLD_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let HOT_URL = "https://images.unsplash.com/photo-1533324268742-60b233802eef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let RAIN_URL = "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }} style={{border: "1px solid white"}}>
                <CardMedia
                    sx={{ height: 180, width: 300 }}
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 20 ? <SunnyIcon/> : <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Weather: {info.weather}</p>
                    <p>Temperature: {info.temp}&deg;C</p>
                    <p>Humidity: {info.humidity}</p>
                    <p>Feels Like: {info.feelsLike}&deg;C</p>
                    <p>Max Temperature: {info.tempMax}&deg;C</p>
                    <p>Min Temperature: {info.tempMin}&deg;C</p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    );
}