import React, { Component } from 'react';

class GameForm extends Component{
    state = {
        name: "",
        description: ""
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(
            this.state
        );
    };

    handleChange = e => this.setState({[e.target.name]: e.target.value});


    render() {
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <label htmlFor="name">Game Title</label>
                    <input type="text" id="name" name="name" placeholder="Game title"
                           value={this.state.name}
                           onChange={this.handleChange}
                    />
                </div>

                <button className="ui button" type="submit">Create</button>

                <div className="field">
                    <label htmlFor="description">Game Description</label>
                    <textarea type="text" id="description" name="description" placeholder="Game description"
                           value={this.state.description}
                           onChange={this.handleChange}
                    />
                </div>


            </form>

        );
    }
}

export default GameForm;