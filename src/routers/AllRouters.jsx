import { Route, Routes } from "react-router-dom";
import {
  MovieDetails,
  MovieList,
  PageNotFound,
  Search,

} from "../Pages";
import ProtectedRoute from "../Components/ProtectedRoute"; 
import Login from "../Components/Login.jsx";
import Register from "../Components/Register.jsx";




const AllRouters = () => {
  return (
    <Routes>
      <Route path="/"element={  <ProtectedRoute  element={ <MovieList title="Your Guide to Great Movies" apiPath="movie/now_playing" />  } /> }/>
      <Route
        path="movies/popular"
        element={
          <ProtectedRoute
            element={
              <MovieList title="Popular Movies" apiPath="movie/popular" />
            }
          />
        }
      />
      <Route
        path="movies/top"
        element={
          <ProtectedRoute
            element={
              <MovieList title="Top Rated Movies" apiPath="movie/top_rated" />
            }
          />
        }
      />
      <Route
        path="movies/upcoming"
        element={
          <ProtectedRoute
            element={
              <MovieList title="Upcoming Movies" apiPath="movie/upcoming" />
            }
          />
        }
      />
      <Route
        path="movie/:id"
        element={<ProtectedRoute element={<MovieDetails />} />}
      />
      <Route
        path="search"
        element={<ProtectedRoute element={<Search apiPath="search/movie" />} />}
      />

      {/* Login & Register Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />

      {/* 404 Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRouters;
