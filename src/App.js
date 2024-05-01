import "./App.css";
import SearchBar from "./components/SearchBar";
import Headline from "./components/headline";
import { useNewsArticles } from "./hooks/useNewsArticles";

function App() {

  const {loading, headlines, error } = useNewsArticles()
  if(loading){
    return <p>loading . . .</p>
  }
return(
  <div className="App">
    <SearchBar/>
   {headlines.map((x)=><Headline {...x}/>
   )}
  </div>

)
}

export default App;
