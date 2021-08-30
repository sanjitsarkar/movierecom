import { useEffect,useState } from "react"
import React from 'react'
import { Link, useParams } from "react-router-dom"
import { MovieList } from "./MovieList"
import apiKey from "../apiKey"
const MovieInfo = ({movies}) => {
    const {id} = useParams()
    const [movie, setMovie] = useState({})
    const [rmovies, setRMovies] = useState([])
    const [loading1, setLoading1] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const fetchRecommendedMovies = async() => {
        setLoading2(true)
        let response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`)
        response = await response.json()
        setLoading2(false)
        setRMovies(response.results)
        console.log(response.results)
    }
    const fetchMovieInfo = async()=>{
        setLoading1(true)
        let response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
        response = await response.json()
        setLoading1(false)
        setMovie(response)
        console.log(response)
    }
    useEffect(() => {
        // if(movies.length){
            
        // setMovie(movies.find((_movie)=>_movie.id==id))
        // }
        console.log("cleed1")
            fetchMovieInfo()
            
        
        fetchRecommendedMovies()
    }, [id])
    // useEffect(() => {
    //     console.log("cleed2")

    //     // if(movies.length){
            
    //     // setMovie(movies.find((_movie)=>_movie.id==id))
    //     // }
        
    //         fetchMovieInfo()
            
        
    //     fetchRecommendedMovies()
    // }, [id])
    return (
        <div className="movie_info">
            {!loading1?(
            <>
          <img className="backdrop" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.id} />
          <div className="movie_info_sect">
         <div className="group"><Link to="/" className="back">&larr;</Link>
          <img className="poster" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.id} /></div> 
            <div className="content">
                <h1 className="title">{movie.original_title}</h1>
                <p className="desc">{movie.overview}</p>
               <div className="row">
                   <div className="col">
                   <span>Rating</span>
                   <h3 className="rating">{movie.vote_average}</h3>
                   </div>
                   <div className="col">

                    <span>Released Date</span>
                <h3 className="release_date">
                    {movie.release_date}</h3></div> 
                    
                    <div className="col">
                    <span>Popularity</span>
                <h3 className="popularity">{movie.popularity}</h3>
                </div>
                <div className="col">
                    <span>Total Votes</span>
                <h3 className="vote_count"><span></span>{movie.vote_count}</h3>
                </div>
            </div>
            </div>
            </div>
            <div className="rec_movies">
                {loading2 && <h1 className="loading">Loading...</h1>
                }
                <h1>Related Movies</h1>
            {<MovieList movies={rmovies}/>}
            </div>
            
            </>):(<h1 className="loading">Loading...</h1>)
            
}

        </div>
    )
}

export default MovieInfo
