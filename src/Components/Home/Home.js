import React, { Component } from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom'
import './Home.css';

class Home extends Component {

    render() {
      // let image = this.props.cityData.map(item => {
      //   return(
      //     <div className="home" key={item.image}>
      //     <img src={item.image}></img>
        

      //     </div>
      //   )
      // })
      return (
      <div>
       <h1> Welcome To Love Away Vacations</h1>
       <img class="home" src="https://s25.postimg.cc/8ly9s5kvj/article-barcelona.jpg"></img>
      </div>

      );
    }
  }
  
  export default Home;