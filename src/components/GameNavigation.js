import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

const GameNavigation = ({ isAuthenticated, logout, isAdmin}) => (
    <div className="ui secondary pointing menu">

      <NavLink exact to="/" className="item">
        GameCards
      </NavLink>
      <NavLink exact to="/games" className="item">
        Games
      </NavLink>
      {isAdmin && (
        <NavLink exact to="/games/new" className="item">
          <i className="icon plus" /> Add New Game
        </NavLink>
      )}

      {isAuthenticated ? (
        <div className="right menu">
          <a onClick={logout} className="item">Logout</a>
        </div>
      ) : (
        <div className="right menu">
          <NavLink to="/login" className="item">
            Login
          </NavLink>
          <NavLink to="/signup" className="item">
            SignUp
          </NavLink>
        </div>
      )}
    </div>
);

GameNavigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

export default GameNavigation;