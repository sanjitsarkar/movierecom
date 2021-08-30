import React from 'react'
import { Link } from 'react-router-dom'
export const Movie = ({movie}) => {
    return (
        <Link className="movie_card" to={"/"+movie.id} >
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.id} />
            <div className="content">
                <h2 className="title">{movie.title}</h2>
                {/* <p className="desc">{movie.overview}</p> */}
                <h3 className="rating">{movie.vote_average}</h3>
                {/* <h3 className="vote_count">{movie.vote_count}</h3> */}
            </div>
        </Link>
    )
}
