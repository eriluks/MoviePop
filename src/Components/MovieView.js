//Import Bindings
import React, { Component } from "react";
import axios from 'axios';

class MovieView extends Component {
  //Initialise the state in a constructor
  constructor(props){
    super(props);
      this.state = {
        movie: null,
        reviews: null,
        isHidden: true };
  }

  //Event handler which runs after the component output has been rendered into the DOM
  componentDidMount(){
    //Create a match variable params which is equal to the state of the props
    const { match: { params }} = this.props;
    //Axios get request based on the id of the movie that the user has clicked
    axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=a4cf525daa39048c3034cfd7cbb18249&language=en-US`)
    .then( response => {
      // console.log(response.data);
      this.setState( {movie: response.data} );
    })
    .catch(error => {
      console.log(error);
    })
  }

  //Event handler that gets one review of a movie
  ReviewList= () => {
    const { match: { params }} = this.props;
    axios.get(`https://api.themoviedb.org/3/movie/${params.id}/reviews?api_key=a4cf525daa39048c3034cfd7cbb18249&language=en-US&page=1`)
    .then( response2 => {
    this.setState( {
      //change the states to be equal to the response of the API url results
      reviews: response2.data.results[0],
      author: response2.data.results[0].author,
      content: response2.data.results[0].content,
      url: response2.data.results[0].url,
      isHidden: !this.state.isHidden,
    });
  })
  .catch(error => {
    console.log(error);
  })
  }

//Draw the react component
render() {
  //console.log(this.state);
  return (
    /* Conditional Rendering to see if the movie state has been changed in the componentDidMount*/
    this.state.movie ?
      <div className="contrainer">
        <div className="column has-background-warning is-full"></div>
        <div className="columns has-same-height is-gapless">
          <div className="column is-one-quarter">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by5">
                  {/* Image path will change based on the API poster_path data*/}
                  <img alt='Movie' src={`http://image.tmdb.org/t/p/w300/${this.state.movie.poster_path}`}></img>
                </figure>
              </div>
            </div>
          </div>
          <div className="column">
            {/*Each of the card content is styled and data associated with each movie is displayed through the state*/}
            <div className="card">
              <div className="card-content">
                <h1 className="title is-2">{this.state.movie.title}</h1>
                <p className="subtitle is-7">Release Date: <b>{this.state.movie.release_date}</b>
                  <br />
                </p>
                <p className="subtitle is-7"><i>"{this.state.movie.tagline}"</i></p>
                <hr />
                <h1 className="title is-5"> <b>Movie Description: </b></h1>
                <p> {this.state.movie.overview}</p>
                <br />
                <br />
                <h4> <b>Original Title:</b> {this.state.movie.original_title}</h4>
                <h4> <b>Original Language:</b> {this.state.movie.original_language}</h4>
                <h4> <b>Status: </b> {this.state.movie.status}</h4>
                <h4> <b>Popularity: </b> {this.state.movie.popularity}</h4>
                <h4> <b>Vote Count: </b> {this.state.movie.vote_count}</h4>
                <h4> <b>Movie ID: </b> {this.state.movie.id}</h4>
                <br />
                <h6> <a href={this.state.movie.homepage}><b>Go to Homepage </b></a></h6>
                <br />
                <br />
                {/*Images with values*/}
                <div className="columns">
                  <div className="column">
                    <div className="media">
                      <div className="media-content">
                        <div className="content">
                          <h4>Budget</h4>
                          <div className="columns is-mobile is-centered is-vcentered">
                            <div className="column">
                              <div className="image is-32x32">
                                <img alt="Cash Bag" src="http://pluspng.com/img-png/cash-png-black-and-white-money-bag-icon-clipart-1979.png"></img>
                              </div>
                            </div>
                            <div className="column is-left">
                              <p>{this.state.movie.budget}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="media">
                      <div className="media-content">
                        <div className="content">
                          <h4>Revenue</h4>
                          <div className="columns is-mobile is-centered is-vcentered">
                            <div className="column">
                              <div className="image is-32x32">
                                <img alt="Cash Bag" src="http://pluspng.com/img-png/cash-png-black-and-white-money-bag-icon-clipart-1979.png"></img>
                              </div>
                            </div>
                            <div className="column is-left">
                              <p>{this.state.movie.revenue}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="media">
                      <div className="media-content">
                        <div className="content">
                          <h4>Runtime</h4>
                          <div className="columns is-mobile is-centered is-vcentered">
                            <div className="column">
                              <div className="image is-32x32">
                                <img alt="Clock" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiL4ImPMXVOAXOM9BfI8oM63H0z18qWf-ihYhdxOECNkKHr7y"></img>
                              </div>
                            </div>
                            <div className="column is-left">
                              <p>{this.state.movie.runtime} mins</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="content">
                  <p className="subtitle is-6">Average Vote: <b>{this.state.movie.vote_average}</b></p>
                </div>
              </div>
              <article className="message is-warning">
                <div className="message-header">
                  <ul>
                    {/*onClick method initiate the event handler for ReviewList*/}
                    <button className="button is-warning" onClick={this.ReviewList.bind(this)}>Click to view reviews</button>
                  </ul>
                </div>
                <div className="message-body">
                  {/* Chnage the state of isHidden to display/hide Reviews variable*/}
                  {!this.state.isHidden &&
                  <Reviews author={this.state.author} content={this.state.content} url={this.state.url}/>}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    //End of conditional statement
    : null);
  }
}

//Create a Reviews props variable to return the desired data elements when rendered
const Reviews = (props) => {
  return(
    <div>
      <p className="subtitle is-6"> <b>Author:</b> {props.author}</p>
      <br />
      <p className="subtitle is-7"> <b> Content: </b>
        <br /> {props.content}</p>
      <br />
      <i className="subtitle is-7">  Review Link:  {props.url}  </i>
    </div>
  )
}

//Export component
export default MovieView;
