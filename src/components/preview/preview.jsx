import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { FadeLoader } from "react-spinners";

const Preview = ({ preview, setPreview, name }) => {
  const [vedio, setVedio] = useState();
  const [isvedio, setIsVedio] = useState(false);
  const [found, setFound] = useState(true);

  useEffect(() => {
    axios
      .get(`https://steam-api7.p.rapidapi.com/autocomplete`, {
        params: {
          query: `${name}`,
          limit: "5",
        },
        headers: {
          "X-RapidAPI-Key":
            "0f4cc9d942mshb36fd39151b0382p10dfb1jsnd2b6ab366892",
          "X-RapidAPI-Host": "steam-api7.p.rapidapi.com",
        },
      })
      .then(({ data }) => {
        axios
          .get(
            `https://steam-api7.p.rapidapi.com/media/videos/${data.results[0].appid}`,
            {
              headers: {
                "X-RapidAPI-Key":
                  "0f4cc9d942mshb36fd39151b0382p10dfb1jsnd2b6ab366892",
                "X-RapidAPI-Host": "steam-api7.p.rapidapi.com",
              },
            }
          )
          .then((res) => {
            setVedio(res.data.videos);
            setIsVedio(true);
          })
          .catch((err) => {
            setIsVedio(false);
            setFound(false);
          });
      })
      .catch((err) => {
        console.log(err);
        setIsVedio(false);
        setFound(false);
      });
  }, []);

  return (
    <Dialog open={preview} onClose={() => setPreview(!preview)}>
      <DialogTitle
        sx={{
          textAlign: "center",
          fontSize: "40px",
          fontFamily:
            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
        }}
      >
        {name}
      </DialogTitle>
      <DialogContent>
        {isvedio ? (
          <ReactPlayer url={vedio[0].mp4} playing controls width={"540px"} />
        ) : found ? (
          <div
            style={{
              backgroundColor: "black",
              width: "540px",
              height: "250px",
              display:"flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FadeLoader color="white" />
          </div>
        ) : (
          <h1 style={{ textAlign: "center" }}>Vedio Not Found</h1>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Preview;
