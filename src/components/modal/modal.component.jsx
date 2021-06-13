import React from "react";
import moment from "moment";
import { Styled } from "./modal.styles";

const { REACT_APP_API_BASE_IMAGE_URL } = process.env;

/* 
    Stateless Component: MovieInfoModal
    Input: movie's info, isShowInfo, handleModalClose
    Output: Movie Information Modal
*/
const MovieInfoModal = ({ movieInfo, isShowInfo, handleModalClose }) => {
  if (!movieInfo) return null;

  const {
    title,
    poster_path,
    release_date,
    overview,
    vote_average,
    vote_count,
  } = movieInfo;
  const imgUrl = `${REACT_APP_API_BASE_IMAGE_URL}${poster_path}`;

  /* --------------------------------------------------
  	On Close modal button's click
   -------------------------------------------------- */
  const onModalClose = () => {
    handleModalClose();
  };

  /* --------------------------------------------------
  	Rendering modal
    -------------------------------------------------- */
  return (
    <Styled isModalOpen={isShowInfo}>
      <div id="movieInfo" className="modal-container">
        <div className="modal-content">
          {/* Modal's header */}
          <div className="modal-header">
            <div className="modal-header__title">{title}</div>
            <div className="modal-header__closeBtn" onClick={onModalClose}>
              <span className="close">X</span>
            </div>
          </div>
          {/* Modal's content */}
          <div className="modal-body">
            {/* Movie's poster */}
            <div>
              <img src={imgUrl} alt={title} className="modal-body__poster" />
            </div>
            {/* Movie's description */}
            <div className="modal-body__desc">
              <p className="desc-date">
                Release date: {moment(release_date).format("MMMM d, YYYY")}
              </p>
              <p className="desc-note">{overview}</p>
              <p>
                <span className="desc-rating">{vote_average}</span> / 10 (
                {vote_count} total votes)
              </p>
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default MovieInfoModal;
