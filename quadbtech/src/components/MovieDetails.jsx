import React from "react";
import { useLocation } from "react-router-dom";

const MovieDetails = () => {
  const location = useLocation();

  return (
    <div style={movieBox}>
      <div style={movieBanner}>
        <img style={imageStyle} src={location.state.img} alt="Large-Img" />
      </div>
      <h1 style={textHeading}>{location.state.name}</h1>
      <p style={textHeading}>rating : {location.state.rating}</p>
      <p style={textHeading}>
        genre :{" "}
        {location.state.genre.map((e) => {
          return (
            <span style={{ margin: "2px" }} key={e}>
              {e}
            </span>
          );
        })}
      </p>
      <p style={textHeading}>language : {location.state.lang}</p>
      <p style={textSummry}>{location.state.summry}</p>
    </div>
  );
};

// Style
const textHeading = {
  color: "black",
};
const textSummry = {
  color: "black",
  textAlign:"justify"
};

const movieBox = {
  margin: "20px",
};

const movieBanner = {
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imageStyle = {
  height:"40rem",
  borderRadius:"20px"
}

export default MovieDetails;