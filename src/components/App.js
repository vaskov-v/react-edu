import React from 'react';
import GameList from "./GameList";

const games = [
    {
        id: 1,
        name: "Some text",
        price: 93,
        players: "1-2",
        img: "123.png",
        duration: 60
    },
    {
        id: 2,
        name: "Some text 2",
        price: 34.23,
        players: "1",
        img: "123.png",
        duration: 160
    },
    {
        id: 3,
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
        this.setState({games})
    }

    render(){
        return(
            <div className="ui container">
                <GameList games={this.state.games}/>
            </div>
        )
    }

}






export default App;