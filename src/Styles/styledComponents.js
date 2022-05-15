import styled from "styled-components";
import { InputBase } from "@mui/material";

export const NetflixInput = styled(InputBase)`
  z-index: 30;
  background: #fff;
  padding: 25.5px;
  height: 30px;
  border-radius: 5px;
  border: none;
`;

const handleWidth = (wide) => {
  switch (wide) {
    case "fullwidth":
      return "100%";
    case "medium":
      return "260px";
    default:
      return "160px";
  }
};

export const NetflixButton = styled.button`
  background-color: red;
  cursor: pointer;
  z-index: 15;
  color: #fff;
  border-radius: ${(radius) => (radius ? "5px" : null)};
  text-transform: inherit;
  padding: 15px;
  font-size: 1.1rem;
  border: none;
  outline: none;
  width: ${({ wide }) => handleWidth(wide)};
`;
