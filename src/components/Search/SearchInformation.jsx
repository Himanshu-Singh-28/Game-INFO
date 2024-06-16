import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import "../Information/informationpage.css";
import { IconButton, Rating } from "@mui/material";
import Chip from "@mui/material/Chip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Video from "../Information/video";
import SystemRequirements from "../Information/SystemRequirements";
import CIcon from "@coreui/icons-react";
import { cibWindows, cibLinux, cibApple } from "@coreui/icons";
import axios from "axios";
import { RapidHeaders, UserContext } from "../../main";
import toast from "react-hot-toast";
import Loading from "../Information/Loading";
import Error from "../Error/Error";

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

const SearchInformation = (props) => {
  const [gamedetail, setGamedetail] = useState();
  const [loading, setLoading] = useState(true);
  const { isAuth, setIsAuth, user, setUser } = useContext(UserContext);
  const [isError, setIsError] = useState(false);

  const a = Math.floor(Math.random() * 2);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    outoplaySpeed: 2000,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  if (!isAuth) {
    toast.error("Login First");
    return <Navigate to={"/"} />;
  }

  //API useCallback

  useEffect(() => {
        axios
          .get(
            `https://steam-api7.p.rapidapi.com/appDetails/${props.appid}`,
            {
              headers: RapidHeaders[a],
            }
          )
          .then((res) => {
            setGamedetail(res.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            setIsError(true);
          });
  }, []);

  if (isError) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div style={{ backgroundColor: "rgb(26, 26, 75)" }}>
      <div className="info-container">
        <div className="info-img-container">
          <img
            src={gamedetail.header_image}
            width="100%"
            height="100%"
          />
        </div>
        <div className="info-detail-container">
          <h1>{gamedetail.name}</h1>
          <div className="info-rating">
            <div style={{ display: "flex", gap: "5px" }}>
              <Rating
                value={4}
                readOnly
                precision={0.5}
                sx={{ color: "white", background: "green" }}
              />
              <label>
                {"( "+"4234"+" )"}
              </label>
            </div>
            <div className="date">
              Publicer :-
              {" " + gamedetail.publishers}
            </div>
            <div className="date">
              <label>
                Released :-
                {" " + gamedetail.release_date.coming_soon
                  ? gamedetail.release_date.date
                  : "Coming Soon"}
              </label>
            </div>
            <div className="date">
              Required Age:-
              {" " + gamedetail.required_age}
            </div>
            <div style={{ display: "flex" }}>
              Tags:
              {gamedetail.categories.slice(0, 4).map((tag, i) => {
                return (
                  <div style={{ margin: "1px" }} key={i}>
                    <Chip label={tag.description} color="primary" />
                  </div>
                );
              })}
            </div>
            <div style={{ display: "flex" }}>
              Genres:
              {gamedetail.genres.slice(0, 4).map((tag, i) => {
                return (
                  <div style={{ margin: "1px" }} key={i} >
                    <Chip label={tag.description} color="primary" />
                  </div>
                );
              })}
            </div>
            <div className="date">
              Platgorms :-
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto auto",
                  gap: "4px",
                  backgroundColor: "white",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              >
                <div style={{ marginTop: "2px" }}>
                  {gamedetail.platforms.windows && (
                    <CIcon
                      icon={cibWindows}
                      size="sm"
                      style={{ "--ci-primary-color": "red" }}
                    />
                  )}
                </div>
                <div style={{ marginTop: "2px" }}>
                  {gamedetail.platforms.mac && (
                    <CIcon icon={cibApple} size="sm" />
                  )}
                </div>
                <div style={{ marginTop: "2px" }}>
                  {gamedetail.platforms.linux && (
                    <CIcon icon={cibLinux} size="sm" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="previews" style={{ margin: "20px" }}>
        Previews :-
      </div>
      <Video video={gamedetail.movies} />
      <div
        style={{
          color: "wheat",
          display: "flex",
          flexDirection: "column",
          margin: "10px",
        }}
      >
        <div style={{ fontFamily: "Bitter", margin: "10px", fontSize: "25px" }}>
          ScreenShots:-
        </div>
        <div style={{ margin: "20px" }}>
          <Slider {...settings}>
            {gamedetail.screenshots.map((img, i) => {
              return (
                <div key={i}>
                  <img
                    src={img.path_full}
                    style={{ width: "100%", height: "300px" }}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div style={{ color: "white", margin: "10px" }}>
        <div className="previews">About The Game :-</div>
        <div
          style={{ margin: "10px" }}
          dangerouslySetInnerHTML={{ __html: gamedetail.about_the_game }}
        ></div>
      </div>
      <div className="previews" style={{ margin: "20px" }}>
        System Requirements :-{" "}
      </div>
      <SystemRequirements
        window={gamedetail.platforms.windows}
        mac={gamedetail.platforms.mac}
        lunix={gamedetail.platforms.linux}
        requirements={[
          gamedetail.pc_requirements,
          gamedetail.mac_requirements,
          gamedetail.linux_requirements,
        ]}
      />
    </div>
  );
};

export default SearchInformation;
