import React, {useState, useEffect} from 'react';
import { usePosition } from 'use-position';
import moment from 'moment';
import './App.css';
import ForecastForOneDay from './forecast/Forecast.js';
import WindDeg from './wind/WindDeg.js';
import WindSpeed from './wind/WindSpeed.js';

export default function App() {

  const APIKEY = '1dc4680ad0100d4316c18e685c7d2c13'
  const {latitude, longitude} = usePosition(false)
  const [weather, setWeather] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [sunData, setSunData] = useState({})
  const [city, setCity] = useState("")
  const [ country, setCountry] = useState("")
  const date = moment().format('ddd')
  const displayDate = moment().format('Do MMMM')
  const [detail, setDetail] = useState(false)
  const [forecast, setForecast] = useState({})
  const [forecastDetail, setForecastDetail] = useState(false)
  const [error, setError] = useState("")

  const getSpecificWeather = (e) => {
    e.preventDefault()
    const url = new URL(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKEY}&units=metric`);
      const handleErrors = (response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      };
    fetch(url)
      .then(handleErrors)
      .then(res => res.json())
      .then(data => setWeather({
        country: data.sys.country,
        city: data.name,
        temp: data.main.temp.toFixed(0),
        humidity: data.main.humidity,
        weather: data.weather[0].main,
        desc: data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1),
        icon: <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="icon"/>,
        lon: data.coord.lon,
        lat: data.coord.lat,
        windDeg: data.wind.deg,
        windSpeed: data.wind.speed,
        }, setError("")))
      .catch(error => setError("Please try to do it again, something went wrong.") );
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${APIKEY}&units=metric`)
      .then(res => res.json())
      .then(data => setForecast(data));
    setDetail(false);
    setForecastDetail(false);
    setIsLoaded(true);
    console.log('spec fetching');
  };

  useEffect(() => {
    const getWeather = () => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}&units=metric`)
        .then(res => res.json())
        .then(data => setWeather({
          country: data.sys.country,
          city: data.name,
          temp: data.main.temp.toFixed(0),
          humidity: data.main.humidity,
          weather: data.weather[0].main,
          desc: data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1),
          icon: <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="icon"/>,
          lon: data.coord.lon,
          lat: data.coord.lat,
          windDeg: data.wind.deg,
          windSpeed: data.wind.speed
          },
        ));
        console.log('fetching');
      };
    const getForecast = () => {
      fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${APIKEY}&units=metric`)
        .then(res => res.json())
        .then(data => setForecast(data));
    };
    if (latitude && longitude) {
      getWeather();
      getForecast();
      setIsLoaded(true);
    }
  }, [latitude, longitude]);

  const getSunData = () => {
    fetch(`https://api.sunrise-sunset.org/json?lat=${weather.lat}&lng=${weather.lon}`)
      .then(res => res.json())
      .then(data => setSunData({
        sunrise: data.results.sunrise,
        sunset: data.results.sunset
      },
    ))
  };

  const getButtonColor = (value) => {
    if (value === 'Clear') {
      return '#0077e6';
    }
    else if (value === 'Clouds' || value === 'Mist' || value === 'Smoke' || value === 'Snow' || value === 'Haze' || value === 'Dust' || value === 'Fog' || value === 'Sand' || value === 'Ash' || value === 'Squall' || value === 'Tornado') {
      return '#808080';
    }
    else if (value === 'Rain' || value === 'Thunderstorm' || value === 'Drizzle') {
      return '#264d73';
    }
    else {
      return 'white';
    }
  }

  const getMainColor = (value) => {
    if (value === 'Clear') {
      return 'linear-gradient(#0077e6, #3399ff)';
    }
    else if (value === 'Clouds' || value === 'Mist' || value === 'Smoke' || value === 'Snow' || value === 'Haze' || value === 'Dust' || value === 'Fog' || value === 'Sand' || value === 'Ash' || value === 'Squall' || value === 'Tornado') {
      return 'linear-gradient(#808080, #a6a6a6)';
    }
    else if (value === 'Rain' || value === 'Thunderstorm' || value === 'Drizzle') {
      return 'linear-gradient(#264d73, #336699)';
    }
    else {
      return 'white';
    }
  };

  const getDetailColor = (value) => {
    if (value === 'Clear') {
      return 'linear-gradient(#3399ff, #66b5ff)';
    }
    else if (value === 'Clouds' || value === 'Mist' || value === 'Smoke' || value === 'Snow' || value === 'Haze' || value === 'Dust' || value === 'Fog' || value === 'Sand' || value === 'Ash' || value === 'Squall' || value === 'Tornado') {
      return 'linear-gradient(#a6a6a6, #b3b3b3)';
    }
    else if (value === 'Rain' || value === 'Thunderstorm' || value === 'Drizzle') {
      return 'linear-gradient(#336699, #4080bf)';
    }
    else {
      return 'white';
    }
  };

  const getForecastColor = (value) => {
    if (value === 'Clear') {
      return 'linear-gradient(#66b5ff, #b3daff)';
    }
    else if (value === 'Clouds' || value === 'Mist' || value === 'Smoke' || value === 'Snow' || value === 'Haze' || value === 'Dust' || value === 'Fog' || value === 'Sand' || value === 'Ash' || value === 'Squall' || value === 'Tornado') {
      return 'linear-gradient(#b3b3b3, #cccccc)';
    }
    else if (value === 'Rain' || value === 'Thunderstorm' || value === 'Drizzle') {
      return 'linear-gradient(#4080bf, #6699cc)';
    }
    else {
      return 'white';
    }
  };

  const ForecastButton = () => {
    if (forecastDetail === false && error.length > 0) {
      return <button className="forecast-button" style={{'backgroundColor': getButtonColor(weather.weather)}} disabled>Show forecast</button>
    }
    else if (forecastDetail === false && error.length === 0) {
      return <button className="forecast-button" onClick={() => setForecastDetail(true)} style={{'backgroundColor': getButtonColor(weather.weather)}}>Show forecast</button>
    }
    else if (forecastDetail === true && error.length > 0) {
      return <button className="forecast-button" style={{'backgroundColor': getButtonColor(weather.weather)}} disabled>Hide forecast</button>
    }
    else if (forecastDetail === true && error.length === 0) {
      return <button className="forecast-button" onClick={() => setForecastDetail(false)} style={{'backgroundColor': getButtonColor(weather.weather)}}>Hide forecast</button>
    }
    else {
      console.log("Hit the button, dude!")
    }
  };

  const DetailButton = () => {
    if (detail === false && error.length === 0) {
      return <button className="detail-button" onClick={() => {getSunData(); setDetail(true)}} style={{'backgroundColor': getButtonColor(weather.weather)}}>Show details</button>
    }
    else if (detail === false && error.length > 0) {
      return <button className="detail-button" style={{'backgroundColor': getButtonColor(weather.weather)}} disabled>Show details</button>
    }
    else if (detail === true && error.length === 0) {
      return <button className="detail-button" onClick={() => setDetail(false)} style={{'backgroundColor': getButtonColor(weather.weather)}}>Hide details</button>
    }
    else if (detail === true && error.length > 0) {
      return <button className="detail-button" style={{'backgroundColor': getButtonColor(weather.weather)}} disabled>Hide details</button>
    }
    else {
      console.log("Hit the button, dude!")
    }
  };

  return(
    <div className="container">
      {isLoaded ? (
        <div className="content">
          <div className="first-content" style={{'backgroundImage': getMainColor(weather.weather)}}>
            <form className="form" onSubmit={getSpecificWeather}>
              <input className="input" type="text" pattern="[A-Za-z\s]{1,30}" autoComplete="off" placeholder="City" value={city} onChange={e => setCity(e.target.value)} required/>
              <input className="input" type="text" placeholder="Country Code (e.g. uk)" pattern="[A-Za-z\s]{1,30}" autoComplete="off" value={country} onChange={e => setCountry(e.target.value)} required/>
              <button className="button" type="submit" style={{'backgroundColor': getButtonColor(weather.weather)}}>Go!</button>
              <button className="button" title="Go back to your location!" onClick={() => window.location.reload()} style={{'backgroundColor': getButtonColor(weather.weather)}}><img className="home-button" src={require('./img/home.png')} alt="home button"/></button>
            </form>
            <p>{weather.city}, {weather.country}</p>
            <p>{date} {displayDate}</p>
            <p>{weather.temp}˚C</p>
            <p>{weather.desc}</p>
            <p className="w-icon">{weather.icon}</p>
            <DetailButton/>
            <ForecastButton/>
          </div>
          {error.length > 0 ? (
            <h2>{error}</h2>
          ) : (
            null
          )}
          {detail ? (
            <div className="details" style={{'backgroundImage': getDetailColor(weather.weather)}}>
              <div className="detail">
                <p>Humidity: {weather.humidity}%</p>
                <p>Wind: <WindDeg weather={weather}/>, <WindSpeed weather={weather}/></p>
              </div>
              <div className="detail">
                <p>Sunrise: {sunData.sunrise}</p>
                <p>Sunset: {sunData.sunset}</p>
              </div>
            </div>
          ) : (
            null
          )}
          {forecastDetail ? (
            <div className="forecast">
              <ForecastForOneDay forecast={forecast} weather={weather} getForecastColor={getForecastColor}/>
            </div>
          ) : (
            null
          )}
        </div>
      ) : (
        <div className="loading-page">
          <img className="img" src={require('./img/clouds.png')} alt="clouds img"/>
          <div className="page1">L</div>
          <div className="page2">O</div>
          <div className="page3">A</div>
          <div className="page4">D</div>
          <div className="page5">I</div>
          <div className="page6">N</div>
          <div className="page7">G</div>
        </div>
      )}
    </div>
  )
}
