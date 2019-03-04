import React from "react";
import PropTypes from "prop-types";

const GameCard = ({game}) => (
    <div className="ui card">
        <div className="image">
            <span className="ui green ribbon label">{game.price}</span>



            <img src={game.img} alt="Game Cover"/>

        </div>
        <div className="content">
           <a href="#root" className="header">{game.name}</a>
           <div className="meta">
               <i className="icon users"></i> {game.players}
               <i className="icon wait"></i>{game.duration} min.
           </div>
        </div>

    </div>
);

GameCard.propTypes = {
    game: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        players: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired
    }).isRequired
};


export default GameCard;