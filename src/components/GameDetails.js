import React from "react";
import PropTypes from "prop-types";

const GameDetails = ({game}) => (
  <div>
    <h1 className="ui center aligned dividing header">
      {game.name}
    </h1>
    <div className="ui stackable grid">
      <div className="six wide column">
        <div className="ui fluid image">
          <img src={game.img} alt="Game cover"></img>
        </div>
      </div>

      <div className="ten wide column">
        <p>{game.description}</p>
        
        <table className="ui table">
          <tbody>
          <tr>
            <td>Number of Players:</td>
            <td>{game.players}</td>
          </tr>
          <tr>
            <td>Duration:</td>
            <td>{game.duration} minutes</td>
          </tr>
          </tbody>
        </table>

        <p className="ui green huge label">$ {game.price}</p>
      </div>
    </div>
  </div>
);

GameDetails.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired
  }).isRequired
};

export default GameDetails;