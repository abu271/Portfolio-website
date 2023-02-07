import  React from 'react';
import { Card, Button } from 'react-bootstrap';

import './Cards.css';

interface Props {
  title?: string,
  img: string,
  text:string,
  src: string,
  demo: string
}

const Cards: React.FunctionComponent<Props> = props => {
  return (
    <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant='top' src={props.img} />
      <Card.Body>
        <Card.Title className='card__title'>{props.title}</Card.Title>
        <Card.Text className='card__text'>
          {props.text}
        </Card.Text>
        <Button size='sm' variant='primary' href={props.demo} target='_blank'>View project</Button>
        <Button size='sm' variant='primary' href={props.src} target='_blank'>Source code</Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;