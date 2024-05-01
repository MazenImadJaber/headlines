import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Headline from "./components/headline";
import { useNewsArticles } from "./hooks/useNewsArticles";

function App() {


  const [search, setSearch] =useState("");
  const {loading, headlines, error } = useNewsArticles(search);
  if(loading){
    return <p>loading . . .</p>
  }
return(
  <div className="App">
    <SearchBar onSubmit ={setSearch}/>
    <p>{search}</p>
   {headlines.map((x)=><Headline {...x}/>
   )}
  </div>

)
}

export default App;
