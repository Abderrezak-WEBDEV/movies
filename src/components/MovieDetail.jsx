import React, {useEffect, useState} from 'react';
import {Row, Card, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import axios

from 'axios';
const MovieDetail = () => {
    // use params me permet de récuprerles varialble dans l'url
    const param = useParams()
    console.log(param)
    const[movie, setMovie] =useState(param)
    // je veux reucprer le détail de chaque film en fonction de son id
    const fetchMovieDetail =async()=> {
        const response = await axios.get(`http://api.themoviedb.org/3/movie/${param.id}?api_key=da3be37c490775f75b51b1bc8b141917&language=FR`)
        setMovie(response.data)
    }
    useEffect(()=>{
       // j'appelle ma fonction de mon fetch
       fetchMovieDetail()
      
    },[])
    return (
        <div className='bg-black' variant='black' style= {{height:"130vh" , width:'auto', marginTop:"30px"}}>
              
            <Row className= "justify-content-center" style= {{borderBottom:"2px solid black", paddingBottom: "100px"}}>
                <Card style={{ width: '18rem', marginTop:"30px" }}>
                    <Card.Img src={`https://image.tmdb.org/t/p/w500/`+ movie.poster_path}  alt="Card image" variant="top" />
                    <Card.Body>
                    <Card.Title>Card Title: {movie.title}</Card.Title>
                    <Card.Text>Date: {movie.release_date} </Card.Text>
                    <Card.Text>Nombre de vue: {movie.popularity} </Card.Text>
                   
                    </Card.Body>
                </Card>
            </Row>
            <Row style={{ width: '100%',height:"100px", marginTop:"20px", borderBottom:"2px solid black" }}  >
                <Card.Text className= "text text-white">
                      Résume: {movie.overview}
                </Card.Text>
            </Row>
            <Row className= "justify-content-center d-flex flex-row ">
                <Link to="/">
                  <Button className= "btn m-3" style={{width:"25vh" }}>Acceuil</Button>
                  
                </Link>
                <Link to ={movie.homepage} target="_blank" ><Button className= "btn m-3"  style={{width:"25vh" }}>Streaming</Button></Link>
                
            </Row>
            
        </div>
    );
};

export default MovieDetail;