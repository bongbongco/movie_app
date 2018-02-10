import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const movies = [
  {
    title: "Matrix",
    poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
  },
  {
    title: "Old boy",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/b/bb/Oldboy_2013_film_poster.jpg"
  },
  {
    title: "Star Wars",
    poster:
      "https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg?region=0%2C0%2C480%2C711"
  }
];

class App extends Component {

// Render: componentWillMount() -> render() -> componentDidMount
// Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillupdate() -> render() -> componentDidUpdate()

  state = {
    greeting: "Hello!"
  }

  componentWillMount() {
    console.log("will mount")
  }

  componentDidMount() {
    console.log("did mount")
    setTimeout(() => {
      this.setState({
        greeting: "Hello again!"
      })
    }, 5000)
  }

  render() {
    console.log("did render")
    return (
      <div className="App">
      {this.state.greeting}
        {movies.map((movie, index) => {
          return (
            <Movie title={movie.title} poster={movie.poster} key={index} />
          );
        })}
      </div>
    );
  }
}

export default App;
