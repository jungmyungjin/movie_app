import styles from "../css/MovieList.module.css";
import Movie from "../components/Movie";

function MovieList(movies) {
  console.log("MovieList");
  console.log(movies);

  //   const myMovie = () => {
  //     return (
  //       <div className={styles.movies}>
  //         {movies.map((movie, idx) => (
  // 			idx%0 ?

  //           <Movie
  //             key={movie.id}
  //             id={movie.id}
  //             coverImg={movie.medium_cover_image}
  //             title={movie.title}
  //             rating={movie.rating}
  //           />
  //         ))}
  //       </div>
  //     );
  //   };

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

      {/* {movies.map((movie, idx) => (
        <Movie
          key={movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image}
          title={movie.title}
          rating={movie.rating}
        />
      ))} */}
    </div>
  );
}

export default MovieList;
