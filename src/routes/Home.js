import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import BestMovie from "../components/BestMovie";
import Title from "../components/Title";
import MovieList from "../components/MovieList";
import styles from "../css/Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // verson 2.1 : async의 간소화
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=7&sort_by=rating`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.home}>
      {Title()}
      {BestMovie(loading ? "" : movies[0])}

      {loading ? <h1>Loading...</h1> : MovieList(movies)}
    </div>
  );
}

export default Home;
