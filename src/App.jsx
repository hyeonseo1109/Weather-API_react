import useFetch from './fetch';
import './App.css'
import { date } from './date';
import styled from "styled-components"
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle `
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ul {
    display: flex;
    flex-direction: row;
    font-size: 15px;
    
    }
  }
`;

const WeatherDiv = styled.div `
  border: 1px solid gray;
  margin: 10px;
  padding: 10px;
  min-width: 140px;
  background-color: #2f2f2f;
  border-radius: 20px;
  color: white;

`;


const Hr = styled.hr `
  background-color: #5c68a4;
  border: none;
  height: 2px;
  margin: 0 10px 5px 10px;
`;

const WeatherUl = styled.ul `
  display: flex;
  flex-direction: column;
`;

const DivInUl = styled.div `
  display: flex;
  flex-direction: row;
`

const H = styled.h2`
  font-size: 30px;
  margin: 0;
`


function Content({ firstDate, imgUrl }) {
  return (
    <>
      <WeatherDiv>
        {firstDate.dt_txt.split(" ")[1].slice(0, 5)} <Hr/>
        <div>
          온도: {firstDate.main.temp}도 <br/>
          체감온도: {firstDate.main.feels_like}도 <br/>
          습도: {firstDate.main.humidity}% <br/>
          날씨: {firstDate.weather[0].description} <br/>
          <img src={imgUrl}/>
        </div>
      </WeatherDiv>
    </>
  )
}


function App() {
  const { firstDate, imgUrl } = useFetch();
  return (
    <>
        <GlobalStyle />
        <WeatherUl>
          <H>{date}</H>
          <DivInUl>
            {firstDate.map( (el, i) => (
              <Content key={el.id} firstDate={el} imgUrl={imgUrl[i]}/>
            ))}
          </DivInUl>
          <Hr/>
        </WeatherUl>


    </>
  )
}

export default App;
