import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";

function Movie({ id, coverImg, title, rating }) {
  return (
    <div className={styles.movie}>
      <a href={`/movie_app/movie/${id}`}>
        <img src={coverImg} alt={title} />
      </a>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
