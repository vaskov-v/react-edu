import React, {Component} from "react";
import SignUpForm from "./SignUpForm";
import api from "../api";

class SignUpPage extends Component{
  submit = data =>
    api.users.create(data).then(() => this.props.history.push("/login"));

  render() {
    return(
      <div className="ui segment">
        <SignUpForm submit={this.submit}/>
      </div>
    );
  }
}

export default SignUpPage;