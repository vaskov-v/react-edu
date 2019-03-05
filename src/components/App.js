import React from 'react';
import _orderBy from "lodash/orderBy";
import GameList from "./GameList";
import GameForm from "./GameForm";

const games = [
    {
        _id: 1,
        featured: true,
        name: "Some text",
        price: 93,
        players: "1-2",
        img: "123.png",
        duration: 60
    },
    {
        _id: 2,
        featured: true,
        name: "Some text 2",
        price: 34.23,
        players: "1",
        img: "123.png",
        duration: 160
    },
    {
        _id: 3,
        featured: false,
        name: "Some text 3",
        price: 56.00,
        players: "1-8",
        img: "123.png",
        duration: 76
    }
];

class App extends React.Component{
    state = {
      games: []
   };

    componentDidMount(){
        this.setState({
            games: _orderBy(games, ["featured","name"], ["desc", "asc"])
        });
    };




    toggleFeatured (gameId){
        alert(gameId);
    };


    render(){
        return(
            <div className="ui container">

                <GameList
                    games={this.state.games}
                    toggleFeatured={this.toggleFeatured}
                />
                <br/>
                <br/>
                <GameForm/>
            </div>
        );
    };

}


export default App;