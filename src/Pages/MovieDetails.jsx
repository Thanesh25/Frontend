import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Backup from "../assets/pexels-quang-nguyen-vinh-222549-2132180.jpg";
import { convertMinutes } from "../utils/utils";

export const MovieDetails = () => {
  const params = useParams()
  const key = import.meta.env.VITE_API_KEY; 
  const[movie, setMovie] = useState([])
     const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`
     const image = movie.poster_path? `https://image.tmdb.org/t/p/original${movie.poster_path}`: Backup;       

     console.log("URL:", url);

     useEffect(() => {
       async function fetchMovies() {
         try {
           const response = await fetch(url);
           if (!response.ok) {
             throw new Error("Network response was not ok");
           }
           const jsonData = await response.json();
           setMovie(jsonData);
           console.log("Data fetched:", jsonData.results);
         } catch (error) {
           console.error("Error fetching data:", error);
         }
       }
       fetchMovies();
     },[]);
  useEffect(() => {
    document.title=`${movie.title}`
  })
  
  return (
    <main className="container">
      <h5 className="text-danger py-2 border-bottom mb-3">{movie.title}</h5>
      <div className="row">
        <div className="col-md-4">
          <img src={image} className="img-fluid img-thumbnail" />
        </div>
        <div className="col-md-8">
          <h3 className="text-primary">{movie.title}</h3>
          <p className="mt-3 text-black">{movie.overview}</p>
          {movie.genres ? (
            <p className="d-flex gap-3">
              {movie.genres.map((genre, index) => (
                <span key={index} className="badge bg-danger me-2">
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}
          <p className="mt-2">
            <i className="bi bi-star-fill text-warning"></i> {movie.vote_count}{" "}
            | <i className="bi bi-people-fill text-success"></i>{" "}
            {movie.vote_average} reviews
          </p>
          <table className="table table-bordered w-50 mt-2">
            <tbody>
              <tr>
                <th>Runtime</th>
                <td>{convertMinutes(movie.runtime)}</td>
              </tr>
              <tr>
                <th>Budget</th>
                <td>{movie.budget} </td>
              </tr>
              <tr>
                <th>Revenue</th>
                <td>{movie.revenue} </td>
              </tr>
              <tr>
                <th>Released Date</th>
                <td>{movie.release_date} </td>
              </tr>
            </tbody>
          </table>
          <a
            className="btn btn-warning"
            href={`https://www.imdb.com/title/${movie.imdb_id}/`}>
            {" "}
            view in IMDB
          </a>
        </div>
      </div>
    </main>
  );
}


