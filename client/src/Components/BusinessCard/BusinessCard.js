import React from 'react'
import { Card, Image, Rating } from 'semantic-ui-react'

const BusinessCard = (props) => (
  <Card>
    <Image src={props.img} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.category + ' ' + props.price}</span>
      </Card.Meta>
      <Card.Description>{props.location[0] + ' ' + props.location[1]}</Card.Description>
      <Card.Description><a href={"phone:+" + props.phone}>{props.phone}</a></Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Rating icon='star' defaultRating={Math.round(props.rating)} maxRating={5} disabled />
          {' ' + props.reviews} Reviews
    </Card.Content>
  </Card>
)

export default BusinessCard