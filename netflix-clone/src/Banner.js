import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import requests from "./requests.js";
import styled from "styled-components";

const BannerContentsSt = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
`;

const BannerTitleSt = styled.p`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

const BannerDescSt = styled.p`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 360px;
  height: 80px;
`;

const BannerButtonSt = styled.button`
  cursor: pointer;
  color: #fff;
  background-color: rgba(51, 51, 51, 0.5);
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

const BannerFadeoutSt = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        color: "white",
        objectFit: "contain",
        height: "448px",
      }}
    >
      <BannerContentsSt>
        <BannerTitleSt>
          {movie?.title || movie?.name || movie?.original_name}
        </BannerTitleSt>
        <BannerButtonSt>Play</BannerButtonSt>
        <BannerButtonSt>My List</BannerButtonSt>
        <BannerDescSt>{truncate(movie?.overview, 150)}</BannerDescSt>
      </BannerContentsSt>
      <BannerFadeoutSt />
    </header>
  );
}

// ?. : 옵셔널 체이닝
// 객체의 속성이 없는 경우, typeError가 발생하지 않고 undefined가 반환됨
