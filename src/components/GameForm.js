import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactImageFallback from "react-image-fallback";
import {Link} from "react-router-dom";
import FormInlineMessage from "./FormInlineMessage";

const initialData = {
    name: "",
    description: "",
    price: 0,
    duration: 0,
    players: "",
    featured: false,
    tags: [],
    genre: 1,
    publisher: 0,
    img: ""
}

class GameForm extends Component{
    state = {
        data: initialData,
        errors: {},
        loading: false
    };

    validate(data) {
        const errors = {};
        if (!data.name) errors.name = "This field can't be blank";
        if (!data.description) errors.description = "This field can't be blank";
        if (!data.img) errors.img = "This field can't be blank";
        if (!data.players) errors.players = "This field can't be blank";
        if(!data.publisher) errors.publisher = "This field can't be blank";
        if(data.price === 0) errors.price = "This field can't be zero";
        if(data.duration === 0) errors.duration = "This field can't be zero";

        return errors;
    }

    componentDidMount() {
        if(this.props.game._id){
            this.setState({data: this.props.game});
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.game._id && nextProps.game._id !== this.state.data._id) {
            this.setState({data: nextProps.game})
        }
        if(!nextProps.game._id){
            this.setState({data: initialData});
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const errors = {};
        this.setState({errors});
        if(Object.keys(errors).length === 0){
            this.setState({loading: true});
            this.props.submit(this.state.data)
            .catch(err => this.setState({errors: err.response.data.errors, loading: false }));
        }
    }


    handleChange = e =>
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.type === "number"
                    ? parseFloat(e.target.value) : e.target.value
            }
        });

    handleCheckboxChange = e =>
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.checked
            }
        });

    render() {
        const {data, errors, loading} = this.state;
        const formClassNames = loading ? "ui form loading" : "ui form";
        return (
            <form className={formClassNames} onSubmit={this.handleSubmit}>

                <div className="ui grid">
                    <div className="twelve wide column">

                        <div className={errors.name ? "field error" : "field"}>
                            <label htmlFor="name">Game Title</label>
                            <input type="text" id="name" name="name" placeholder="Game title"
                                   value={data.name}
                                   onChange={this.handleChange}
                            />
                            <FormInlineMessage content={errors.name} type="error"/>
                        </div>



                        <div className={errors.description ? "field error" : "field"}>
                            <label htmlFor="description">Game Description</label>
                            <textarea type="text" id="description" name="description" placeholder="Game description"
                                      value={data.description}
                                      onChange={this.handleChange}
                            />
                            <FormInlineMessage content={errors.description} type="error"/>
                        </div>

                    </div>
                    <div className="four wide column">
                        <ReactImageFallback
                            fallbackImage="http://via.placeholder.com/250x250"
                            src={data.img}
                            alt="Image"
                            className="ui image"
                        />
                    </div>
                </div>


                <div className={errors.img ? "field error" : "field"}>
                    <label htmlFor="img">Img</label>
                    <input type="text" id="img" name="img" placeholder="Image URL"
                           value={data.img}
                           onChange={this.handleChange}
                    />
                    <FormInlineMessage content={errors.img} type="error"/>
                </div>

                <div>
                    <div className="three fields">
                        <div className={errors.price ? "field error" : "field"}>
                            <label htmlFor="price">Price</label>
                            <input type="number" id="price" name="price"
                                   min="0" step="0.1"
                                   value={data.price}
                                   onChange={this.handleChange}
                            />
                            <FormInlineMessage content={errors.price} type="error"/>
                        </div>

                        <div className={errors.duration ? "field error" : "field"}>
                            <label htmlFor="duration">Duration (min)</label>
                            <input type="number" id="duration" name="duration"
                                   min="0"
                                   value={data.duration}
                                   onChange={this.handleChange}
                            />
                            <FormInlineMessage content={errors.duration} type="error"/>
                        </div>

                        <div className={errors.players ? "field error" : "field"}>
                            <label htmlFor="players">Players</label>
                            <input type="text" id="players" name="players"
                                   value={data.players}
                                   onChange={this.handleChange}
                            />
                            <FormInlineMessage content={errors.players} type="error"/>
                        </div>

                    </div>
                </div>


                <div className="inline field">
                    <input id="featured" name="featured"
                           type="checkbox"
                           checked={data.featured}
                           onChange={this.handleCheckboxChange}
                    />
                    <label htmlFor="featured">Featured?</label>
                </div>

                <div className={errors.publisher ? "field error" : "field"}>
                    <label>Publishers</label>
                    <select name="publisher"
                            value={data.publisher}
                            onChange={this.handleChange}
                    >
                        <option value="0">Choose Publisher</option>
                        {this.props.publishers.map(publisher => (
                            <option value={publisher._id} key={publisher._id}>{publisher.name}</option>
                        ))}

                    </select>
                    <FormInlineMessage content={errors.publisher} type="error"/>
                </div>

                <div className="ui fluid buttons">
                    <button className="ui button" type="submit">Create</button>
                    <div className="or"></div>
                    <Link to="/games" className="ui button" onClick={this.props.cancel}>Cancel</Link>
                </div>



            </form>

        );
    };
};

GameForm.propTypes = {
    publishers: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired,
    submit: PropTypes.func.isRequired,
    game: PropTypes.shape({
       _id: PropTypes.string,
       name: PropTypes.string,
       price: PropTypes.number,
       players: PropTypes.string,
       duration: PropTypes.number,
       img: PropTypes.string,
       description: PropTypes.string,
       featured: PropTypes.bool
    }).isRequired
};

GameForm.defaultProps = {
    publishers: []
};

export default GameForm;