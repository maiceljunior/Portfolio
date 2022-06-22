import styled from "styled-components";

export const Container = styled.div`
  background: #ededed;
  width: 100vw;
  height: 100vh;
`;

export const MainContent = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DivContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50vh;

  .programming {
    width: 400px;
    height: 400px;
    object-fit: cover;
    animation: 2s formInit;
  }

  .container {
    max-width: 650px;
    margin-left: 40px;
    height: 300px;
    font-size: 22px;
    font-weight: 200;
    line-height: 23px;
    animation: 2s aboutAndSkills;
  }

  .terminal_toolbar {
    display: flex;
    height: 30px;
    align-items: center;
    padding: 0 8px;
    box-sizing: border-box;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: linear-gradient(#504b45 0%, #3c3b37 100%);
  }

  .butt {
    display: flex;
    align-items: center;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-right: 5px;
    font-size: 8px;
    height: 12px;
    width: 12px;
    box-sizing: border-box;
    border: none;
    border-radius: 100%;
    background: linear-gradient(#7d7871 0%, #595953 100%);
    text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 1px 0px #41403a, 0px 1px 1px 0px #474642;
  }

  .btn-color {
    background: #ee411a;
  }

  .btn:hover {
    cursor: pointer;
  }

  .btn:focus {
    outline: none;
  }

  .butt--exit {
    background: linear-gradient(#f37458 0%, #de4c12 100%);
  }

  .user {
    color: #d5d0ce;
    margin-left: 6px;
    font-size: 20px;
    line-height: 15px;
  }

  .terminal_body {
    background: #191622;
    height: 300px;
    padding-top: 2px;
    margin-top: -1px;
    padding-bottom: 14px;
    font-size: 12px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .terminal_promt {
    display: flex;
    overflow-y: auto;
    height: 100%;
  }

  .terminal_promt span {
    margin-left: 6px;
    margin-top: 8px;
    margin-right: 6px;
    padding-bottom: 10px;
    font-family: "Nunito";
  }

  .terminal_user {
    color: white;
    font-size: 20px;
    max-width: 600px;
    padding-bottom: 10px;
  }

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

  .terminal_location {
    color: #4878c0;
  }

  .terminal_bling {
    color: #7eba63;
  }

  .terminal_cursor {
    display: block;
    height: 24px;
    width: 5px;
    margin-left: 10px;
    animation: curbl 1200ms linear infinite;
  }

  @keyframes curbl {
    0% {
      background: #ffffff;
    }

    49% {
      background: #ffffff;
    }

    60% {
      background: transparent;
    }

    99% {
      background: transparent;
    }

    100% {
      background: #ffffff;
    }
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

  @keyframes aboutAndSkills {
    from {
      opacity: 0;
      transform: translate3d(0, 100px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const SelectSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectAbout = styled.div`
  display: flex;
  width: 100%;
  height: 9vh;
  justify-content: space-evenly;

  button {
    transform-style: preserve-3d;
    position: relative;
    list-style: none;
    width: 100px;
    height: 32px;
    border: none;
    background: transparent;
    font-family: inherit;
  }

  button:before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: -5px;
    width: 100%;
    height: 10px;
    background: #2a2a2a;
    transform: skewX(-41deg);
  }

  button:after {
    content: "";
    position: absolute;
    top: 5px;
    left: -9px;
    width: 9px;
    height: 100%;
    background: #2a2a2a;
    transform: skewY(-49deg);
  }

  button span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2a2a2a;
    color: #fff;
    font-size: 25px;
    transition: 1.1s ease-out;
  }

  button:hover span {
    z-index: 1000;
    transition: 0.3s;
    color: #fff;
  }

  button:hover span:nth-child(5) {
    transform: translate(40px, -40px);
    opacity: 1;
  }

  button:hover span:nth-child(4) {
    transform: translate(30px, -30px);
    opacity: 0.8;
  }

  button:hover span:nth-child(3) {
    transform: translate(20px, -20px);
    opacity: 0.6;
  }

  button:hover span:nth-child(2) {
    transform: translate(10px, -10px);
    opacity: 0.4;
  }

  button:hover span:nth-child(1) {
    transform: translate(0px, 0px);
    opacity: 0.2;
  }

  button:active span:nth-child(5) {
    transform: translate(20px, -20px);
    opacity: 1;
  }

  button:active span:nth-child(4) {
    transform: translate(15px, -15px);
  }

  button:active span:nth-child(3) {
    transform: translate(10px, -10px);
  }

  button:active span:nth-child(2) {
    transform: translate(5px, -5px);
  }

  button:active span:nth-child(1) {
    transform: translate(0px, 0px);
  }

  button:nth-child(1):hover span {
    background: #569cd6;
  }

  button:nth-child(2):hover span {
    background: #569cd6;
  }

  .about {
    width: 120px;
    animation: 2s formInit;
  }

  .skills {
    width: 150px;
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

export const VitrineSkills = styled.div`
  width: 690px;
  margin-left: 50px;
  height: 330px;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5vw;
  padding: 30px;
  overflow-y: auto;
  animation: 2s aboutAndSkills;

  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
  }

  @keyframes aboutAndSkills {
    from {
      opacity: 0;
      transform: translate3d(0, 100px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const CardSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    margin-top: 5px;
    font-weight: bold;
    font-family: "Nunito";
  }

  span:hover {
    color: blue;
    cursor: crosshair;
  }
`;
