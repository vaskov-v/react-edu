import React from "react";
import PropTypes from "prop-types";
import Featured from "./Featured";

const GameCard = ({game, toggleFeatured}) => (
    <div className="ui card">
        <div className="image">
            <span className="ui green ribbon label">{game.price}</span>
            <Featured
                featured={game.featured}
                toggleFeatured={toggleFeatured}
                gameId={game._id}
            />

            <img src={game.img} alt="Game Cover"/>

        </div>
        <div className="content">
           <a href="/" className="header">{game.name}</a>
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
        duration: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        featured: PropTypes.bool.isRequired
    }).isRequired
};


export default GameCard;