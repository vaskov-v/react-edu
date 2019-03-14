import React, {Component} from "react";
import {Route} from "react-router-dom";
import HomePage from "./HomePage";
import GameNavigation from "./GameNavigation";
import GamesPage from "./GamesPage";
import ShowGamePage from "./ShowGamePage";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <GameNavigation />
        <Route path="/" exact component={HomePage} />
        <Route path="/games" exact component={GamesPage}/>
        <Route path="/game/:_id" exact component={ShowGamePage}/>
      </div>
    );
  }
}

export default App;