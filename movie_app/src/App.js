import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";


class App extends Component {

// Render: componentWillMount() -> render() -> componentDidMount
// Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillupdate() -> render() -> componentDidUpdate()

  state = {
  }

  componentWillMount() {
    console.log("will mount")
  }

  componentDidMount() {
    console.log("did mount")
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
    console.log(movies)
  }

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} />
    })
    return movies
  }

  render() {
    console.log("did render")
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
