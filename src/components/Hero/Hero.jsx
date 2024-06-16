import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import HeroCard from './HeroCard';
import { IconButton } from '@mui/material';

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

const Hero = ({items}) => {
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    outoplaySpeed:2000,
    prevArrow: <SamplePrevArrow/>,
    nextArrow: <SampleNextArrow/>,
    };
  return (
    <div className="homeContainer">
      <Slider {...settings}>
        {items.map((item,i) => {
          return (
            <>
              <HeroCard key={i} item={item} />
            </>
          );
        })}
      </Slider>
    </div>
  );
}

export default Hero