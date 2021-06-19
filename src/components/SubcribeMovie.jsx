import React from "react";
import PropTypes from "prop-types";

SubcribeMovie.propTypes = {
    myFav: PropTypes.array,
    remMyFav: PropTypes.array,
};

SubcribeMovie.defaultProps = {
    myFav: [],
    remMyFav: [],
};

function SubcribeMovie(props) {
  const { myFav, removeFavourite } = props;

  const handleRemove = (movie) => {
    removeFavourite(movie);
  }

  return (
    <>
      {myFav.map((fav) => (
        <div key={fav.Poster} className="card_sub">
          <img className="my_fav_poster" src={fav.Poster} alt="movie" />
          <p className="card_sub_name">{fav.Title}</p>
          <div className="card_sub_remove" onClick={() => handleRemove(fav)}>❌</div>
        </div>
      ))}
    </>
  );
}

export default SubcribeMovie;
