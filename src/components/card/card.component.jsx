import React from "react";
import { Styled } from "./card.styles";

const { REACT_APP_API_BASE_IMAGE_URL } = process.env;

/* 
    Stateless Component: Card
    Input: movie's info as title, vote_average, poster_path
    Output: Movie Information Card
*/
const Card = ({ movieInfo }) => {
  const { title, vote_average, poster_path } = movieInfo;
  const imgUrl = `${REACT_APP_API_BASE_IMAGE_URL}${poster_path}`;

  /* --------------------------------------------------
  	Rendering Card
    -------------------------------------------------- */
  return (
    <Styled>
      <div className="container">
        <div>
          <img src={imgUrl} alt={title} className="movie-poster" />
        </div>
        <div className="movie-rating">{vote_average}</div>
        <div className="movie-title">{title}</div>
      </div>
    </Styled>
  );
};

export default Card;
