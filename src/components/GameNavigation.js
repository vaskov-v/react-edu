import React from "react";
import PropTypes from "prop-types";


const GameNavigation = ({showGameForm}) => (
    <div className="ui secondary pointing menu">
        <a href="/" className="item"> Game Cards</a>
        <a className="item" onClick={showGameForm}>
            <i className="icon plus" /> Add New Game
        </a>
    </div>
);

GameNavigation.propTypes = {
    showGameForm: PropTypes.func.isRequired
};

export default GameNavigation;