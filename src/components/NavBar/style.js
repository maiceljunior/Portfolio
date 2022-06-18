import { Link } from "react-router-dom";
import styled from "styled-components";

export const Aside = styled.aside`
  .iconButton {
    padding: 37px;
    margin-bottom: 10vh;
  }

  .menuIcon {
    font-size: 45px;
    color: black;
    font-weight: bold;
  }
`;

export const Box = styled.div`
  width: 160px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 9px;
  justify-content: space-evenly;
  align-items: center;
  background-color: #e5e5e5;
`;

export const Anchor = styled.a`
  background: #e5e5e5;
`;

export const Img = styled.img`
  max-width: 50px;
  object-fit: cover;
  background: #e5e5e5;

  :hover {
    border: 1px solid transparent;
    border-radius: 20px;
    padding: 4px;
  }
`;

export const LinkStyle = styled(Link)`
  font-size: 16px;
  color: black;
  font-weight: 800;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  text-align: center;
  text-transform: uppercase;
  font-family: "Nunito";
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;

  :focus,
  :hover {
    color: #003140;
  }

  :focus:after,
  :hover:after {
    width: 100%;
    left: 0%;
  }

  :after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #003140;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }
`;
