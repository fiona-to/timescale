import styled from "styled-components";

export const Styled = styled.div`
  .modal-container {
    display: ${(props) => (props.isModalOpen ? "block" : "none")};

    position: fixed;
    z-index: 999;
    padding-top: 180px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.7);
  }

  .modal-content {
    position: relative;
    background-color: white;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 60%;
    box-shadow: 3px 3px 3px grey;

    & .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & .modal-header__title {
        font-size: 18px;
        font-weight: bold;
        word-spacing: 2px;
      }

      & .modal-header__closeBtn {
        width: 20px;
        height: 20px;
        border: 1px solid grey;
        text-align: center;

        & .close {
          cursor: pointer;
        }

        &:hover {
          font-weight: bold;
          border: 2px solid black;
        }
      }
    }

    & .modal-body {
      display: flex;
      margin-top: 14px;

      & .modal-body__poster {
        width: 250px;
        height: 320px;
      }

      & .modal-body__desc {
        margin-left: 20px;

        & > p {
          margin-bottom: 20px;
        }

        & .desc-date {
          font-weight: bold;
        }

        & .desc-rating {
          font-weight: bold;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .modal-container {
        padding-top: 80px;
    }

    .modal-content {
        width: 80%;

      & .modal-body {
        & .modal-body__poster {
          width: 180px;
          height: 230px;
        }
      }
    }
  }

  @media only screen and (max-width: 420px) {
    .modal-container {
        padding-top: 30px;
    }

    .modal-content {
        width: 80%;

      & .modal-body {
        flex-direction: column;

        & .modal-body__desc {
            margin-top: 20px;
            margin-left: 0px;
      }
    }
  }

  @media only screen and (max-width: 330px) {
    .modal-container {
        padding-top: 30px;
    }

    .modal-content {
        width: 90%;

        & .modal-body {
          flex-direction: column;
          
          & .modal-body__poster {
            width: 120px;
            height: 160px;
          }

          & .modal-body__desc {
              margin-top: 20px;
              margin-left: 0px;
        }
      }
  }
`;
