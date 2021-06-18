import React from "react";
import PropTypes from "prop-types";
import "./Movie.scss";

ListMovie.propTypes = {
  movies: PropTypes.array,
};

ListMovie.defaultProps = {
  movies: [],
};

function ListMovie(props) {
  const { movies, addToFavourite } = props;

  const handleAddToFavourite = (movie) => {
    // console.log(movie);
    addToFavourite(movie);
  }

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.Poster} className="movie_card">
          <div className="info_section">
            <div className="movie_header">
              <img className="locandina" src={movie.Poster} alt={movie.Title} />
              <h1>{movie.Title}</h1>
              <h4>{movie.Year}</h4>
            </div>
          </div>
          <div
            className="blur_back"
            style={{ backgroundImage: `url('${movie.Poster}')` }}
          ></div>
          <div
            className="movie_card_subscribe"
            onClick={() => handleAddToFavourite(movie)}
          >
            ❤ Add to Favourite
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListMovie;
