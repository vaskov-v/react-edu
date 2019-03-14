import React from "react";
import {NavLink} from "react-router-dom";

const GameNavigation = ({showGameForm}) => (
    <div className="ui secondary pointing menu">

      <NavLink exact to="/" className="item">
        GameCards
      </NavLink>
      <NavLink exact to="/games" className="item">
        Games
      </NavLink>
      <NavLink exact to="/games/new" className="item">
        <i className="icon plus" /> Add New Game
      </NavLink>

      <div className="right menu">
        <NavLink exact to="/login" className="item">
          Login
        </NavLink>
        <NavLink exact to="/signup" className="item">
            SignUp
        </NavLink>
      </div>

    </div>
);

export default GameNavigation;