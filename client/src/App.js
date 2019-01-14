import React, { Component } from 'react'
import BusinessCard from './Components/BusinessCard/BusinessCard.js'
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    businessData: {}
  }

  componentDidMount() {
    axios.get('api/businessData')
    .then(response => {
      let businessData = response.data
      this.setState({businessData: businessData})
    })
  }

  render() {
    return (
      <div className="App">
        <div className="card-container">
          <BusinessCard className="business-card"/> 
        </div>
      </div>
    );
  }
}

export default App;