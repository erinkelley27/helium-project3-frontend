import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "../Home/Home";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Location: String,
      Things2Do: {
        sightsee: String,
        restaurant: String,
        accommodation: String,
        romanticPlace: String,
        image: String
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A post was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App-post">
        <main>
          <form onSubmit={this.handleSubmit}>
            <label>
              Location:
              <input
                type="text"
                value={this.state.location}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Things to do:
              <input
                type="text"
                value={this.state.things}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </main>
      </div>
    );
  }
}
export default Form;
