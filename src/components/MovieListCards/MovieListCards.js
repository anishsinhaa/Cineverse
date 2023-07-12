import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./MovieListCards.css";
import { useParams } from "react-router-dom";

const MovieListCards = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  const getData = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "now_playing"
      }?api_key=e86e23bf600c338fb9b5f0c96815851d&language=en-US&page=1`
    );
    const data = await res.json();
    setMovieList(data.results);
  };

  useEffect(() => {
    
    getData();
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [type])

 
  var listTitle = "";
  if (type === "popular") listTitle = "POPULAR";
  else if (type === "upcoming") listTitle = "UPCOMING";
  else if (type === "top_rated") listTitle = "TOP-RATED";
  else listTitle = "Now Playing";

  return (
    <div className="movielist">
      <h2 className="movielist-title">{listTitle}</h2>
      <div className="movielist-cards">
        {movieList.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieListCards;
