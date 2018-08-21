import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import Home from '../Home/Home'
import SeeVacations from '../SeeVacations/SeeVacations'
import Profile from '../Profile/Profile'
import './App.css';


class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      cityData: 
      [
          { 
              "symbol": "PA",
              "city": "Philadelphia, PA",
              "tagline": "City of Brotherly Love",
              "image": "https://s25.postimg.cc/m2v8b12wv/article-philly.png"
          },
          {
              "symbol": "CD",
              "city": "Chengdu, China",
              "tagline": "Land of Abundance",
              "image": "https://s22.postimg.cc/6s2i8ebgh/article-chengdu.jpg"
          },
          {
              "symbol": "CM",
              "city": "Chiang Mai, Thailand",
              "tagline": "Flame of the Forest",
              "image": "https://s22.postimg.cc/nfu0b1qu9/article-chiangmai.jpg"
          },
          { 
              "symbol": "BA",
              "city": "Barcelona, Spain",
              "tagline": "More than a City",
              "image": "https://s25.postimg.cc/m2v8b12wv/article-philly.png"
          },
          {
              "symbol": "PR",
              "city": "Paris, France",
              "tagline": "City of Love",
              "image": "https://s25.postimg.cc/hgz42p4j3/article-paris.jpg"
          },
          {
              
              "symbol": "CB",
              "city": "Cebu, Philippines",
              "tagline": "Experience the Philippines",
              "image": "https://s25.postimg.cc/9o8gapj4f/article-cebu.jpg"
          }  
      ]
    }
  }
  render() {
    return (
      <div className ="App">
         <nav>
            <ul>
             <li><Link to="/home">Home</Link></li>
             <li><Link to="/see-vacations">See Vacations</Link></li>
            </ul>
        </nav>
        <main>
        <Switch>
            <Route exact path="/see-vacations" render={() => <SeeVacations cityData={this.state.cityData} />} />  
           <Route path="/see-vacations/:symbol" render={(props) => <Profile {...props} cityData={this.state.cityData} />} />
           <Route path="/home" component={Home} />
        </Switch>

        </main>
      </div>

    );
  }
}

export default App;
