import styled from "styled-components";

export const Styled = styled.div`
  .container {
    width: 230px;
    height: 350px;
    margin: auto auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: 1px solid #e0e0e0;
    border-radius: 10px;
    box-shadow: 3px 3px 3px #e0e0e0;

    position: relative;

    & .movie-poster {
      width: 230px;
      height: 300px;
      border-radius: 10px 10px 0 0;
    }
  }

  .movie-rating {
    position: absolute;
    top: 20px;
    left: 20px;
    border: 1px solid #000000;
    border-radius: 50px;
    text-align: center;
    font-size: 12px;
    padding: 5px;
    background-color: white;
  }

  .movie-title {
    font-size: 13px;
    text-align: center;
    margin: 10px auto;
    color: #424242;
  }

  @media only screen and (max-width: 330px) {
    .container {
      & .movie-poster {
        width: 228px;
      }
    }
  }
`;
