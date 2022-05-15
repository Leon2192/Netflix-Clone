import { AppBar, Avatar, IconButton, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//import logo from "../images/logo.png";
import "../Styles/Globals.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const hideHeader = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hideHeader);
    return () => window.removeEventListener("scroll", hideHeader);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        color="primary"
        position="sticky"
        className={`${"appbar"} ${show && "transparent"} `}
      >
        <Toolbar className="toolbar">
          <IconButton onClick={() => navigate("/")}>
            <img src={"https://1000marcas.net/wp-content/uploads/2020/01/Logo-Netflix.png"} alt="logo" className="logo" />
          </IconButton>
          <Avatar
            variant="square"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/profile")}
          />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",

      contrastText: "#ffcc00",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default Header;
