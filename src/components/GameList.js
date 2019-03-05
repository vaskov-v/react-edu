import React from 'react';
import PropTypes from "prop-types";
import GameCard from "./GameCard";



const GameList = ({games}) =>(
    <div className="ui three cards">
        {games.map(game => <GameCard game={game} key={game._id}/>)}
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
    ).isRequired

};

export default GameList;