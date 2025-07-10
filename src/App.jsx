import { } from 'react'
import useLocation from './location'
import key from './key';

import './App.css'

function App() {
  const { location, error } = useLocation();

  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&units=metric&lang=kr&appid=${key}`;

  fetch (url)
    .then( (data) => data.json())
    .then ( (data) => console.log(data))
    .catch( (err) => {
      console.error('에러:', err);
    });


  return (
    <>
      {error ? (<p>{error}</p>) : (<p>내위치: {location.lat}, {location.lon} </p>)}
    </>
  )
}

export default App;
