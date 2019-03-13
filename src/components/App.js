import React from "react";
import _orderBy from "lodash/orderBy";
import _find from "lodash/find";
import GameList from "./GameList";
import GameForm from "./GameForm";
import GameNavigation from "./GameNavigation";
import api from "../api";

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


class App extends React.Component{
    state = {
      games: [],
      showGameForm: false,
      selectedGame: {}
    };

    componentDidMount(){
        api.games
          .fetchAll()
          .then(games => this.setState({games: this.sortGames(games)}));
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

    showGameForm = () => this.setState({showGameForm: true, selectedGame: {}});
    hideGameForm = () => this.setState({showGameForm: false, selectedGame: {}});
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
    deleteGame = game => this.setState({
        games: this.state.games.filter(item => item._id !== game._id)
    }) ;
    selectGameForEditing = game => this.setState({selectedGame: game, showGameForm: true});


    render(){

        const numberOfColumns = this.state.showGameForm ? "seven" : "sixteen";

        return(
            <div className="ui container">
                <GameNavigation showGameForm={this.showGameForm}/>
                <div className="ui stackable grid">
                    {this.state.showGameForm &&(
                        <div className="nine wide column">
                            <GameForm publishers={publishers}
                                      cancel={this.hideGameForm}
                                      submit={this.saveGame}
                                      game={this.state.selectedGame}
                            />
                        </div>
                    )}

                    <div className={`${numberOfColumns} wide column`}>
                        <GameList
                            games={this.state.games}
                            toggleFeatured={this.toggleFeatured}
                            editGame={this.selectGameForEditing}
                            deleteGame={this.deleteGame}
                        />
                    </div>
                </div>

                <br/>

            </div>
        );
    };

};




export default App;