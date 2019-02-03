//Import Bindings
import React, { Component } from "react";
import axios from 'axios';
import Movie from './Movie'

class MovieList extends React.Component{
  //Initialise the state in a constructor
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      movie_title: 'Most Popular Movies',
      description: 'A collection of the most popular movie titles'
    };
  }

  //Event handler which runs after the component output has been rendered into the DOM
  componentDidMount(){
  //Axios request to the movie API with developer key. The default API calls a list of the most popular movies
  axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a4cf525daa39048c3034cfd7cbb18249")
  .then(response => {
    this.setState({
      //change the movies state to be equal to the response of the API url results
      movies: response.data.results
    })
    console.log(this.state);
  })
  .catch(error => {
    console.log(error);
  })

}

//Event handler that changes the API request to a new one and changes the specified states
PopularMovieList = (e) => {
  e.preventDefault();
  axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a4cf525daa39048c3034cfd7cbb18249`)
  .then(response => {
    this.setState({
      movies: response.data.results,
      movie_title: 'Most Popular Movies',
      description: 'A collection of the most popular movie titles'
    }
  )})
}

//Event handler that changes the API request to a new one and changes the specified states
DramaMovieList = (e) => {
  e.preventDefault();
   axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=a4cf525daa39048c3034cfd7cbb18249`)
  .then(response => {
    this.setState({
      movies: response.data.results,
      isHidden: !this.state.isHidden,
      movie_title: 'The Best Dramas',
      description: 'A collection of the most popular drama titles'

    }
  )})
}

//Event handler that changes the API request to a new one and changes the specified states
KidsMovieList = (e) => {
  e.preventDefault();
  axios.get(`https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=a4cf525daa39048c3034cfd7cbb18249`)
  .then(response => {
    this.setState({
      movies: response.data.results,
      movie_title: 'Most Popular Kids Movies',
      description: 'A collection of the most popular children movies'
    }
  )})
}

//Event handler that changes the API request to a new one and changes the specified states
TheaterMovieList = (e) => {
  e.preventDefault();
  axios.get(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=a4cf525daa39048c3034cfd7cbb18249`)
  .then(response => {
    this.setState({
      movies: response.data.results,
      movie_title: 'List of the movies in Theaters',
      description: 'The list of movies that are in theaters currently'
    }
  )})
}

//Event handler that changes the API request to a new one and changes the specified states
RecentDramaMovieList = (e) => {
  e.preventDefault();
  axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2018&api_key=a4cf525daa39048c3034cfd7cbb18249`)
  .then(response => {
    this.setState({
      movies: response.data.results,
      movie_title: 'List of the movies in Theaters',
      description: 'The list of movies that are in theaters currently'
    }
  )})
}

//Event handler that changes the API request to a new one and changes the specified states
UpcomingMovieList = (e) => {
  e.preventDefault();
axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=a4cf525daa39048c3034cfd7cbb18249&language=en-US&page=1`)
  .then(response => {
    this.setState({
      movies: response.data.results,
      movie_title: 'Upcoming Movies',
      description: 'A collection of the upcoming movies'
    }
  )})
}

//Draw the react component
render() {
  {/*Create a list variable which maps through the array data in the API. Return the Movie component*/}
  const list = this.state.movies.map( (m, i) => {
      return <Movie key={m.login}
      id={m.id} title={m.title}
      overview={m.overview}
      popularity={m.popularity}
      release_date={m.release_date}
      vote_average={m.vote_average}
      vote_count={m.vote_count}
      poster_path={m.poster_path}
      original_language={m.original_language}
      original_title={m.original_title}
      genre_ids={m.genre_ids}
      adult={m.adult}
      video={m.video} />;
    });

  {/*Navigation which changes event handlers on the onClick method*/}
  return (
    <div className="columns is-multiline">
      <div className="column is-full">

        <Title movie_title={this.state.movie_title} description={this.state.description} />

        <div className="tabs is-boxed">
          <ul>
            <li className="is-active">
              <span className="icon is-small"><i aria-hidden="true"></i></span>
              <a onClick={this.PopularMovieList} className="dropdown-item">
                <span>Most Popular Movies</span>
              </a>
            </li>
            <li>
              <span className="icon is-small"><i aria-hidden="true"></i></span>
              <a onClick={this.DramaMovieList} className="dropdown-item">
                <span>Best Dramas</span>
              </a>
            </li>
            <li>
              <span className="icon is-small"><i aria-hidden="true"></i></span>
              <a onClick={this.RecentDramaMovieList} className="dropdown-item">
                <span>Recent Dramas</span>
              </a>
            </li>
            <li>
              <span className="icon is-small"><i aria-hidden="true"></i></span>
              <a onClick={this.KidsMovieList} className="dropdown-item">
                <span>Most Popular Kid Movies</span>
              </a>
            </li>
            <li>
              <span className="icon is-small"><i aria-hidden="true"></i></span>
              <a onClick={this.TheaterMovieList} className="dropdown-item">
                <span>Movies in theatres</span>
              </a>
            </li>
            <li>
              <span className="icon is-small"><i aria-hidden="true"></i></span>
              <a onClick={this.UpcomingMovieList} className="dropdown-item">
                <span>Upcoming Movies</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      {/*Display the list of movies*/}
      {list}
    </div>
  );
}
}

{/*Create a Title props variable that return the title and description of event handlers*/}
const Title = (props) => {
  return(
    <div>
    <h1 className="title is-3">{props.movie_title}</h1>
    <p className="subtitle is-6">{props.description}</p>
    </div>
  )
};

//Export the component
export default MovieList;
