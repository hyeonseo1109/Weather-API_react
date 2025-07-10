import useFetch from './fetch';
import './App.css'
import { date } from './date';
import styled from "styled-components"

const WeatherDiv = styled.div `
  border: 1px solid gray;
  margin: 10px;
  padding: 10px;
`;

const Hr = styled.hr `
  background-color: #a0a0a0;
  border: none;
  height: 2px;
  margin: 0 10px 5px 10px;
`

function Content({ firstDate }) {
  return (
    <>
      <WeatherDiv>
        {firstDate.dt_txt.split(" ")[1].slice(0, 5)} <Hr/>
        온도: {firstDate.main.temp}도 <br/>
        체감온도: {firstDate.main.feels_like}도 <br/>
        습도: {firstDate.main.humidity}% <br/>
        날씨: {firstDate.weather[0].description}
      </WeatherDiv>
    </>
  )
}


function App() {
  const { firstDate } = useFetch();
  return (
    <>
      
        <ul>
          <h2>{date}</h2>
          {firstDate.map( (el) => (
            <Content key={el.id} firstDate={el} />
          ))}
        </ul>


    </>
  )
}

export default App;
