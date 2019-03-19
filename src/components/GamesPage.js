import React from "react";
import _orderBy from "lodash/orderBy";
import _find from "lodash/find";
import GameList from "./GameList";
import GameForm from "./GameForm";
import api from "../api";
import AdminRoute from "./AdminRoute";
import PropTypes from "prop-types";

const publishers = [
    {
        _id: "1",
        name: "Publisher_1"
    },
    {
      _id: "2",
      name: "Publisher_2"
    }
];

class GamesPage extends React.Component{
    state = {
      games: [],
      loading: true
    };

    componentDidMount(){
       api.games
          .fetchAll()
          .then(games => this.setState({games: this.sortGames(games), loading: false})
       );

    }

    sortGames(games){
        return _orderBy(games, ["featured","name"], ["desc", "asc"]);
    }

    toggleFeatured = (gameId) => {
        const game = _find(this.state.games, {_id: gameId});
        return this.updateGame({
            ...game,
            featured: !game.featured
        })
    };

    saveGame = game => (game._id ? this.updateGame(game) : this.addGame(game));
    updateGame = gameData =>
      api.games.update(gameData).then(game =>
      this.setState({
          games: this.sortGames(
            this.state.games.map(item => item._id === game._id ? game : item)
          ),
          showGameForm: false
      })
     );
    addGame = gameData =>
      api.games.create(gameData).then(
        game => this.setState({
            games: this.sortGames([...this.state.games, game ]),
            showGameForm: false
        })
      );
    deleteGame = game =>
      api.games.delete(game).then(() =>
        this.setState({
          games: this.state.games.filter(item => item._id !== game._id)
        })
      );

    render(){

        const numberOfColumns = this.props.location.pathname === '/games' ? "sixteen" : "seven";

        return(
            <div className="ui container">
                <div className="ui stackable grid">

                    <AdminRoute path="/games/new" user={this.props.user} render={() => (
                      <div className="nine wide column">
                        <GameForm publishers={publishers}
                                  submit={this.saveGame}
                                  game={{}}
                        />
                      </div>
                    )} />
                    <AdminRoute path="/games/edit/:_id" user={this.props.user} render={(props) => (
                      <div className="nine wide column">
                        <GameForm publishers={publishers}
                                  submit={this.saveGame}
                                  game={
                                    _find(this.state.games, {_id: props.match.params._id}) || {}
                                  }
                        />
                      </div>
                    )} />

                  <div className={`${numberOfColumns} wide column`}>
                    {
                      this.state.loading ? (
                        <div className="ui container">
                          <br/>
                          <div className="ui icon message">
                            <i className="notched circle loading icon"></i>
                            <div className="content">
                              <div className="header">Wait a second!</div>
                              <p>Loading games collection...</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="ui container">
                          <br/>
                           <GameList
                             games={this.state.games}
                             toggleFeatured={this.toggleFeatured}
                             deleteGame={this.deleteGame}
                             user={this.props.user}
                           />
                        </div>
                      )
                    }
                  </div>
                <br/>
                </div>
            </div>
        );
    };

};

GamesPage.defaultProps = {
  user: PropTypes.shape({
    token: PropTypes.string,
    role: PropTypes.string.isRequired
  }).isRequired
};

export default GamesPage;