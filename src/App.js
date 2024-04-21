import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((oldCount)=> oldCount + 1);
  }
  const decrement = () => {
    if (count > 0){
      setCount((oldCount)=> oldCount - 1);
    }
    
  }
  return (
    <div className="App">
      <h1>Like counter</h1>
      <p>Overall count: {count}</p>
      <button
        onClick={increment}
      >
        like
      </button>
      <button
        onClick={decrement}
      >
        dislike
      </button>
    </div>
  );
}

export default App;
