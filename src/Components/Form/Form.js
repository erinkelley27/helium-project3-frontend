import React, { Component } from "react";


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
  }
  // updateVacationData(){
  //   axios.put('/api/helium/'+this.props.match.params.id, { isbn, title, author, description, published_year, publisher })
  //   .then((result) => {
  //     this.props.history.push("/show/"+this.props.match.params.id)
  //      });
  //   }
  
  addVacationData(){
    var location = document.querySelector('#sightsee').value1
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
              <input
                type="text"
                id="sightsee"
                
              />
            </label>
            <br />
            <label>
              Restaurant:
              <input
              type="text"
              id="restaurant"
              />
            </label>
            <br />
            <label>
              Accomodation:
              <input
                type="text"
                id="accommodation"
              />
            </label>
            <br />
            <label>
              A Romantic Place:
              <input
                type="text"
                id="romanticPlace"
                
              />
            </label>
            <br />
            <label>
              Image:
              <input
                type="text"
                id="image"
              />
            </label>
            <br />
            <input onClick={this.addVacationData.bind(this)} type="submit" value="Submit" />
          </form>
        </main>
      </div>
    );
  }
}
export default Form;
