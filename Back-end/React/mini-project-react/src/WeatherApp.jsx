
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from "react"

export default function WeatherApp() {  
const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.56,
        tempMin: 24.44,
        tempMax: 26.11,
        humidity: 78,
        weather: 'Clouds',
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    )
}
