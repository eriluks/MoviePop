//Import Bindings
import React, { Component } from "react";
import ReactDOM from "react-dom";
//Using the React Router to switch between the page components
//Import the Route, NavLink and HashRouter from the DOM NPM package
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
//Components of the application
import Home from "./Home";
import MovieList from "./MovieList";
import AdSearch from "./AdSearch";
import MovieView from "./MovieView";

//Main application component which controls the router
class Main extends Component {
  render() {
    return (
      //Router element
      <BrowserRouter>
        <div className="columns">
          <div className="column">
            <div className="column has-background-warning is-full"></div>

            <div className="columns is-full">
              <div className="column">
                <NavLink to="/">
                  <img alt="MoviePop" src="https://i.imgsafe.org/4f/4f013a5852.png" width="250" height="250"></img>
                </NavLink>
              </div>
              <div className="column tabs is-boxed is-medium">
              {/*List of Navlinks that change the active components*/}
                <ul>
                  <div className="column">
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                  </div>
                  <div className="column">
                    <li>
                      <NavLink to="/movielist">Movies</NavLink>
                    </li>
                  </div>
                  <div className="column">
                    <li>
                      <NavLink to="/adsearch">Search</NavLink>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div className="column has-background-white-ter is-full"></div>
            <div className="column">
              {/*Route to the component paths*/}
              <Route exact path="/" component={Home}/>
              <Route path="/movielist" component={MovieList}/>
              <Route path="/adsearch" component={AdSearch}/>
              {/*Route the id prop to the MovieView component*/}
              <Route path="/movieview/:id" component={MovieView}/>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

//Export the component
export default Main;
