import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // verson 1 : then 사용
  //   useEffect(() => {
  //     fetch(
  //       `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
  //     )
  //       .then((response) => response.json())
  //       .then((json) => setMovies(json));
  //     setLoading(false);
  //   }, []);

  // verson 2 : async 사용
  // then과 같은 기능을 하지만 then보다 보기 좋다고 한다.
  //   const getMovies = async () => {
  //     const response = await fetch(
  //       `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
  //     );
  //     const json = await response.json();
  //     setMovies(json.data.movies);
  //     setLoading(false);
  //   };
  //   useEffect(() => {
  //     getMovies();
  //   }, []);

  // verson 2.1 : async의 간소화
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
