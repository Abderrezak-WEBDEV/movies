import React , {useEffect, useState} from 'react'
import Navba from './components/Navba'
import './App.css';
import {Container} from "react-bootstrap"
import Content from './components/Content';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// le but de ce component est de voir le detail de chaque ffilm au click
import MovieDetail from './components/MovieDetail';
import Footer from './components/Footer';
import Home from './components/Home';
function App() {
  // importer les données de TMDB , les movies avec url et axios en forma json
  const [movies, setMovies] = useState([]);

        //http://api.themoviedb.org/3/movie/popular?api_key=da3be37c490775f75b51b1bc8b141917&language=US&page=1

  const fetchData =async()=> {
            const response = await axios.get('http://api.themoviedb.org/3/movie/popular?api_key=da3be37c490775f75b51b1bc8b141917&language=FR&page=all')
            setMovies(response.data.results)
        }
        useEffect(()=>{
           // j'appelle ma fonction de mon fetch
           fetchData()
          
        },[])
  // active la barre de recherche dans l'API (recherche de titre en fonction du mot tappé sur la barre)
  const searchTitle =async(word)=> {
    // si la barre de recherche est vide, j'affiche toutes mes données
    if(word===""){
      fetchData()
    }else {
    const resp = await axios.get(`http://api.themoviedb.org/3/search/movie?api_key=da3be37c490775f75b51b1bc8b141917&query=${word}&language=FR`)
    setMovies(resp.data.results)
    }
}
// fonction de magination. 
const showMoviePage =async(page)=> {
  const response = await axios.get(`http://api.themoviedb.org/3/movie/popular?api_key=da3be37c490775f75b51b1bc8b141917&language=FR&page=${page}`)
  setMovies(response.data.results)
}
  return (
    <div className="App">
      <Navba search = {searchTitle}/>

      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/content' element = {<Content data = {movies} showPage= {showMoviePage}/>}></Route> 
            <Route path='/mov/:id'element={<MovieDetail/>}></Route>
          </Routes>
         </BrowserRouter>
      </Container>
      <Footer/>
    </div>
  );
}
export default App;


