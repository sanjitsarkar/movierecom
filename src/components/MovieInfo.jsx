import { useEffect,useState } from "react"
import React from 'react'
import { useParams } from "react-router-dom"
const MovieInfo = ({movies}) => {
    const {id} = useParams()
    const [movie, setMovie] = useState("")
    useEffect(() => {
     setMovie(movies.find((_movie)=>_movie.id==id))
    }, [])
    return (
        <div className="movie_info">
          <img className="backdrop" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.id} />
          <img className="poster" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.id} />
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
    )
}

export default MovieInfo
