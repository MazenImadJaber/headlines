import { useEffect, useState } from "react";
import { API_KEY } from "../secret";

async function getHeadlines(search) {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}&q=${search}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.articles.map((x) => ({
    title: x.title,
    url: x.url,
  }));
}
export function useNewsArticles(search) {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      try  {
        setHeadlines(await getHeadlines(search));
        setLoading(false);
      } catch( err){
        setError(err);
        setLoading(false);
      }
      
    })();
  }, [search]);

  return { loading, headlines, error };
}
