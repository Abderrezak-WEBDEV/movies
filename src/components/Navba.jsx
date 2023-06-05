import React from 'react';
import {Row, Navbar, Col, Container} from 'react-bootstrap'
import logo from '../assets/Net_movies.png'
import {MdScreenSearchDesktop} from "react-icons/md"

// je vais importer ma fonction definie (search) dans app
const Navba = ({search}) => {
    // la fonction qui permet de faire une recherche en fonction du mot
    const onSearch = (word)=>{
        //  fonction importée + word comme parametre
        search(word)
    } 
    return (
        <Row style={{zIndex:"1", boxShadow: "10px 5px 5px white"}} className='justify-content-center'>
             <Navbar  expand="lg" style= {{backgroundColor:"black"}}>
      <Container fluid>
            <a href="/" style={{textDecorationLine:'none'}}>
                <img src={logo} alt="logo"  style = {{height:"auto" , width: "100px", paddingLeft:"30px"}}/>
            </a> 
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         <Col xs="10" lg="11" className= "d-flex align-items-center pl-10">
               <div className='Search w-100 d-flex flex-row justify-content-between'> 
                   <input onChange = {(e)=> onSearch(e.target.value)}type="text" className="form-control" placeholder='Recherche' style= {{border:"none"}}/> 
                   <MdScreenSearchDesktop className='m-2 h3'/>
               </div>
         </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Row>
    );
};

export default Navba;