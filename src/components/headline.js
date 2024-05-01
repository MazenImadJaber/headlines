import { useState } from "react";

export default function Headline({title, url}){
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
        <h1 >{title}</h1>
        <a href={url}>link</a>
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
