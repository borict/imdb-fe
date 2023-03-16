import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, selectMovies, selectMoviesError } from "../store/movies";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const error = useSelector(selectMoviesError);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.title}</h4>
          <img src={movie.image_url} />
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MoviesPage;
