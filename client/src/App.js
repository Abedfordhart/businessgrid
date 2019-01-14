import React, { Component } from 'react'
import BusinessCard from './Components/BusinessCard/BusinessCard.js'
import axios from 'axios'
import { Card } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  state = {
    businessData: []
  }

  componentDidMount() {
    axios.get('api/businessData')
    .then(response => {
      let businessData = response.data.businesses
      this.setState({businessData: businessData})
    })
  }

  render() {
    console.log(this.state.businessData.length)
    return (
      <div className="App">
        <Card.Group>
        {this.state.businessData.map((business, i) => {
          return (
            <BusinessCard 
              key={i}
              name={business.name}
              rating={'test'}
              city={'test'}
            /> 
          )
        })}
        </Card.Group>
      </div>
    );
  }
}

export default App;