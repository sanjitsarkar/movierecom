import React from 'react'

export const Movie = ({movie}) => {
    return (
        <div className="movie_card">
            <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.id} />
            <div className="content">
                <h1 className="title">{movie.title}</h1>
                {/* <p className="desc">{movie.overview}</p> */}
                <h3 className="rating">{movie.vote_average}</h3>
                {/* <h3 className="vote_count">{movie.vote_count}</h3> */}
            </div>
        </div>
    )
}
