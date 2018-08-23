import React, { Component } from "react";
<<<<<<< HEAD
import { Route, Switch, Link } from "react-router-dom";
import Home from "../Home/Home";
import "./Form.css";
=======


>>>>>>> b804a52bf441bb0bb4f9cf494502f80752cd6410
import axios from "axios";

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
<<<<<<< HEAD
    // };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    // handleChange(event) {
    //   this.setState({ value: event.target.value });
    // }
  }

  addVacationData() {
    var sightsee = document.querySelector("#sightsee").value;
    var restaurant = document.querySelector("#restaurant").value;
    var accomodation = document.querySelector("#accomodation").value;
    var romanticPlace = document.querySelector("#romanticPlace").value;
    var image = document.querySelector("#image").value;
    axios({
      method: "post",
      url: "http://localhost:3001/api/helium",
      data: {
        sightsee: sightsee,
        restaurant: restaurant,
        accomodation: accomodation,
        romanticPlace: romanticPlace,
        image: image
      },
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(function(response) {
        //handle success
        console.log(response);
      })
      .catch(function(response) {
        //handle error
        console.log(response);
      });
  }
=======
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  addVacationData(){
    var  sightsee = document.querySelector('#sightsee').value
    var restaurant = document.querySelector('#restaurant').value
    var accommodation = document.querySelector('#accommodation').value
    var romanticPlace = document.querySelector('#romanticPlace').value
    var image = document.querySelector('#image').value
    axios({
        method: 'post',
        url: 'http://localhost:3001/api/helium',
        data: {
        sightsee: sightsee,
        restaurant: restaurant,
        accommodation: accommodation,
        romanticPlace: romanticPlace,
        image: image
      },
        config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}

  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // }

  // handleSubmit(event) {
  //   alert("A post was submitted: " + this.state.value);
  //   event.preventDefault();
  // }
>>>>>>> b804a52bf441bb0bb4f9cf494502f80752cd6410

  // handleSubmit(event) {
  //   alert("A post was submitted: " + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
      <div className="App-post">
        <main>
          <form onSubmit={this.handleSubmit}>
            <label>
              Location:
              <input
                type="text"
                id="sightsee"
              />
            </label>
            <br />
            <label>
              Sightsee:
<<<<<<< HEAD
              <input type="text" id="sightsee" />
=======
              <input
                type="text"
                id="sightsee"
                
              />
>>>>>>> b804a52bf441bb0bb4f9cf494502f80752cd6410
            </label>
            <br />
            <label>
              Restaurant:
<<<<<<< HEAD
              <input type="text" id="restaurant" />
=======
              <input
              type="text"
              id="restaurant"
              />
>>>>>>> b804a52bf441bb0bb4f9cf494502f80752cd6410
            </label>
            <br />
            <label>
              Accomodation:
<<<<<<< HEAD
              <input type="text" id="accomodation" />
=======
              <input
                type="text"
                id="accommodation"
              />
>>>>>>> b804a52bf441bb0bb4f9cf494502f80752cd6410
            </label>
            <br />
            <label>
              A Romantic Place:
<<<<<<< HEAD
              <input type="text" id="romanticPlace" />
=======
              <input
                type="text"
                id="romanticPlace"
                
              />
>>>>>>> b804a52bf441bb0bb4f9cf494502f80752cd6410
            </label>
            <br />
            <label>
              Image:
<<<<<<< HEAD
              <input type="text" id="image" />
            </label>
            <br />
            <input
              onClick={this.addVacationData.bind(this)}
              type="submit"
              value="Submit"
            />
=======
              <input
                type="text"
                id="image"
              />
            </label>
            <br />
            <input onClick={this.addVacationData.bind(this)} type="submit" value="Submit" />
>>>>>>> b804a52bf441bb0bb4f9cf494502f80752cd6410
          </form>
        </main>
      </div>
    );
  }
}
export default Form;
