import React from "react";
import PropTypes from "prop-types";
import Featured from "./Featured";
import {Link} from "react-router-dom";

class GameCard extends React.Component{
    state = {
        showConfirmation: false,
        showDescription: false
    }

    showConfirmation = () => this.setState({showConfirmation: true});
    hideConfirmation = () => this.setState({showConfirmation: false});

    showDescription = () => this.setState({showDescription: true});
    hideDescription = () => this.setState({showDescription: false});

    render (){
        const {game, toggleFeatured, deleteGame, user} = this.props;
        const adminActions = (
          <div className="extra content">{
              this.state.showConfirmation ? (
                <div className="ui two buttons">
                    <a className="ui red basic button" onClick={() => deleteGame(game)}>
                        <i className="ui icon check"></i> YES
                    </a>
                    <a className="ui grey basic button" onClick={this.hideConfirmation}>
                        <i className="ui icon close"></i> NO
                    </a>
                </div>
              ) : (
                <div className="ui two buttons">
                    <Link className="ui green basic button" to={`/games/edit/${game._id}`}>
                        <i className="ui icon edit"></i>
                    </Link>
                    <a className="ui red basic button" onClick={this.showConfirmation}>
                        <i className="ui icon trash"></i>
                    </a>

                </div>
              )
          }
          </div>
        );
        const addToCart = (
          <div className="extra content">
              <a className="ui green fluid button">Add to Cart</a>
          </div>
        );

        const adminFeatured = (
          <Featured
            featured={game.featured}
            toggleFeatured={toggleFeatured}
            gameId={game._id}
           />
        );

        return(
            <div className="ui card">{
                this.state.showDescription ? (
                    <div className="content">
                        <div className="description">
                            {game.description}
                        </div>
                    </div>
                ) : (
                     <div className="image">
                        <span className="ui green ribbon label">{game.price}</span>
                         {user.token && user.role === 'admin' && adminFeatured}
                        <img src={game.img} alt="Game Cover"/>
                    </div>
                )
            }

                <div className="content">
                    <Link to={`/game/${game._id}`} className="header">{game.name}</Link>
                    <div className="meta">
                        <i className="icon users"></i> {game.players}
                        <i className="icon wait"></i>{game.duration} min.

                        <span className="DescriptionContent">{
                            this.state.showDescription ?  (
                                <a onClick={() => this.hideDescription()}>
                                    <i className = "green icon eye"></i>
                                </a>
                            ) : (
                                <a onClick={() => this.showDescription()}>
                                    <i className = "grey icon eye"></i>
                                </a>
                            )
                        }
                        </span>

                    </div>
                </div>

                {user.token && user.role === 'user' && addToCart}
                {user.token && user.role === 'admin' && adminActions}
            </div>
        )
    }
}

GameCard.propTypes = {
    game: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        players: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        featured: PropTypes.bool.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired,
    toggleFeatured: PropTypes.func.isRequired,
    deleteGame: PropTypes.func.isRequired,
    user: PropTypes.shape({
        token: PropTypes.string,
        role: PropTypes.string.isRequired
    }).isRequired
};

export default GameCard;