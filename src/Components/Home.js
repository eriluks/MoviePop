//Import bindings
import React, { Component } from "react";

//Home component which holds all the information on one application
class Home extends Component {
  //Draw the react component
  render() {
    return (
      <div className="columns">
        <div className="column">
          <h2 className=" title is-large">Welcome!</h2>
          <p>MoviePop is an application created using <b title="React is a JavaScript library created by Facebook.">React
            </b> and it was styled using <a href="https://bulma.io/"><b>Bulma</b></a>. The application uses
            <b title="Axios is a JavaScript library used to make HTTP requests from node.js or XMLHttpRequests
                           from the browser that also supports the ES6 Promise API.">Axios</b> which retrieves data from an
            <b title="Application Programming Interface (API) is a set of subroutine definitions, communication protocols,
                             and tools for building software"> API</b>. The API which was used comes from the <a href="https://www.themoviedb.org/"><b>Movie Database</b></a> website. </p>
            <br />
            <p>The aim of the application is to display various sets of movies which come from different categories. The user can explore the information on each movie such as it's
             popularity which is displayed as a voting count, as well as the general information such
              as the movie's description, language and more.</p>
            <br />
            <p>The user can also search a movie just by typing in the name in the search bar which will automatically display the list of movies associated with the typed in keyword.</p>
            </div>
        <div className="column">
          <img alt="Popcorn" src="https://i.imgsafe.org/4f/4f6938881c.png" width="450" height="450"></img>
        </div>
      </div>
    );
  }
}

//Export the component
export default Home;
