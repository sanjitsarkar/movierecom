import React, { useEffect, useState } from 'react'
import './App.css'
import GenreList from './components/GenreList'
import { MovieList } from './components/MovieList'
import {BrowserRouter,Switch,Route,useLocation } from 'react-router-dom'
import MovieInfo from './components/MovieInfo'
import apiKey from './apiKey'
function App() {
  const [genre, setGenre] = useState("878")
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const location = useLocation()
  const fetchMovies = async(_genre) => {
    if(location.pathname==="/")
    {
  setMovies([])
setLoading(true)
let result;

if(_genre!==undefined)
{
  result = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1&sort_by=popularity.desc&sort_by=vote_average.desc&with_genres=${_genre}`)

}
else{
  result = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1&sort_by=popularity.desc&sort_by=vote_average.desc&with_genres=${genre}`)
}

result = await result.json()
console.log(genre,result.results)
setLoading(false)
setMovies(await result.results)
  }
  

}
useEffect(() => {
  fetchMovies()
}, [location])
// useEffect(() => {
//   fetchMovies()
// }, [location])
// console.log(movies)
  return (
   
    <Switch>
      <Route path="/" exact>
      <div className="App">
     <header><h1>Recommended Movies</h1>
     <GenreList fetchMovies = {fetchMovies}/>
     </header>
     <MovieList movies = {movies} loading = {loading}/>
    </div>
      </Route>
      <Route path="/:id">
        
       <MovieInfo movies={movies} />
      </Route>
    </Switch>
  )
}

export default App
