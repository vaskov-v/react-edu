import React, {Component} from "react";
import {Route} from "react-router-dom";
import HomePage from "./HomePage";
import GameNavigation from "./GameNavigation";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <GameNavigation />
        <Route path="/" exact component={HomePage} />
      </div>
    );
  }
}

export default App;