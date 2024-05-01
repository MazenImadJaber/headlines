import "./App.css";
import Headline from "./components/headline";
import { useNewsArticles } from "./hooks/useNewsArticles";

function App() {

  const {loading, headlines, error } = useNewsArticles()
  if(loading){
    return <p>loading . . .</p>
  }
return(
  <div>
   {headlines.map((x)=><Headline {...x}/>
   )}
  </div>

)
}

export default App;
