import React from 'react';
import videoHome from "../assets/terre.mp4";
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='main'>
            <video src={videoHome} muted autoPlay style= {{width:"100%", height:"100%",objectFit:"cover", marginTop:"50px"}}/>
            <div className='content'>
                <Link className='centent-title'to= {"/content"} style={{textDecorationLine:'none'}}>
                   <h3 style= {{color: "white" , fontSize: "100px"}}>NETMOVIES</h3>
                   <p>Cliquez-ici!</p>
                </Link>
            </div>
        </div>
    );
};

export default Home;