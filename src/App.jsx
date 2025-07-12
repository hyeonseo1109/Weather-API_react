import useFetch from './fetch';
import './App.css'
import { date } from './date';
import styled from "styled-components"
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle `
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }
`;

const WeatherDiv = styled.div `
  border: 1px solid gray;
  margin: 10px;
  padding: 15px;
  min-width: 120px;
  font-size: 15px;
  background-color: #2f2f2f;
  border-radius: 20px;
  color: white;
  box-shadow: 0 0 10px #335480;
  &:hover {
    box-shadow: 0 0 20px #22426c;
    transition: box-shadow 0.3s ease;
  }
`;


const Hr = styled.hr `
  background-color: #5c68a4;
  border: none;
  height: 2px;
  margin: 0 10px 5px 10px;
`;

const Div = styled.div `
  display: flex;
  flex-direction: column;
  margin: 30px;
  justify-content: center;
  align-items: center;
`;

const DivInUl = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const H = styled.h2`
  font-size: 40px;
  margin: 10px;
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
        <Div>
          <H>{date}</H>
          <DivInUl>
            {firstDate.map( (el, i) => (
              <Content key={el.id} firstDate={el} imgUrl={imgUrl[i]}/>
            ))}
          </DivInUl>
        </Div>


    </>
  )
}

export default App;
