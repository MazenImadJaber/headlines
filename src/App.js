import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount]=useState(0);
  return (
    <div className="App">
      <h1>Like counter</h1>
      <p>Overall count: {count}</p>
      <button onClick={()=>{
        setCount(count + 1)
      }}>like</button>
      <button onClick={()=>{
        if(count> 0){
          setCount(count -1)
        }
      }}>dislike</button>
    </div>
  );
}

export default App;
