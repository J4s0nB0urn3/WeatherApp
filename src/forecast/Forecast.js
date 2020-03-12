import React from 'react';
import moment from 'moment';

export default function ForecastForOneDay({forecast, weather, getForecastColor}) {
  const day1 = [];
  const day2 = [];
  const day3 = [];
  const day1Icon = [];
  const day2Icon = [];
  const day3Icon = [];
  const dateDay1 = moment().add(1, 'days').format('YYYY-MM-DD');
  const dateDay2 = moment().add(2, 'days').format('YYYY-MM-DD');
  const dateDay3 = moment().add(3, 'days').format('YYYY-MM-DD');
  const displayNameDay1 = moment().add(1, 'days').format('ddd');
  const displayNameDay2 = moment().add(2, 'days').format('ddd');
  const displayNameDay3 = moment().add(3, 'days').format('ddd');
  const displayDateDay1 = moment().add(1, 'days').format('Do');
  const displayDateDay2 = moment().add(2, 'days').format('Do');
  const displayDateDay3 = moment().add(3, 'days').format('Do');

  for (let i = 0; i < forecast.list.length; i++) {
    if (forecast.list[i].dt_txt.substring(0,10) === dateDay1) {
      day1.push(parseInt(forecast.list[i].main.temp.toFixed(0)))
    }
    else if (forecast.list[i].dt_txt.substring(0,10) === dateDay2) {
      day2.push(parseInt(forecast.list[i].main.temp.toFixed(0)))
    }
    else if (forecast.list[i].dt_txt.substring(0,10) === dateDay3) {
      day3.push(parseInt(forecast.list[i].main.temp.toFixed(0)))
    }
  }

  for (let i = 0; i < forecast.list.length; i++) {
    if (forecast.list[i].dt_txt.substring(0,10) === dateDay1 && forecast.list[i].dt_txt.substring(11,16) === "15:00") {
      day1Icon.push(`http://openweathermap.org/img/wn/${forecast.list[i].weather[0].icon}@2x.png`);
    }
    else if (forecast.list[i].dt_txt.substring(0,10) === dateDay2 && forecast.list[i].dt_txt.substring(11,16) === "15:00") {
      day2Icon.push(`http://openweathermap.org/img/wn/${forecast.list[i].weather[0].icon}@2x.png`);
    }
    else if (forecast.list[i].dt_txt.substring(0,10) === dateDay3 && forecast.list[i].dt_txt.substring(11,16) === "15:00") {
      day3Icon.push(`http://openweathermap.org/img/wn/${forecast.list[i].weather[0].icon}@2x.png`);
    }
  }

  return (
    <div>
      <div className="week" style={{'backgroundImage': getForecastColor(weather.weather)}}>
        <div className="day">
          <p>{displayNameDay1} {displayDateDay1}</p>
          <p>{Math.min(...day1)}˚C / {Math.max(...day1)}˚C</p>
          <img className="w-icon" src={day1Icon[0]} alt="weather icon"/>
        </div>
        <div className="day">
          <p>{displayNameDay2} {displayDateDay2}</p>
          <p>{Math.min(...day2)}˚C / {Math.max(...day2)}˚C</p>
          <img className="w-icon" src={day2Icon[0]} alt="weather icon"/>
        </div>
        <div className="day">
          <p>{displayNameDay3} {displayDateDay3}</p>
          <p>{Math.min(...day3)}˚C / {Math.max(...day3)}˚C</p>
          <img className="w-icon" src={day3Icon[0]} alt="weather icon"/>
        </div>
      </div>
    </div>
  )
}
