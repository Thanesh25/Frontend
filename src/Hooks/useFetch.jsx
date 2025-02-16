import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
    const key = import.meta.env.VITE_API_KEY; 
    console.log("valuue",import.meta.env)
  const url = queryTerm
    ? `https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${queryTerm}`
    : `https://api.themoviedb.org/3/${apiPath}?api_key=${key}`;

  console.log("URL:", url);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData.results);
        console.log("Data fetched:", jsonData.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchMovies();
  }, [url]);
    console.log("import:",import.meta.env)

    return { data };
    
};
