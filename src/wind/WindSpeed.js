export default function WindSpeed({weather}) {
  if (weather.windSpeed >= 0 || weather.windSpeed < 0.5) {
    return "Calm";
  }
  else if (weather.windSpeed >= 0.5 || weather.windSpeed <= 1.5) {
    return "Light air";
  }
  else if (weather.windSpeed >= 1.6 || weather.windSpeed <= 3.3) {
    return "Light breeze";
  }
  else if (weather.windSpeed >= 3.4 || weather.windSpeed <= 5.4) {
    return "Gentle breeze";
  }
  else if (weather.windSpeed >= 5.5 || weather.windSpeed <= 7.9) {
    return "Moderate breeze";
  }
  else if (weather.windSpeed >= 8 || weather.windSpeed <= 10.7) {
    return "Fresh breeze";
  }
  else if (weather.windSpeed >= 10.8 || weather.windSpeed <= 13.8) {
    return "Strong breeze";
  }
  else if (weather.windSpeed >= 13.9 || weather.windSpeed <= 17.1) {
    return "High wind, moderate gale, near gale";
  }
  else if (weather.windSpeed >= 17.2 || weather.windSpeed <= 20.7) {
    return "Gale / fresh gale";
  }
  else if (weather.windSpeed >= 20.8 || weather.windSpeed <= 24.4) {
    return "Strong / severe gale";
  }
  else if (weather.windSpeed >= 24.5 || weather.windSpeed <= 28.4) {
    return "Storm, whole gale";
  }
  else if (weather.windSpeed >= 28.5 || weather.windSpeed <= 32.6) {
    return "Violent storm";
  }
  else if (weather.windSpeed >= 32.7) {
    return "Hurricane force";
  }
  else {
    return "No data";
  }
}
