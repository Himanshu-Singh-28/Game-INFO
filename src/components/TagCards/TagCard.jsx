import { Star } from "@mui/icons-material";
import { CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import { Link } from "react-router-dom";

const TagCard = ({item}) => {
  const data={
    name:item.name,
    rating:item.rating,
    background_image:item.background_image,
    ratings_count:item.ratings_count,
  }
  return (
    <>
      <Link to='/information' state={data} style={{textDecoration:"none"}}>
        <Card
          variant="outlined"
          sx={{ margin: "3px", height: "260px" }}
          className="card"
        >
          <CardMedia
            component="img"
            height="194"
            width={"150"}
            image={item.background_image}
            alt="Paella dish"
          ></CardMedia>
          <div className="card-content">
            <h5>{item.name}</h5>
            <div>
              <div>
                {item.rating}
                <Star fontSize="small" sx={{ color: "gold" }} />
                {`(${item.ratings_count})`}
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </>
  );
};

export default TagCard;
