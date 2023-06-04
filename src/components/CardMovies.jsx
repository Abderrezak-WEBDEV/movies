import React from 'react';
import { Col, Card } from 'react-bootstrap';

const CardMovies = ({mov}) => {
    // pour recuperer l'image de chaque film , il faut aller sur la doc de TMDB et recuperer l'url a utilisé 'http://image.tmdb.org/t/w500'
    return (   
        <Col xs= "5" sm="6" md="4" lg="3" className='p-3'>
         <Card className="bg-dark text-white" >
         <Card.Img src={`https://image.tmdb.org/t/p/w500/`+ mov.poster_path}  alt="Card image" />
         <Card.ImgOverlay >
           <Card.Text>{mov.title}</Card.Text>
           <Card.Text>Date:{mov.release_date}</Card.Text>
           <Card.Text>Note:{mov.vote_average}/10</Card.Text>
           <Card.Text>Langue:{mov.original_language}</Card.Text>
           <Card.Text>Vue:{mov.popularity}</Card.Text>
         </Card.ImgOverlay>
       </Card>
       </Col>
    );
};

export default CardMovies;