import useFetch from './fetch';
import './App.css'

function App() {
  const { eachTime } = useFetch();
    
  
  return (
    <>
      
        <ul>
          {eachTime.map((item, i) => (
            <li key={i}>{item.time} - {item.temp}℃</li>
          ))}
        </ul>


    </>
  )
}

export default App;
