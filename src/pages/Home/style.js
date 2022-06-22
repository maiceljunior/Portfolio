import styled from "styled-components";

export const Container = styled.div`
  background: #ededed;
  width: 100vw;
  height: 100vh;
`;

export const MainContent = styled.main`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 30px;
    border-radius: 20px;
    margin-top: 0;
    border: none;
    box-shadow: 1px 4px 5px 3px rgba(0, 0, 0, 0.75);
    animation: 2s formInit;
  }

  @keyframes formInit {
    from {
      opacity: 0;
      transform: translate3d(0, -100px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const DivGif = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;

  div {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-right: 30px;
    margin-top: 10px;
    color: white;
  }

  @keyframes formInit {
    from {
      opacity: 0;
      transform: translate3d(0, -100px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  div > h2 {
    font-size: 27px;
    max-width: 400px;
    line-height: 30px;
    font-weight: bold;
    margin-bottom: 3%;
    font-family: "Nunito";
    color: black;
    animation: 2s formInit;
  }

  div > span {
    max-width: 370px;
    font-size: 17px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    margin-top: 3%;
    line-height: 26px;
    text-align: justify;
    color: black;
    text-shadow: 1px 1px 0px rgba(0, 0, 0);
    animation: 2s formInit;
  }

  .typical {
    font-size: 27px;
    font-family: "Nunito";
    font-weight: bold;
    color: black;
    animation: 2s formInit;
  }

  .download-button {
    position: relative;
    border-width: 0;
    color: white;
    font-size: 15px;
    font-weight: 600;
    border-radius: 4px;
    z-index: 1;
  }

  .download-button .docs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 8px;
    border-radius: 8px;
    width: 100%;
    z-index: 1;
    background-color: #242a35;
    border: solid 1px #e8e8e82d;
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  }

  .download-button:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  .download {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    margin: 10px auto;
    z-index: -1;
    border-radius: 4px;
    transform: translateY(0%);
    background-color: #01e056;
    border: solid 1px #01e0572d;
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  }

  .download-button:hover .download {
    transform: translateY(100%);
  }

  .download svg polyline,
  .download svg line {
    animation: docs 1s infinite;
  }

  @keyframes docs {
    0% {
      transform: translateY(0%);
    }

    50% {
      transform: translateY(-15%);
    }

    100% {
      transform: translateY(0%);
    }
  }
`;

export const DivContact = styled.div`
  display: flex;
  align-self: center;
  margin-top: 50px;
  border: none;
`;

export const Contacts = styled.a`
  img {
    width: 60px;
    padding: 15px;
    object-fit: cover;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0);
  }

  img:hover {
    background-color: #003140;
  }
`;
