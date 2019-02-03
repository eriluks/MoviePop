//Import bindings
import React, { Component } from "react";
import axios from 'axios';
import Movie from './Movie'

//AdSearch component which handles the searching of movies
class AdSearch extends Component {
  //Initialise the state in a constructor
  constructor(props){
    super(props);
    this.state = {
      movieSearch: [],
      query: ""
    }
    //Bind event handler to change
    this.handleChange = this.handleChange.bind(this);
  }

  //Event handler which changes the state of query to the value of the event change
  handleChange(event){
    this.setState({
      query: event.target.value
    });
    console.log(this.state.query);
  }

componentDidUpdate(prevProps, prevState){
  //Conditional that checks if the query wasn't in it's initial empty state
  if(this.state.query !== prevState.query){
  //Axios request which changes the query
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a4cf525daa39048c3034cfd7cbb18249&language=en-US&query=${this.state.query}&page=1&include_adult=false`
  ).then(response => {
    this.setState({
      //assign the movieSearch state variable to the results of the response
      movieSearch: response.data.results
    });
    console.log(this.state.movieSearch);
  })
    .catch(error => {
      console.log(error);
    });
  }
}

  //Draw the react component
  render(){
    {/*Create a list variable which maps through the array data in the API. Return the Movie component*/}
    const list = this.state.movieSearch.map(m => (
        <Movie key={m.login}
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
        video={m.video} />
      ));
    return(
      <div>
        {/*Search Bar with onChange event handler*/}
        <input className="input" type="text" placeholder="Enter a movie to search..." onChange={this.handleChange}/>
        <br />
        <br />
        {/*Image that hints the user on what to do*/}
        <img alt='Popcorn' src="https://i.imgsafe.org/5e/5e2fb5fdfa.png"></img>
        <hr />
        <div className="columns is-multiline">
          {/*Show the list of movies associated with the query entered*/}
          {list}
        </div>
      </div>
    )
  }
}

//Export the component
export default AdSearch;
