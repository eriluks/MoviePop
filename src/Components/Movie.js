//Import Bindings
import React from "react";
import { NavLink } from "react-router-dom";

//Movie component which holds all the information on one movie
class Movie extends React.Component {
  //Initialise the state in a constructor
  constructor(props){
    super(props);
      this.state = {
        likes: 0,
        updated: false,
        text: '',
        isHidden: true,
        showMessage: false
    };
  }

//Modify the state in an event handler
  updateLikes = () =>{
    //If the state hasn't been updated then change the state and update variables
    if(!this.state.updated){
      this.setState( (old, props) => {
        return{
          likes: old.likes + 1,
          updated: true,
          showMessage: true
         };
      });
    } else {
      //otherwise change the state to the previous state and update variables
        this.setState((prevState, props) => {
          return{
            likes: prevState.likes -1,
            updated: false,
            showMessage: false
         };
      });
    }
  }

  //Event Handler that will change the state variables when initiated
  expandMovie = () => {
     this.setState({
      //set the state of the variables to display a string and data from the API list
      language: 'Original Language: ' + this.props.original_language,
      title:'Original Title: ' + this.props.original_title,
      adult:'Adult: ' + this.props.adult,
      video: 'Video: ' + this.props.video,
      vote_count: 'Vote Count: ' + this.props.vote_count,
      id: 'Movie Id: ' + this.props.id,
      genre_ids: 'Genre Ids: ' +this.props.genre_ids,
      isHidden: !this.state.isHidden
    });
  };

//Draw the react component
  render() {
     return (
      <div className="column is-3">
        <div className="column has-background-warning is-full"></div>
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by5">
              {/* Using NavLink, navigate to the MovieView component based on the id parameter of the prop */}
              <NavLink to={`/movieview/${this.props.id}`}>
                {/* Image path will change based on the API poster_path data*/}
                <img alt='Movie' src={`http://image.tmdb.org/t/p/w300/${this.props.poster_path}`}></img>
              </NavLink>
            </figure>
          </div>
          {/*Each of the card content is styled and data associated with each movie is displayed through the state*/}
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-3">{this.props.title}</p>
                <p className="subtitle is-7">Release Date: <b>{this.props.release_date}</b>
                  <br />
                </p>
                <hr />
                <p className="subtitle is-7">{this.props.overview}</p>
                <div>
                  <ul>
                    {/*Button which initiates the expandMovie event handler and binds it to the component instance so that the callback doesn't lose context*/}
                    <button className="button is-warning" onClick={this.expandMovie.bind(this)}>View All Details</button>
                    {/* Chnage the state of isHidden to display/hide Details variable*/}
                    {!this.state.isHidden &&
                    <Details language={this.state.language} title={this.state.title} adult={this.state.adult} vote_count={this.state.vote_count} video={this.state.video} id={this.state.id} genre_ids={this.state.genre_ids}/>}</ul>
                </div>
                <hr />
                <p className="column subtitle is-6 is-pulled-left">Average Vote: <b>{this.props.vote_average}</b></p>
                <button className="column is-pulled-right" style={{ "border": "none", "backgroundColor": "white", "padding": "0px"}} onClick={this.updateLikes}>
                  <img alt='likes' width="50" height="20" src="https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/07/09154730/Black-Heart-PNG-Photo.png"></img>
                    {/* Conditional to initiate event handler if the state is true*/}
                    {this.state.showMessage ?
                  <Liked /> : null }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Create a Details props variable to return the desired data elements when rendered
const Details = (props) => {
   return (
    <div>
      <p className="subtitle is-7">{props.language}
        <br /> {props.title}
        <br /> {props.adult}
        <br /> {props.video}
        <br /> {props.vote_count}
        <br />
        <br /> {props.id}
        <br /> {props.genre_ids}</p>
    </div>
  )
};

//Create a Liked props variable that will return a message when rendered
const Liked = (props) => {
   return (
    <div id="liked">
      You liked
      <br /> this movie!
    </div>
  )
}

//Export the component
export default Movie;
