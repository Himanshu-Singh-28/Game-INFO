import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TagCard from "./TagCard";
import "./multiplayer.css";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <IconButton className="next">
        <ArrowForwardIosIcon sx={{ color: "white" }} />
      </IconButton>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <IconButton className="prev">
        <ArrowBackIosIcon sx={{ color: "#fff" }} />
      </IconButton>
    </div>
  );
};
const TagContainer = ({ items, title }) => {
  const [view, setView] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    swipeToSlide: true,
  };
  return (
    <>
      <div className="multiplayer-container">
        <div className="silde-container">
          <div className="flexSB heading">
            <h1>{title}</h1>
            <div className="view" onClick={() => setView(!view)}>
              {view ? "View Less" : "View More"}
            </div>
          </div>
          {view ? (
            <div className="view-all">
              {items.map((item, idx) => {
                return <TagCard key={idx} item={item} />;
              })}
            </div>
          ) : (
            <div className="slider-contents">
              <Slider {...settings}>
                {items.map((item) => {
                  return (
                      <TagCard key={item.id} item={item} />
                  );
                })}
              </Slider>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TagContainer;
