import "./App8.css";
import {useState} from "react";

function App8() {
    const now = new Date().toLocaleTimeString('he-IL', {hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit'});
    const [time, setTime] = useState(now);

    function getTime() {
        setTime(new Date().toLocaleTimeString('he-IL', {hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit'}));
        setInterval(getTime, 1000);
    }

    return (
      <div className="container">
        <h1>{time}</h1>
        <button onClick={getTime}>Get Time</button>
      </div>
    );
  }
  
  export default App8;