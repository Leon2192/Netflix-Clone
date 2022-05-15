import { Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import netflixAvatar from "../images/profile.jpg";
import Plans from "../components/Plans";
import { NetflixButton } from "../Styles/styledComponents";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Profile = () => {
  const navigate = useNavigate();

  const signout = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <div className="profileRoot">
      <Header />
      <Typography variant="h3">Edit profile</Typography>

      <div className="profileInfo">
        <img src={netflixAvatar} alt="netflixAvatar" />
        <div className="profileDetails">
          <div className="profilePlans">
            <Typography variant="h6">Email usuario</Typography>
            <Typography variant="h5" gutterBottom className="plansText">
              Plans
            </Typography>
            <Plans cost={7.99}>Netflix Standard</Plans>
            <Plans cost={11.99}>Netflix Basic</Plans>
            <Plans wide="medium" cost={19.99}>
              Netflix Premium
            </Plans>
            <NetflixButton onClick={signout} wide="fullwidth">
              Sign Out
            </NetflixButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
