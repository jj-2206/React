import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { API_KEY } from "../../common/apis/MovieApiKey";

const Home = () => {
  useEffect(() => {
    const movieText = "Harry";
    const page = 1;
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${API_KEY}&s=${movieText}&type=movie&page=${page}`)
        .catch((err) => {
          console.log("Err :", err);
        });
      console.log(response);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
