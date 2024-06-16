import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import { IconButton, Rating } from "@mui/material";
import PlayButton from "@mui/icons-material/PlayCircleOutline";
import Preview from "../preview/preview";

const HeroCard = ({ item }) => {
  const [prevew, setPrevew] = useState(false);
  const data = {
    name: item.name,
    rating: item.rating,
    background_image: item.background_image,
    ratings_count: item.ratings_count,
  };

  return (
    <>
      <div>
        <div className="coverImage">
          <img src={item.background_image} alt="Loading" />
        </div>
        <div className="content flex" style={{ height: "100vh" }}>
          <Link
            to="/information"
            state={data}
            style={{ textDecoration: "none", flex: "1" }}
          >
            <div>
              <h2>{item.name}</h2>
              <div
                style={{
                  display: "flex",
                  color: "white",
                  flexDirection: "column",
                }}
              >
                <div>
                  <Rating
                    value={item.rating}
                    readOnly
                    precision={0.5}
                    sx={{ color: "gold", background: "white" }}
                  />
                  <label>
                    {" "}
                    {item.rating}
                    {`(${item.ratings_count})`}
                  </label>
                </div>
                <div>
                  <div style={{ color: "red" }}>PlayTime</div>
                  <div>{item.playtime}</div>
                </div>
              </div>
            </div>
          </Link>
          <div className="palyButton" style={{ flex: "1", zIndex: "100" }}>
            <IconButton
              sx={{ color: "white", textDecoration: "none" }}
              onClick={() => setPrevew(true)}
            >
              <PlayButton sx={{ color: "white", fontSize: "5rem" }} />
              WATCH TRAILER
            </IconButton>
          </div>
        </div>
        {prevew && (
          <Preview prevew={prevew} setPrevew={setPrevew} name={item.name} />
        )}
      </div>
    </>
  );
};

export default HeroCard;
