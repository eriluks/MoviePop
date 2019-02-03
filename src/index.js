//Import bindings
import React from "react";
import ReactDOM from "react-dom";
import Main from "./Components/Main";

//Render the virtual React DOM
ReactDOM.render(
<div>
  {/*Render the Main component*/}
  <Main />
  {/*The footer of the application*/}
  <footer className="footer has-background-warning">
    <div className="content has-text-centered">
      <p>
        <strong>MoviePop</strong> by Erika Volodko. The source code can be found on
        <a href="https://github.com/eriluks/MoviePop"> GitHub</a>.
      </p>
    </div>
  </footer>
</div>, document.getElementById('root')
);
