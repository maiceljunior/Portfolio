import styled from "styled-components";

export const Container = styled.div`
  background: #ededed;
  width: 100vw;
  height: 100vh;
`;

export const MainContent = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  * {
    scrollbar-width: auto;
    scrollbar-color: #fff #ffffff;
  }

  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #858486;
    border-radius: 10px;
  }
`;

export const VitrineDiv = styled.div`
  height: 79vh;
  margin-top: -80px;
  display: flex;
  justify-content: space-evenly;
  gap: 1vw;
  width: 80%;
  padding: 10px;
  flex-wrap: wrap;
  overflow-y: auto;
`;

export const CardsProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: myAnim 2s ease 0s 1 normal forwards;

  @keyframes myAnim {
    0% {
      animation-timing-function: ease-in;
      opacity: 1;
      transform: translateY(-45px);
    }

    24% {
      opacity: 1;
    }

    40% {
      animation-timing-function: ease-in;
      transform: translateY(-24px);
    }

    65% {
      animation-timing-function: ease-in;
      transform: translateY(-12px);
    }

    82% {
      animation-timing-function: ease-in;
      transform: translateY(-6px);
    }

    93% {
      animation-timing-function: ease-in;
      transform: translateY(-4px);
    }

    25%,
    55%,
    75%,
    87% {
      animation-timing-function: ease-out;
      transform: translateY(0px);
    }

    100% {
      animation-timing-function: ease-out;
      opacity: 1;
      transform: translateY(0px);
    }
  }

  .card {
    width: 300px;
    height: 340px;
    padding: 2%;
    background: rgb(255, 255, 255);
    border-bottom: 2px solid #515151;
    border-right: 2px solid #515151;
    border-top: 2px solid white;
    border-left: 2px solid white;
    transition-duration: 1s;
    transition-property: border-top, border-left, border-bottom, border-right,
      box-shadow;
  }

  .card:hover {
    border-top: 2px solid #6f6f6f;
    border-left: 2px solid #6f6f6f;
    border-bottom: 2px solid #a1a1a1;
    border-right: 2px solid #a1a1a1;
    box-shadow: rgba(18, 18, 20, 0.4) 5px 5px, rgba(18, 18, 20, 0.3) 10px 10px,
      rgba(18, 18, 20, 0.2) 15px 15px, rgba(18, 18, 20, 0.1) 20px 20px,
      rgba(18, 18, 20, 0.05) 25px 25px;
  }

  .card__content {
    font-size: small;
    text-align: center;
  }

  .card__content-heading {
    font-family: "Nunito";
    color: #121214;
    margin: 23px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .card__content-body img {
    margin-bottom: 40px;
    margin-top: 5px;
    width: 85%;
    height: 140px;
    border: 1px solid beige;
    border-radius: 15px;
  }

  .card__content-footer button {
    background-color: rgb(255, 255, 255);
    color: grey;
    font-weight: 700;
    border-radius: 0.2rem;
    border: 1px solid grey;
    padding: 0.5rem;
    margin: 1rem;
    transition-duration: 1s;
    transition-property: background-color, color, border;
  }

  button:hover {
    color: white;
    background-color: #121214;
    border: 1px solid white;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  }

  .btnRep:hover {
    background-color: #fd377e;
  }
`;
