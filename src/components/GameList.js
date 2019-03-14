import React from 'react';
import PropTypes from "prop-types";
import GameCard from "./GameCard";



const GameList = ({games, toggleFeatured, editGame, deleteGame}) =>(
    <div className="ui three cards">
        {games.map(game => <GameCard game={game} toggleFeatured={toggleFeatured} key={game._id} editGame={editGame} deleteGame={deleteGame}/>)}
    </div>

);

GameList.propTypes = {
    games: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            players: PropTypes.string.isRequired,
            duration: PropTypes.number.isRequired
        })
    ).isRequired,
    toggleFeatured: PropTypes.func.isRequired,
    editGame: PropTypes.func.isRequired,
    deleteGame: PropTypes.func.isRequired
};

export default GameList;