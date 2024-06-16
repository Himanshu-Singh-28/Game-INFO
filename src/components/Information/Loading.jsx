import { Skeleton } from "@mui/material";
import React from "react";
import "./informationpage.css";

const Loading = () => {
  return (
    <div style={{ backgroundColor: "rgb(26, 26, 75)", height: "90vh",overflow:"hidden" }}>
      <div className="info-container">
        <div className="info-img-container">
          <Skeleton
            variant="rectangular"
            width={"450px"}
            height={"300px"}
            sx={{marginLeft:"30px",borderRadius:"10px"}}
          />
        </div>
        <div className="info-detail-container">
          <Skeleton variant="text" height={"100px"} width={"500px"} />
          <Skeleton variant="text" height={"50px"} width={"500px"} />
          <Skeleton variant="text" height={"50px"} width={"500px"} />
          <Skeleton variant="text" height={"50px"} width={"500px"} />
          <Skeleton variant="text" height={"50px"} width={"500px"} />
        </div>
      </div>
      <div className="previews" style={{ margin: "20px" }}>
        <Skeleton
          variant="text"
          height={"40px"}
          width={"200px"}
          sx={{ marginLeft: "30px" }}
        />
      </div>
      <Skeleton
        variant="rectangular"
        width={"90%"}
        height={"120px"}
        sx={{ marginLeft: "50px",borderRadius:"10px" }}
      />
    </div>
  );
};

export default Loading;
