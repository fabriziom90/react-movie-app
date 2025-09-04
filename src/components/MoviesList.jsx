import MovieCard from "./MovieCard";

const MoviesList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => {
        const { id } = movie;
        return <MovieCard movie={movie} key={`movie-${id}`} />;
      })}
    </>
  );
};

export default MoviesList;
