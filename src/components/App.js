import React from 'react';
import GameList from "./GameList";

const games = [
    {
        id: 1,
        name: "Some text",
        price: 93,
        players: "1-2",
       // img: "http://c2.plzcdn.com/ZillaIMG/5fdd16a82ab9bf21dcfdfdcd0ecbd010_1394231304.jpg",
        duration: 60
    },
    {
        id: 2,
        name: "Some text 2",
        price: 34.23,
        players: "1",
        //img: '{require(\'../images/123.png\')}',
        duration: 160
    },
    {
        id: 3,
        name: "Some text 3",
        price: 56.00,
        players: "1-8",
        duration: 76
    }
];



const App = () => (
    <div className="ui container">
        <GameList games={games}/>
    </div>
)


export default App;