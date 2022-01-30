import { useState } from "react";
import styles from "../css/BestMovie.module.css";
import PropTypes from "prop-types";

function BestMovie(movie) {
  let synopsis = movie.synopsis ? movie.synopsis : "";
  synopsis = synopsis.length > 250 ? `${synopsis.slice(0, 250)}...` : synopsis;
  console.log(movie);

  return (
    <div className={styles.bestMovie}>
      <div className={styles.mainMovie}>
        <img src={movie.background_image} alt="main" />
        <div className={styles.mainTitle}>{movie.title}</div>
        <div className={styles.mainSynopsis}>{synopsis}</div>
      </div>
    </div>
  );
}

BestMovie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default BestMovie;
