// import React, {useState, useEffect} from 'react';
// import useGeolocation from 'react-hook-geolocation';
//
// export default function App() {
//
//   const geolocation = useGeolocation()
//   const [data, setData] = useState([])
//   const APIKEY = '57e1aae52295a84264376f34ef005ae7'
//   const [available, setAvailable] = useState(false)
//   const [isLoaded, setIsLoaded] = useState(false)
//
//   useEffect(() => {
//     fetchData();
//   }, [])
//
//
//   const fetchData = () => {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geolocation.latitude}&lon=${geolocation.longitude}&appid=${APIKEY}`)
//       .then( res => res.json())
//       .then(data => setData(data)
//       )}
//
//   const handleClick = () => {
//     setAvailable(true)
//   }
//
//   const logData = () => {
//     setIsLoaded(true)
//     console.log(data.weather[0]);
//   }
//
//   const renderComp = () => {
//     if (available === true) {
//       return (<p>City: {data.name}</p>)
//     }
//   }
//
//   const renderDetail = () => {
//     if (available === true && isLoaded === true) {
//       return (<p>Weather: {data.weather[0].main}</p>)
//     }
//   }
//
//   return(
//     <div>
//       <p>Latitude: {geolocation.latitude}</p>
//       <p>Longitude: {geolocation.longitude}</p>
//       <button onClick={() => {fetchData(); handleClick()}}>Where am I?</button>
//       {renderComp()}
//       <button onClick={() => {logData()}}>Details</button>
//       {renderDetail()}
//     </div>
//   );
// }
// 
// import React from 'react';
// import {useFetch} from './FetchingData';
// import useGeolocation from 'react-hook-geolocation';
//
// export default function App() {
//   const geolocation = useGeolocation()
//   const APIKEY = '57e1aae52295a84264376f34ef005ae7'
//   const [data, loading] = useFetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${geolocation.latitude}&lon=${geolocation.longitude}&appid=${APIKEY}`
//   );
//
//   return (
//     <div>
//       <p>Weather</p>
//       {loading ? (
//         "Loading..."
//       ) : (
//         <div>
//         <p>Latitude: {geolocation.latitude}</p>
//         <p>Longitude: {geolocation.longitude}</p>
//         <p>City: {data.name}</p>
//         </div>
//       )}
//     </div>
//   )
// }
