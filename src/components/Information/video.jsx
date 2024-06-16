import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './video.css';

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <IconButton className="next" size='small'>
        <ArrowForwardIosIcon sx={{ color: "white" }} fontSize='small' />
      </IconButton>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <IconButton className="prev" size='small'>
        <ArrowBackIosIcon sx={{ color: "#fff" }}fontSize='small'/>
      </IconButton>
    </div>
  );
};

const Video = ({video}) => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: false,
      outoplaySpeed: 2000,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
    };
    const [url,setUrl]=useState(video[0].webm.max);
    const [play,setPlay]=useState(true);
  return (
    <div>
      <div className='player'>
        <ReactPlayer url={url} controls playing={play} width={"100%"}/>
      </div>
      <div className='slider'>
        <Slider {...settings}>
          {video.map((img, i) => {
            return (
              <div style={{position:"relative"}} key={i}>
                <div className='focus'>
                    {url==img.webm.max?
                    <IconButton onClick={()=>setPlay(false)}>
                      <PauseCircleOutlineIcon sx={{color:"green"}} fontSize='medium'/>
                    </IconButton>
                    :
                    <IconButton onClick={()=>{
                        setPlay(true);
                        setUrl(img.webm.max);
                        }}>
                        <PlayCircleOutlineIcon sx={{color:"red"}} fontSize='medium'/>
                    </IconButton>
                    }
                </div>
                <div
                  onClick={() => {
                    setUrl(img.webm.max);
                  }}
                  
                >
                  <img
                    src={img.thumbnail}
                    style={{ width: "200px", height: "150px" }}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Video