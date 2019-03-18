import React, {Component} from "react";
import {Route} from "react-router-dom";
import HomePage from "./HomePage";
import GameNavigation from "./GameNavigation";
import GamesPage from "./GamesPage";
import ShowGamePage from "./ShowGamePage";
import SignUpPage from "./SignUpPage";

class App extends Component {
  state = {
    user: {
      token: "null"
    },
    message: ""
  };

  setMessage = message => this.setState({message});

  logout = () => this.setState({user: {token: null}});

  render() {
    return (
      <div className="ui container">
        <GameNavigation
        isAuthenticated={!!this.state.user.token}
        logout={this.logout}
        />

        {this.state.message && (
          <div className="ui info message">
            <i className="close icon" onClick={() => this.setMessage("")}></i>
            {this.state.message}
          </div>
        )}
        <Route path="/" exact component={HomePage} />
        <Route path="/games" component={GamesPage}/>
        <Route path="/game/:_id" exact component={ShowGamePage}/>
        <Route path="/signup" render={props => (<SignUpPage {...props} setMessage={this.setMessage}/>)}/>
      </div>
    );
  }
}

export default App;