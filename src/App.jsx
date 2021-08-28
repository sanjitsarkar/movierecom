import React, { useEffect, useState } from 'react'
import './App.css'
import GenreList from './components/GenreList'

function App() {
  const [genre, setGenre] = useState("adventure")
  const [movies, setMovies] = useState([])
const fetchMovies = async() => {

let result = await fetch(`https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=%2Fchart%2Fpopular%2Fgenre%2F${genre}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "3f1e7e1923mshe8b1859a35f6c65p13a1f7jsn1d1a0643f170"
	}
})
result = await result.json()
setMovies(result.map((res)=>res.split('/')[2]))



}
useEffect(() => {
  // fetchMovies()
}, [])
console.log(movies)
  return (
    <div className="App">
     <h1>Recommended Movies</h1>
     <GenreList/>
    </div>
  )
}

export default App
