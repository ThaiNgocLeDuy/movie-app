import React from "react";
import PropTypes from "prop-types";

SubcribeMovie.propTypes = {
    myFav: PropTypes.array,
};

SubcribeMovie.defaultProps = {
    myFav: [],
};

function SubcribeMovie(props) {
  const { myFav } = props;
  return (
    <>
      {myFav.map((fav) => (
        <div className="card_sub">
          <img className="my_fav_poster" src={fav.Poster} alt="movie" />
          <p className="card_sub_name">{fav.Title}</p>
          <div className="card_sub_remove">❌</div>
        </div>
      ))}
    </>
  );
}

export default SubcribeMovie;
