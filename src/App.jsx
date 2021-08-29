import React, { useEffect, useState } from 'react'
import './App.css'
import GenreList from './components/GenreList'
import { MovieList } from './components/MovieList'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import MovieInfo from './components/MovieInfo'
function App() {
  const [genre, setGenre] = useState("878")
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const apiKey = "83deb5d76d9ad38b5a15557aa060aa1c"
  
const fetchMovies = async(_genre) => {
  // console.log(_genre)
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
useEffect(() => {
  fetchMovies()
}, [])
// console.log(movies)
  return (
    <BrowserRouter>
   
    <Switch>
      <Route path="/" exact>
      <div className="App">
     <h1>Recommended Movies</h1>
     <GenreList fetchMovies = {fetchMovies}/>
     <MovieList movies = {movies} loading = {loading}/>
    </div>
      </Route>
      <Route path="/:id">
        
       <MovieInfo movies={movies} />
      </Route>
    </Switch>
    </BrowserRouter>
  )
}

export default App
