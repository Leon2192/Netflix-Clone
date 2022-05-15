import { Typography } from "@mui/material";
import React from "react";
import { NetflixButton } from "../Styles/styledComponents";
import { useDispatch } from "react-redux";
import { setPrice } from "../features/PriceSlice";
import { useNavigate } from "react-router-dom";

const Plans = ({ cost, children, wide }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (cost) => {
    dispatch(setPrice(cost))
    navigate("/checkout")
  };

  return (
    <div className="plansRoot">
      <Typography className="standard" variant="h5">
        {children}
      </Typography>
      <NetflixButton
        wide={wide}
        className="plansButton"
        onClick={() => handleClick(cost)}
      >
        Subscribe
      </NetflixButton>
    </div>
  );
};

export default Plans;
