import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Headline from "./components/headline";

function App() {
return(
  <div>
   <Headline title="Bananas" /> 
   <Headline title="Grapes" /> 
  </div>

)
}

export default App;
