import { Typography } from "@mui/material";
import React, { useState } from "react";
import { NetflixButton, NetflixInput } from "../Styles/styledComponents";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async (e) => {
    try {
      e.preventDefault();
      await signInWithEmailAndPassword(auth, email, password).then((authUser) =>
        navigate("/home")
      );
    } catch (error) {
      alert(error.message);
    }
  };

  const register = async (e) => {
    try {
      e.preventDefault();
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signUpRoot">
      <Typography variant="h5" align="left">
        Sign In
      </Typography>
      <form className="form">
        <NetflixInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          className="email"
        />
        <NetflixInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className="password"
        />
        <NetflixButton onClick={signIn} type="submit" wide="medium" radius>
          Sign In
        </NetflixButton>
        <Typography variant="subtitle2">
          New to Netflix?
          <span onClick={register} className="signUpLink">
            Sign up now.
          </span>
        </Typography>
      </form>
    </div>
  );
};

export default SignUp;
