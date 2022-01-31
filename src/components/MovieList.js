import styles from "../css/MovieList.module.css";
import Movie from "../components/Movie";

function MovieList(movies) {
  console.log("MovieList");
  console.log(movies);

  return (
    <div>
      <div className={styles.movies}>
        {movies.map((movie, idx) => (
          <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
