import React from 'react';
import PropTypes from "prop-types";
import GameCard from "./GameCard";

const GameList = ({games, toggleFeatured, deleteGame, user}) =>(
    <div className="ui three cards">
        {games.map(game => <GameCard game={game}
                                     toggleFeatured={toggleFeatured}
                                     key={game._id}
                                     deleteGame={deleteGame}
                                     user={user}
        />)}
    </div>

);

GameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired,
  user: PropTypes.shape({
    token: PropTypes.string,
    role: PropTypes.string.isRequired
  }).isRequired
};

GameList.defaultProps = {
  games: []
};

GameList.defaultProps = {
  user: PropTypes.shape({
    token: PropTypes.string,
    role: PropTypes.string.isRequired
  }).isRequired
};

export default GameList;