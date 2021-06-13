import React, { useEffect, useState } from "react";
import axios from "axios";

import logo from "../images/logo.svg";
import { Styled } from "./App.styles";
import Card from "./card/card.component";
import MovieInfoModal from "./modal/modal.component";

const { REACT_APP_MOVIE_DB_API_KEY, REACT_APP_API_DOMAIN } = process.env;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [chosenMovie, setChosenMovie] = useState(null);
  const [isShowInfo, setIsShowInfo] = useState(false);
  const [filterMovies, setFilterMovies] = useState([]);
  /* --------------------------------------------------
  	Fetch to get movie data asynchronouly
   -------------------------------------------------- */
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          `${REACT_APP_API_DOMAIN}/movie/now_playing?api_key=${REACT_APP_MOVIE_DB_API_KEY}&language=en-US&page=1`
        );
        await setMovies(response.data.results);
        await setFilterMovies(response.data.results);
      } catch (error) {
        console.log("Fetching data occurs error: ", error);
      }
    };
    fetchData();
  }, []);

  /* --------------------------------------------------
  	On search button's text change 
   -------------------------------------------------- */
  const onSearchTextChange = (e) => {
    if (!movies || movies.length === 0) {
      return;
    }
    let criteria = e.target.value.toLowerCase().trim();

    if (criteria === "") {
      setFilterMovies(movies);
    } else {
      let filterResult = [];
      filterResult = movies.filter((movie) => {
        if (movie.title.toLowerCase().includes(criteria)) {
          return movie;
        }
        return null;
      });
      setFilterMovies(filterResult);
    }
  };

  /* --------------------------------------------------
  	On modal closed
   -------------------------------------------------- */
  const handleModalClose = () => {
    setIsShowInfo(false);
  };

  /* --------------------------------------------------
  	While no movie data, display "Loading..."
   -------------------------------------------------- */
  if (!movies || movies.length === 0) {
    return (
      <Styled>
        <div className="loading">Loading....</div>
      </Styled>
    );
  }

  /* --------------------------------------------------
  	Render list of "Now playing" movies
    -------------------------------------------------- */
  return (
    <Styled>
      <div className="container">
        {/* Movie Info Modal, by default it is hidden */}
        <MovieInfoModal
          isShowInfo={isShowInfo}
          movieInfo={chosenMovie}
          handleModalClose={handleModalClose}
        />

        {/* Page's top header */}
        <div className="nav-bar">
          <div>
            <img src={logo} alt="Timescale" className="logo" />
          </div>
          <div>
            <input
              className="search-box"
              type="text"
              id="search"
              placeholder="&#xF002; Search for a movie"
              onChange={onSearchTextChange}
            />
          </div>
        </div>

        {/* Page's content: movies to display as grid */}
        <div className="content">
          <div className="header">Most Recent Movies</div>
          <div className="grid-container">
            {filterMovies &&
              filterMovies.map((movie) => {
                return (
                  <div
                    key={movie.id}
                    className="grid-card"
                    onClick={() => {
                      setChosenMovie(movie);
                      setIsShowInfo(true);
                    }}
                  >
                    <Card movieInfo={movie} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default App;
