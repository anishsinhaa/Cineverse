import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./Home.css"
import MovieListCards from "../MovieListCards/MovieListCards";

const Home = () => {
  console.log("Home rendered");
  const [currentMovieList, setCurrentMovieList] = useState([]);
  const getCurrentMovieList = async () => {
    let res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=e86e23bf600c338fb9b5f0c96815851d&language=en-US&page=1"
    );
    const data = await res.json();
    setCurrentMovieList(data.results);
  };
  useEffect(() => {
    getCurrentMovieList();
  }, []);
  return (
    <div>
        <h2 className="carousel-title">IN CINEMAS NOW </h2>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={2}
          infiniteLoop={true}
          showStatus={false}
        >
          {currentMovieList.map(movie => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
                <div className="poster-image">
                <img alt="poster"
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />
              </div>
              <div className="poster-overlay">
                <div className="poster-title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="poster-release">
                  {movie ? movie.release_date : ""}
                  <span className="poster-rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" style={{color:"yellow"}} />{" "}
                  </span>
                </div>
                <div className="poster-description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieListCards/>
      </div>
    </div>
  );
};

export default Home;
