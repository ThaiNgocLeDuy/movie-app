import "./App.css";
import { useEffect, useState } from "react";
import { API_KEY } from "./constants/MyContants";
import ListMovie from "./components/ListMovie";
import logo from "./logo.png";
import SubcribeMovie from "./components/SubcribeMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("Spider-man");

  const [fav, setFav] = useState([]);

  const [isHover, setIsHover] = useState(false);

  const handleMouseHover = () => {
    setIsHover(toggleHover);
    console.log(isHover);
  };

  const toggleHover = () => {
    const noHover = !isHover;
    setIsHover(noHover);
  };

  const MY_KEY = API_KEY;
  const THE_URL = `http://www.omdbapi.com/?s=${query}&apikey=${MY_KEY}`;

  useEffect(() => {
    getMovie();
  }, [query]);

  const getMovie = async () => {
    const response = await fetch(THE_URL);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(keyword);
    setKeyword("");
  };

  const handleAddToFavourite = (movie) => {
    console.log(movie);
    const newFav = [...fav, movie];
    setFav(newFav);
    console.log(newFav);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="header_logo">
            <img className="logo img-fluid" src={logo} alt="logo" />
          </div>
          <div className="header_form">
            <div className="form">
              <form onSubmit={handleSubmit} className="form__group field">
                <input
                  type="input"
                  className="form__field"
                  placeholder="Enter your movie name"
                  name="name"
                  id="name"
                  required
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <label htmlFor="name" className="form__label">
                  Enter your movie name
                </label>
              </form>
            </div>
          </div>
          <div
            className="header_sub"
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseHover}
          >
            Your Subscribe ❤💛💚🧡
            {/* <div className="card_sbc">
                <SubcribeMovie myFav={fav} />
            </div> */}
            {isHover && (
              <div className="card_sbc">
                <SubcribeMovie myFav={fav} />
              </div>
            )}
          </div>
        </div>
      </div>
      <ListMovie movies={movies} addToFavourite={handleAddToFavourite} />
    </div>
  );
}

export default App;
