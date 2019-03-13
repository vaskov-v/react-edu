import React from "react";
import _orderBy from "lodash/orderBy";
import GameList from "./GameList";
import GameForm from "./GameForm";
import GameNavigation from "./GameNavigation";

const publishers = [
    {
        _id: 1,
        name: "Publisher_1"
    },
    {
      _id: 2,
      name: "Publisher_2"
    }
];

const games = [
    {
        _id: 1,
        featured: true,
        name: "Some text",
        price: 93,
        players: "1-2",
        img: "123.png",
        duration: 60,
        publishers: 1

    },
    {
        _id: 2,
        featured: true,
        name: "Some text 2",
        price: 34.23,
        players: "1",
        img: "123.png",
        duration: 160,
        publishers: 2

    },
    {
        _id: 3,
        featured: false,
        name: "Some text 3",
        price: 56.00,
        players: "1-8",
        img: "123.png",
        duration: 76,
        publishers: 1
    }
];

class App extends React.Component{
    state = {
      games: [],
      showGameForm: false,
      selectedGame: {}
    };

    componentDidMount(){
        this.setState({
            games: this.sortGames(games)
        });
    };

    sortGames(games){
        return _orderBy(games, ["featured","name"], ["desc", "asc"]);
    }

    toggleFeatured = (gameId) => {
        const newGames = this.state.games.map(game => {
            if(game._id === gameId) return {...game, featured: !game.featured};
            return game;
        })
        this.setState({games: newGames})
    };

    showGameForm = () => this.setState({showGameForm: true, selectedGame: {}});
    hideGameForm = () => this.setState({showGameForm: false, selectedGame: {}});
    addGame = (game) => this.setState({
        games: this.sortGames([
            ...this.state.games,
            {
                ...game,
                _id: new Date().getTime()
            }
        ]),
        showGameForm: false
    });
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
                                      submit={this.addGame}
                                      game={this.state.selectedGame}
                            />
                        </div>
                    )}

                    <div className={`${numberOfColumns} wide column`}>
                        <GameList
                            games={this.state.games}
                            toggleFeatured={this.toggleFeatured}
                            editGame={this.selectGameForEditing}
                        />
                    </div>
                </div>

                <br/>

            </div>
        );
    };

};




export default App;