export default function WindDeg({weather}) {
      if (weather.windDeg >= 350 || weather.windDeg <= 10) {
        return "N";
      }
      else if (weather.windDeg > 10 || weather.windDeg < 40) {
        return "N / NE";
      }
      else if (weather.windDeg >= 40 || weather.windDeg <= 50) {
        return "NE";
      }
      else if (weather.windDeg > 50 || weather.windDeg < 80) {
        return "E / NE";
      }
      else if (weather.windDeg >= 80 || weather.windDeg <= 100) {
        return "E";
      }
      else if (weather.windDeg > 100 || weather.windDeg < 130) {
        return "E / SE";
      }
      else if (weather.windDeg >= 130 || weather.windDeg <= 140) {
        return "SE";
      }
      else if (weather.windDeg > 140 || weather.windDeg < 170) {
        return "S / SE";
      }
      else if (weather.windDeg >= 170 || weather.windDeg <= 190) {
        return "S";
      }
      else if (weather.windDeg > 190 || weather.windDeg < 220) {
        return "S / SW";
      }
      else if (weather.windDeg > 220 || weather.windDeg <= 230) {
        return "SW";
      }
      else if (weather.windDeg > 230 || weather.windDeg < 260) {
        return "W / SW";
      }
      else if (weather.windDeg >= 260 || weather.windDeg <= 280) {
        return "W";
      }
      else if (weather.windDeg > 280 || weather.windDeg < 310) {
        return "W / NW";
      }
      else if (weather.windDeg >= 310 || weather.windDeg <= 320) {
        return "NW";
      }
      else if (weather.windDeg > 320 || weather.windDeg < 360) {
        return "NE";
      }
      else {
        return "No data";
      }
}
