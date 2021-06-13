import styled from "styled-components";

export const Styled = styled.div`
  .container {
    background-color: white;
    width: 90%;
    margin: 20px auto;
  }

  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 6px;

    & .search-box {
      height: 32px;
      width: 230px;
      border: 2px solid #e0e0e0;
      border-radius: 5px;
    }
  }

  .content {
    & .header {
      margin-top: 20px;
      font-size: 26px;
      font-weight: bold;
    }
  }

  .loading {
    text-align: center;
    font-size: 48px;
    margin: 30% auto;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    margin: auto auto;

    & .grid-card {
      &:hover {
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .grid-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media only screen and (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media only screen and (max-width: 480px) {
    .nav-bar {
      & .logo {
        width: 90%;
      }
      & .search-box {
        width: 180px;
      }
    }

    .grid-container {
      grid-template-columns: 1fr;
    }
  }

  @media only screen and (max-width: 330px) {
    .nav-bar {
      & .logo {
        width: 80%;
      }

      & .search-box {
        width: 120px;
        height: 28px;
      }
    }

    .grid-container {
      grid-template-columns: 1fr;
    }
  }
`;
