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

    handleNameChange = e => this.setState( {name: e.target.value});
    handleDescriptionChange = e => this.setState({description: e.target.value});

    render() {
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <label htmlFor="name">Game Title</label>
                    <input type="text" id="name" name="name" placeholder="Game title"
                           value={this.state.name}
                           onChange={this.handleNameChange}
                    />
                </div>

                <button className="ui button" type="submit">Create</button>

                <div className="field">
                    <label htmlFor="description">Game Description</label>
                    <textarea type="text" id="description" name="description" placeholder="Game description"
                           value={this.state.description}
                           onChange={this.handleDescriptionChange}
                    />
                </div>


            </form>

        );
    }
}

export default GameForm;