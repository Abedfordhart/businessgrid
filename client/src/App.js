import React, { Component } from 'react'
import BusinessCard from './Components/BusinessCard/BusinessCard.js'
import axios from 'axios'
import { Card, Container } from 'semantic-ui-react'
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
    return (
      <div className="App">
        <Container fluid>
        <Card.Group centered>
        {this.state.businessData.map((business, i) => {
          return (
            <BusinessCard 
              link={business.url}
              key={i}
              name={business.name}
              img={business.image_url}
              category={business.categories[0].title}
              reviews={business.review_count}
              rating={business.rating}
              price={business.price}
              location={business.location.display_address}
              phone={business.display_phone}
            /> 
          )
        })}
        </Card.Group>
        </Container>
      </div>
    );
  }
}

export default App;