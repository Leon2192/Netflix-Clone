import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NetflixButton, NetflixInput } from "../Styles/styledComponents";
import SignUp from "./SignUp";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="login">
      <img
        src={
          "https://1000marcas.net/wp-content/uploads/2020/01/Logo-Netflix.png"
        }
        className="loginLogo"
        alt="loginLogo"
        onClick={() => navigate("/")}
      />
      <NetflixButton className="sessionButton">Iniciar sesión</NetflixButton>
      <div className="info">
        {!signIn ? (
          <SignUp />
        ) : (
          <>
            <Typography variant="h4" gutterBottom>
              Películas ilimitadas, programas de TV y más.
            </Typography>
            <Typography variant="h5">
              Mira lo que desees, cancelalo en cualquier momento.
            </Typography>
            <Typography variant="h6" gutterBottom>
              ¿Listo para empezar? Ingresá tu email y creá tu cuenta.
            </Typography>
            <div className="inputBlock">
              <NetflixInput placeholder="Email address..." />
              <NetflixButton>Get started</NetflixButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
