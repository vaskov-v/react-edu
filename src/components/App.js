import React, {Component} from "react";
import {Route} from "react-router-dom";
import axios from "axios";
import HomePage from "./HomePage";
import GameNavigation from "./GameNavigation";
import GamesPage from "./GamesPage";
import ShowGamePage from "./ShowGamePage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";

const setAuthorizationHeader = (token = null) => {
  if(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
}

class App extends Component {
  state = {
    user: {
      token: "null"
    },
    message: ""
  };

  componentDidMount() {
    if(localStorage.bgshopToken){
      this.setState({user: {token: localStorage.bgshopToken}});
      setAuthorizationHeader(localStorage.bgshopToken);
    }
  }

  setMessage = message => this.setState({message});
  logout = () => {
    this.setState({user: {token: null}});
    setAuthorizationHeader();
    localStorage.removeItem("bgshopToken")
  }
  login = token => {
    this.setState({user:{token}});
    localStorage.bgshopToken = token;
    setAuthorizationHeader(token);
  };

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
        <Route path="/login" render={props => <LoginPage {...props} login={this.login}/>}/>
      </div>
    );
  }
}

export default App;