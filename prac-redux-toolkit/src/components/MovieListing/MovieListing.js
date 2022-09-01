import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

function MovieListing() {
  const movies = useSelector(getAllMovies);
  // console.log(movies);
  /* 
{Search: Array(10), totalResults: '704', Response: 'True'}
Response: "True"
Search: Array(10)
0: {Title: 'Harry Potter and the Deathly Hallows: Part 2', Year: '2011', imdbID: 'tt1201607', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMD…2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'}
1: {Title: "Harry Potter and the Sorcerer's Stone", Year: '2001', imdbID: 'tt0241527', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMzkyZGFlOW…mM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_SX300.jpg'}
2: {Title: 'Harry Potter and the Chamber of Secrets', Year: '2002', imdbID: 'tt0295297', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjE0YjUzND…zdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg'}
3: {Title: 'Harry Potter and the Prisoner of Azkaban', Year: '2004', imdbID: 'tt0304141', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg'}
4: {Title: 'Harry Potter and the Goblet of Fire', Year: '2005', imdbID: 'tt0330373', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg'}
5: {Title: 'Harry Potter and the Order of the Phoenix', Year: '2007', imdbID: 'tt0373889', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg'}
6: {Title: 'Harry Potter and the Deathly Hallows: Part 1', Year: '2010', imdbID: 'tt0926084', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg'}
7: {Title: 'Harry Potter and the Half-Blood Prince', Year: '2009', imdbID: 'tt0417741', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg'}
8: {Title: 'When Harry Met Sally...', Year: '1989', imdbID: 'tt0098635', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjE0ODEwNjM2NF5BMl5BanBnXkFtZTcwMjU2Mzg3NA@@._V1_SX300.jpg'}
9: {Title: 'Dirty Harry', Year: '1971', imdbID: 'tt0066999', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMzdhMTM2YT…zkzNTM2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg'}
length: 10
[[Prototype]]: Array(0)
totalResults: "704"
[[Prototype]]: Object
*/
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie}></MovieCard>
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
}

export default MovieListing;
