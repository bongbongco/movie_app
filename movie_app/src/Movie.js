import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster />
        <h1>Hello this is a movie</h1>
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img src="https://i.pinimg.com/736x/a0/5a/ac/a05aac98d02c94d9974cfef61a03b280--vanilla-sky-quotes-vanilla-sky-movie.jpg" />
    );
  }
}

export default Movie;
