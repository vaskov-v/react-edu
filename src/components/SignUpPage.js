import React, {Component} from "react";
import SignUpForm from "./SignUpForm";
import api from "../api";
import PropTypes from "prop-types";

class SignUpPage extends Component{
  submit = data =>
    api.users.create(data).then(() => {
      this.props.setMessage("You have been sucessfully signed up!");
      this.props.history.push("/login")});

  render() {
    return(
      <div className="ui segment">
        <SignUpForm submit={this.submit}/>
      </div>
    );
  }
}

SignUpPage.propTypes = {
  setMessage: PropTypes.func.isRequired
};

export default SignUpPage;